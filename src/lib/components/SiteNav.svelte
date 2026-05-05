<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import SorenneWordmark from '$lib/components/logos/brand/sorenne.svelte';

	let { current = '' }: { current?: 'home' | 'work' | 'about' | 'contact' | '' } = $props();

	let menuOpen = $state(false);
	const menuId = 'site-nav-primary';

	let mobileNav = $state(false);

	$effect(() => {
		if (!browser) return;
		const mq = window.matchMedia('(max-width: 767px)');
		mobileNav = mq.matches;
		const onChange = () => {
			mobileNav = mq.matches;
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});

	afterNavigate(() => {
		menuOpen = false;
	});

	$effect(() => {
		if (!browser) return;
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});

	function closeMenu() {
		menuOpen = false;
	}

	function onMenuPanelClick(e: MouseEvent & { currentTarget: HTMLElement }) {
		if (e.target === e.currentTarget) closeMenu();
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (!menuOpen || e.key !== 'Escape') return;
		e.preventDefault();
		closeMenu();
	}}
/>

<header class="nav" class:nav--menu-open={menuOpen}>
	<div class="nav__surface">
		<a class="nav__brand" href="/" aria-label="Sorenne home">
			<span class="nav__wordmark">
				<SorenneWordmark />
			</span>
		</a>

		<button
			type="button"
			class="nav__toggle"
			aria-expanded={menuOpen}
			aria-controls={menuId}
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="nav__toggle-bar" aria-hidden="true"></span>
			<span class="nav__toggle-bar" aria-hidden="true"></span>
			<span class="nav__toggle-bar" aria-hidden="true"></span>
		</button>
	</div>

	<nav
		id={menuId}
		class="nav__links"
		aria-label="Primary"
		aria-hidden={mobileNav ? !menuOpen : undefined}
		data-open={menuOpen || undefined}
		onclick={onMenuPanelClick}
	>
		<div class="nav__links-inner">
	
			<a
				class="nav__link"
				href="/work"
				aria-current={current === 'work' ? 'page' : undefined}
				tabindex={mobileNav && !menuOpen ? -1 : undefined}
			>Work</a>
			<a
				class="nav__link"
				href="/about"
				aria-current={current === 'about' ? 'page' : undefined}
				tabindex={mobileNav && !menuOpen ? -1 : undefined}
			>About</a>
			<a
				class="nav__link"
				href="mailto:sorenneagade@gmail.com"
				tabindex={mobileNav && !menuOpen ? -1 : undefined}
			>Contact</a>
		</div>
	</nav>
