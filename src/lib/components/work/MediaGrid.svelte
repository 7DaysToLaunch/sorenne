<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		columns = 2,
		template,
		gap = 'var(--space-3)',
		mobileColumns = 1,
		children
	}: {
		columns?: 2 | 3 | 4;
		/** Escape hatch for non-equal columns (e.g. `'2fr 1fr'`). Overrides `columns`. */
		template?: string;
		gap?: string;
		/** Single column by default at <= 640px; pass `2` to stay at two columns. */
		mobileColumns?: 1 | 2;
		children: Snippet;
	} = $props();

	let resolvedTemplate = $derived(template ?? `repeat(${columns}, 1fr)`);
</script>

<div
	class={['media-grid', mobileColumns === 2 && 'media-grid--mobile-2']}
	style="--media-grid-cols: {resolvedTemplate}; --media-grid-gap: {gap}"
>
	{@render children()}
</div>

<style>
	.media-grid {
		display: grid;
		grid-template-columns: var(--media-grid-cols);
		gap: var(--media-grid-gap);
		margin-bottom: var(--space-10);
		width: 100%;
		align-items: start;
	}

	/* Children of MediaGrid shouldn't add their own bottom margin — the grid
	   itself owns the spacing to the next block. */
	.media-grid :global(> *) {
		margin-bottom: 0;
	}

	@media (max-width: 640px) {
		.media-grid {
			grid-template-columns: 1fr;
		}

		.media-grid--mobile-2 {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
