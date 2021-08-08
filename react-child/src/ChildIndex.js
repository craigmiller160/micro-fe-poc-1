import React from 'react';
import ReactDOM from 'react-dom';
import ChildApp from "./ChildApp";
import {wrapAndRegisterWebComp} from "./createWebComp";

// ReactDOM.render(<ParentApp />, document.querySelector('#root'));

wrapAndRegisterWebComp('react-child', ChildApp);