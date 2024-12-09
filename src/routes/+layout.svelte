<script lang="ts">
	import type { Snippet } from 'svelte'
	import '../app.css'
	import type { LayoutData } from './$types'
	let { data, children }: { data: LayoutData; children: Snippet } = $props()
</script>

<svelte:head>
	<title>Svelte Data Loading</title>
</svelte:head>

<div class="grid h-screen w-full grid-rows-[auto_1fr] bg-zinc-800 text-white">
	<header class="flex justify-center p-4 tracking-wide">
		<h1 class="text-3xl">SvelteKit Data Loading in Action</h1>
	</header>
	<main class="flex justify-center bg-zinc-100 p-4 text-black">
		<section class="w-1/2 text-justify">
			{@render children()}
		</section>
	</main>
</div>
