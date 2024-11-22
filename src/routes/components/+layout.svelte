<script lang="ts">
	import AppSidebar from '$lib/components/ui/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<main class="px-2 w-full">
		<!-- <Sidebar.Trigger /> -->
		{@render children?.()}
	</main>
</Sidebar.Provider>
