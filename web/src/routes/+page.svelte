<script>
	export let form;
</script>

<svelte:head>
	<title>Learn With Mr J</title>
	<meta
		name="description"
		content="Modern tech & coding classes for kids — taught in a safe, supportive environment parents trust."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-10">
	<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
		Modern Tech & Coding Classes for Kids
	</h1>
	<p class="mt-4 max-w-2xl text-lg text-slate-700">
		Learn With Mr J helps students build real skills in coding, AI, and digital creativity—through
		engaging, age-appropriate classes taught in a safe, supportive environment parents trust.
	</p>

	<div class="mt-8 flex flex-wrap gap-3">
		<a
			href="/contact"
			class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
		>
			Contact Mr J
		</a>
		<a
			href="#programs"
			class="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
		>
			View Programs
		</a>
	</div>
</section>

<section id="programs" class="mx-auto max-w-5xl px-6 py-10">
	<h2 class="text-2xl font-bold">Programs</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2">
		<div class="rounded-2xl border border-slate-200 p-6">
			<h3 class="font-semibold">Coding Foundations (K–2)</h3>
			<p class="mt-2 text-slate-700">
				Build logical thinking and confidence through games, puzzles, and visual coding.
			</p>
		</div>

		<div class="rounded-2xl border border-slate-200 p-6">
			<h3 class="font-semibold">Coding & Game Design (Grades 3–5)</h3>
			<p class="mt-2 text-slate-700">
				Create games and interactive projects while learning real programming concepts.
			</p>
		</div>

		<div class="rounded-2xl border border-slate-200 p-6">
			<h3 class="font-semibold">AI & Creative Technology (Grades 6–8)</h3>
			<p class="mt-2 text-slate-700">
				Explore AI tools, digital creativity, and problem-solving skills used in the real world.
			</p>
		</div>

		<div class="rounded-2xl border border-slate-200 p-6">
			<h3 class="font-semibold">School & Custom Programs</h3>
			<p class="mt-2 text-slate-700">
				In-school and after-school programs tailored to your schedule, grade level, and learning
				goals.
			</p>
		</div>
	</div>
</section>
