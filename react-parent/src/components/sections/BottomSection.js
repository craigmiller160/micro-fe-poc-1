import React from 'react';
import classes from './BottomSection.css';

const BottomSection = (props) => {
    return (
        <div className={ classes.BottomSection }>
            {
                props.showReactChild **
                <react-child />
            }
            <svelte-child />
            <vue-child />
        </div>
    );
};

export default BottomSection;