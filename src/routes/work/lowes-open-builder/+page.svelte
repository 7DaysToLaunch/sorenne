<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import MediaGrid from '$lib/components/work/MediaGrid.svelte';

	let { data } = $props();

	const websiteStill = '/work-images/lowes-open-builder/browser.avif';

	const pressItems = [
		{
			href: 'https://arpost.co/2022/07/06/lowes-3d-product-library-metaverse-developers/',
			src: '/work-images/lowes-open-builder/press-arpost.avif',
			label: 'AR Post — Lowe’s 3D product library for Metaverse developers'
		},
		{
			href: 'https://www.cnbc.com/2022/06/21/lowes-expands-into-the-metaverse-with-a-tool-to-help-visualize-projects.html',
			src: '/work-images/lowes-open-builder/press-cnbc.avif',
			label: 'CNBC — Lowe’s expands into the Metaverse'
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody>
		<WorkCaseStudySection sectionId="ob-website" title="Website">
			<a
				class="ob-image-link"
				href="https://lowesopenbuilder.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FullBleedImage
					src={websiteStill}
					alt="Lowe’s Open Builder site shown in a browser window"
				/>
			</a>
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="ob-press" title="Press">
			<MediaGrid columns={2}>
				{#each pressItems as item (item.href)}
					<a
						class="ob-press-card"
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							class="ob-press-img"
							src={item.src}
							alt={item.label}
							loading="lazy"
							decoding="async"
						/>
					</a>
				{/each}
			</MediaGrid>
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>

<style>
	/* The image link is a transparent block wrapper — no chrome of its own. */
	.ob-image-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.ob-image-link:hover :global(.bleed__img) {
		opacity: 0.96;
	}

	.ob-image-link :global(.bleed) {
		margin-bottom: 0;
	}

	.ob-press-card {
		display: block;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		line-height: 0;
	}

	.ob-press-img {
		display: block;
		width: 100%;
		height: auto;
		transition: opacity var(--duration-normal) var(--ease-out);
	}

	.ob-press-card:hover .ob-press-img {
		opacity: 0.92;
	}
</style>
