<script>
	import '../app.css';
</script>

<header class="navbar bg-primary text-primary-content flex justify-between items-center">
	<a href="/" class="btn btn-ghost normal-case text-2xl">Sveltekit Playground</a>
	<a href="/post/create" class="btn btn-secondary">Create new post</a>
</header>
<main class="container mx-auto my-11 text-center">
	<slot />
</main>
