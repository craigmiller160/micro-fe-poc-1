import {useRoute} from 'vue-router';
import {onMounted, onUnmounted, watch} from 'vue';

const useGlobalRouter = () => {
    const route = useRoute();
    let unsubscribe;

    onMounted(() => {
        unsubscribe = watch(route, (newValue, oldValue) => console.log('VueWatch2', newValue.fullPath));
    });

    onUnmounted(() => unsubscribe());
};

export default useGlobalRouter;