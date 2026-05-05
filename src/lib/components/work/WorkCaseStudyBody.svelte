<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label,
		children
	}: {
		/** Optional aria-label describing this body region. When set, the wrapper
		    is exposed to assistive tech as `role="group"`; when omitted it remains
		    a plain block container. */
		label?: string;
		children: Snippet;
	} = $props();
</script>

<div
	class="work-detail__below"
	role={label ? 'group' : undefined}
	aria-label={label}
>
	{@render children()}
</div>

<!--
  No <style> block: layout (max-width / centering) lives on the global
  `.work-detail__below` rule in `WorkCaseStudy.svelte` so it remains
  reachable from the case-study primitives' `:global(...:last-child)`
  resets without scoping headaches.
-->
