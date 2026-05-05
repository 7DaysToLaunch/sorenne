<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		sectionId,
		title,
		/** Cargo-style all-caps section labels (e.g. 128/NYC). */
		uppercaseTitle = false,
		/** Optional intro rendered before the section heading (e.g. lead-in sentence). */
		lead,
		/** Optional copy block rendered between the heading and the body content. */
		intro,
		children
	}: {
		sectionId: string;
		/** Optional — when omitted, the section renders as a divider + body only. */
		title?: string;
		uppercaseTitle?: boolean;
		lead?: Snippet;
		intro?: Snippet;
		children: Snippet;
	} = $props();
</script>

<section
	class="work-study-section"
	aria-labelledby={title ? sectionId : undefined}
	aria-label={title ? undefined : sectionId}
>
	{#if lead}
		<div class="work-study-section__lead">
			{@render lead()}
		</div>
	{/if}
	{#if title}
		<h2
			id={sectionId}
			class={[
				'work-study-section__title',
				uppercaseTitle && 'work-study-section__title--caps'
			]}
		>
			{title}
		</h2>
	{/if}
	{#if intro}
		<div class="work-study-section__intro">
			{@render intro()}
		</div>
	{/if}
	{@render children()}
</section>

<style>
	.work-study-section {
		margin-top: var(--space-12);
		padding-top: var(--space-10);
		border-top: 1px solid var(--color-border);
	}

	.work-study-section__lead {
		margin-bottom: var(--space-8);
	}

	.work-study-section__title {
		font-family: var(--font-heading);
		font-size: var(--text-3xl);
		line-height: var(--leading-snug);
		font-weight: var(--font-weight-light);
		text-align: center;
		text-transform: none;
		margin: 0 0 var(--space-10);
		color: inherit;
	}

	.work-study-section__title--caps {
		text-transform: uppercase;
	}

	.work-study-section__intro {
		margin-bottom: var(--space-8);
	}

	/* Both lead/intro slots normalise their inner content's trailing margin so
	   the wrapper alone owns the gap to the next block. Works with any text
	   primitive (Prose, raw `<p>`, etc.) — not just `.prose`. */
	.work-study-section__lead :global(> *:last-child),
	.work-study-section__intro :global(> *:last-child) {
		margin-bottom: 0;
	}

	/* Last block in a section sits flush against the section's bottom padding —
	   except `CaseStudyVimeo`, which intentionally keeps its margin so the
	   following block (typically another section or a full-bleed image) isn't
	   pressed up against the video chrome. */
	.work-study-section :global(> *:last-child:not(.case-study-vimeo)) {
		margin-bottom: 0;
	}
</style>
