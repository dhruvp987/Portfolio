<script lang="ts">
	import { fade } from 'svelte/transition';

	let quoteVisible = $state(true);
	let mainContentVisible = $state(false);

	setTimeout(() => {
		quoteVisible = false;
	}, 4000);
	setTimeout(() => {
		mainContentVisible = true;
	}, 4500);
</script>

{#if quoteVisible}
	<div class="flex h-screen w-screen flex-col items-center justify-center p-5" transition:fade>
		<h1 class="instrument-serif-regular block text-7xl text-white">
			The only way to do great work is to love what you do.
		</h1>
		<h1 class="instrument-serif-regular block text-7xl text-white">~ Steve Jobs</h1>
	</div>
{/if}

{#if mainContentVisible}
	<div class="flex h-screen w-screen flex-col items-center justify-center p-11" transition:fade>
		<h1 class="instrument-serif-regular grow text-7xl text-white">Dhruv Patel</h1>
		<h2 class="instrument-serif-regular flex-none p-6 text-5xl text-white">
			Building the Fun Stuff for Everyone 🚀
		</h2>
		<div class="flex-none">
			<a
				href="/projects"
				class="space-mono-regular mx-1 inline-block rounded-3xl bg-white px-4 py-2 text-xl text-black transition duration-200 ease-in-out hover:bg-cyan-100"
				>Projects</a
			>
			<a
				href="https://github.com/dhruvp987"
				target="_blank"
				rel="noopener noreferrer"
				class="space-mono-regular mx-1 inline-block rounded-3xl bg-white px-4 py-2 text-xl text-black transition duration-200 ease-in-out hover:bg-cyan-100"
				>GitHub</a
			>
			<a
				href="https://linkedin.com/in/dhruvpatel789"
				target="_blank"
				rel="noopener noreferrer"
				class="space-mono-regular mx-1 inline-block rounded-3xl bg-white px-4 py-2 text-xl text-black transition duration-200 ease-in-out hover:bg-cyan-100"
				>LinkedIn</a
			>
		</div>
	</div>
{/if}
