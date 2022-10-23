/* eslint-disable */
import {loginByAuth} from '@/services/auth';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';
import {ref} from 'vue';
import {defineComponent, onMounted, onUnmounted} from 'vue';
import {useStore} from 'vuex';
import {Lock, Avatar} from '@element-plus/icons-vue';
import {ElMessage} from 'element-plus';
export default defineComponent({
    name: 'Login',
    components: {
        'app-checkbox': Checkbox,
        'app-input': Input,
        'app-button': Button,
    },
    setup() {
        let appElement: HTMLElement | null = null;
        const email = ref('');
        const password = ref('');
        const activeName = ref('first');
        const store = useStore();
        const loading = ref(false);
        const toastSuccess = () => {
            ElMessage({
                message: '登录成功',
                type: 'success',
            });
        };
        const toastError = (content:string) => {
            ElMessage({
                message: content,
                type: 'error',
            });
        };
        onMounted(() => {
            email.value = 'admin@example.com';
            password.value = 'admin';
            appElement = document.getElementById('app') as HTMLElement;
            appElement.classList.add('login-page');
        });
        onUnmounted(() => {
            (appElement as HTMLElement).classList.remove('login-page');
        });

        const loginByaccount = async () => {
            try {
                if(email.value && password.value){
                    loading.value = true;
                    const token = await loginByAuth(email.value, password.value);
                    store.dispatch('auth/login', token);
                    toastSuccess();
                    loading.value = false;
                }else {
                    toastError('账号和密码不能为空');
                }

            } catch (error: any) {
                toastError('登录异常');
                loading.value = false;
            }
        };

        return {
            appElement,
            email,
            password,
            activeName,
            Lock,
            Avatar,
            loading,
            toastSuccess,
            toastError,
            loginByaccount
        };
    }
});