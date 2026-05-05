<script lang="ts">
	import { browser } from '$app/environment';
	import { tagLabel, type ProjectTag } from '$lib/data/work';

	let {
		tags,
		selectedTag = $bindable<ProjectTag | null>(null)
	}: {
		tags: readonly ProjectTag[];
		selectedTag?: ProjectTag | null;
	} = $props();

	let filterOverlayOpen = $state(false);
	let mobileFilters = $state(false);

	const filterOverlayId = 'home-hero-filters';

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
</script>

<svelte:window
	onkeydown={(e) => {
		if (!filterOverlayOpen || !mobileFilters || e.key !== 'Escape') return;
		e.preventDefault();
		closeFilterOverlay();
	}}
/>

<section class="hero-filters" aria-label="Filter projects by category">
	<div
		class="hero-filters__inner hero-filters__inner--desktop"
		role="group"
		aria-label="Categories — one at a time"
	>
		{#each tags as tag (tag)}
			<button
				type="button"
				class="hero-filters__pill"
				class:hero-filters__pill--on={selectedTag === tag}
				aria-pressed={selectedTag === tag}
				onclick={() => selectTag(tag)}
			>
				{tagLabel(tag)}
			</button>
		{/each}
	</div>

	<div class="hero-filters__mobile">
		<div class="hero-filters__mobile-inner">
			<button
				type="button"
				class="hero-filters__pill hero-filters__mobile-trigger"
				aria-expanded={filterOverlayOpen && mobileFilters}
				aria-controls={filterOverlayId}
				aria-label={mobileFilterTriggerAria}
				onclick={() => (filterOverlayOpen = true)}
			>
				Filter
			</button>
			{#if selectedTag !== null}
				<div class="hero-filters__mobile-selection" role="status" aria-live="polite">
					<span class="hero-filters__pill hero-filters__pill--on hero-filters__mobile-active-pill">
						{tagLabel(selectedTag)}
					</span>
					<button
						type="button"
						class="hero-filters__pill hero-filters__mobile-clear"
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
		class="hero-filters__overlay"
		role="dialog"
		aria-modal="true"
		aria-labelledby="home-hero-filters-title"
		aria-describedby="home-hero-filters-tagline"
	>
		<div class="hero-filters__overlay-header">
			<h2 id="home-hero-filters-title" class="hero-filters__overlay-title">Filter</h2>
			<button
				type="button"
				class="hero-filters__overlay-close"
				aria-label="Close filters"
				onclick={closeFilterOverlay}
			>
				Close
			</button>
		</div>
		<div class="hero-filters__overlay-main">
			<p id="home-hero-filters-tagline" class="hero-filters__overlay-tagline">
				Ideas. Heart. Impact. Across industries.
			</p>
			<div class="hero-filters__inner hero-filters__inner--overlay" role="group" aria-label="Categories">
				{#each tags as tag (tag)}
					<button
						type="button"
						class="hero-filters__pill"
						class:hero-filters__pill--on={selectedTag === tag}
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

<style>
	.hero-filters {
		width: min(100%, 60rem);
		margin-inline: auto;
		padding-block: var(--space-6) 0;
		color: inherit;
	}

	.hero-filters__inner {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.hero-filters__inner--desktop {
		display: none;
	}

	.hero-filters__mobile {
		display: flex;
		justify-content: center;
	}

	.hero-filters__mobile-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		max-width: 100%;
	}

	.hero-filters__mobile-selection {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.hero-filters__mobile-active-pill {
		cursor: default;
		pointer-events: none;
	}

	.hero-filters__mobile-clear {
		padding-inline: 1rem;
		min-height: 2.5rem;
		font-size: 0.7rem;
	}

	.hero-filters__mobile-trigger {
		padding-inline: 1.35rem;
		min-height: 2.5rem;
		font-size: 0.7rem;
	}

	@media (min-width: 768px) {
		.hero-filters__inner--desktop {
			display: flex;
		}

		.hero-filters__mobile {
			display: none;
		}
	}

	.hero-filters__overlay {
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

	.hero-filters__overlay-header {
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

	.hero-filters__overlay-main {
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

	.hero-filters__overlay-tagline {
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

	.hero-filters__overlay-title {
		margin: 0;
		font-family: var(--font-heading, serif);
		font-size: clamp(1.35rem, 5vw, 1.75rem);
		font-weight: 400;
		letter-spacing: 0.02em;
	}

	.hero-filters__overlay-close {
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

	.hero-filters__overlay-close:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px color-mix(in oklab, #fff 40%, transparent);
	}

	.hero-filters__inner--overlay {
		width: 100%;
		justify-content: center;
		align-content: center;
		align-items: center;
		padding-bottom: 0;
	}

	.hero-filters__pill {
		appearance: none;
		font: inherit;
		cursor: pointer;
		border: 1px solid color-mix(in oklab, var(--color-fg-on-cool) 42%, transparent);
		color: inherit;
		background: transparent;
		border-radius: 999px;
		padding: 0.4rem 0.85rem;
		font-size: 0.65rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.88;
	}

	.hero-filters__pill:hover,
	.hero-filters__pill:focus-visible {
		opacity: 1;
		outline: none;
		box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-fg-on-cool) 38%, transparent);
	}

	.hero-filters__pill--on {
		opacity: 1;
		background: color-mix(in oklab, var(--color-fg-on-cool) 14%, transparent);
	}
</style>
