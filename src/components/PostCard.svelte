<script lang="ts">
	interface IProp {
		id: number;
		title: string;
		body: string;
		createdAt: Date;
	}

	export let post: IProp;
</script>

<div class="card w-full bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{post.title}</h2>
		<p class="text-left truncate">
			{post.body}
		</p>
		<div class="card-actions justify-end mt-5">
			<a href={`/post/${post.id}`} class="btn btn-primary">Read more</a>
		</div>
	</div>
</div>
