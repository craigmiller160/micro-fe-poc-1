import React from 'react';
import classes from './Pager.css';
import {Route, Switch, useLocation, useRouteMatch} from 'react-router';
import Page from './Page';

const Pager = () => {
    const location = useLocation();

    const btnClasses1 = location.pathname === '/page/1' ? classes.active : '';
    const btnClasses2 = location.pathname === '/page/2' ? classes.active : '';
    const btnClasses3 = location.pathname === '/page/3' ? classes.active : '';

    return (
        <div className={ classes.Pager }>
            <div className={ classes.buttons }>
                <button className={ btnClasses1 }>Page 1</button>
                <button className={ btnClasses2 }>Page 2</button>
                <button className={ btnClasses3 }>Page 3</button>
            </div>
            <div>
                <Switch>
                    <Route path="/page/:number" component={ Page } />
                </Switch>
            </div>
        </div>
    );
};

export default Pager;