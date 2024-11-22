<script lang="ts">
	import { scale } from 'svelte/transition';

	let hoveredIndex = $state(null as number | null);
	let selected = $state(null as number | null);

	// Create an array of years from 1993 to 2024
	let YEARS = Array.from({ length: 2024 - 1993 + 1 }, (_, i) => 2024 - i);

	let handleMouseEnter = (index: number) => {
		hoveredIndex = index;
	};

	let handleMouseLeave = () => {
		hoveredIndex = null;
	};

	const calculateScale = (index: number) => {
		if (hoveredIndex === null) return 0.4;
		let distance = Math.abs(index - hoveredIndex);
		return Math.max(1 - distance * 0.2, 0.4);
	};
</script>

<div class="flex flex-col">
	{#each YEARS as year, i}
		<button
			class="relative inline-flex items-end justify-center py-1"
			onmouseenter={() => handleMouseEnter(i)}
			onmouseleave={handleMouseLeave}
			ontouchstart={() => handleMouseEnter(i)}
			ontouchend={handleMouseLeave}
			onclick={() => (selected = i)}
		>
			<div
				class={`h-1 w-10 rounded-[4px] ${selected === i ? 'bg-yellow-400' : 'bg-primary'}`}
				style="transform: scale({calculateScale(i)}); transition: transform 0.15s;"
			></div>

			{#if hoveredIndex === i}
				<span
					in:scale
					class="absolute -top-0.5 left-12 text-[11px] {selected === i
						? 'text-yellow-400'
						: 'text-primary'}"
					style="opacity: 1; filter: blur(0px); transform: scale(1); transition: opacity 0.15s, filter 0.15s, transform 0.15s 0.1s;"
				>
					{year}
				</span>
			{/if}
		</button>
	{/each}
</div>

<style>
	.bg-yellow-400 {
		background-color: #f1c40f; /* Yellow color */
	}
	.text-yellow-400 {
		color: #f1c40f; /* Yellow color */
	}
</style>
