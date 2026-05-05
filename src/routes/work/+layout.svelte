<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { browser } from '$app/environment';
	import shellCss from '$lib/styles/work-project-shell.css?raw';
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import { getProjectHref } from '$lib/data/work';
	import { projectSchema, projectSeoDescription, projectSeoTitle } from '$lib/seo';

	let {
		data,
		children
	}: {
		data: LayoutData;
		children: Snippet;
	} = $props();

	function safeThemeToken(value: string): string {
		const v = value.trim().slice(0, 140);
		if (/[;{}<>]/.test(v)) return '';
		return v;
	}

	let themeStyleHtml = $derived.by(() => {
		const t = data.workShellTheme;
		if (!t) return '';
		const surface = safeThemeToken(t.surface);
		const fg = safeThemeToken(t.foreground);
		if (!surface || !fg) return '';
		return `<style id="work-project-shell-theme">\n:root {\n  --site-theme-surface: ${surface};\n  --site-theme-fg: ${fg};\n}\n${shellCss}\n</style>`;
	});

	let projectSeo = $derived.by(() => {
		const project = data.workProject;
		if (!project) return undefined;
		const title = projectSeoTitle(project);
		const description = projectSeoDescription(project);
		return {
			title,
			description,
			path: getProjectHref(project),
			image: project.images.landscape,
			imageAlt: `${project.projectTitle ?? project.title} project still`,
			jsonLd: projectSchema(project)
		};
	});

	$effect(() => {
		if (!browser) return;
		const surface = data.workShellTheme?.surface;
		const safe = surface ? safeThemeToken(surface) : '';
		document.documentElement.style.backgroundColor = safe || '';
		return () => {
			document.documentElement.style.backgroundColor = '';
		};
	});
</script>

{#if projectSeo}
	<Seo
		title={projectSeo.title}
		description={projectSeo.description}
		canonicalPath={projectSeo.path}
		image={projectSeo.image}
		imageAlt={projectSeo.imageAlt}
		type="article"
		jsonLd={projectSeo.jsonLd}
	/>
{/if}

<svelte:head>
	{#if data.workShellTheme && themeStyleHtml}
		{@html themeStyleHtml}
	{/if}
</svelte:head>

<Container pad="none">
	{@render children()}
</Container>
