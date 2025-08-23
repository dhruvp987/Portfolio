<script lang="ts">
	let { name, imageUrl, imageDesc, description } = $props();
</script>

<div>
	<h4 class="instrument-serif-regular-italic text-3xl text-white">{name}</h4>
	<a href={imageUrl} target="_blank" rel="noopener noreferrer" title="Image of {name}"
		><img class="mt-1 rounded-xl border-2 border-gray-600" src={imageUrl} alt={imageDesc} /></a
	>
	<p class="dm-sans-regular pt-2 text-xl text-white">{description}</p>
</div>
