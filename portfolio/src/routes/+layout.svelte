<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Space+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="absolute -z-1 h-screen w-screen bg-[url('/ambition.png')] bg-cover bg-bottom bg-no-repeat brightness-35"
></div>

{@render children?.()}
