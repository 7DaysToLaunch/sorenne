<script lang="ts">
	import { page } from '$app/state';
	import {
		absoluteUrl,
		DEFAULT_SOCIAL_IMAGE,
		SITE_NAME,
		type JsonLd
	} from '$lib/seo';

	let {
		title,
		description,
		canonicalPath,
		image = DEFAULT_SOCIAL_IMAGE,
		imageAlt = title,
		type = 'website',
		jsonLd,
		noindex = false
	}: {
		title: string;
		description: string;
		canonicalPath?: string;
		image?: string;
		imageAlt?: string;
		type?: 'website' | 'article' | 'profile';
		jsonLd?: JsonLd;
		noindex?: boolean;
	} = $props();

	let canonical = $derived(absoluteUrl(canonicalPath ?? page.url.pathname));
	let socialImage = $derived(absoluteUrl(image));
	let jsonLdHtml = $derived(jsonLd ? JSON.stringify(jsonLd).replaceAll('<', '\\u003c') : '');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={socialImage} />
	<meta property="og:image:alt" content={imageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={socialImage} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	{#if jsonLdHtml}
		<script type="application/ld+json">{@html jsonLdHtml}</script>
	{/if}
</svelte:head>
