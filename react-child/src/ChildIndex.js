import React from 'react';
import ReactDOM from 'react-dom';
import ChildApp from "./components/ChildApp";
import {wrapAndRegisterWebComp} from "./createWebComp";

wrapAndRegisterWebComp('react-child', ChildApp);