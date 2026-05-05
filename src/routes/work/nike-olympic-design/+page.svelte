<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';

	let { data } = $props();

	/** Cargo order: spreads 1–13, 16–23 (full width in case study column). */
	const spreadIds = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
		'13',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23'
	] as const;

	const spreads = spreadIds.map((id) => ({
		src: `/work-images/nike-olympic-design/book-${id}.avif`,
		alt: `Olympic Design — book spread ${id}`
	}));
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Olympic Design book spreads">
		{#each spreads as img (img.src)}
			<FullBleedImage src={img.src} alt={img.alt} />
		{/each}
	</WorkCaseStudyBody>
</WorkCaseStudy>
