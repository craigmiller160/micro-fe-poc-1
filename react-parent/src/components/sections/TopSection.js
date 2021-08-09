import React from 'react';
import classes from './TopSection.css';

const TopSection = (props) => {
    return (
        <div>
            <h1 className={ classes.TopSectionH1 }>React Parent</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={ props.name }
                    onChange={ (event) => props.setName(event.target.value) }
                />
                <div className={ classes.ParentApp }>
                    <button onClick={ toggleReactChild }>Toggle React Child</button>
                </div>
            </div>
        </div>
    );
};

export default TopSection;