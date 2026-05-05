<script lang="ts">
	import {
		getHomeMasonryProjects,
		getProjectHref,
		filterProjectsByTags,
		type ProjectMeta,
		type ProjectTag
	} from '$lib/data/work';

	let {
		projects = getHomeMasonryProjects(),
		selectedTag = null
	}: {
		projects?: ProjectMeta[];
		selectedTag?: ProjectTag | null;
	} = $props();

	let visible = $derived(
		filterProjectsByTags(
			projects,
			selectedTag === null ? new Set<ProjectTag>() : new Set([selectedTag])
		)
	);
</script>

<div class="home-masonry">
	<div class="home-masonry__grid">
		{#if visible.length === 0}
			<p class="home-masonry__empty">No projects match this category.</p>
		{:else}
			{#each visible as project (project.slug)}
				<a
					class="home-masonry__card"
					class:home-masonry__card--portrait={project.homeGridPortrait === true}
					href={getProjectHref(project)}
				>
					<div class="home-masonry__media">
						<img
							class="home-masonry__img"
							src={project.images.portrait}
							alt=""
							loading="lazy"
							decoding="async"
						/>
						<div class="home-masonry__overlay">
							<h2 class="home-masonry__title">{project.title}</h2>
							{#if project.description}
								<p class="home-masonry__desc">{project.description}</p>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</div>

<style>
	.home-masonry {
		background: #000;
		color: #fff;
	}

	.home-masonry__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		/* Row heights follow 16:9 landscape tiles in the other column */
		grid-auto-rows: auto;
		gap: 0;
		align-items: stretch;
	}

	.home-masonry__empty {
		grid-column: 1 / -1;
		margin: 0;
		padding: clamp(2rem, 8vw, 4rem) var(--space-gutter, 1rem);
		text-align: center;
		font-size: var(--text-base, 1rem);
		line-height: 1.45;
		opacity: 0.85;
	}

	.home-masonry__card {
		display: block;
		min-width: 0;
		min-height: 0;
		overflow: hidden;
		color: inherit;
		text-decoration: none;
		height: 100%;
	}

	.home-masonry__card:hover .home-masonry__img,
	.home-masonry__card:focus-visible .home-masonry__img {
		transform: scale(1.03);
	}

	.home-masonry__media {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	/* Spotlight: dim every tile by default; hover lifts one tile while siblings stay darker */
	.home-masonry__media::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgb(0 0 0 / 0.42);
		pointer-events: none;
		z-index: 1;
		transition:
			opacity 0.35s ease,
			background-color 0.35s ease;
	}

	.home-masonry__grid:has(.home-masonry__card:hover) .home-masonry__card:not(:hover) .home-masonry__media::after,
	.home-masonry__grid:has(.home-masonry__card:focus-within)
		.home-masonry__card:not(:focus-within)
		.home-masonry__media::after {
		background: rgb(0 0 0 / 0.68);
	}

	.home-masonry__grid:has(.home-masonry__card:hover) .home-masonry__card:hover .home-masonry__media::after,
	.home-masonry__grid:has(.home-masonry__card:focus-within)
		.home-masonry__card:focus-within
		.home-masonry__media::after {
		opacity: 0;
	}

	/* Landscape: exact 16:9 (width is ½ grid; height = 9/16 of that width) */
	.home-masonry__card:not(.home-masonry__card--portrait) .home-masonry__media {
		aspect-ratio: 16 / 9;
		height: 100%;
	}

	/* Portrait: span two rows and fill 100% of their combined height (set by adjacent 16:9 cells) */
	.home-masonry__card--portrait {
		grid-row: span 2;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.home-masonry__card--portrait .home-masonry__media {
		flex: 1;
		min-height: 0;
		height: 100%;
		aspect-ratio: unset;
	}

	.home-masonry__img {
		width: 100%;
		height: 101%;
		object-fit: cover;
		display: block;
		transition: transform 0.35s ease;
	}

	.home-masonry__overlay {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 1.5rem;
		background: linear-gradient(to top, rgb(0 0 0 / 0.72), transparent 55%);
		pointer-events: none;
	}

	.home-masonry__title {
		font-family: var(--font-body, system-ui, sans-serif);
		font-size: var(--text-lg);
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.home-masonry__desc {
		font-family: var(--font-body, system-ui, sans-serif);
		margin: 0;
		font-size: var(--text-base);
		text-wrap: balance;
		line-height: 1.35;
		max-width: 22rem;
		opacity: 0.9;
	}

	@media (prefers-reduced-motion: reduce) {
		.home-masonry__media::after {
			transition-duration: 0.01ms;
		}
	}

	@media (max-width: 640px) {
		.home-masonry__grid {
			grid-template-columns: 1fr;
		}

		.home-masonry__card:not(.home-masonry__card--portrait) .home-masonry__media {
			aspect-ratio: 16 / 9;
		}

		.home-masonry__card--portrait {
			grid-row: span 1;
			display: block;
			height: auto;
		}

		/* Stacked portrait: tall frame; not tied to twin 16:9 rows */
		.home-masonry__card--portrait .home-masonry__media {
			flex: unset;
			height: auto;
			aspect-ratio: 3 / 4;
		}
	}
</style>
