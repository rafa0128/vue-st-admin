import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';
var Messages = /** @class */ (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Messages = __decorate([
        Options({
            name: 'messages-dropdown',
            components: {
                'app-dropdown': Dropdown
            }
        })
    ], Messages);
    return Messages;
}(Vue));
export default Messages;
//# sourceMappingURL=messages.js.map