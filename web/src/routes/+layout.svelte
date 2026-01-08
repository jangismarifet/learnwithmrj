<script lang="ts">
	import './layout.css';
</script>

<main class="min-h-screen bg-white text-slate-900">
	<header class="mx-auto max-w-5xl px-6 py-10">
		<div class="flex items-center justify-between">
			<a href="/" class="text-lg font-semibold hover:underline">Learn With Mr J</a>
			<nav class="flex items-center gap-6 text-sm">
				<a class="hover:underline" href="/">Home</a>
				<a class="hover:underline" href="/contact">Contact</a>
			</nav>
		</div>
	</header>

	<slot />

	<footer class="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-600">
		<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
			<div>© {new Date().getFullYear()} Learn With Mr J</div>
			<div>Technology • Coding • AI Education for Kids</div>
		</div>
	</footer>
</main>
