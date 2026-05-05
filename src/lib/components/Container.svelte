<script lang="ts">
	import type { Snippet } from 'svelte';

	type Size = 'full' | 'large' | 'medium' | 'small' | 'prose';
	type Pad = 'none' | 'sm' | 'md' | 'lg';

	let {
		size = 'large',
		pad = 'md',
		class: className = '',
		children
	}: {
		size?: Size;
		pad?: Pad;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<div class={['container', `container--${size}`, `container--pad-${pad}`, className].filter(Boolean).join(' ')}>
	{@render children()}
</div>

<style>
	.container {
		width: 100%;
		margin-inline: auto;
		box-sizing: border-box;
	}

	.container--full {
		max-width: none;
	}

	.container--large {
		max-width: var(--width-max);
	}

	.container--medium {
		max-width: var(--width-wide);
	}

	.container--small {
		max-width: var(--width-content);
	}

	.container--prose {
		max-width: var(--width-prose);
	}

	.container--pad-none {
		padding-inline: var(--container-pad-none);
	}

	.container--pad-sm {
		padding-inline: var(--container-pad-sm);
	}

	.container--pad-md {
		padding-inline: var(--container-pad-md);
	}

	.container--pad-lg {
		padding-inline: var(--container-pad-lg);
	}
</style>
