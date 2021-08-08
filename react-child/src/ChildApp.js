import React from 'react';
import classes from './ChildApp.css';

const ChildApp = () => {
    return (
        <div className={ classes.ChildApp }>
            <h1>React Child</h1>
            <p>
                <strong>Name:</strong>
            </p>
        </div>
    );
};

export default ChildApp;