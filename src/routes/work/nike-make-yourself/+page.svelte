<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';

	let { data } = $props();

	/** Full-width within the case study column (same as hero width). */
	const landscapeStack = [
		{
			src: '/work-images/nike-make-yourself/sofia-bra-white.avif',
			alt: 'Nike Women’s Training — seasonal campaign photograph'
		},
		{
			src: '/work-images/nike-make-yourself/laydown.avif',
			alt: 'Nike Women’s Training — apparel laydown'
		},
		{
			src: '/work-images/nike-make-yourself/sofia-rival-black.avif',
			alt: 'Nike Women’s Training — studio portrait'
		}
	] as const;

	const editorialPair = [
		{
			src: '/work-images/nike-make-yourself/allyson-vertical.avif',
			alt: 'Nike Women’s Training — Allyson campaign image'
		},
		{
			src: '/work-images/nike-make-yourself/sofia-red-top.avif',
			alt: 'Nike Women’s Training — Sofia campaign image'
		}
	] as const;

	const rivalPair = [
		{
			src: '/work-images/nike-make-yourself/allyson-rival-1.avif',
			alt: 'Nike Women’s Training — Rival Bra campaign image'
		},
		{
			src: '/work-images/nike-make-yourself/allyson-rival-2.avif',
			alt: 'Nike Women’s Training — Rival Bra campaign image'
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Campaign photography">
		<FullBleedImage {...landscapeStack[0]} />
		<ImageGrid images={editorialPair} columns={2} />
		<ImageGrid images={rivalPair} columns={2} />
		<FullBleedImage {...landscapeStack[1]} />
		<FullBleedImage {...landscapeStack[2]} />
	</WorkCaseStudyBody>
</WorkCaseStudy>
