import {useHistory} from 'react-router';
import {useEffect} from 'react';

export default () => {
    const history = useHistory();
    useEffect(() => {
        const historyUnsubscribe = history.listen((location) => {
            const event = new CustomEvent('microFrontendGlobalRouter', {
                detail: {
                    pathname: location.pathname
                }
            });
            window.dispatchEvent(event);
        });

        const globalRouterListener = (event) => {
            console.log('ReactReceivedEvent', event);
        };

        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);

        return () => {
            historyUnsubscribe();
            window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
        };
    }, []);
};