import React, {useState} from 'react';
import classes from './ParentApp.css';
import ReactChildWrapper from "./ReactChildWrapper";

const ParentApp = () => {
    const [state, setState] = useState({
        showReactChild: false
    });

    const toggleReactChild = () => setState((prevState) => ({
        ...prevState,
        showReactChild: !prevState.showReactChild
    }));

    console.log('ShowReactChild', state.showReactChild);

    return (
        <div>
            <div className={ classes.ParentApp }>
                <h1>React Parent</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" />
                </div>
                <button onClick={ toggleReactChild }>Toggle React Child</button>
            </div>
            {
                state.showReactChild &&
                <ReactChildWrapper />
            }
        </div>
    );
}

export default ParentApp;