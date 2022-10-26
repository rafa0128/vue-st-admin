import { ref, provide, nextTick } from 'vue-demi';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App',
    setup: function () {
        var isRouterActive = ref(true);
        provide('reload', function () {
            isRouterActive.value = false;
            nextTick(function () {
                isRouterActive.value = true;
            });
        });
        return {
            isRouterActive: isRouterActive
        };
    }
});
//# sourceMappingURL=app.js.map