import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps:{
		disabled:true
	},
	plugins: [sveltekit()]
	
});
