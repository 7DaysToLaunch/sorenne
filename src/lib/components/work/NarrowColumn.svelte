<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		width = 'min(56%, 40rem)',
		flush = false,
		children
	}: {
		/** Any valid `max-width` value (e.g. `'85%'`, `'min(56%, 40rem)'`, `'40rem'`). */
		width?: string;
		/** Strip the trailing margin from the inner content so the column sits flush
		    against the following block. */
		flush?: boolean;
		children: Snippet;
	} = $props();
</script>

<div
	class={['narrow-column', flush && 'narrow-column--flush']}
	style="--narrow-column-max: {width}"
>
	{@render children()}
</div>

<style>
	.narrow-column {
		max-width: var(--narrow-column-max);
		margin-inline: auto;
		width: 100%;
	}

	@media (max-width: 640px) {
		.narrow-column {
			max-width: 100%;
		}
	}

	.narrow-column--flush :global(> *:last-child) {
		margin-bottom: 0;
	}
</style>
