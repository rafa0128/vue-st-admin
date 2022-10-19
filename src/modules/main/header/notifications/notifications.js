import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';
var Notifications = /** @class */ (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notifications = __decorate([
        Options({
            name: 'notifications-dropdown',
            components: {
                'app-dropdown': Dropdown
            }
        })
    ], Notifications);
    return Notifications;
}(Vue));
export default Notifications;
//# sourceMappingURL=notifications.js.map