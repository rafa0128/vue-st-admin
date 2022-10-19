import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
var ForgotPassword = /** @class */ (function (_super) {
    __extends(ForgotPassword, _super);
    function ForgotPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        return _this;
    }
    ForgotPassword.prototype.mounted = function () {
        this.appElement = document.getElementById('app');
        this.appElement.classList.add('login-page');
    };
    ForgotPassword.prototype.unmounted = function () {
        this.appElement.classList.remove('login-page');
    };
    ForgotPassword = __decorate([
        Options({})
    ], ForgotPassword);
    return ForgotPassword;
}(Vue));
export default ForgotPassword;
//# sourceMappingURL=forgot-password.js.map