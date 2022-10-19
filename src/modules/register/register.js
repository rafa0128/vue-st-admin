import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Options, Vue } from 'vue-class-component';
import { registerByAuth, registerByGoogle, registerByFacebook } from '@/services/auth';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';
import { useToast } from 'vue-toastification';
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        _this.email = '';
        _this.password = '';
        _this.rePassword = '';
        _this.agreeTerms = false;
        _this.isAuthLoading = false;
        _this.isFacebookLoading = false;
        _this.isGoogleLoading = false;
        _this.toast = useToast();
        return _this;
    }
    Register.prototype.mounted = function () {
        this.appElement = document.getElementById('app');
        this.appElement.classList.add('register-page');
    };
    Register.prototype.unmounted = function () {
        this.appElement.classList.remove('register-page');
    };
    Register.prototype.registerByAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isAuthLoading = true;
                        return [4 /*yield*/, registerByAuth(this.email, this.password)];
                    case 1:
                        token = _a.sent();
                        this.$store.dispatch('auth/login', token);
                        this.toast.success('Register succeeded');
                        this.isAuthLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.toast.error(error_1.message);
                        this.isAuthLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Register.prototype.registerByFacebook = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isFacebookLoading = true;
                        return [4 /*yield*/, registerByFacebook()];
                    case 1:
                        token = _a.sent();
                        this.$store.dispatch('auth/login', token);
                        this.toast.success('Register succeeded');
                        this.isFacebookLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.toast.error(error_2.message);
                        this.isFacebookLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Register.prototype.registerByGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isGoogleLoading = true;
                        return [4 /*yield*/, registerByGoogle()];
                    case 1:
                        token = _a.sent();
                        this.$store.dispatch('auth/login', token);
                        this.toast.success('Register succeeded');
                        this.isGoogleLoading = false;
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.toast.error(error_3.message);
                        this.isGoogleLoading = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Register = __decorate([
        Options({
            components: {
                'app-checkbox': Checkbox,
                'app-input': Input,
                'app-button': Button
            }
        })
    ], Register);
    return Register;
}(Vue));
export default Register;
//# sourceMappingURL=register.js.map