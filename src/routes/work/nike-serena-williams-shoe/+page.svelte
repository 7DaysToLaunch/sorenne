<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';

	let { data } = $props();

	const base = '/work-images/nike-serena-williams-shoe';

	const portraitPair = [
		{
			src: `${base}/hero-128-nyc.avif`,
			alt: '128 / NYC — limited-edition Air Max Trainer launch'
		},
		{
			src: `${base}/niketown-02.avif`,
			alt: 'Nike — US Open NYC retail'
		}
	] as const;

	const niketownWide = {
		src: `${base}/niketown-01.avif`,
		alt: 'Nike — Niketown pop-up showcase'
	};

	const retailPair = [
		{ src: `${base}/retail-close-up.avif`, alt: '128 / NYC — retail display detail' },
		{ src: `${base}/retail-wide.avif`, alt: '128 / NYC — retail display' }
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody>
		<ImageGrid images={portraitPair} columns={2} />
		<FullBleedImage src={niketownWide.src} alt={niketownWide.alt} />

		<WorkCaseStudySection sectionId="nyc-retail" title="Retail display" uppercaseTitle>
			<ImageGrid images={retailPair} columns={2} />
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>
