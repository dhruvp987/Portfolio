<script lang="ts">
	import { fade } from 'svelte/transition';

	let quoteVisible = $state(true);
	let mainContentVisible = $state(false);

	setTimeout(() => { quoteVisible = false; }, 4000);
	setTimeout(() => { mainContentVisible = true; }, 4500);
</script>

<div class="bg-[url('/ambition.png')] w-screen h-screen absolute -z-1 bg-no-repeat bg-bottom bg-cover brightness-35"></div>

{#if quoteVisible}
	<div class="w-screen h-screen p-5 flex flex-col items-center justify-center" transition:fade>
		<h1 class="block instrument-serif-regular text-white text-7xl">The only way to do great work is to love what you do.</h1>
		<h1 class="block instrument-serif-regular text-white text-7xl">~ Steve Jobs</h1>
	</div>
{/if}

{#if mainContentVisible}
	<div class="w-screen h-screen flex flex-col items-center justify-center" transition:fade>
		<h1 class="instrument-serif-regular text-white text-7xl p-11 grow">Dhruv Patel</h1>
		<h2 class="instrument-serif-regular text-white text-5xl p-6 flex-none">Building the Fun Stuff for Everyone 🚀</h2>
		<div class="pb-11 flex-none">
			<a href="/projects" class="inline-block space-mono-regular bg-white text-black text-xl px-4 py-2 rounded-3xl mx-1 transition duration-200 ease-in-out hover:bg-cyan-100">Projects</a>
			<a href="https://github.com/dhruvp987" target="_blank" rel="noopener noreferrer" class="inline-block space-mono-regular bg-white text-black text-xl px-4 py-2 rounded-3xl mx-1 transition duration-200 ease-in-out hover:bg-cyan-100">GitHub</a>
			<a href="https://linkedin.com/in/dhruvpatel789" target="_blank" rel="noopener noreferrer" class="inline-block space-mono-regular bg-white text-black text-xl px-4 py-2 rounded-3xl mx-1 transition duration-200 ease-in-out hover:bg-cyan-100">LinkedIn</a>
		</div>
	</div>
{/if}
