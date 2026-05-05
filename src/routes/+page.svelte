<script lang="ts">
import HomeHeroFilters from '$lib/components/HomeHeroFilters.svelte';
import HomeMasonryGrid from '$lib/components/HomeMasonryGrid.svelte';
import Seo from '$lib/components/Seo.svelte';
import {
	getHomeMasonryProjects,
	PROJECT_TAGS,
	type ProjectTag
} from '$lib/data/work';
import { DEFAULT_DESCRIPTION, personSchema, webPageSchema, websiteSchema } from '$lib/seo';

const homeProjects = getHomeMasonryProjects();
const tagsForHome = PROJECT_TAGS.filter((t) => homeProjects.some((p) => p.tags.includes(t)));

let selectedTag = $state<ProjectTag | null>(null);
</script>

<Seo
	title="Sorenne — Selected Work"
	description={DEFAULT_DESCRIPTION}
	canonicalPath="/"
	jsonLd={[
		personSchema(),
		websiteSchema(),
		webPageSchema({
			path: '/',
			title: 'Sorenne — Selected Work',
			description: DEFAULT_DESCRIPTION
		})
	]}
/>

<section class="hero" aria-labelledby="hero-heading">
<video class="hero__video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
	<source src="/videos/Sorenne%20Sizzle_smaller.mp4" type="video/mp4" />
</video>
<div class="hero__title-wrap">
	<h1 id="hero-heading" class="hero__title">Real live <br> Creative Director. <br>Head for ideas. <br>Heart for design. </h1>
</div>

</section>

<HomeMasonryGrid projects={homeProjects} {selectedTag} />

<style>
.hero {
	position: relative;
	isolation: isolate;
	overflow: hidden;
	min-height: max(99vh, 36rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--color-bg-cool);
	color: var(--color-fg-on-cool);
	margin-top: calc(-1 * var(--site-nav-offset));
	padding: calc(var(--site-nav-offset) + var(--space-20)) var(--space-gutter) var(--space-12);
}

.hero::after {
	content: '';
	position: absolute;
	inset: 0;
	z-index: -1;
	background: color-mix(in oklab, var(--color-bg-cool) 18%, transparent);
	pointer-events: none;
}

.hero__video {
	position: absolute;
	inset: 0;
	z-index: -2;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.hero__title-wrap {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 0;
	z-index: 1;
}

.hero :focus-visible {
	outline-color: color-mix(in oklab, var(--color-fg-on-cool) 85%, transparent);
}

.hero__title {
	max-width: min(22em, 100%);
	text-align: center;
	text-wrap: balance;
	font-family: var(--font-heading);
	font-size: clamp(3.5rem, 12vw, 7rem);
	font-weight: var(--font-weight-light);
	line-height: 1;
	letter-spacing: var(--tracking-tight);
	margin: 0;
	color: inherit;
}

@media (max-width: 900px) {
	.hero {
		min-height: auto;
		/* Clear fixed .nav: vertical padding + wordmark (matches SiteNav) */
		padding-block: calc(
				var(--site-nav-offset) + 2rem + 3.5rem + 1.25rem + var(--space-6)
			)
			var(--space-12);
		padding-inline: max(var(--space-gutter), env(safe-area-inset-left))
			max(var(--space-gutter), env(safe-area-inset-right));
	}

	.hero__title {
		max-width: 100%;
	}
}

@media (max-width: 767px) {
	.hero {
		padding-block: calc(
				var(--site-nav-offset) + 2rem + 2.25rem + 1.25rem + var(--space-6)
			)
			var(--space-10);
		padding-inline: max(var(--space-gutter), env(safe-area-inset-left))
			max(var(--space-gutter), env(safe-area-inset-right));
	}
}

</style>

