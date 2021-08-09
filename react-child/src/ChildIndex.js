import React from 'react';
import ChildApp from "./components/ChildApp";
import {wrapAndRegisterWebComp} from "./createWebComp";
import {BrowserRouter} from 'react-router-dom';

const Wrapper = () => (
    <BrowserRouter>
        <ChildApp />
    </BrowserRouter>
);

wrapAndRegisterWebComp('react-child', Wrapper);