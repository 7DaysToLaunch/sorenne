<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import CaseStudyVimeo from '$lib/components/work/CaseStudyVimeo.svelte';
	import Prose from '$lib/components/work/Prose.svelte';

	let { data } = $props();

	let titleDisplay = $derived(data.project.projectTitle ?? data.project.title);

	const vimeoFourThree = 'https://player.vimeo.com/video/14706239?title=0&byline=0&portrait=0';
	const vimeoPsa = 'https://player.vimeo.com/video/14706217?title=0&byline=0&portrait=0';
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Hands campaign films">
		<WorkCaseStudySection sectionId="hp-hands-content" title="Content">
			{#snippet intro()}
				<Prose align="center">
					<p>
						Along with broadcast, we created a series of OLVs that match Serena up against Wee-man
						of Jackass fame.
					</p>
				</Prose>
			{/snippet}
			<CaseStudyVimeo
				src={vimeoFourThree}
				title={`${titleDisplay} — content / OLV`}
				aspectRatio="4 / 3"
			/>
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="hp-hands-psa" title="PSA">
			{#snippet intro()}
				<Prose align="center">
					<p>
						This animated short was created to help promote literacy and features Serena as 1970’s
						super hero “Sugar Fly Williams”.
					</p>
				</Prose>
			{/snippet}
			<CaseStudyVimeo src={vimeoPsa} title={`${titleDisplay} — PSA`} aspectRatio="4 / 3" />
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>
