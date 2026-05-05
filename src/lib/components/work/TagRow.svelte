<script lang="ts">
	import { tagLabel, type ProjectTag } from '$lib/data/work';

	let { tags }: { tags: readonly ProjectTag[] } = $props();
</script>

<ul class="tags" aria-label="Project categories">
	{#each tags as tag (tag)}
		<li class="tags__pill">{tagLabel(tag)}</li>
	{/each}
</ul>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
		list-style: none;
		padding: 0;
	}

	.tags__pill {
		border: 1px solid currentColor;
		border-radius: 999px;
		padding: 0.35rem 0.85rem;
		font-size: 0.7rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		opacity: 0.9;
	}
</style>
