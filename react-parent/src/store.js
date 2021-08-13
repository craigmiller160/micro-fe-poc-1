import {proxy, snapshot, subscribe} from 'valtio';

// TODO delete this file

const store = proxy({
    name: ''
});

export const setName = (name) => {
    store.name = name;
};

export const storeSubscribe = (callback) => subscribe(store, () => callback(snapshot(store)));

export const getState = () => snapshot(store);

window.valtioStore = {
    getState,
    storeSubscribe,
    actions: {
        setName
    }
};
