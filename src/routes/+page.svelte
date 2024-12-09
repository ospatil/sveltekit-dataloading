<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()
</script>

<h1 class="pb-1 text-center text-2xl">Main Route</h1>
<p class="bg-blue-100 p-1 text-center font-medium text-blue-900">
	PageLoad function says: {data.apiMessage}
</p>

<p class="mt-4">
	Make sure the log server is running and observe the console of the log server. You'll see output
	similar to this.
</p>
<p>The log is not sequential since the data fetching happens in parallel.</p>
<p>
	Note that in the first visit, the API endpoint call by PageLoad function is executed on server and
	the response is inlined. It's not executed again when it runs on the client as shown by the
	sequence of the statements <span class="font-bold italic text-zinc-600"
		>PageLoad function called on: Server > Server API endpoint called > PageLoad function called on:
		Client</span
	>.
</p>

<pre
	class="my-2 bg-zinc-200 p-2 font-mono">[2024-12-09, 1:34:13 p.m. EST]: LayoutServerLoad load function called
[2024-12-09, 1:34:13 p.m. EST]: PageServerLoad function called
[2024-12-09, 1:34:13 p.m. EST]: PageLoad function called on: Server
[2024-12-09, 1:34:13 p.m. EST]: LayoutLoad function called on: Server
[2024-12-09, 1:34:13 p.m. EST]: Server API endpoint called
[2024-12-09, 1:34:13 p.m. EST]: LayoutLoad function called on: Client
[2024-12-09, 1:34:13 p.m. EST]: PageLoad function called on: Client</pre>

<p>
	If you navigate to route 1 and come back, you'll see the output similar to this. The server page
	load function is executed again and the page load function executes on client.
</p>

<pre
	class="my-2 bg-zinc-200 p-2 font-mono">[2024-12-09, 1:35:05 p.m. EST]: PageServerLoad function called
[2024-12-09, 1:35:05 p.m. EST]: PageLoad function called on: Client
[2024-12-09, 1:35:05 p.m. EST]: Server API endpoint called
</pre>

<p>The Page data looks like this.</p>
<pre class="my-2 bg-zinc-200 p-2 font-mono">{JSON.stringify(data, null, 2)}</pre>

<p>
	The screenshot below shows <a
		target="_blank"
		href="https://svelte.dev/docs/kit/load#Making-fetch-requests"
		class="text-blue-700 underline"
		>how response is inlined during SSR in the first visit (point 4)</a
	>.
</p>

<div class="mt-2">
	<a target="_blank" href="sveltekit-ssr-inlined-response.png">
		<img
			class="object-contain"
			alt="SSR Inlined Response"
			src="sveltekit-ssr-inlined-response.png"
		/>
	</a>
</div>

<div class="mt-4 text-center">
	<a href="/route1" class="cursor-pointer p-2 text-blue-700 underline">Route 1</a>
</div>
