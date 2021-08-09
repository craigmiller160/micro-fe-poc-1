<script>
    import {onDestroy, onMount} from 'svelte';
    import { globalHistory } from 'svelte-routing/src/history';
    import { navigate } from 'svelte-routing';

    let historyUnsubscribe;
    let dispatching = false;
    let currentPathname = '';

    const globalRouterListener = (event) => {
        if (!dispatching) {
            navigate(event.detail.pathname);
        } else {
            dispatching = false;
        }
    };

    onMount(() => {
        historyUnsubscribe = globalHistory.listen((history) => {
            if (currentPathname !== history.location.pathname) {
                const event = new CustomEvent('microFrontendGlobalRouter', {
                    detail: {
                        pathname: history.location.pathname
                    }
                });
                dispatching = true;
                window.dispatchEvent(event);
            }
            currentPathname = history.location.pathname;
        });
        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });

    onDestroy(() => {
        historyUnsubscribe();
        window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });
</script>

<span></span>