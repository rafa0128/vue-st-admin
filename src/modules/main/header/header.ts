/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Messages from './messages/messages.vue';
import Notifications from './notifications/notifications.vue';
import User from './user/user.vue';
import {useStore} from "vuex";
import {defineComponent, onMounted} from 'vue';
import {  inject } from 'vue-demi'
export default defineComponent({
    name: 'Header',
    components: {
        'messages-dropdown': Messages,
        'notifications-dropdown': Notifications,
        'user-dropdown': User
    },
    setup() {
        let headerElement: HTMLElement | null = null;
        const store = useStore();
        const reload = inject('reload');
        onMounted(async() => {
            headerElement = document.getElementById('main-header') as HTMLElement;
        });

        const onToggleMenuSidebar = () => {
            store.dispatch('ui/toggleMenuSidebar');
        };

        const onToggleControlSidebar = () => {
            store.dispatch('ui/toggleControlSidebar');
        };

        const darkModeSelected = () => {
            return store.getters['ui/darkModeSelected'];
        };

        return {
            headerElement,
            onToggleMenuSidebar,
            onToggleControlSidebar,
            darkModeSelected,
            reload
        };
    }
});