import type { Component } from 'svelte';

export type AnimationType = {
	id: string;
	name: string;
	desc?: string;
	tags?: string[];
	comp: {
		component: Component;
		code: string;
	};
	example?: {
		component: Component;
		code: string;
	};
	credits?: {
		name: string;
		url: string;
		twitter?: string;
		desc?: string;
	};
};
