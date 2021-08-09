import {useRoute, useRouter} from 'vue-router';
import {onMounted, onUnmounted, watch} from 'vue';

const useGlobalRouter = () => {
    const route = useRoute();
    const router = useRouter();
    let routeUnsubscribe;
    let dispatching = false;

    const globalRouterListener = (event) => {
        if (!dispatching) {
            router.push(event.detail.pathname);
        } else {
            dispatching = false;
        }
    };

    onMounted(() => {
        routeUnsubscribe = watch(route, (newValue, oldValue) => {
            const event = new CustomEvent('microFrontendGlobalRouter', {
                detail: {
                    pathname: location.pathname
                }
            });
            dispatching = true;
            window.dispatchEvent(event);
        });
        window.addEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });

    onUnmounted(() => {
        routeUnsubscribe();
        window.removeEventListener('microFrontendGlobalRouter', globalRouterListener, true);
    });
};

export default useGlobalRouter;