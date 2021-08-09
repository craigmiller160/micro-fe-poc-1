import React from 'react';
import ChildApp from "./components/ChildApp";
import {wrapAndRegisterWebComp} from "./createWebComp";
import { createBrowserHistory } from 'history';
import {Router} from 'react-router';
import reactGlobalRouting from './reactGlobalRouting';

const history = createBrowserHistory();
reactGlobalRouting(history);

const Wrapper = () => (
    <Router history={ history }>
        <ChildApp />
    </Router>
);

wrapAndRegisterWebComp('react-child', Wrapper);