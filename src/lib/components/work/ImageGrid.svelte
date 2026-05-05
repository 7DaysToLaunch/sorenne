<script lang="ts">
	type Cell = { src: string; alt?: string };

	let {
		images,
		columns = 2,
		/** When set, cells use this aspect ratio and images fill with `object-fit`. */
		aspectRatio,
		objectFit = 'cover',
		/** Optional full-bleed strip behind the grid (e.g. portfolio rail). */
		railBackground,
		railPaddingBlock = 'var(--space-10)'
	}: {
		images: readonly Cell[];
		columns?: 2 | 3 | 4;
		aspectRatio?: string;
		objectFit?: 'cover' | 'contain';
		railBackground?: string;
		railPaddingBlock?: string;
	} = $props();

	let arStyle = $derived(aspectRatio?.trim() ? aspectRatio.trim() : undefined);
</script>

{#if railBackground}
	<section
		class="image-grid-rail"
		style="--image-grid-rail-bg: {railBackground}; --image-grid-rail-pad: {railPaddingBlock}"
	>
		<div class="image-grid-rail__inner">
			<div
				class="grid"
				class:grid--ratio={Boolean(arStyle)}
				class:grid--four={columns === 4}
				style="--cols: {columns}{arStyle ? `; --cell-ar: ${arStyle}` : ''}"
			>
				{#each images as img, i (img.src + i)}
					<div class="grid__cell">
						<img
							class="grid__img"
							class:grid__img--fill={Boolean(arStyle)}
							src={img.src}
							alt={img.alt ?? ''}
							loading="lazy"
							decoding="async"
							style={arStyle ? `object-fit: ${objectFit}` : undefined}
						/>
					</div>
				{/each}
			</div>
		</div>
	</section>
{:else}
	<div
		class="grid"
		class:grid--ratio={Boolean(arStyle)}
		class:grid--four={columns === 4}
		style="--cols: {columns}{arStyle ? `; --cell-ar: ${arStyle}` : ''}"
	>
		{#each images as img, i (img.src + i)}
			<div class="grid__cell">
				<img
					class="grid__img"
					class:grid__img--fill={Boolean(arStyle)}
					src={img.src}
					alt={img.alt ?? ''}
					loading="lazy"
					decoding="async"
					style={arStyle ? `object-fit: ${objectFit}` : undefined}
				/>
			</div>
		{/each}
	</div>
{/if}

<style>
	.image-grid-rail {
		background: var(--image-grid-rail-bg);
		padding-block: var(--image-grid-rail-pad);
		margin-bottom: var(--space-10);
		width: 100vw;
		margin-inline: calc(50% - 50vw);
		box-sizing: border-box;
	}

	.image-grid-rail__inner {
		max-width: var(--width-max);
		margin-inline: auto;
		padding-inline: var(--space-gutter);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(var(--cols), 1fr);
		gap: var(--space-3);
		margin-bottom: var(--space-10);
		/* Cells size to their content (image's natural height at 100% width) by
		   default. Forcing `stretch` would cause shorter images in a row to be
		   visually pushed out of aspect — this keeps mixed-orientation grids
		   from cropping or distorting their members. */
		align-items: start;
	}

	.image-grid-rail .grid {
		margin-bottom: 0;
	}

	.grid__cell {
		overflow: hidden;
	}

	.grid--ratio .grid__cell {
		aspect-ratio: var(--cell-ar);
	}

	.grid__img {
		display: block;
		width: 100%;
		/* Default: render at natural aspect ratio (no fixed cell height). When a
		   uniform `aspectRatio` is set, `.grid__img--fill` overrides this to fill
		   the constrained cell with the chosen `object-fit`. */
		height: auto;
	}

	.grid__img--fill {
		height: 100%;
	}

	@media (max-width: 640px) {
		.grid--four {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
