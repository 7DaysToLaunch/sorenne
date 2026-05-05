<script lang="ts">
	import type { Snippet } from 'svelte';

	/** Page content: typically `WorkProjectHero` plus optional `div.work-detail__below`. */
	let { children }: { children: Snippet } = $props();
</script>

<article class="work-detail">
	{@render children()}
</article>

<style>
	.work-detail {
		padding-inline: var(--space-gutter);
		padding-block: calc(var(--site-nav-offset) + 7rem) var(--space-16);
		color: inherit;
	}

	.work-detail :global(.work-detail__below) {
		margin-top: var(--space-12);
		max-width: var(--width-case-study-hero-media);
		margin-inline: auto;
		width: 100%;
		color: inherit;
	}

	/* ─── Single-source rhythm rules ────────────────────────────────────────
	   Every body primitive (`Prose`, `FullBleedImage`, `ImageGrid`, `ImageMasonry`,
	   `MediaGrid`, `CaseStudyVimeo`) ships with `margin-bottom: var(--space-10)`,
	   so they slot together with a uniform gap. The two rules below patch the
	   edge cases without forcing any per-page CSS. */

	/* (1) The very last block in the body sits flush against the page padding. */
	.work-detail :global(.work-detail__below > *:last-child) {
		margin-bottom: 0;
	}

	/* (2) When a block is immediately followed by a `WorkCaseStudySection` or a
	   standalone `SectionDivider`, the section/divider already provides its own
	   top spacing (`var(--space-12)`). Strip the predecessor's trailing margin
	   so we don't double-count. */
	.work-detail :global(.work-detail__below > *:has(+ .work-study-section)),
	.work-detail :global(.work-detail__below > *:has(+ .section-divider)) {
		margin-bottom: 0;
	}

	.work-detail :global(.work-detail__hero-video) {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
