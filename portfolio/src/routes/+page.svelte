<script lang="ts">
	let pageNum = $state(0);
</script>

{#if pageNum === 0}
	<div class="flex h-screen w-screen flex-col items-center justify-center p-11">
		<h1 class="instrument-serif-regular grow text-7xl text-white">Dhruv Patel</h1>
		<div class="flex flex-col items-center justify-center pb-9">
			<p class="instrument-serif-regular block pb-1 text-5xl text-white">
				The only way to do great work is to love what you do.
			</p>
			<p class="instrument-serif-regular block text-5xl text-white">~ Steve Jobs</p>
		</div>
		<button
			class="space-mono-regular mx-1 flex-none rounded-3xl bg-white p-2 text-xl text-black transition duration-200 ease-in-out hover:bg-cyan-100"
			onclick={() => {
				pageNum += 1;
			}}
			><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M11 16.175V5q0-.425.288-.712T12 4t.713.288T13 5v11.175l4.9-4.9q.3-.3.7-.288t.7.313q.275.3.287.7t-.287.7l-6.6 6.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-6.6-6.6q-.275-.275-.275-.687T4.7 11.3q.3-.3.713-.3t.712.3z"
				/></svg
			></button
		>
	</div>
{:else}
	<div class="flex h-screen w-screen flex-col items-center p-11">
		<button
			class="space-mono-regular mx-1 flex-none rounded-3xl bg-white p-2 text-xl text-black transition duration-200 ease-in-out hover:bg-cyan-100"
			onclick={() => {
				pageNum -= 1;
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m11 7.825l-4.9 4.9q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7l6.6-6.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l6.6 6.6q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L13 7.825V19q0 .425-.288.713T12 20t-.712-.288T11 19z"
				/></svg
			>
		</button>
		<h1 class="instrument-serif-regular pt-10 text-7xl text-white">Coming Soon</h1>
	</div>
{/if}
