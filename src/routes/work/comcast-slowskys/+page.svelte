<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import Prose from '$lib/components/work/Prose.svelte';

	let { data } = $props();

	let titleDisplay = $derived(data.project.projectTitle ?? data.project.title);

	const base = 'https://player.vimeo.com/video';
	const q = '?title=0&byline=0&portrait=0';

	const spotsAfterHero = [
		`${base}/14229868${q}`,
		`${base}/14231157${q}`,
		`${base}/14706514${q}`
	] as const;

	const webFilms = [`${base}/15727512${q}`, `${base}/15727522${q}`] as const;
	const siteFilm = `${base}/15699588${q}`;

	const siteStillPair = [
		{
			src: '/work-images/comcast-slowskys/stop-slowsky.avif',
			alt: 'Comcast Slowskys — “Stop” slowsky website screen'
		},
		{
			src: '/work-images/comcast-slowskys/home-slowsky.avif',
			alt: 'Comcast Slowskys — home slowsky website screen'
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="The Slowskys campaign">
		{#each spotsAfterHero as url, i (url)}
			<CaseStudyVimeo
				src={url}
				title={`${titleDisplay} — spot ${i + 2}`}
				aspectRatio="4 / 3"
			/>
		{/each}

		<WorkCaseStudySection sectionId="slowskys-web-films" title="Web Films">
			{#snippet intro()}
				<Prose align="center">
					<p>
						We created videos that showed viewers what was really happening behind-the-scenes.
					</p>
				</Prose>
			{/snippet}
			{#each webFilms as url, i (url)}
				<CaseStudyVimeo
					src={url}
					title={`${titleDisplay} — web film ${i + 1}`}
					aspectRatio="4 / 3"
				/>
			{/each}
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="slowskys-website">
			{#snippet intro()}
				<Prose align="center">
					<p>
						We also had a dedicated website with slow elements like needlepoint screensavers and
						belated e-cards.
					</p>
				</Prose>
			{/snippet}
			<CaseStudyVimeo
				src={siteFilm}
				title={`${titleDisplay} — website film`}
				aspectRatio="4 / 3"
			/>
			<ImageGrid images={siteStillPair} columns={2} aspectRatio="650 / 396" objectFit="contain" />
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>
