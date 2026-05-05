<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';

	let { data } = $props();

	let title = $derived(data.project.projectTitle ?? data.project.title);
	const vimeoLaunch = 'https://player.vimeo.com/video/281105096?title=0&byline=0&portrait=0';
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="ION360 campaign">
		<CaseStudyVimeo src={vimeoLaunch} title={`${title} — launch film`} />
		<FullBleedImage
			src="/work-images/ion360/billboard-ooh.avif"
			alt="ION360 billboard out-of-home placement"
		/>
		<FullBleedImage
			src="/work-images/ion360/billboard-music-awards.avif"
			alt="ION360 launch at the Billboard Music Awards"
		/>
		<FullBleedImage src="/work-images/ion360/packaging.avif" alt="ION360 product packaging" />
		<FullBleedImage
			src="/work-images/ion360/u-beauty-2394.avif"
			alt="ION360 product and U Beauty photography"
		/>
		<FullBleedImage
			src="/work-images/ion360/u-beauty-2387.avif"
			alt="ION360 product and U Beauty photography"
		/>
		<FullBleedImage src="/work-images/ion360/retail-sprint.avif" alt="ION360 retail display" />
	</WorkCaseStudyBody>
</WorkCaseStudy>
