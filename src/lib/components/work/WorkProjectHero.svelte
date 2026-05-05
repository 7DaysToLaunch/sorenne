<script lang="ts">
	import TagRow from './TagRow.svelte';
	import type { ProjectMeta } from '$lib/data/work';
	import type { Snippet } from 'svelte';

	let {
		project,
		heroTitle,
		descriptionPosition: descriptionPositionProp,
		promptOverlay,
		showFilmCue = false,
		extraMedia
	}: {
		project: ProjectMeta;
		/** Overrides registry `projectTitle` / `title` for one-off heroes. */
		heroTitle?: string;
		/** Overrides placement implied by `showFilmCue`. */
		descriptionPosition?: 'above-media' | 'below-tags';
		promptOverlay?: { badge: string; text: string };
		showFilmCue?: boolean;
		/** Rare: replace hero image/video with custom markup entirely. */
		extraMedia?: Snippet;
	} = $props();

	let descriptionPosition = $derived(
		descriptionPositionProp ??
			(showFilmCue ? 'below-tags' : project.heroDescription?.trim() ? 'below-tags' : 'above-media')
	);

	let heroIsVimeo = $derived(Boolean(project.heroVimeoEmbed?.trim()));
	let heroIsVideo = $derived(Boolean(project.heroVideoSrc?.trim()));

	let titleDisplay = $derived(heroTitle ?? project.projectTitle ?? project.title);

	let heroNarrative = $derived((project.heroDescription ?? project.description).trim());

	let tags = $derived(project.tags);

	let heroImageSrc = $derived(project.images.landscape);

	let imageSrc = $derived(heroIsVimeo || heroIsVideo ? undefined : heroImageSrc);

	let imageAlt = $derived(`${titleDisplay} — project still`);

	let vimeoFrameTitle = $derived(`${titleDisplay} — film`);

	let needsOverlayShell = $derived(
		Boolean(promptOverlay || showFilmCue || heroIsVideo || heroIsVimeo || extraMedia)
	);

	let showTagRow = $derived(tags.length > 0 && promptOverlay === undefined);

	let narrativeFirst = $derived(descriptionPosition === 'above-media' && Boolean(heroNarrative));

	let narrativeLast = $derived(descriptionPosition === 'below-tags' && Boolean(heroNarrative));
</script>

