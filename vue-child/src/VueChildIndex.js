import { createApp } from 'vue';
import VueChildApp from './components/VueChildApp.vue';
import {wrapAndRegisterWebComp} from './createWebComp';

wrapAndRegisterWebComp('vue-child', VueChildApp);