import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import Dropdown from '@/components/dropdown/dropdown.vue';
import { DateTime } from 'luxon';
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "user", {
        get: function () {
            return this.$store.getters['auth/user'];
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.logout = function () {
        this.$store.dispatch('auth/logout');
    };
    Object.defineProperty(User.prototype, "readableCreatedAtDate", {
        get: function () {
            return DateTime.fromISO(this.user.createdAt).toFormat('dd LLLL yyyy');
        },
        enumerable: false,
        configurable: true
    });
    User = __decorate([
        Options({
            name: 'user-dropdown',
            components: {
                'app-dropdown': Dropdown
            }
        })
    ], User);
    return User;
}(Vue));
export default User;
//# sourceMappingURL=user.js.map