{#snippet heroVideoSnippet()}
	<video
		class="work-detail__hero-video"
		controls
		playsinline
		preload="metadata"
		poster={heroImageSrc}
	>
		<source src={project.heroVideoSrc} />
	</video>
{/snippet}

{#snippet heroVimeoSnippet()}
	<div class="work-project-hero__vimeo-rail">
		<iframe
			class="work-project-hero__vimeo"
			src={project.heroVimeoEmbed}
			title={vimeoFrameTitle}
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			loading="lazy"
		></iframe>
	</div>
{/snippet}

<section class="work-project-hero" aria-labelledby="work-project-title">
		<h1 id="work-project-title" class="work-project-hero__title">{titleDisplay}</h1>

		{#if narrativeFirst}
			<p class="work-project-hero__description work-project-hero__description--before-media">
				{heroNarrative}
			</p>
		{/if}

		<figure class="work-project-hero__figure">
			{#if needsOverlayShell}
				<span class="work-project-hero__media-wrap">
					{#if heroIsVimeo}
						{@render heroVimeoSnippet()}
					{:else if heroIsVideo}
						{@render heroVideoSnippet()}
					{:else if extraMedia}
						{@render extraMedia()}
					{:else if imageSrc}
						<img
							class="work-project-hero__media"
							src={imageSrc}
							alt={imageAlt || ''}
							loading="lazy"
							decoding="async"
						/>
					{/if}
					{#if promptOverlay}
						<span class="work-project-hero__prompt" aria-hidden="true">
							<span class="work-project-hero__prompt-badge">{promptOverlay.badge}</span>
							<span class="work-project-hero__prompt-meta">{promptOverlay.text}</span>
						</span>
					{/if}
					{#if showFilmCue}
						<span class="work-project-hero__film-cue" aria-hidden="true">
							<svg viewBox="0 0 64 64" class="work-project-hero__play-icon">
								<circle cx="32" cy="32" r="30" />
								<path d="M27 21 L45 33 L27 45 Z" />
							</svg>
						</span>
					{/if}
				</span>
			{:else}
				{#if extraMedia}
					{@render extraMedia()}
				{:else if imageSrc}
					<img
						class="work-project-hero__media"
						src={imageSrc}
						alt={imageAlt || ''}
						loading="lazy"
						decoding="async"
					/>
				{/if}
			{/if}
		</figure>

		{#if showTagRow}
			<div class="work-project-hero__tags">
				<TagRow {tags} />
			</div>
		{/if}

		{#if narrativeLast}
			<p class="work-project-hero__description work-project-hero__description--after-tags">{heroNarrative}</p>
		{/if}
</section>

<style>
	.work-project-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: var(--width-max);
		margin-inline: auto;
		color: inherit;
	}

	.work-project-hero__title {
		font-family: var(--font-heading);
		font-size: var(--text-5xl);
		line-height: 1;
		letter-spacing: var(--tracking-tight);
		margin: 0;
		text-wrap: balance;
		max-width: 26ch;
		text-transform: uppercase;
		position: relative;
		z-index: 1;
		margin-bottom: calc(var(--text-5xl) * -0.125);
		color: inherit;
	}

	.work-project-hero__description {
		font-family: var(--font-body);
		font-size: var(--text-2xl);
		line-height: var(--leading-relaxed);
		font-weight: var(--font-weight-regular);
		margin: 0;
		text-align: left;
	}

	.work-project-hero__description--after-tags {
		max-width: var(--width-wide);
	}

	.work-project-hero__description--before-media {
		max-width: var(--width-wide);
		margin-bottom: var(--space-8);
	}

	.work-project-hero__figure {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		max-width: var(--width-case-study-hero-media);
	}

	.work-project-hero__media-wrap {
		position: relative;
		display: block;
		width: 100%;
		overflow: hidden;
	}

	.work-project-hero__vimeo-rail {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: color-mix(in oklab, var(--color-fg) 6%, transparent);
	}

	.work-project-hero__vimeo {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
	}

	.work-project-hero__media-wrap :global(img),
	.work-project-hero__figure > :global(img),
	.work-project-hero__media {
		display: block;
		width: 100%;
		height: auto;
	}

	.work-project-hero__prompt {
		position: absolute;
		bottom: var(--space-5);
		left: var(--space-5);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3);
		font-family: ui-monospace, 'Cousine', Menlo, monospace;
		font-size: var(--text-xs);
		letter-spacing: 0.04em;
		color: var(--site-theme-fg, var(--color-fg-inverse));
		text-transform: lowercase;
		text-align: left;
		pointer-events: none;
	}

	.work-project-hero__prompt-badge {
		border: 1px solid color-mix(in oklab, currentColor 88%, transparent);
		border-radius: var(--radius-full);
		padding: 0.2rem 0.55rem;
	}

	.work-project-hero__prompt-meta {
		opacity: 0.92;
	}

	.work-project-hero__film-cue {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		color: var(--site-theme-fg, var(--color-fg-inverse));
	}

	.work-project-hero__play-icon {
		width: min(21vw, 7.5rem);
		height: min(21vw, 7.5rem);
		overflow: visible;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.25;
	}

	.work-project-hero__play-icon circle {
		fill: none;
		opacity: 0.95;
	}

	.work-project-hero__play-icon path {
		fill: currentColor;
		stroke: none;
		opacity: 0.95;
		transform: translateX(1px);
	}

	.work-project-hero__tags {
		margin-top: var(--space-12);
		margin-bottom: var(--space-12);
		color: inherit;
	}

	
</style>
