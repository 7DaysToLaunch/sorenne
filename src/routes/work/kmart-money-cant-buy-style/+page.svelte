<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import MediaGrid from '$lib/components/work/MediaGrid.svelte';
	import SectionDivider from '$lib/components/work/SectionDivider.svelte';

	let { data } = $props();

	let title = $derived(data.project.projectTitle ?? data.project.title);

	const base = '/work-images/kmart-money-cant-buy-style';
	const vimeoRemix = 'https://player.vimeo.com/video/280823424?title=0&byline=0&portrait=0';

	const pairSp13 = [
		{
			src: `${base}/mcbs-sp13-02.avif`,
			alt: "Money Can't Buy Style — spring campaign"
		},
		{
			src: `${base}/mcbs-sp13-03.avif`,
			alt: "Money Can't Buy Style — spring campaign"
		}
	] as const;

	const castGifs = [
		{ src: `${base}/cast-xavier.gif`, alt: 'Stylepreneur Xavier' },
		{ src: `${base}/cast-chloe.gif`, alt: 'Stylepreneur Chloe' },
		{ src: `${base}/cast-miyako.gif`, alt: 'Stylepreneur Miyako' },
		{ src: `${base}/cast-kara.gif`, alt: 'Stylepreneur Kara' }
	] as const;

	const pairFa13 = [
		{
			src: `${base}/mcbs-fa13-02.avif`,
			alt: "Money Can't Buy Style — fall campaign refresh"
		},
		{
			src: `${base}/mcbs-fa13-04.avif`,
			alt: "Money Can't Buy Style — fall campaign refresh"
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Money Can't Buy Style for Kmart Fashion">
		<FullBleedImage
			src={`${base}/mcbs-sp13-01.avif`}
			alt="Money Can't Buy Style — campaign overview"
		/>
		<ImageGrid images={pairSp13} columns={2} aspectRatio="900 / 1200" objectFit="contain" />
		<FullBleedImage
			src={`${base}/group-mcbs.gif`}
			alt="Money Can't Buy Style — Stylepreneurs group"
		/>
		<FullBleedImage src={`${base}/mcbs-sp13-05.avif`} alt="Money Can't Buy Style — spring layouts" />
		<FullBleedImage
			src={`${base}/mcbs-sp13-04-2.avif`}
			alt="Money Can't Buy Style — spring creative"
		/>

		<SectionDivider />

		<FullBleedImage
			src={`${base}/mcbs-remix-fb-contest.avif`}
			alt="Money Can't Buy Style — Facebook remix contest"
		/>
		<CaseStudyVimeo src={vimeoRemix} title={`${title} — remix`} />

		<WorkCaseStudySection sectionId="mcbs-fall-refresh" title="Fall campaign refresh" uppercaseTitle>
			<MediaGrid template="2fr 1fr">
				<figure class="mcbs-fall-cell">
					<img
						src={`${base}/mcbs-fa13-01.avif`}
						width="1200"
						height="1631"
						alt="Money Can't Buy Style — fall campaign"
						loading="lazy"
						decoding="async"
					/>
				</figure>
				<figure class="mcbs-fall-cell">
					<img
						src={`${base}/mcbs-fa13-third-page-ad.avif`}
						width="788"
						height="3263"
						alt="Money Can't Buy Style — fall print ad"
						loading="lazy"
						decoding="async"
					/>
				</figure>
			</MediaGrid>
			<FullBleedImage src={`${base}/mcbs-fa13-03.avif`} alt="Money Can't Buy Style — fall spread" />
			<ImageGrid images={castGifs} columns={4} aspectRatio="1 / 1" objectFit="contain" />
			<ImageGrid images={pairFa13} columns={2} aspectRatio="1200 / 1631" objectFit="contain" />
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>

<style>
	/* Bare image cells inside MediaGrid — no margin, no padding, fluid image. */
	.mcbs-fall-cell {
		margin: 0;
		padding: 0;
		min-width: 0;
	}

	.mcbs-fall-cell img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
