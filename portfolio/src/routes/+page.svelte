<script lang="ts">
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
		class="flex h-dvh w-dvw flex-col items-center justify-center gap-7 px-5 py-11 md:gap-10"
		in:fade={fadeParams}
		out:fade={fadeParams}
		onoutroend={() => gotoPage(1)}
	>
		<div class="flex grow flex-col items-center">
			<h1
				class="instrument-serif-regular animate-glowing-white-text text-5xl text-white md:text-7xl"
			>
				Dhruv Patel
			</h1>
			<div class="flex gap-3 pt-4">
				<a
					href="https://github.com/dhruvp987"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
					title="My GitHub"
				>
					<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
				</a>
				<a
					href="https://linkedin.com/in/dhruvpatel789"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
					title="My LinkedIn"
				>
					<img class="size-[2em]" src="/linkedinfull.svg" alt="LinkedIn icon" />
				</a>
			</div>
		</div>
		<div class="flex flex-col items-center justify-center">
			<p class="instrument-serif-regular block text-3xl text-white md:text-5xl">
				The only way to do great work is to love what you do.
			</p>
			<p class="instrument-serif-regular block pt-1 text-3xl text-white md:text-5xl">
				~ Steve Jobs
			</p>
		</div>
		<button
			class="flex-none rounded-full bg-white p-2 transition duration-200 ease-in-out hover:bg-cyan-100"
			onclick={resetPageNum}
			title="Next Section"
			aria-label="Next Section"
		>
			<img class="size-[2em]" src="/downarrow.svg" alt="Down arrow icon" />
		</button>
	</div>
{:else if onPage(1)}
	<div
		class="flex size-full flex-col items-center gap-10 px-5 py-11"
		in:fade={fadeParams}
		out:fade={fadeParams}
		onoutroend={() => gotoPage(0)}
	>
		<button
			class="rounded-full bg-white p-2 transition duration-200 ease-in-out hover:bg-cyan-100"
			onclick={resetPageNum}
			title="Previous Section"
		>
			<img class="size-[2em]" src="/uparrow.svg" alt="Up arrow icon" />
		</button>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular text-3xl text-white md:text-5xl">👋 Hi, Mom and Dad!</h3>
			<a
				href="/kingofmatrix.webp"
				target="_blank"
				rel="noopener noreferrer"
				title="Me as King of the Matrix"
				><img
					src="/kingofmatrix.webp"
					alt="Me as King of the Matrix"
					width="2142"
					height="2142"
					class="mx-auto mt-2 w-48 rounded-xl border-2 border-gray-600 sm:w-64 md:w-[50%]"
				/></a
			>

			{#each aboutMeParagraphs as pg (pg.id)}
				<p class="dm-sans-regular pt-3 text-base text-white md:text-xl">
					{pg.content}
				</p>
			{/each}
		</div>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular text-3xl text-white md:text-5xl">Experience</h3>
			<div class="flex flex-col flex-wrap gap-8 pt-3 md:gap-11">
				<div>
					<div class="flex flex-wrap">
						<div class="grow">
							<p class="instrument-serif-regular-italic text-xl text-white md:text-3xl">
								Peer Tutor
							</p>
							<p class="instrument-serif-regular-italic text-xl text-white md:text-3xl">
								Wilkes University
							</p>
						</div>
						<p class="instrument-serif-regular flex-none text-xl text-white md:text-3xl">
							Sep 2024 — Present
						</p>
					</div>
					<p class="dm-sans-regular pt-1 text-base text-white md:text-xl">
						I helped several students from 4 CS classes succeed by creating a fun, approachable
						atmosphere, recognizing and expressing the students' needs, explaining concepts using
						simple terms and visuals, and guiding them with hands-on practice and thought-provoking
						questions. Additionally, I communicated my tutoring service frequently, encouraging new
						students to reach out. This led to several students coming regularly, building skills,
						and improving their grades. Throughout the sessions, I've taught Python, Java, C, Bash,
						and AWK.
					</p>
				</div>
				<div>
					<div class="flex flex-wrap">
						<div class="grow">
							<p class="instrument-serif-regular-italic text-xl text-white md:text-3xl">
								Teaching Assistant
							</p>
							<p class="instrument-serif-regular-italic pt-1 text-xl text-white md:text-3xl">
								Wilkes University
							</p>
						</div>
						<p class="instrument-serif-regular flex-none text-xl text-white md:text-3xl">
							Jan 2025 — May 2025
						</p>
					</div>
					<p class="dm-sans-regular pt-1 text-base text-white md:text-xl">
						I helped a class of 20 students grow in their Intro to Programming lab by proactively
						assisting them, encouraging them, sharing my knowledge, and being open and accessible.
						As a result, several students became more excited aboout computer science, and a few
						reached out to me for further tutoring. Thoughout the class, I taught students how to
						use Python to write modular code with documentation, draw graphics, and perform basic
						data science.
					</p>
				</div>
			</div>
		</div>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular text-3xl text-white md:text-5xl">Projects</h3>
			<div class="flex flex-col gap-15 pt-3 md:gap-18">
				<div>
					<div>
						<h4 class="instrument-serif-regular-italic text-xl text-white md:text-3xl">
							RoomReady (1st Place Winner at HenHacks 2025)
						</h4>
						<div class="flex w-full gap-3 pt-2">
							<a
								href="https://github.com/NateMartes/RoomReady"
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
								title="GitHub"
							>
								<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
							</a>
							<a
								href="https://devpost.com/software/roomready"
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
								title="DevPost"
								aria-label="DevPost"
							>
								<img class="size-[2em]" src="/droundedfull.svg" alt="D icon" />
							</a>
						</div>
						<a href="/roomready.webp" target="_blank" rel="noopener noreferrer" title="RoomReady"
							><img
								src="/roomready.webp"
								alt="RoomReady Demo"
								width="1508"
								height="916"
								class="mt-2 h-auto w-full rounded-xl border-2 border-gray-600"
							/></a
						>
						<p class="dm-sans-regular pt-2 text-base text-white md:text-xl">
							Worked together with a team of 4 to build a website where you can upload an image of a
							room and optionally your location, and get a risk analysis of your room against
							natural disasters, including those in your area, using AI. The website provides a list
							of risks, plus action steps for each risk, allowing you to increase the room's safety.
						</p>
					</div>
					<div class="flex w-full flex-wrap gap-2 pt-3">
						<img class="size-[2em] md:size-[3em]" src="/python.svg" alt="Python icon" />
						<img
							class="size-[2em] md:size-[3em]"
							src="/googlegemini.svg"
							alt="Google Gemini icon"
						/>
						<img class="size-[2em] md:size-[3em]" src="/fastapi.svg" alt="FastAPI icon" />
						<img class="size-[2em] md:size-[3em]" src="/typescript.svg" alt="TypeScript icon" />
						<img class="size-[2em] md:size-[3em]" src="/react.svg" alt="React icon" />
						<img class="size-[2em] md:size-[3em]" src="/git.svg" alt="Git icon" />
						<img class="size-[2em] md:size-[3em]" src="/docker.svg" alt="Docker icon" />
					</div>
				</div>
				<div>
					<div>
						<h4 class="instrument-serif-regular-italic text-xl text-white md:text-3xl">ChatBox</h4>
						<div class="flex w-full gap-3 pt-2">
							<a
								href="https://github.com/dhruvp987/ChatBox"
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
								title="GitHub"
							>
								<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
							</a>
						</div>
						<a href="/chatbox.webp" target="_blank" rel="noopener noreferrer" title="ChatBox"
							><img
								src="/chatbox.webp"
								alt="ChatBox Demo"
								width="1920"
								height="949"
								class="mt-2 h-auto w-full rounded-xl border-2 border-gray-600"
							/></a
						>
						<p class="dm-sans-regular pt-2 text-base text-white md:text-xl">
							Built a full-stack web app that makes it easy to host and chat with local LLMs
							conveniently and privately, anywhere you are. Just download a model, tell the server
							to use it, and visit the provided website. Powered by llama.cpp.
						</p>
					</div>
					<div class="flex w-full flex-wrap gap-2 pt-3">
						<img class="size-[2em] md:size-[3em]" src="/python.svg" alt="Python icon" />
						<img
							class="size-[2em] md:size-[3em]"
							src="/llamacpppython.svg"
							alt="llama-cpp-python icon"
						/>
						<img class="size-[2em] md:size-[3em]" src="/fastapi.svg" alt="FastAPI icon" />
						<img class="size-[2em] md:size-[3em]" src="/html5.svg" alt="HTML5 icon" />
						<img class="size-[2em] md:size-[3em]" src="/css3.svg" alt="CSS3 icon" />
						<img class="size-[2em] md:size-[3em]" src="/javascript.svg" alt="JavaScript icon" />
						<img class="size-[2em] md:size-[3em]" src="/git.svg" alt="Git icon" />
					</div>
				</div>
				<div>
					<div>
						<h4 class="instrument-serif-regular-italic text-xl text-white md:text-3xl">
							Image Beautifier
						</h4>
						<div class="flex w-full gap-3 pt-2">
							<a
								href="https://github.com/dhruvp987/ImageBeautifier"
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
								title="GitHub"
							>
								<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
							</a>
						</div>

						<a
							href="/imagebeautifier.webp"
							target="_blank"
							rel="noopener noreferrer"
							title="Image Beautifier"
							><img
								src="/imagebeautifier.webp"
								alt="Image Beautifier Demo"
								width="1920"
								height="1080"
								class="mt-2 h-auto w-full rounded-xl border-2 border-gray-600"
							/></a
						>
						<p class="dm-sans-regular pt-2 text-base text-white md:text-xl">
							Worked with a partner to create a Go program that transforms images with ease and
							speed, using the power of concurrency. Just say what you want to do, and it will do it
							for you! You can blur, flip upside down, grayscale, resize, and add random cat images
							🐱. In the future, we'd like to add a GUI and implement an API so the community can
							add their own transformations!
						</p>
					</div>
					<div class="flex w-full flex-wrap gap-2 pt-3">
						<img class="size-[2em] md:size-[3em]" src="/go.svg" alt="Go icon" />
						<img class="size-[2em] md:size-[3em]" src="/git.svg" alt="Git icon" />
					</div>
				</div>
				<div>
					<div>
						<h4 class="instrument-serif-regular-italic text-xl text-white md:text-3xl">
							EPIC8, an Epic CHIP-8 Emulator
						</h4>
						<div class="flex w-full gap-3 pt-2">
							<a
								href="https://github.com/dhruvp987/EPIC8"
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
								title="GitHub"
							>
								<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
							</a>
						</div>

						<a href="/epic8.webp" target="_blank" rel="noopener noreferrer" title="EPIC8"
							><img
								src="/epic8.webp"
								alt="EPIC8 Demo"
								width="1911"
								height="1024"
								class="mt-2 h-auto w-full rounded-xl border-2 border-gray-600"
							/></a
						>
						<p class="dm-sans-regular pt-2 text-base text-white md:text-xl">
							Developed a C# app that emulates the CHIP-8 computer system, allowing you to run
							CHIP-8 software anywhere the C# app can run. Successfully made the IBM Logo program
							run. The goal is to implement the rest of the system instructions and add a GUI, so
							that more software can run.
						</p>
					</div>
					<div class="flex w-full flex-wrap gap-2 pt-3">
						<img class="size-[2em] md:size-[3em]" src="/csharp.svg" alt="C# icon" />
						<img class="size-[2em] md:size-[3em]" src="/git.svg" alt="Git icon" />
					</div>
				</div>
			</div>
		</div>
		<div
			class="w-full rounded-2xl border-2 border-gray-600 bg-(--glassy-gray) p-5 backdrop-blur-sm lg:w-3xl"
		>
			<h3 class="instrument-serif-regular text-3xl text-white md:text-5xl">About this Website</h3>
			<div class="flex w-full gap-3 pt-2">
				<a
					href="https://github.com/dhruvp987/Portfolio"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full bg-white p-1 transition duration-200 ease-in-out hover:bg-cyan-100"
					title="GitHub"
				>
					<img class="size-[2em]" src="/githubfull.svg" alt="GitHub icon" />
				</a>
			</div>
			<p class="dm-sans-regular pt-3 text-base text-white md:text-xl">
				This website is built using TypeScript, Svelte, SvelteKit, Tailwind CSS, Git, and lots of
				❤️!
			</p>
			<div class="flex flex-wrap gap-2 pt-3">
				<img class="size-[2em] md:size-[3em]" src="/typescript.svg" alt="TypeScript icon" />
				<img class="size-[2em] md:size-[3em]" src="/svelte.svg" alt="Svelte icon" />
				<img class="size-[2em] md:size-[3em]" src="/tailwindcss.svg" alt="Tailwind CSS icon" />
				<img class="size-[2em] md:size-[3em]" src="/git.svg" alt="Git icon" />
			</div>
		</div>
	</div>
{/if}

<svelte:window onkeydown={onKeyDown} />
