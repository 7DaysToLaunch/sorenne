<script lang="ts">
	import { browser } from '$app/environment';
	import gsap from 'gsap';
	import {
		PROJECTS,
		PROJECT_TAGS,
		getProjectHref,
		tagLabel,
		filterProjectsByTags,
		type ProjectMeta,
		type ProjectTag
	} from '$lib/data/work';

	let { projects = PROJECTS }: { projects?: readonly ProjectMeta[] } = $props();

	let selectedTag = $state<ProjectTag | null>(null);
	let gridEl = $state<HTMLDivElement | null>(null);
	let gridAnimatePrimed = $state(false);
	let filterOverlayOpen = $state(false);
	let mobileFilters = $state(false);

	const filterOverlayId = 'work-project-filters';

	function selectTag(tag: ProjectTag) {
		selectedTag = selectedTag === tag ? null : tag;
	}

	function selectTagInOverlay(tag: ProjectTag) {
		selectTag(tag);
		filterOverlayOpen = false;
	}

	function closeFilterOverlay() {
		filterOverlayOpen = false;
	}

	function clearFilter() {
		selectedTag = null;
	}

	let mobileFilterTriggerAria = $derived(
		selectedTag === null ? undefined : `Change filter (${tagLabel(selectedTag)} selected)`
	);
	$effect(() => {
		if (!browser) return;
		const mq = window.matchMedia('(max-width: 767px)');
		mobileFilters = mq.matches;
		const onChange = () => {
			mobileFilters = mq.matches;
			if (!mq.matches) filterOverlayOpen = false;
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});

	$effect(() => {
		if (!browser) return;
		document.body.style.overflow = filterOverlayOpen && mobileFilters ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});

	let visible = $derived(
		filterProjectsByTags(
			projects,
			selectedTag === null ? new Set<ProjectTag>() : new Set([selectedTag])
		)
	);

	$effect(() => {
		if (!browser || !gridEl) return;

		const slugKey = visible.map((p) => p.slug).join('\n');
		void slugKey;

		const cards = gridEl.querySelectorAll<HTMLElement>('.card');

		if (!gridAnimatePrimed) {
			gridAnimatePrimed = true;
			return;
		}

		gsap.killTweensOf(cards);
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 18 },
			{
				opacity: 1,
				y: 0,
				duration: 0.42,
				stagger: 0.045,
				ease: 'power2.out',
				overwrite: 'auto',
				clearProps: 'transform,opacity'
			}
		);
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (!filterOverlayOpen || !mobileFilters || e.key !== 'Escape') return;
		e.preventDefault();
		closeFilterOverlay();
	}}
/>

