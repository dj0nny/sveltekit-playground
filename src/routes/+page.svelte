<script lang="ts">
	import type { PageData } from './$types';

	import PostCard from '../components/PostCard.svelte';

	export let data: PageData;
</script>

<section>
	{#if data.posts.length > 0}
		<div class="grid grid-cols-3 gap-5">
			{#each data.posts as post}
				<PostCard {post} />
			{/each}
		</div>
	{:else}
		No posts
	{/if}
</section>
