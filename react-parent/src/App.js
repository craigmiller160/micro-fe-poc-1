import React from 'react';
import classes from './App.css';

const App = () => (
    <div>
        <div className={ classes.App }>
            <h1>React Parent</h1>
        </div>
        <react-child />
    </div>

);

export default App;