import React from 'react';
import classes from './Pager.css';
import {Route, Switch, useHistory, useLocation, useRouteMatch} from 'react-router';
import Page from './Page';

const Pager = () => {
    const location = useLocation();
    const history = useHistory();

    const btnClasses1 = location.pathname === '/page/1' ? classes.active : '';
    const btnClasses2 = location.pathname === '/page/2' ? classes.active : '';
    const btnClasses3 = location.pathname === '/page/3' ? classes.active : '';

    const goToPage = (pageNum) => history.push(`/page/${pageNum}`);

    return (
        <div className={ classes.Pager }>
            <div className={ classes.buttons }>
                <button
                    className={ btnClasses1 }
                    onClick={ () => goToPage(1) }
                >
                    Page 1
                </button>
                <button
                    className={ btnClasses2 }
                    onClick={ () => goToPage(2) }
                >
                    Page 2
                </button>
                <button
                    className={ btnClasses3 }
                    onClick={ () => goToPage(3) }
                >
                    Page 3
                </button>
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