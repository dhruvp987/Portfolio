<script lang="ts">
	import DRoundedSVG from '$lib/assets/DRoundedSVG.svelte';
	import GitHubSVG from '$lib/assets/GitHubSVG.svelte';

	let { name, imageUrl, imageDesc, description, githubLink = '', devpostLink = '' } = $props();
</script>

<div>
	<h5 class="instrument-serif-regular-italic pb-1 text-3xl text-white">{name}</h5>
	<img src={imageUrl} alt={imageDesc} class="mb-2 rounded-xl" />
	<p class="dm-sans-regular pb-2 text-xl text-white">{description}</p>
	{#if githubLink !== ''}
		<a
			href={githubLink}
			target="_blank"
			rel="noopener noreferrer"
			class="mr-1 inline-block rounded-3xl bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
			title="GitHub for {name}"
			aria-label="GitHub for {name}"
		>
			<GitHubSVG />
		</a>
	{/if}
	{#if devpostLink !== ''}
		<a
			href={devpostLink}
			target="_blank"
			rel="noopener noreferrer"
			class="mr-1 inline-block rounded-3xl bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
			title="DevPost for {name}"
			aria-label="DevPost for {name}"
		>
			<DRoundedSVG />
		</a>
	{/if}
</div>
