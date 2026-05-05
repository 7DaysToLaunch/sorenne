<script lang="ts">
	type Cell = { src: string; alt?: string };

	let {
		images,
		columns = 2,
		gap = 'var(--space-3)'
	}: {
		images: readonly Cell[];
		/** Applied from the `640px` breakpoint upward; single column on narrow viewports. */
		columns?: 2 | 3;
		gap?: string;
	} = $props();
</script>

<div
	class="image-masonry"
	style="--image-masonry-gap: {gap}; --image-masonry-cols: {columns}"
	role="group"
	aria-label="Image gallery"
>
	{#each images as img, i (img.src + i)}
		<div class="image-masonry__cell">
			<img
				class="image-masonry__img"
				src={img.src}
				alt={img.alt ?? ''}
				loading="lazy"
				decoding="async"
			/>
		</div>
	{/each}
</div>

<style>
	/* CSS multi-column: variable-height tiles pack in column order (masonry look, no JS). */
	.image-masonry {
		column-gap: var(--image-masonry-gap);
		margin-bottom: var(--space-10);
	}

	@media (min-width: 640px) {
		.image-masonry {
			column-count: var(--image-masonry-cols);
		}
	}

	@media (max-width: 639px) {
		.image-masonry {
			column-count: 1;
		}
	}

	.image-masonry__cell {
		break-inside: avoid;
		page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		margin-bottom: var(--image-masonry-gap);
	}

	.image-masonry__img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
