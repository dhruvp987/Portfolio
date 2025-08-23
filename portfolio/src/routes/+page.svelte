<script lang="ts">
	import Project from './Project.svelte';
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

	function onKeyDown(event) {
		const upCode = 38;
		const downCode = 40;

		if ((event.keyCode === downCode && onPage(0)) || (event.keyCode === upCode && onPage(1))) {
			// Resetting the page num will remove the current page, which will then trigger
			// the removed page's onoutroend handler, which is currently set to load whatever
			// page it needs to load
			resetPageNum();
		}
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
				'I helped on a website that can suggest ways to improve a room’s safety against natural disasters using Google Gemini, winning 1st place at a J.P. Morgan Chase affiliated hackathon. Right now, I am learning how to leverage LLMs even further, first with a chatbot that can easily host and make accessible local, powerful, and private models on a variety of hardware.'
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
		<h1 class="instrument-serif-regular grow animate-glowing-white-text text-7xl text-white">
			Dhruv Patel
		</h1>
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
			<img class="size-[2em]" src="/downarrow.svg" alt="Down arrow icon" />
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
			<img class="size-[2em]" src="/uparrow.svg" alt="Up arrow icon" />
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
				class="mr-1 inline-flex items-center justify-center rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
				title="My LinkedIn"
				aria-label="My LinkedIn"
			>
				<img class="size-[2em]" src="/linkedinfull.svg" alt="LinkedIn icon" />
			</a>
			<a
				href="https://github.com/dhruvp987"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
				title="My GitHub"
				aria-label="My GitHub"
			>
				<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
			</a>
		</div>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular pb-3 text-5xl text-white">Projects</h3>
			<div class="flex flex-col gap-7">
				<Project
					name="RoomReady (1st Place Winner at HenHacks 2025)"
					imageUrl="/roomready.webp"
					imageDesc="Screenshot of RoomReady Demo"
					description="Worked together with a team of 4 to build a website where you can upload an image of a room and optionally your location, and get a risk analysis of your room against natural disasters, including those in your area, using AI. The website provides a list of risks, plus action steps for each risk, allowing you to increase the room's safety."
					githubLink="https://github.com/NateMartes/RoomReady"
					devpostLink="https://devpost.com/software/roomready"
				/>
				<Project
					name="ChatBox"
					imageUrl="/chatbox.webp"
					imageDesc="Screenshot of ChatBox Demo"
					description="Built a full-stack web app that makes it easy to host and chat with local LLMs conveniently and privately, anywhere you are. Just download a model, tell the server to use it, and visit the provided website."
					githubLink="https://github.com/dhruvp987/ChatBox"
				/>
				<Project
					name="EPIC8"
					imageUrl="/epic8.webp"
					imageDesc="Screenshot of EPIC8 Demo"
					description="Developed a C# app that emulates the CHIP-8 computer system, allowing you to run CHIP-8 software anywhere the C# app can run. Successfully made the IBM Logo program run. The goal is to implement the rest of the system instructions and add a GUI, so that more software can run."
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

<svelte:window on:keydown|preventDefault={onKeyDown} />
