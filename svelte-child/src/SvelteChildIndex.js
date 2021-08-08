import SvelteApp from './SvelteChildApp.svelte';
import {wrapAndRegisterWebComp} from './createWebComp';

wrapAndRegisterWebComp('svelte-child', SvelteApp);