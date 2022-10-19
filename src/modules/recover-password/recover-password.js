import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/button/button.vue';
import Input from '@/components/input/input.vue';
import { useToast } from 'vue-toastification';
var RecoverPassword = /** @class */ (function (_super) {
    __extends(RecoverPassword, _super);
    function RecoverPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        _this.password = '';
        _this.confirmPassword = '';
        _this.toast = useToast();
        return _this;
    }
    RecoverPassword.prototype.mounted = function () {
        this.appElement = document.getElementById('app');
        this.appElement.classList.add('login-page');
    };
    RecoverPassword.prototype.unmounted = function () {
        this.appElement.classList.remove('login-page');
    };
    RecoverPassword = __decorate([
        Options({
            components: {
                'app-input': Input,
                'app-button': Button
            }
        })
    ], RecoverPassword);
    return RecoverPassword;
}(Vue));
export default RecoverPassword;
//# sourceMappingURL=recover-password.js.map