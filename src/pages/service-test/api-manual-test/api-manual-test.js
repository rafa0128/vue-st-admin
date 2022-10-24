/* eslint-disable */
import { defineComponent } from 'vue';
import { reactive } from 'vue';
export default defineComponent({
    name: 'ApiManualTest',
    setup: function () {
        var formInline = reactive({
            user: '',
            region: '',
        });
        return {
            formInline: formInline
        };
    }
});
//# sourceMappingURL=api-manual-test.js.map