<div class="project-grid">
	<section class="filters" aria-label="Filter by category">
		<div
			class="filters__inner filters__inner--desktop"
			role="group"
			aria-label="Categories — one at a time"
		>
			{#each PROJECT_TAGS as tag (tag)}
				<button
					type="button"
					class="filters__pill"
					class:filters__pill--on={selectedTag === tag}
					aria-pressed={selectedTag === tag}
					onclick={() => selectTag(tag)}
				>
					{tagLabel(tag)}
				</button>
			{/each}
		</div>

		<div class="filters__mobile">
			<div class="filters__mobile-inner">
				<button
					type="button"
					class="filters__pill filters__mobile-trigger"
					aria-expanded={filterOverlayOpen && mobileFilters}
					aria-controls={filterOverlayId}
					aria-label={mobileFilterTriggerAria}
					onclick={() => (filterOverlayOpen = true)}
				>
					Filter
				</button>
				{#if selectedTag !== null}
					<div class="filters__mobile-selection" role="status" aria-live="polite">
						<span class="filters__pill filters__pill--on filters__mobile-active-pill">
							{tagLabel(selectedTag)}
						</span>
						<button
							type="button"
							class="filters__pill filters__mobile-clear"
							aria-label="Clear category filter"
							onclick={clearFilter}
						>
							Clear
						</button>
					</div>
				{/if}
			</div>
		</div>
	</section>

	{#if filterOverlayOpen && mobileFilters}
		<div
			id={filterOverlayId}
			class="filters__overlay"
			role="dialog"
			aria-modal="true"
			aria-labelledby="work-project-filters-title"
			aria-describedby="work-project-filters-tagline"
		>
			<div class="filters__overlay-header">
				<h2 id="work-project-filters-title" class="filters__overlay-title">Filter</h2>
				<button
					type="button"
					class="filters__overlay-close"
					aria-label="Close filters"
					onclick={closeFilterOverlay}
				>
					Close
				</button>
			</div>
			<div class="filters__overlay-main">
				<p id="work-project-filters-tagline" class="filters__overlay-tagline">
					Ideas. Heart. Impact. Across industries.
				</p>
				<div class="filters__inner filters__inner--overlay" role="group" aria-label="Categories">
					{#each PROJECT_TAGS as tag (tag)}
						<button
							type="button"
							class="filters__pill"
							class:filters__pill--on={selectedTag === tag}
							aria-pressed={selectedTag === tag}
							onclick={() => selectTagInOverlay(tag)}
						>
							{tagLabel(tag)}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}

	<div class="grid" bind:this={gridEl}>
		{#each visible as project (project.slug)}
			<a class="card" href={getProjectHref(project)}>
				<div class="card__media">
					<img
						class="card__img"
						src={project.images.portrait}
						alt=""
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="card__body">
					<h2 class="card__title">{project.title}</h2>
					{#if project.description}
						<p class="card__desc">{project.description}</p>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.project-grid {
		background: #000;
		color: #fff;
	}

	.filters {
		padding: 1.25rem 1rem 3rem;
		background: #000;
		border-bottom: 1px solid color-mix(in oklab, #fff 12%, transparent);
	}

	.filters__inner {
		max-width: 58rem;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.filters__inner--desktop {
		display: none;
	}

	.filters__mobile {
		display: flex;
		justify-content: center;
	}

	.filters__mobile-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		max-width: 100%;
	}

	.filters__mobile-selection {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.filters__mobile-active-pill {
		cursor: default;
		pointer-events: none;
	}

	.filters__mobile-clear {
		padding-inline: 1rem;
		min-height: 2.5rem;
		font-size: 0.7rem;
	}

	.filters__mobile-trigger {
		padding-inline: 1.35rem;
		min-height: 2.5rem;
		font-size: 0.7rem;
	}

	@media (min-width: 768px) {
		.filters__inner--desktop {
			display: flex;
		}

		.filters__mobile {
			display: none;
		}
	}

	.filters__overlay {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		position: fixed;
		inset: 0;
		z-index: var(--z-modal);
		background: #000;
		color: #fff;
		padding: max(var(--space-gutter), env(safe-area-inset-top))
			max(var(--space-gutter), env(safe-area-inset-right))
			max(var(--space-gutter), env(safe-area-inset-bottom))
			max(var(--space-gutter), env(safe-area-inset-left));
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		align-items: center;
	}

	.filters__overlay-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-shrink: 0;
		width: min(100%, 58rem);
		padding-bottom: 1.25rem;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid color-mix(in oklab, #fff 12%, transparent);
	}

	.filters__overlay-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		height: 80%;
		align-items: center;
		width: min(100%, 58rem);
		min-height: 0;
		padding-bottom: 1.5rem;
	}

	.filters__overlay-tagline {
		margin: 0;
		width: 100%;
		text-align: center;
		font-family: var(--font-heading, serif);
		font-size: clamp(1.75rem, 6vw, 2rem);
		font-weight: 400;
		line-height: 1.35;
		letter-spacing: 0.02em;
		color: inherit;
		text-wrap: balance;
	}

	.filters__overlay-title {
		margin: 0;
		font-family: var(--font-heading, serif);
		font-size: clamp(1.35rem, 5vw, 1.75rem);
		font-weight: 400;
		letter-spacing: 0.02em;
	}

	.filters__overlay-close {
		appearance: none;
		font: inherit;
		cursor: pointer;
		border: 1px solid color-mix(in oklab, #fff 45%, transparent);
		color: inherit;
		background: transparent;
		border-radius: 999px;
		padding: 0.45rem 1rem;
		font-size: 0.65rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		flex-shrink: 0;
	}

	.filters__overlay-close:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px color-mix(in oklab, #fff 40%, transparent);
	}

	.filters__inner--overlay {
		width: 100%;
		justify-content: center;
		align-content: center;
		align-items: center;
		padding-bottom: 0;
	}

	.filters__pill {
		appearance: none;
		font: inherit;
		cursor: pointer;
		border: 1px solid color-mix(in oklab, #fff 45%, transparent);
		color: inherit;
		background: transparent;
		border-radius: 999px;
		padding: 0.4rem 0.85rem;
		font-size: 0.65rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.85;
	}

	.filters__pill:hover,
	.filters__pill:focus-visible {
		opacity: 1;
		outline: none;
		box-shadow: 0 0 0 2px color-mix(in oklab, #fff 40%, transparent);
	}

	.filters__pill--on {
		opacity: 1;
		background: color-mix(in oklab, #fff 12%, transparent);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2.5rem 1.25rem;
		padding: 1.25rem clamp(1rem, 3vw, 2rem) 2.5rem;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	.card {
		display: block;
		position: relative;
		z-index: 0;
		color: #fff;
		text-decoration: none;
		text-align: left;
	}

	.card::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 2;
		pointer-events: none;
		background: rgb(0 0 0 / 0%);
		transition: background 0.28s ease;
	}

	.grid:is(:hover, :focus-within) .card::after {
		background: rgb(0 0 0 / 58%);
	}

	.grid:is(:hover, :focus-within) .card:is(:hover, :focus-visible)::after {
		background: rgb(0 0 0 / 0%);
	}

	.card__media {
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: #1a1a1a;
	}

	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.35s ease;
	}

	.card:hover .card__img,
	.card:focus-visible .card__img {
		transform: scale(1.02);
	}

	.card__body {
		padding-top: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.card__title {
		font-size: 1rem;
		font-weight: 700;
		margin: 0;
		line-height: 1.25;
		font-family: system-ui, -apple-system, sans-serif;
	}

	.card__desc {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.45;
		opacity: 0.92;
		font-family: system-ui, -apple-system, sans-serif;
	}
</style>
