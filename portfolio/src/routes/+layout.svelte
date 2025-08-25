<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Dhruv Patel</title>
	<meta name="description" content="Dhruv Patel's Portfolio" />
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Instrument+Serif:ital@0;1&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="fixed -z-1 h-lvh w-lvw bg-[url('/ambition.webp')] bg-cover bg-bottom bg-no-repeat brightness-45"
></div>

{@render children?.()}
