<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';

	let { data } = $props();

	const posters = [
		{
			src: '/work-images/nike-hoops/king-james.avif',
			alt: 'Nike Hoops out-of-home poster — King James'
		},
		{
			src: '/work-images/nike-hoops/revolution.avif',
			alt: 'Nike Hoops out-of-home poster — Revolution'
		},
		{
			src: '/work-images/nike-hoops/vc.avif',
			alt: 'Nike Hoops out-of-home poster — campaign creative'
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Poster campaign">
		{#each posters as p (p.src)}
			<FullBleedImage src={p.src} alt={p.alt} />
		{/each}
	</WorkCaseStudyBody>
</WorkCaseStudy>
