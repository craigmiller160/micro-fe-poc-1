import React from 'react';
import ChildApp from "./components/ChildApp";
import {wrapAndRegisterWebComp} from "./createWebComp";
import { createBrowserHistory } from 'history';
import {Router} from 'react-router';

// TODO leverage this
const history = createBrowserHistory();
history.listen((arg) => console.log('ReactListen', arg));

const Wrapper = () => (
    <Router history={ history }>
        <ChildApp />
    </Router>
);

wrapAndRegisterWebComp('react-child', Wrapper);