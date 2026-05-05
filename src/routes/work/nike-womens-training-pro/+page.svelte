<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';

	let { data } = $props();

	const base = '/work-images/nike-womens-training-pro';

	const allysonPair = [
		{ src: `${base}/allyson-01.avif`, alt: 'Nike Pro — Allyson Felix' },
		{ src: `${base}/allyson-02.avif`, alt: 'Nike Pro — Allyson Felix' }
	] as const;

	const sofiaPairA = [
		{ src: `${base}/sofia-01.avif`, alt: 'Nike Pro — campaign photography' },
		{ src: `${base}/sofia-02.avif`, alt: 'Nike Pro — campaign photography' }
	] as const;

	const sofiaPairB = [
		{ src: `${base}/sofia-03.avif`, alt: 'Nike Pro — campaign photography' },
		{ src: `${base}/sofia-04.avif`, alt: 'Nike Pro — campaign photography' }
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody>
		<ImageGrid images={allysonPair} columns={2} />
		<FullBleedImage src={`${base}/allyson-instore.avif`} alt="Nike Pro — in-store graphic" />
		<FullBleedImage src={`${base}/nike-pro-lockup.avif`} alt="Nike Pro — brand lockup" />
		<ImageGrid images={sofiaPairA} columns={2} />
		<ImageGrid images={sofiaPairB} columns={2} />
		<FullBleedImage src={`${base}/sofia-instore.avif`} alt="Nike Pro — in-store display" />
		<FullBleedImage src={`${base}/sofia-window.avif`} alt="Nike Pro — window display" />
	</WorkCaseStudyBody>
</WorkCaseStudy>
