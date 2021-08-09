import {useHistory} from 'react-router';
import {useEffect} from 'react';

export default () => {
    const history = useHistory();
    useEffect(() => {
        let dispatching = false;
        const historyUnsubscribe = history.listen((location) => {
            const event = new CustomEvent('microFrontendGlobalRouter', {
                detail: {
                    pathname: location.pathname
                }
            });
            dispatching = true;
            window.dispatchEvent(event);
        });

        const globalRouterListener = (event) => {
            if (!dispatching) {
                history.push(event.detail.pathname);
            } else {
                dispatching = false;
            }
        };

        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);

        return () => {
            historyUnsubscribe();
            window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
        };
    }, []);
};