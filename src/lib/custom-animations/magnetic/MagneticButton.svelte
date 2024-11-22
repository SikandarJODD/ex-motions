<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'motion-start';
	let position = $state({ x: 0, y: 0 });
	let ref: any = $state(null);

	interface Props {
		class?: string;
		children?: import('svelte').Snippet;
	}
	let { class: _class = '', children }: Props = $props();

	let handleMouseMove = (e: MouseEvent) => {
		let { clientX, clientY } = e;

		let { left, top, width, height } = ref.getBoundingClientRect();
		let middleX = clientX - (left + width / 2);
		let middleY = clientY - (top + height / 2);
		position = {
			x: middleX,
			y: middleY
		};
	};

	let handleMouseLeave = () => {
		position.x = 0;
		position.y = 0;
	};
</script>

<div>
	<Motion.div
		bind:el={ref}
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		class={cn('relative rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black', _class)}
		animate={{ x: position.x, y: position.y }}
		transition={{
			type: 'spring',
			damping: 15,
			stiffness: 150,
			mass: 0.1
		}}
	>
		{@render children?.()}
	</Motion.div>
</div>
