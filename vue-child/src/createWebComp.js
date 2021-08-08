import { createApp } from 'vue';

const createWebComp = (VueComp) => class extends HTMLElement {
    connected = false;
    app = undefined;

    connectedCallback() {
        this.connected = true
        this.render();
    }

    attributeChangedCallback() {
        if (this.connected) {
            this.render();
        }
    }

    disconnectedCallback() {
        this.connected = false
        if (this.app) {
            this.app.unmount();
        }
    }

    render() {
        this.app = createApp(VueComp);
        this.app.mount(this);
    }
};

export const wrapAndRegisterWebComp = (name, VueComp) => {
    const WebComp = createWebComp(VueComp);
    customElements.define(name, WebComp);
};