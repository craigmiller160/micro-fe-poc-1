import React, {useEffect, useState} from 'react';
import classes from './ParentApp.css';
import ReactChildWrapper from "./ReactChildWrapper";
import {setName, storeSubscribe} from './store';
import('svelteChild/SvelteChildWC');

const ParentApp = () => {
    const [state, setState] = useState({
        name: '',
        showReactChild: false
    });

    useEffect(() => {
        const unsubscribe = storeSubscribe((state) => {
            setState((prevState) => ({
                ...prevState,
                name: state.name
            }));
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const toggleReactChild = () => setState((prevState) => ({
        ...prevState,
        showReactChild: !prevState.showReactChild
    }));

    return (
        <div>
            <div className={ classes.ParentApp }>
                <h1>React Parent</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={ state.name }
                        onChange={ (event) => setName(event.target.value) }
                    />
                </div>
                <button onClick={ toggleReactChild }>Toggle React Child</button>
            </div>
            {
                state.showReactChild &&
                <ReactChildWrapper />
            }
            <svelte-child />
        </div>
    );
}

export default ParentApp;