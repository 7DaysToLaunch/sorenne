<script lang="ts">
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import NarrowColumn from '$lib/components/work/NarrowColumn.svelte';
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';

	let { data } = $props();

	const base = '/work-images/lume';
	const pairUnderTatas = [
		{
			src: `${base}/pair-under-tatas-1.gif`,
			alt: 'Lume — Under the Tatas social piece 1'
		},
		{
			src: `${base}/pair-under-tatas-2.gif`,
			alt: 'Lume — Under the Tatas social piece 2'
		}
	];
	const pairRandomBody = [
		{
			src: `${base}/pair-random-body-1.gif`,
			alt: 'Lume — Random body changes social piece 1'
		},
		{
			src: `${base}/pair-random-body-2.gif`,
			alt: 'Lume — Random body changes social piece 2'
		}
	];
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Lume campaign imagery">
		<FullBleedImage src={`${base}/hero-motion-01.gif`} alt="Lume — launch motion 1" />
		<FullBleedImage src={`${base}/hero-motion-02.gif`} alt="Lume — launch motion 2" />
		<FullBleedImage src={`${base}/still-under-tatas.avif`} alt="Lume — Under the Tatas still" />
		<NarrowColumn>
			<ImageGrid
				images={[...pairUnderTatas]}
				columns={2}
				aspectRatio="590 / 1054"
				objectFit="contain"
			/>
		</NarrowColumn>
		<FullBleedImage src={`${base}/still-down-there.avif`} alt="Lume — Down There still" />
		<NarrowColumn>
			<ImageGrid
				images={[...pairRandomBody]}
				columns={2}
				aspectRatio="590 / 1054"
				objectFit="contain"
			/>
		</NarrowColumn>
		<FullBleedImage
			src={`${base}/still-random-body.avif`}
			alt="Lume — Random body changes still"
		/>
		<FullBleedImage src={`${base}/outro-motion.gif`} alt="Lume — closing motion" />
	</WorkCaseStudyBody>
</WorkCaseStudy>
