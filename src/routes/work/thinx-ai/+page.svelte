<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';

	let { data } = $props();
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} promptOverlay={{ badge: 'prompt', text: '/ a woman' }} />
</WorkCaseStudy>
