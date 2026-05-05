<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';

	let { data } = $props();

	const base = '/work-images/nike-rock-victorious';

	const intro = {
		src: `${base}/intro-susanna.avif`,
		alt: 'Rock Victorious — campaign key art'
	};

	const trio = [
		{ src: `${base}/trio-maria-victory.avif`, alt: 'Rock Victorious — Maria Sharapova' },
		{ src: `${base}/trio-maria-sexy.avif`, alt: 'Rock Victorious — Maria Sharapova' },
		{ src: `${base}/trio-serena-victory.avif`, alt: 'Rock Victorious — Serena Williams' }
	] as const;

	const groupWide = {
		src: `${base}/group-wide.avif`,
		alt: 'Rock Victorious — athlete line-up'
	};

	const actionExplode = {
		src: `${base}/action-explode.avif`,
		alt: 'Rock Victorious — campaign visual'
	};

	const sections = [
		{
			id: 'rock-print',
			title: 'Print Layouts',
			images: [
				{ src: `${base}/print-01.avif`, alt: 'Rock Victorious — print layout' },
				{ src: `${base}/print-02.avif`, alt: 'Rock Victorious — print layout' },
				{ src: `${base}/print-03.avif`, alt: 'Rock Victorious — print layout' }
			]
		},
		{
			id: 'rock-photo',
			title: 'Photography',
			images: [
				{ src: `${base}/photo-01.avif`, alt: 'Rock Victorious — Serena Williams' },
				{ src: `${base}/photo-02.avif`, alt: 'Rock Victorious — Susanna Kallur' },
				{ src: `${base}/photo-03.avif`, alt: 'Rock Victorious — Susanna Kallur' },
				{ src: `${base}/photo-04.avif`, alt: 'Rock Victorious — product photography' }
			]
		},
		{
			id: 'rock-window',
			title: 'Window Concept Renders',
			images: [
				{ src: `${base}/window-01.avif`, alt: 'Rock Victorious — seasonal window concept' },
				{ src: `${base}/window-02.avif`, alt: 'Rock Victorious — window render' },
				{ src: `${base}/window-03.avif`, alt: 'Rock Victorious — window render' },
				{ src: `${base}/window-04.avif`, alt: 'Rock Victorious — window render' }
			]
		},
		{
			id: 'rock-retail',
			title: 'Retail Display',
			images: [
				{ src: `${base}/retail-01.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-02.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-03.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-04.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-05.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-06.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-07.avif`, alt: 'Rock Victorious — retail display' },
				{ src: `${base}/retail-08.avif`, alt: 'Rock Victorious — retail display' }
			]
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Rock Victorious campaign">
		<FullBleedImage {...intro} />
		<ImageGrid images={trio} columns={3} />
		<FullBleedImage {...groupWide} />
		<FullBleedImage {...actionExplode} />

		{#each sections as s (s.id)}
			<WorkCaseStudySection sectionId={s.id} title={s.title}>
				{#each s.images as img (img.src)}
					<FullBleedImage src={img.src} alt={img.alt} />
				{/each}
			</WorkCaseStudySection>
		{/each}
	</WorkCaseStudyBody>
</WorkCaseStudy>
