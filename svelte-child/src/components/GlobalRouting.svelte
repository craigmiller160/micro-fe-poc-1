<script>
    import {onDestroy, onMount} from 'svelte';
    import { globalHistory } from 'svelte-routing/src/history';

    let unsubscribe;

    onMount(() => {
        unsubscribe = globalHistory.listen((history) => {
            console.log('SvelteListen', history.location.pathname);
        });
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<span></span>