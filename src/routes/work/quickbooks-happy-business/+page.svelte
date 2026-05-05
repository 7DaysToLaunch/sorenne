<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import MediaGrid from '$lib/components/work/MediaGrid.svelte';
	import Prose from '$lib/components/work/Prose.svelte';

	let { data } = $props();

	let titleDisplay = $derived(data.project.projectTitle ?? data.project.title);

	const base = 'https://player.vimeo.com/video';

	const spotEmbeds = [
		`${base}/411188137?title=0&byline=0&portrait=0`,
		`${base}/410458510?title=0&byline=0&portrait=0`,
		`${base}/410459600?title=0&byline=0&portrait=0`,
		`${base}/411193609?title=0&byline=0&portrait=0`,
		`${base}/411195019?title=0&byline=0&portrait=0`
	] as const;

	const igStoryEmbeds = [
		`${base}/415405897?title=0&byline=0&portrait=0`,
		`${base}/415577279?title=0&byline=0&portrait=0`
	] as const;

	const socialPair = [
		{
			src: '/work-images/quickbooks-happy-business/trial-run-janine.avif',
			alt: 'QuickBooks Happy Business — interactive IG story, Janine'
		},
		{
			src: '/work-images/quickbooks-happy-business/trial-run-sensei.avif',
			alt: 'QuickBooks Happy Business — interactive IG story, Sensei'
		}
	] as const;

	const baseGif = '/work-images/quickbooks-happy-business';
	const gifTiles = [
		{ src: `${baseGif}/cranky-janine.gif`, alt: 'Campaign GIF — Janine' },
		{ src: `${baseGif}/ghostbusters-1a.gif`, alt: 'Campaign GIF — Ghostbusters' },
		{ src: `${baseGif}/ghostbusters-1db.gif`, alt: 'Campaign GIF — Ghostbusters' },
		{ src: `${baseGif}/cobra-kai-1i.gif`, alt: 'Campaign GIF — Cobra Kai' },
		{ src: `${baseGif}/cobra-kai-1l.gif`, alt: 'Campaign GIF — Cobra Kai' },
		{ src: `${baseGif}/cobra-kai-1e.gif`, alt: 'Campaign GIF — Cobra Kai' }
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Happy Business campaign">
		{#each spotEmbeds as url, i (url)}
			<CaseStudyVimeo src={url} title={`${titleDisplay} — spot ${i + 2}`} />
		{/each}

		<WorkCaseStudySection sectionId="qb-happy-social" title="Social">
			{#snippet intro()}
				<Prose align="center">
					<p>
						To show how easy it is to invoice or run payroll on the QuickBooks app, we created a
						series of interactive IG Stories using the same tapping functionality to get our
						message across.
					</p>
				</Prose>
			{/snippet}
			<ImageGrid images={socialPair} columns={2} />
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="qb-happy-tbt" title="#ThrowBackThursday">
			{#snippet intro()}
				<Prose align="center">
					<p>
						We leaned into existing behaviors with Janine and Sensei posting their grumpy past life
						selves.
					</p>
				</Prose>
			{/snippet}
			<MediaGrid columns={2}>
				{#each igStoryEmbeds as url, i (url)}
					<CaseStudyVimeo
						src={url}
						title={`${titleDisplay} — Instagram story ${i + 1}`}
						aspectRatio="300 / 577"
					/>
				{/each}
			</MediaGrid>
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="qb-happy-gifs" title="Gifs">
			<ImageGrid images={gifTiles} columns={3} aspectRatio="1 / 1" objectFit="contain" />
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="qb-happy-merch" title="Koala Kai Merch">
			<FullBleedImage
				src="/work-images/quickbooks-happy-business/koala-merch.avif"
				alt="Cobra Kai Koala merchandise line"
			/>
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>
