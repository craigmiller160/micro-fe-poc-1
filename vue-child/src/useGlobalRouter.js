import {useRoute} from 'vue-router';
import {onMounted, onUnmounted, watch} from 'vue';

const useGlobalRouter = () => {
    const route = useRoute();
    let unsubscribe;

    const globalRouterListener = (event) => {
        console.log('VueReceivedEvent', event);
    };

    onMounted(() => {
        unsubscribe = watch(route, (newValue, oldValue) => {
            const event = new CustomEvent('microFrontendGlobalRouter', {
                detail: {
                    pathname: location.pathname
                }
            });
            window.dispatchEvent(event);
        });
        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });

    onUnmounted(() => {
        unsubscribe();
        window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });
};

export default useGlobalRouter;