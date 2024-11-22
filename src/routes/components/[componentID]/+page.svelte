<script>
	import { page } from '$app/stores';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { all_animations } from '$lib/custom-animations/store/all-animations';

	let routeID = $derived($page.params.componentID);
	let comp = all_animations.filter((comp) => comp.id === routeID)[0];

	import * as Tabs from '$lib/components/ui/tabs/index';

	import { codeToHtml } from 'shiki';
	import { onMount } from 'svelte';
	let code = $state('');
	// @ts-ignore
	$effect(async () => {
		code = await codeToHtml(comp.comp.code, {
			lang: 'svelte',
			theme: 'vesper'
		});
	});
</script>

{#if comp}
	<div class="w-full p-10">
		<h1 class="text-xl font-bold">{comp.name} Component</h1>
		<p class="text-muted-foreground">{comp.desc}</p>
		<Separator class="mt-2 w-full" />
		<div class="mt-2">
			<Tabs.Root value="preview">
				<Tabs.List>
					<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
					<Tabs.Trigger value="code">Code</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="preview">
					<div class="relative mx-auto mt-2 rounded-xl border p-4">
						<div class="mx-auto w-fit">
							<comp.comp.component />
						</div>
					</div>
				</Tabs.Content>
				<Tabs.Content value="code">
					<div class="relative mx-auto mt-2 rounded-xl border p-4">
						<pre class="text-sm text-muted-foreground">
                            <code>{@html code}</code>
                        </pre>
					</div>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	</div>
{/if}
