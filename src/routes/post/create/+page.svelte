<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section>
	<form method="POST" class="flex items-center flex-col justify-center">
		{#if form?.message}
			{form?.message}
		{/if}
		<fieldset class="form-control w-full max-w-md">
			<label class="label" for="post_title">
				<span class="label-text">Post title</span>
			</label>
			<input
				type="text"
				id="post_title"
				name="post_title"
				placeholder="Enter your post title"
				class="{form?.fieldErrors?.name
					? 'file-input-error'
					: ''} input input-bordered w-full max-w-md"
				value={form?.fields?.title ? form?.fields?.title : ''}
			/>
		</fieldset>
		<fieldset class="form-control mt-5 w-full max-w-md">
			<label class="label" for="postBody">
				<span class="label-text">Post body</span>
			</label>
			<textarea
				id="post_body"
				name="post_body"
				placeholder="Hello there..."
				class="{form?.fieldErrors?.body ? 'file-input-error' : ''} textarea textarea-bordered h-24"
				value={form?.fields?.body ? form?.fields?.body : ''}
			/>
		</fieldset>
		<fieldset class="form-control mt-5 w-full max-w-md">
			<button class="btn btn-primary">Post now</button>
		</fieldset>
	</form>
</section>
