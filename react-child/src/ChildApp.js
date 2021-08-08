import React, {useEffect, useState} from 'react';
import classes from './ChildApp.css';

const ChildApp = () => {
    const [state, setState] = useState({
        name: window.valtioStore.getState().name
    })

    useEffect(() => {
        const unsubscribe = window.valtioStore.storeSubscribe((state) => {
            setState((prevState) => ({
                ...prevState,
                name: state.name
            }));
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className={ classes.ChildApp }>
            <h1>React Child</h1>
            <p>
                <strong>Name: </strong>
                <span>{ state.name }</span>
            </p>
        </div>
    );
};

export default ChildApp;