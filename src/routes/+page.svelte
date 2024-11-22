<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<h1 class="text-4xl font-semibold">Ex Motions</h1>
	<p class="mt-2 text-lg text-muted-foreground">
		This is a collection of animations and transitions that I have created using <a
			href="https://github.com/JonathonRP/motion-start"
			target="_blank"
			class="text-primary">motion-start</a
		>
		and
		<a href="https://motion.dev" class="text-primary" target="_blank">motion.dev</a>.
	</p>
	<div class="mt-4">
		<Button href="/components" variant="secondary">Components</Button>
	</div>
	<div class="mt-10 text-muted-foreground">
		Build by <a class='text-primary' href="https://x.com/Sikandar_Bhide" target="_blank">Bhide Svelte</a>
	</div>
</div>
