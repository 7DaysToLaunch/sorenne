<script lang="ts">
	import '../app.css';

	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import { runPageTransition } from '$lib/transitions/pageTransition';

	let { children } = $props();

	let mainTransitionRoot = $state<HTMLDivElement | null>(null);
	let pageCurtain = $state<HTMLDivElement | null>(null);

	onNavigate(async (navigation) => {
		if (!browser || !mainTransitionRoot || !pageCurtain) return;
		return runPageTransition(navigation, mainTransitionRoot, pageCurtain);
	});

	let navCurrent = $derived.by(() => {
		const p = page.url.pathname;
		if (p === '/') return 'home' as const;
		if (p.startsWith('/work')) return 'work' as const;
		if (p.startsWith('/about')) return 'about' as const;
		if (p.startsWith('/contact')) return 'contact' as const;
		return '' as const;
	});

	let workListingShell = $derived(page.url.pathname === '/work');
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="256x256" href="/brand/256x256_V1.png" />
</svelte:head>

<div class="site-shell" class:site-shell--work-listing={workListingShell}>
	<SiteNav current={navCurrent} />
	<main class="site-main">
		<div class="site-main-transition" bind:this={mainTransitionRoot}>
			{#if workListingShell}
				<div class="work-listing">
					{@render children()}
				</div>
			{:else}
				{@render children()}
			{/if}
			<div class="page-transition-curtain" bind:this={pageCurtain} aria-hidden="true"></div>
		</div>
	</main>
	<SiteFooter />
</div>

<style>
	.site-shell {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.site-shell--work-listing {
		background: #000;
	}

	.work-listing {
		background: #000;
		color: #fff;
		margin-top: calc(-1 * var(--site-nav-offset));
		padding-top: calc(var(--site-nav-offset) + var(--space-8));
	}

	.work-listing :global(:focus-visible) {
		outline-color: color-mix(in oklab, #fff 70%, transparent);
	}

	.site-main {
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
	}

	.site-main-transition {
		position: relative;
		flex: 1;
		min-height: 0;
		display: flex;
		flex-direction: column;
	}

	.page-transition-curtain {
		position: absolute;
		inset: 0;
		z-index: 5;
		pointer-events: none;
		visibility: hidden;
		background: var(--color-fg);
		transform: scaleX(0);
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		.page-transition-curtain {
			display: none;
		}
	}
</style>
