<script lang="ts">
	import Project from './Project.svelte';
	import LinkedInSVG from '$lib/assets/LinkedInSVG.svelte';
	import GitHubSVG from '$lib/assets/GitHubSVG.svelte';
	import { fade } from 'svelte/transition';

	const fadeParams = { duration: 100 };

	let pageNum = $state(0);

	function resetPageNum() {
		// Remove the previous page without loading another one
		pageNum = -1;
	}

	function gotoPage(num) {
		pageNum = num;
	}

	function onPage(num) {
		return pageNum === num;
	}

	const aboutMeParagraphs = [
		{ id: 0, content: 'I want to build the fun stuff that everyone can enjoy.' },
		{
			id: 1,
			content: 'Why? Because it is exciting what can be done, and the potential is life-changing!'
		},
		{
			id: 2,
			content:
				'Growing up, I saw computers change the world around us, from the Web to now generative AI. These are things that have opened doors, made life easier, and put smiles on people’s faces, including mine.'
		},
		{
			id: 3,
			content:
				'Now, I want to try to open doors, make life easier, and put smiles on people’s faces 😀.'
		},
		{
			id: 4,
			content:
				'That’s why I decided to pursue Computer Science, and keep learning and living with the cutting edge.'
		},
		{
			id: 5,
			content:
				'I helped on a website that can suggest ways to improve a room’s safety against natural disasters, using Google Gemini, winning 1st place at a J.P. Morgan Chase affiliated hackathon. Right now, I am learning how to leverage LLMs even further, first with a chatbot that can easily host and make accessible local, powerful, and private models on a variety of hardware.'
		},
		{
			id: 6,
			content:
				'I want to build exciting things! Today, the excitement is AI. Whatever it is tomorrow, I will be there!'
		}
	];
</script>

{#if onPage(0)}
	<div
		class="flex h-screen w-screen flex-col items-center justify-center gap-10 px-5 py-11"
		in:fade={fadeParams}
		out:fade={fadeParams}
		onoutroend={() => gotoPage(1)}
	>
		<h1 class="instrument-serif-regular grow text-7xl text-white">Dhruv Patel</h1>
		<div class="flex flex-col items-center justify-center">
			<p class="instrument-serif-regular block pb-1 text-5xl text-white">
				The only way to do great work is to love what you do.
			</p>
			<p class="instrument-serif-regular block text-5xl text-white">~ Steve Jobs</p>
		</div>
		<button
			class="flex-none rounded-3xl bg-white p-2 transition duration-200 ease-in-out hover:bg-cyan-100"
			onclick={resetPageNum}
			title="Next Section"
			aria-label="Next Section"
		>
			<span class="material-symbols--arrow-downward-rounded block" />
		</button>
	</div>
{:else if onPage(1)}
	<div
		class="flex h-[100%] w-[100%] flex-col items-center gap-10 px-5 py-11"
		in:fade={fadeParams}
		out:fade={fadeParams}
		onoutroend={() => gotoPage(0)}
	>
		<button
			class="rounded-3xl bg-white p-2 transition duration-200 ease-in-out hover:bg-cyan-100"
			onclick={resetPageNum}
			title="Previous Section"
			aria-label="Previous Section"
		>
			<span class="material-symbols--arrow-upward-rounded block" />
		</button>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular pb-3 text-5xl text-white">Hi, Mom and Dad! 👋</h3>
			{#each aboutMeParagraphs as pg (pg.id)}
				<p class="dm-sans-regular pb-3 text-xl text-white">
					{pg.content}
				</p>
			{/each}
			<a
				href="https://linkedin.com/in/dhruvpatel789"
				target="_blank"
				rel="noopener noreferrer"
				class="mr-1 inline-block rounded-3xl bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
				title="My LinkedIn"
				aria-label="My LinkedIn"
			>
				<LinkedInSVG />
			</a>
			<a
				href="https://github.com/dhruvp987"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-3xl bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
				title="My GitHub"
				aria-label="My GitHub"
			>
				<GitHubSVG />
			</a>
		</div>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular pb-3 text-5xl text-white">Projects</h3>
			<div class="flex flex-col gap-7">
				<Project
					name="RoomReady"
					imageUrl="/roomready.webp"
					imageDesc="Screenshot of RoomReady Demo"
					description="Analyzing images of rooms to prepare them for natural disasters."
					githubLink="https://github.com/NateMartes/RoomReady"
					devpostLink="https://devpost.com/software/roomready"
				/>
				<Project
					name="ChatBox"
					imageUrl="/chatbox.webp"
					imageDesc="Screenshot of ChatBox Demo"
					description="Easy-to-use platform to host and use local LLMs conveniently and privately."
					githubLink="https://github.com/dhruvp987/ChatBox"
				/>
				<Project
					name="EPIC8"
					imageUrl="/epic8.webp"
					imageDesc="Screenshot of EPIC8 Demo"
					description="An epic CHIP-8 emulator."
					githubLink="https://github.com/dhruvp987/EPIC8"
				/>
			</div>
		</div>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular pb-3 text-5xl text-white">About this Website</h3>
			<p class="dm-sans-regular text-xl text-white">
				This website is built using TypeScript, Svelte, SvelteKit, Tailwind CSS, and lots of ❤️!
			</p>
		</div>
	</div>
{/if}
