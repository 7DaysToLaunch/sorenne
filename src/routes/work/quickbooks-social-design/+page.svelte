<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkCaseStudySection from '$lib/components/work/WorkCaseStudySection.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import FullBleedImage from '$lib/components/work/FullBleedImage.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import Prose from '$lib/components/work/Prose.svelte';

	let { data } = $props();

	const base = '/work-images/quickbooks-social-design';

	const socialPostGifs = [
		{ src: `${base}/posts-camel.gif`, alt: 'QuickBooks social post animation — camel palette' },
		{ src: `${base}/posts-cream.gif`, alt: 'QuickBooks social post animation — cream palette' },
		{ src: `${base}/posts-gray.gif`, alt: 'QuickBooks social post animation — gray palette' },
		{ src: `${base}/posts-yellow.gif`, alt: 'QuickBooks social post animation — yellow palette' }
	] as const;

	const artifactPair = [
		{ src: `${base}/groomsmen.avif`, alt: 'QuickBooks #SmallBizArtifact — social example' },
		{
			src: `${base}/smallbiz-artifact-victorian.avif`,
			alt: 'QuickBooks #SmallBizArtifact — social example'
		}
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Social Design project">
		<FullBleedImage
			src={`${base}/overview-v2-4.avif`}
			alt="QuickBooks social visual language overview"
		/>
		<ImageGrid images={socialPostGifs} columns={4} aspectRatio="1 / 1" objectFit="contain" />

		<Prose intro measure="wide" align="start">
			<p>
				The system was designed to be used across all social channels and is a directive for
				photography, color, typography, graphic elements, and animation. We also developed
				customized social content as well as a monthly posting cadence for the brand.
			</p>
		</Prose>

		<FullBleedImage
			src={`${base}/overview-v2-9.avif`}
			alt="QuickBooks social design system applications"
		/>
		<FullBleedImage
			src={`${base}/ig-stories-example.avif`}
			alt="QuickBooks Instagram Stories example"
		/>
		<FullBleedImage
			src={`${base}/style-guide-mockup.avif`}
			alt="QuickBooks social style guide mockup"
		/>

		<WorkCaseStudySection sectionId="qb-social-tools" title="#ToolsOfTheTrade">
			{#snippet lead()}
				<Prose align="center">
					<p>
						We created content that celebrates small business owners and their most important tools
						with
					</p>
				</Prose>
			{/snippet}
			<FullBleedImage src={`${base}/tools-layouts.gif`} alt="QuickBooks #ToolsOfTheTrade layouts" />
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="qb-social-artifact" title="#SmallBizArtifact">
			{#snippet lead()}
				<Prose align="center">
					<p>And told stories of their most influential business artifacts with</p>
				</Prose>
			{/snippet}
			<ImageGrid
				images={artifactPair}
				columns={2}
				aspectRatio="2475 / 3000"
				objectFit="contain"
			/>
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="qb-social-for-good" title="#SmallBizForGood">
			{#snippet lead()}
				<Prose align="center">
					<p>We highlighted businesses that are creating real change in their communities with</p>
				</Prose>
			{/snippet}
			<FullBleedImage
				src={`${base}/smallbiz-for-good.avif`}
				alt="QuickBooks #SmallBizForGood campaign example"
			/>
		</WorkCaseStudySection>

		<WorkCaseStudySection sectionId="qb-social-8words" title="#8WordsOfWisdom">
			{#snippet lead()}
				<Prose align="center">
					<p>
						And passed on first hand advice — from one small business owner to another with
					</p>
				</Prose>
			{/snippet}
			<FullBleedImage src={`${base}/eight-words.avif`} alt="QuickBooks #8WordsOfWisdom campaign example" />
		</WorkCaseStudySection>
	</WorkCaseStudyBody>
</WorkCaseStudy>
