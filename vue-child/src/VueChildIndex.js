import { createApp } from 'vue';
import VueChildApp from './VueChildApp.vue';
import {wrapAndRegisterWebComp} from './createWebComp';

wrapAndRegisterWebComp('vue-child', VueChildApp);