<script lang="ts">
	let {
		src,
		title,
		class: className = '',
		/** Default 16∶9; use e.g. `300 / 577` for vertical IG-style embeds. */
		aspectRatio = '16 / 9'
	}: {
		src: string;
		title: string;
		class?: string;
		aspectRatio?: string;
	} = $props();
</script>

<div class="case-study-vimeo {className}">
	<div class="case-study-vimeo__frame" style:aspect-ratio={aspectRatio}>
		<iframe
			class="case-study-vimeo__iframe"
			{src}
			{title}
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			loading="lazy"
		></iframe>
	</div>
</div>

<style>
	.case-study-vimeo {
		width: 100%;
		margin: 0 0 var(--space-10);
	}

	.case-study-vimeo__frame {
		position: relative;
		width: 100%;
		overflow: hidden;
		background: color-mix(in oklab, var(--color-fg) 6%, transparent);
	}

	.case-study-vimeo__iframe {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
