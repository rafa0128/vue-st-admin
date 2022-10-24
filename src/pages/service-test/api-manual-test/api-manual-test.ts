/* eslint-disable */
import {defineComponent, onMounted, onUnmounted} from 'vue';
import { reactive } from 'vue'

export default defineComponent({
    name: 'ApiManualTest',
    setup(){
         const formInline = reactive({
            user: '',
             region: '',
         });
         return{
             formInline
         }
    }

});
