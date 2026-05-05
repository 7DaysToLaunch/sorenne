<script lang="ts">
	let {
		src,
		alt = '',
		caption
	}: {
		src: string;
		alt?: string;
		caption?: string;
	} = $props();
</script>

<figure class="bleed">
	<img class="bleed__img" {src} {alt} loading="lazy" decoding="async" />
	{#if caption}
		<figcaption class="bleed__cap">{caption}</figcaption>
	{/if}
</figure>

<style>
	.bleed {
		margin: 0 0 var(--space-10);
		padding: 0;
		width: 100%;
	}

	.bleed__img {
		display: block;
		width: 100%;
		height: auto;
	}

	.bleed__cap {
		margin-top: var(--space-2);
		font-size: var(--text-sm);
		opacity: 0.75;
	}
</style>
