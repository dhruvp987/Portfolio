<script lang="ts">
	let { name, imageUrl, imageDesc, description, githubLink = '', devpostLink = '' } = $props();
</script>

<div>
	<h4 class="instrument-serif-regular-italic pb-1 text-3xl text-white">{name}</h4>
	<a href={imageUrl} target="_blank" rel="noopener noreferrer" title="Image of {name}"
		><img src={imageUrl} alt={imageDesc} class="mb-2 rounded-xl border-2 border-gray-600" /></a
	>
	<p class="dm-sans-regular pb-2 text-xl text-white">{description}</p>
	{#if githubLink !== ''}
		<a
			href={githubLink}
			target="_blank"
			rel="noopener noreferrer"
			class="mr-1 inline-flex items-center justify-center rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
			title="GitHub for {name}"
			aria-label="GitHub for {name}"
		>
			<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
		</a>
	{/if}
	{#if devpostLink !== ''}
		<a
			href={devpostLink}
			target="_blank"
			rel="noopener noreferrer"
			class="mr-1 inline-flex items-center justify-center rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
			title="DevPost for {name}"
			aria-label="DevPost for {name}"
		>
			<img class="size-[2em]" src="/droundedfull.svg" alt="D icon" />
		</a>
	{/if}
</div>
