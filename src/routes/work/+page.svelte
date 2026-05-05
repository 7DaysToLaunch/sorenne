<script lang="ts">
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { webPageSchema } from '$lib/seo';

	const title = 'Work — Sorenne';
	const description =
		'Browse Sorenne portfolio projects across campaigns, film, social, design, retail, digital launches, fashion, beauty, technology, wellness, and CPG.';
</script>

<Seo
	{title}
	{description}
	canonicalPath="/work"
	jsonLd={webPageSchema({
		path: '/work',
		title,
		description,
		type: 'CollectionPage'
	})}
/>

<section class="work-head">
	<h1 class="work-head__title">Work</h1>
</section>

<ProjectGrid />

<style>
	.work-head {
		padding: 0 var(--space-gutter) var(--space-4);
		padding-top: calc(var(--site-nav-offset) + var(--space-16));
		text-align: center;
	}

	.work-head__title {
		font-size: var(--text-5xl);
		margin: 0;
		color: inherit;
	}
</style>
