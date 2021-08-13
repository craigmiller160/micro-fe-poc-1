import produce from 'immer';
import {nanoid} from 'nanoid';

let state = Object.freeze({});
const subscriptions = {};

export const getState = () => state;

export const updateState = (updateFn) => {
    state = produce(state, updateFn);
    Object.values(subscriptions)
        .forEach((subscription) => subscription(state));
};

export const subscribe = (subscription) => {
    const subscriptionKey = nanoid();
    subscriptions[subscriptionKey] = subscription;
    return () => {
        delete subscriptions[subscriptionKey];
    };
};