<script lang="ts">
	export let form: { success?: boolean; error?: string } | undefined;
</script>

<svelte:head>
	<title>Contact — Learn With Mr J</title>
	<meta
		name="description"
		content="Contact Learn With Mr J to ask questions or request a program."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-10">
	<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Contact Mr J</h1>
	<p class="mt-3 max-w-2xl text-slate-700">
		Send a message and I’ll get back to you. If you’re a school or organization, include the grade
		level, schedule, and expected group size.
	</p>

	{#if form?.success}
		<div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
			<h2 class="text-lg font-semibold">Thanks — I got your message.</h2>
			<p class="mt-2 text-slate-700">I’ll reply as soon as I can.</p>
			<div class="mt-6">
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
				>
					Send another message
				</a>
			</div>
		</div>
	{:else}
		<div class="mt-8 grid gap-8 sm:grid-cols-2">
			<form class="rounded-2xl border border-slate-200 p-6" method="POST" action="?/contact">
				<div class="grid gap-4">
					<!-- Honeypot field -->
					<div class="hidden">
						<label for="company">Company</label>
						<input id="company" name="company" tabindex="-1" autocomplete="off" />
					</div>

					<div>
						<label class="text-sm font-medium" for="name">Name</label>
						<input
							id="name"
							name="name"
							required
							class="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-400 focus:outline-none"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label class="text-sm font-medium" for="email">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							class="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-400 focus:outline-none"
							placeholder="you@example.com"
						/>
					</div>

					<div>
						<label class="text-sm font-medium" for="message">Message</label>
						<textarea
							id="message"
							name="message"
							required
							rows="6"
							class="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:ring-2 focus:ring-slate-400 focus:outline-none"
							placeholder="How can I help?"
						></textarea>
					</div>

					{#if form?.error}
						<p class="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
							{form.error}
						</p>
					{/if}

					<button
						type="submit"
						class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
					>
						Send Message
					</button>

					<p class="text-xs text-slate-500">This message is stored securely so I can follow up.</p>
				</div>
			</form>

			<div class="rounded-2xl bg-slate-50 p-6">
				<h2 class="text-lg font-semibold">What to include</h2>
				<ul class="mt-3 list-disc pl-5 text-slate-700">
					<li>Student grade level (or grades)</li>
					<li>Preferred days/times</li>
					<li>In-school or after-school</li>
					<li>Group size</li>
				</ul>
			</div>
		</div>
	{/if}
</section>
