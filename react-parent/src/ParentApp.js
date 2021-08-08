import React from 'react';
import classes from './ParentApp.css';

const ParentApp = () => (
    <div>
        <div className={ classes.ParentApp }>
            <h1>React Parent</h1>
        </div>
        <react-child />
    </div>

);

export default ParentApp;