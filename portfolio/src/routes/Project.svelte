<script lang="ts">
	let { name, imageUrl, imageDim, imageDesc, description } = $props();
</script>

<div>
	<h4 class="instrument-serif-regular-italic text-3xl text-white">{name}</h4>
	<a href={imageUrl} target="_blank" rel="noopener noreferrer" title="Image of {name}"
		><img
			src={imageUrl}
			alt={imageDesc}
			width={imageDim.width}
			height={imageDim.height}
			class="mt-1 h-auto w-full rounded-xl border-2 border-gray-600"
		/></a
	>
	<p class="dm-sans-regular pt-2 text-xl text-white">{description}</p>
</div>
