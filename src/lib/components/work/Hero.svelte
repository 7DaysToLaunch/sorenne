<script lang="ts">
	let {
		title,
		description = '',
		imageSrc,
		imageAlt = ''
	}: {
		title: string;
		description?: string;
		imageSrc: string;
		imageAlt?: string;
	} = $props();
</script>

<header class="hero">
	<h1 class="hero__title">{title}</h1>
	{#if description}
		<p class="hero__description">{description}</p>
	{/if}
	<div class="hero__figure">
		<img class="hero__image" src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" />
	</div>
</header>

<style>
	.hero {
		margin-bottom: 2rem;
	}

	.hero__title {
		font-size: var(--text-4xl);
		line-height: var(--leading-none);
		text-align: center;
		margin: 0 0 var(--space-3);
	}

	.hero__description {
		text-align: center;
		max-width: var(--width-content);
		margin: 0 auto var(--space-6);
		font-size: var(--text-base);
		line-height: var(--leading-normal);
		color: var(--color-fg-muted);
	}

	.hero__figure {
		width: 100%;
		overflow: hidden;
	}

	.hero__image {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
