<script>
    import {onDestroy, onMount} from 'svelte';
    import { globalHistory } from 'svelte-routing/src/history';
    import { navigate } from 'svelte-routing';

    let historyUnsubscribe;
    let dispatching = false;

    const globalRouterListener = (event) => {
        if (!dispatching) {
            navigate(event.detail.pathname);
        } else {
            dispatching = false;
        }
    };

    onMount(() => {
        historyUnsubscribe = globalHistory.listen((history) => {
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