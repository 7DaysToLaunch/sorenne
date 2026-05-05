<script lang="ts">
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import NarrowColumn from '$lib/components/work/NarrowColumn.svelte';
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';

	let { data } = $props();

	const base = '/work-images/poppi';

	const gridWorld = [
		{ src: `${base}/grid-world-1.gif`, alt: 'Poppi — campaign motion still 1' },
		{ src: `${base}/grid-world-2.gif`, alt: 'Poppi — campaign motion still 2' },
		{ src: `${base}/grid-world-3.gif`, alt: 'Poppi — campaign motion still 3' },
		{ src: `${base}/grid-world-4.gif`, alt: 'Poppi — campaign motion still 4' }
	];

	const gridPress = [
		{ src: `${base}/grid-press-1.gif`, alt: 'Poppi — press tour social 1' },
		{ src: `${base}/grid-press-2.gif`, alt: 'Poppi — press tour social 2' },
		{ src: `${base}/grid-press-3.gif`, alt: 'Poppi — press tour social 3' }
	];

	const gridSocial = [
		{ src: `${base}/grid-social-1.gif`, alt: 'Poppi — social film still 1' },
		{ src: `${base}/grid-social-2.gif`, alt: 'Poppi — social film still 2' },
		{ src: `${base}/grid-social-3.gif`, alt: 'Poppi — social film still 3' },
		{ src: `${base}/grid-social-4.gif`, alt: 'Poppi — social film still 4' }
	];
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Poppi campaign imagery">
		<FullBleedImage src={`${base}/hero.gif`} alt="Poppi — launch motion" />
		<FullBleedImage src={`${base}/still-lecture.avif`} alt="Poppi — physics lecture still" />
		<FullBleedImage src={`${base}/motion-case-study-break.gif`} alt="Poppi — case study motion" />
		<ImageGrid images={[...gridWorld]} columns={4} aspectRatio="16 / 9" />
		<NarrowColumn width="85%">
			<ImageGrid
				images={[...gridPress]}
				columns={3}
				aspectRatio="1306 / 2560"
				objectFit="cover"
			/>
		</NarrowColumn>
		<FullBleedImage src={`${base}/still-finale.avif`} alt="Poppi — campaign still" />
		<ImageGrid images={[...gridSocial]} columns={4} aspectRatio="16 / 9" />
		<FullBleedImage src={`${base}/outro.gif`} alt="Poppi — closing motion" />
	</WorkCaseStudyBody>
</WorkCaseStudy>
