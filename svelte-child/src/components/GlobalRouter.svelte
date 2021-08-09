<script>
    import {onDestroy, onMount} from 'svelte';
    import { globalHistory } from 'svelte-routing/src/history';

    let historyUnsubscribe;
    let dispatching = false;

    const globalRouterListener = (event) => {
        if (!dispatching) {
            // TODO how to change route in svelte?
        } else {
            dispatching = false;
        }
    };

    onMount(() => {
        historyUnsubscribe = globalHistory.listen((history) => {
            console.log('SvelteListen', history.location.pathname);
            const event = new CustomEvent('microFrontendGlobalRouter', {
                detail: {
                    pathname: history.location.pathname
                }
            });
            dispatching = true;
            window.dispatchEvent(event);
        });
        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });

    onDestroy(() => {
        historyUnsubscribe();
        window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });
</script>

<span></span>