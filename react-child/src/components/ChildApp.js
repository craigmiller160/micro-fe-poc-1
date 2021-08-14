import React, {useEffect, useState} from 'react';
import classes from './ChildApp.css';
import Pager from './Pager';
import useGlobalRouter from '../useGlobalRouter';
import { subscribe, getState } from 'storeChild';

const ChildApp = () => {
    useGlobalRouter();
    const [state, setState] = useState({
        name: getState().name
    })

    useEffect(() => {
        const unsubscribe = subscribe((state) => {
            setState((prevState) => ({
                ...prevState,
                name: state.name
            }));
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    return (
        <div className={ classes.ChildApp }>
            <h1>React Child</h1>
            <p>
                <strong>Name: </strong>
                <span>{ state.name }</span>
            </p>
            <Pager />
        </div>
    );
};

export default ChildApp;
