<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer font-ui" aria-label="Site footer">
	<p class="footer__credit">&copy; {year} Sorenne</p>
</footer>

<style>
	.footer {
		padding-block: var(--space-8);
		padding-inline: var(--space-gutter);
		background: #000;
		border-top: 1px solid color-mix(in oklab, #fff 12%, transparent);
		color: #fff;
		text-align: center;
	}

	.footer__credit {
		margin: 0;
	}

	.footer :focus-visible {
		outline-color: color-mix(in oklab, #fff 65%, transparent);
	}
</style>
