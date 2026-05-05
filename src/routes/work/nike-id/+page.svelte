<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import ImageMasonry from '$lib/components/work/ImageMasonry.svelte';
	import SectionDivider from '$lib/components/work/SectionDivider.svelte';

	let { data } = $props();

	const vimeoEmbeds = [
		'https://player.vimeo.com/video/15698400?title=0&byline=0&portrait=0',
		'https://player.vimeo.com/video/15698413?title=0&byline=0&portrait=0',
		'https://player.vimeo.com/video/15698416?title=0&byline=0&portrait=0',
		'https://player.vimeo.com/video/15698448?title=0&byline=0&portrait=0'
	] as const;

	const gridImages = [
		{ src: '/work-images/nike-id/render1.avif', alt: 'Nike ID campaign — render' },
		{ src: '/work-images/nike-id/bugs.avif', alt: 'Nike ID campaign — bugs' },
		{ src: '/work-images/nike-id/surgery.avif', alt: 'Nike ID campaign — surgery' },
		{ src: '/work-images/nike-id/panties.avif', alt: 'Nike ID campaign — lingerie' },
		{ src: '/work-images/nike-id/kid.avif', alt: 'Nike ID campaign — kid' },
		{ src: '/work-images/nike-id/plates.avif', alt: 'Nike ID campaign — plates' },
		{ src: '/work-images/nike-id/dolls.avif', alt: 'Nike ID campaign — dolls' },
		{ src: '/work-images/nike-id/moustache.avif', alt: 'Nike ID campaign — moustache' },
		{ src: '/work-images/nike-id/olives.avif', alt: 'Nike ID campaign — olives' },
		{ src: '/work-images/nike-id/socks.avif', alt: 'Nike ID campaign — socks' },
		{ src: '/work-images/nike-id/records.avif', alt: 'Nike ID campaign — records' }
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody>
		{#each vimeoEmbeds as src, i (src)}
			<CaseStudyVimeo {src} title="Nike ID — film {i + 1}" />
		{/each}
		<SectionDivider />
		<ImageMasonry images={gridImages} columns={2} />
	</WorkCaseStudyBody>
</WorkCaseStudy>
