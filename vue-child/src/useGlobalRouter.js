import {useRoute} from 'vue-router';
import {watch} from 'vue';

const useGlobalRouter = () => {
    const route = useRoute();
    const unsubscribe = watch(route, (newValue, oldValue) => console.log('VueWatch2', newValue.fullPath));
};

export default useGlobalRouter;