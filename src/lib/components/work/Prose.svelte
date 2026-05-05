<!--
  Prose — the text block primitive of the case-study system. Drops in alongside
  FullBleedImage / ImageGrid / CaseStudyVimeo / MediaGrid as a first-class block
  in `<WorkCaseStudyBody>`, and is also what `WorkCaseStudySection`'s `lead` and
  `intro` snippets expect as their content. Owns measure, alignment and the
  shared body rhythm (`--space-10`) so consumers never re-implement copy spacing.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = '',
		align = 'center',
		measure = 'prose',
		/** Larger lead copy (case-study intro blocks). */
		intro = false
	}: {
		children: Snippet;
		class?: string;
		align?: 'center' | 'start';
		measure?: 'prose' | 'wide';
		intro?: boolean;
	} = $props();
</script>

<div
	class={[
		'prose',
		className,
		align === 'start' && 'prose--align-start',
		align === 'center' && 'prose--align-center',
		measure === 'wide' && 'prose--measure-wide',
		intro && 'prose--intro'
	]}
>
	{@render children()}
</div>

<style>
	.prose {
		max-width: var(--width-prose);
		margin-bottom: var(--space-10);
		font-size: var(--text-base);
		line-height: var(--leading-relaxed);
		text-wrap: balance;
	}

	.prose--align-center {
		margin-inline: auto;
		text-align: center;
	}

	.prose--align-start {
		margin-inline: 0;
		text-align: left;
	}

	.prose--measure-wide {
		max-width: var(--width-wide);
	}

	.prose--intro {
		font-size: var(--text-2xl);
		line-height: var(--leading-relaxed);
	}

	.prose :global(p) {
		margin: 0 0 var(--space-4);
	}

	.prose :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
