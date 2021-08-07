import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {wrapAndRegisterWebComp} from "./createWebComp";

ReactDOM.render(<App />, document.querySelector('#root'));

wrapAndRegisterWebComp('react-child', App);