import type { AnimationType } from './all-animation-type';

import PipelineView from '../pipeline-view/PipelineView.svelte';
import PipelineViewCode from '../pipeline-view/PipelineView.svelte?raw';

export let all_animations: AnimationType[] = [
	{
		id: 'timeline',
		name: 'Timeline',
		desc: 'Timeline component inspired from ibelick',
		comp: {
			component: PipelineView,
			code: PipelineViewCode
		},
		credits: {
			name: 'Ibelick',
			url: 'https://ibelick.com/lab/timeline',
			twitter: 'https://x.com/Ibelick'
		}
	}
];
