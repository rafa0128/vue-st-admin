import { ref, provide, nextTick } from 'vue-demi'
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'App',
    setup() {
        const isRouterActive = ref(true);

        provide('reload', () => {
            isRouterActive.value = false;
            nextTick(() => {
                isRouterActive.value = true;
            })
        });
        return{
            isRouterActive
        };
    }
});
