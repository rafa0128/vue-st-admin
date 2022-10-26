import { __awaiter, __generator } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Messages from './messages/messages.vue';
import Notifications from './notifications/notifications.vue';
import User from './user/user.vue';
import { useStore } from "vuex";
import { defineComponent, onMounted } from 'vue';
import { inject } from 'vue-demi';
export default defineComponent({
    name: 'Header',
    components: {
        'messages-dropdown': Messages,
        'notifications-dropdown': Notifications,
        'user-dropdown': User
    },
    setup: function () {
        var _this = this;
        var headerElement = null;
        var store = useStore();
        var reload = inject('reload');
        onMounted(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                headerElement = document.getElementById('main-header');
                return [2 /*return*/];
            });
        }); });
        var onToggleMenuSidebar = function () {
            store.dispatch('ui/toggleMenuSidebar');
        };
        var onToggleControlSidebar = function () {
            store.dispatch('ui/toggleControlSidebar');
        };
        var darkModeSelected = function () {
            return store.getters['ui/darkModeSelected'];
        };
        return {
            headerElement: headerElement,
            onToggleMenuSidebar: onToggleMenuSidebar,
            onToggleControlSidebar: onToggleControlSidebar,
            darkModeSelected: darkModeSelected,
            reload: reload
        };
    }
});
//# sourceMappingURL=header.js.map