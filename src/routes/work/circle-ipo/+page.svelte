<script lang="ts">
	import WorkCaseStudy from '$lib/components/work/WorkCaseStudy.svelte';
	import WorkCaseStudyBody from '$lib/components/work/WorkCaseStudyBody.svelte';
	import WorkProjectHero from '$lib/components/work/WorkProjectHero.svelte';
	import ImageGrid from '$lib/components/work/ImageGrid.svelte';
	import ImageMasonry from '$lib/components/work/ImageMasonry.svelte';

	let { data } = $props();

	const base = '/work-images/circle-ipo';

	const bullGrid = [
		{ src: `${base}/bull-grid-1.avif`, alt: 'Circle — transparent financial system image 1' },
		{ src: `${base}/bull-grid-2.avif`, alt: 'Circle — transparent financial system image 2' },
		{ src: `${base}/bull-grid-3.avif`, alt: 'Circle — transparent financial system image 3' },
		{ src: `${base}/bull-grid-4.avif`, alt: 'Circle — transparent financial system image 4' }
	] as const;

	const oohGrid = [
		{ src: `${base}/ooh-grid-1.gif`, alt: 'Circle — NYC OOH animation 1' },
		{ src: `${base}/ooh-grid-2.gif`, alt: 'Circle — NYC OOH animation 2' },
		{ src: `${base}/ooh-grid-3.gif`, alt: 'Circle — NYC OOH animation 3' },
		{ src: `${base}/ooh-grid-4.gif`, alt: 'Circle — NYC OOH animation 4' }
	] as const;

	const cabGrid = [
		{ src: `${base}/cab-grid-1.avif`, alt: 'Circle — cab takeover image 1' },
		{ src: `${base}/cab-grid-2.avif`, alt: 'Circle — cab takeover image 2' },
		{ src: `${base}/cab-grid-3.avif`, alt: 'Circle — cab takeover image 3' }
	] as const;
</script>

<WorkCaseStudy>
	<WorkProjectHero project={data.project} />
	<WorkCaseStudyBody label="Circle campaign imagery">
		<ImageMasonry images={bullGrid} columns={2} />
		<div class="circle-ooh-mosaic" aria-label="Circle NYC OOH animations">
			<div class="circle-ooh-mosaic__row circle-ooh-mosaic__row--portrait-left">
				<img src={oohGrid[0].src} alt={oohGrid[0].alt} loading="lazy" decoding="async" />
				<img src={oohGrid[1].src} alt={oohGrid[1].alt} loading="lazy" decoding="async" />
			</div>
			<div class="circle-ooh-mosaic__row circle-ooh-mosaic__row--portrait-right">
				<img src={oohGrid[2].src} alt={oohGrid[2].alt} loading="lazy" decoding="async" />
				<img src={oohGrid[3].src} alt={oohGrid[3].alt} loading="lazy" decoding="async" />
			</div>
		</div>
		<ImageGrid images={[...cabGrid]} columns={3} aspectRatio="1104 / 1600" objectFit="cover" />
	</WorkCaseStudyBody>
</WorkCaseStudy>

<style>
	/* The portrait-aspect mosaic is genuinely bespoke — two rows of unequal-width
	   image pairs with the wide portrait swapping sides. Not worth genericising. */
	.circle-ooh-mosaic {
		width: 100%;
		margin-bottom: var(--space-10);
	}

	.circle-ooh-mosaic__row {
		display: grid;
		gap: var(--space-3);
		margin-bottom: var(--space-3);
		align-items: start;
	}

	.circle-ooh-mosaic__row:last-child {
		margin-bottom: 0;
	}

	.circle-ooh-mosaic__row--portrait-left {
		grid-template-columns: 362fr 1260fr;
	}

	.circle-ooh-mosaic__row--portrait-right {
		grid-template-columns: 1260fr 358fr;
	}

	.circle-ooh-mosaic img {
		display: block;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 640px) {
		.circle-ooh-mosaic__row {
			grid-template-columns: 1fr;
		}
	}
</style>
