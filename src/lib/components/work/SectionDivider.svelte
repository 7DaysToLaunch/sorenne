<script lang="ts">
	let {
		spacing = 'default'
	}: {
		/**
		 * `default` — used between content blocks (matches `WorkCaseStudySection` rhythm).
		 * `bottom-only` — for sections whose own block padding handles the top spacing.
		 * `top-only` — for closing dividers under content.
		 */
		spacing?: 'default' | 'bottom-only' | 'top-only';
	} = $props();
</script>

<hr class={['section-divider', `section-divider--${spacing}`]} aria-hidden="true" />

<style>
	.section-divider {
		border: none;
		border-top: 1px solid var(--color-border);
	}

	.section-divider--default {
		margin: var(--space-12) 0 var(--space-10);
	}

	.section-divider--bottom-only {
		margin: 0 0 var(--space-10);
	}

	.section-divider--top-only {
		margin: var(--space-12) 0 0;
	}
</style>
