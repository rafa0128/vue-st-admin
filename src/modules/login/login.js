import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Options, Vue } from 'vue-class-component';
import { loginByAuth } from '@/services/auth';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';
import { useToast } from 'vue-toastification';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        _this.email = '';
        _this.password = '';
        _this.rememberMe = false;
        _this.isAuthLoading = false;
        _this.isFacebookLoading = false;
        _this.isGoogleLoading = false;
        _this.toast = useToast();
        return _this;
    }
    Login.prototype.mounted = function () {
        this.email = 'admin@example.com';
        this.password = 'admin';
        this.appElement = document.getElementById('app');
        this.appElement.classList.add('login-page');
    };
    Login.prototype.unmounted = function () {
        this.appElement.classList.remove('login-page');
    };
    Login.prototype.loginByAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.isAuthLoading = true;
                        return [4 /*yield*/, loginByAuth(this.email, this.password)];
                    case 1:
                        token = _a.sent();
                        this.$store.dispatch('auth/login', token);
                        this.toast.success('Login succeeded');
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
    Login = __decorate([
        Options({
            components: {
                'app-checkbox': Checkbox,
                'app-input': Input,
                'app-button': Button
            }
        })
    ], Login);
    return Login;
}(Vue));
export default Login;
//# sourceMappingURL=login.js.map