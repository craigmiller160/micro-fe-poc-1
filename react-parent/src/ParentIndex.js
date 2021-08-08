import React from 'react';
import ReactDOM from 'react-dom';
import ParentApp from "./ParentApp";

import('reactChild/ReactChildWC')
    .then(() => {
        ReactDOM.render(<ParentApp />, document.querySelector('#root'));
    })
    .catch(ex => console.log('WebCompError', ex))