</header>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-sticky);
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		padding-block: var(--space-5);
		padding-inline: max(var(--space-gutter), env(safe-area-inset-left))
			max(var(--space-gutter), env(safe-area-inset-right));
		pointer-events: none;
		background: transparent;
		/* Sticky participates in page paint order so difference blends against real content.
		   Fixed headers often composite only against the root layer (looks like flat white). */
		-webkit-mix-blend-mode: difference;
		mix-blend-mode: difference;
		color: #fff;
	}

	@media (max-width: 767px) {
		.nav.nav--menu-open {
			-webkit-mix-blend-mode: normal;
			mix-blend-mode: normal;
			color: #fff;
		}
	}

	.nav :is(.nav__surface, .nav__links, .nav__toggle, .nav__brand, .nav__link) {
		pointer-events: auto;
	}

	.nav__surface {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-width: 0;
		color: inherit;
		flex: 1 1 auto;
	}

	.nav__brand {
		display: block;
		line-height: 0;
		text-decoration: none;
		text-underline-offset: 0;
		color: #fff;
	}

	.nav__brand:hover {
		text-decoration: none;
	}

	.nav__wordmark :global(svg) {
		display: block;
		height: 3.5rem;
		margin-bottom: -2rem;
		width: auto;
	}

	.nav__toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 0.35rem;
		width: 2.5rem;
		height: 2.5rem;
		margin: 0;
		padding: 0;
		border: none;
		background: transparent;
		cursor: pointer;
		color: #fff;
	}

	.nav__toggle:focus-visible {
		outline: 2px solid color-mix(in oklab, #fff 65%, transparent);
		outline-offset: 4px;
	}

	.nav__toggle-bar {
		display: block;
		height: 2px;
		width: 100%;
		border-radius: 1px;
		background: currentColor;
		transition:
			transform var(--duration-normal) var(--ease-out),
			opacity var(--duration-fast) var(--ease-out);
		transform-origin: center;
	}

	.nav__toggle[aria-expanded='true'] .nav__toggle-bar:nth-child(1) {
		transform: translateY(0.45rem) rotate(45deg);
	}

	.nav__toggle[aria-expanded='true'] .nav__toggle-bar:nth-child(2) {
		opacity: 0;
	}

	.nav__toggle[aria-expanded='true'] .nav__toggle-bar:nth-child(3) {
		transform: translateY(-0.45rem) rotate(-45deg);
	}

	.nav__links {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		gap: clamp(var(--space-5), 2.75vw, var(--space-8));
		color: inherit;
	}

	.nav__links-inner {
		display: contents;
	}

	@media (min-width: 768px) {
		.nav__surface {
			flex: 0 0 auto;
			min-width: 0;
		}
	}

	.nav__link {
		position: relative;
		display: inline-block;
		font-size: 0.8rem;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		text-decoration: none;
		color: #fff;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -0.22em;
		height: 1px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left center;
		transition: transform var(--duration-normal) var(--ease-out);
	}

	.nav__link[aria-current='page'] {
		color: #fff;
	}

	.nav__link:hover,
	.nav__link:focus-visible {
		color: #fff;
	}

	.nav__link:hover::after,
	.nav__link:focus-visible::after {
		transform: scaleX(1);
	}

	.nav__link:focus-visible {
		outline-color: color-mix(in oklab, #fff 70%, transparent);
	}

	@media (prefers-reduced-motion: reduce) {
		.nav__link::after {
			transition: none;
		}

		.nav__toggle-bar {
			transition: none;
		}

		.nav__links {
			transition: none;
		}
	}

	@media (max-width: 767px) {
		.nav__surface {
			position: relative;
			z-index: 2;
			-webkit-mix-blend-mode: difference;
			mix-blend-mode: difference;
			color: #fff;
			flex: 1 1 auto;
		}

		.nav__wordmark :global(svg) {
			height: 2.5rem;
			margin-top: -1rem;
		}

		.nav__toggle {
			display: flex;
		}

		.nav__links {
			position: fixed;
			inset: 0;
			z-index: 1;
			box-sizing: border-box;
			flex-direction: column;
			align-items: stretch;
			justify-content: center;
			min-width: 0;
			width: 100%;
			height: 100vh;
			height: 100dvh;
			margin: 0;
			padding: max(var(--space-gutter), env(safe-area-inset-top))
				max(var(--space-gutter), env(safe-area-inset-right))
				max(var(--space-gutter), env(safe-area-inset-bottom))
				max(var(--space-gutter), env(safe-area-inset-left));
			gap: 0;
			border: none;
			-webkit-mix-blend-mode: normal;
			mix-blend-mode: normal;
			color: #fff;
			background: #53585c;
			box-shadow: none;
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transition:
				opacity var(--duration-slow) var(--ease-out),
				visibility 0s linear var(--duration-slow);
		}

		.nav__links[data-open] {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
			transition:
				opacity var(--duration-slow) var(--ease-out),
				visibility 0s linear 0s;
		}

		.nav__links-inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			font-family: var(--font-heading);
			font-weight: var(--font-weight-light);
			pointer-events: auto;
		}

		.nav__link {
			font-size: clamp(3rem, 10vw, 5rem);
			line-height: 1.05;
			padding-block: 0.02em;
			color: #fff;
			opacity: 1;
			letter-spacing: -0.25px;
		}

		.nav__link::after {
			display: none;
		}

		.nav__link:hover,
		.nav__link:focus-visible {
			opacity: 0.92;
			color: #fff;
		}

		.nav__link:focus-visible {
			outline-color: color-mix(in oklab, #fff 55%, transparent);
		}
	}
</style>
