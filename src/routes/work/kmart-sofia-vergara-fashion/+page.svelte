<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';

	let { data } = $props();

	let title = $derived(data.project.projectTitle ?? data.project.title);

	const base = '/work-images/kmart-sofia-vergara';
	const tv = 'https://player.vimeo.com/video/105721786?title=0&byline=0&portrait=0';

	const pairOne = [
		{
			src: `${base}/svsp-fa13-no-headline-02.avif`,
			alt: 'Kmart Sofia Vergara — fall campaign visual'
		},
		{
			src: `${base}/svsp-fa13-no-headline-03.avif`,
			alt: 'Kmart Sofia Vergara — fall campaign visual'
		}
	] as const;

	const pairTwo = [
		{
			src: `${base}/svsp-fa13-no-headline-14.avif`,
			alt: 'Kmart Sofia Vergara — fall campaign visual'
		},
		{
			src: `${base}/svsp-fa13-no-headline-7.avif`,
			alt: 'Kmart Sofia Vergara — fall campaign visual'
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Sofia Vergara for Kmart Fashion">
		<ImageGrid images={pairOne} columns={2} aspectRatio="1800 / 2291" objectFit="contain" />

		<WorkCaseStudySection sectionId="sofia-tv" title="TV">
			<CaseStudyVimeo src={tv} title={`${title} — TV`} />
		</WorkCaseStudySection>

		<FullBleedImage
			src={`${base}/kmt-sv-fa13-01.avif`}
			alt="Kmart Sofia Vergara — campaign photography"
		/>

		<ImageGrid images={pairTwo} columns={2} aspectRatio="1800 / 2291" objectFit="contain" />

		<FullBleedImage
			src={`${base}/kmt-sv-fa13-04.avif`}
			alt="Kmart Sofia Vergara — campaign graphic"
		/>
	</WorkCaseStudyBody>
</WorkCaseStudy>
