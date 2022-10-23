import { __awaiter, __generator } from "tslib";
/* eslint-disable */
import { loginByAuth } from '@/services/auth';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';
import { ref } from 'vue';
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { Lock, Avatar } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
export default defineComponent({
    name: 'Login',
    components: {
        'app-checkbox': Checkbox,
        'app-input': Input,
        'app-button': Button,
    },
    setup: function () {
        var _this = this;
        var appElement = null;
        var email = ref('');
        var password = ref('');
        var activeName = ref('first');
        var store = useStore();
        var loading = ref(false);
        var toastSuccess = function () {
            ElMessage({
                message: '登录成功',
                type: 'success',
            });
        };
        var toastError = function (content) {
            ElMessage({
                message: content,
                type: 'error',
            });
        };
        onMounted(function () {
            email.value = 'admin@example.com';
            password.value = 'admin';
            appElement = document.getElementById('app');
            appElement.classList.add('login-page');
        });
        onUnmounted(function () {
            appElement.classList.remove('login-page');
        });
        var loginByaccount = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(email.value && password.value)) return [3 /*break*/, 2];
                        loading.value = true;
                        return [4 /*yield*/, loginByAuth(email.value, password.value)];
                    case 1:
                        token = _a.sent();
                        store.dispatch('auth/login', token);
                        toastSuccess();
                        loading.value = false;
                        return [3 /*break*/, 3];
                    case 2:
                        toastError('账号和密码不能为空');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        toastError('登录异常');
                        loading.value = false;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return {
            appElement: appElement,
            email: email,
            password: password,
            activeName: activeName,
            Lock: Lock,
            Avatar: Avatar,
            loading: loading,
            toastSuccess: toastSuccess,
            toastError: toastError,
            loginByaccount: loginByaccount
        };
    }
});
//# sourceMappingURL=login.js.map