import {Options, Vue} from 'vue-class-component';
import {loginByAuth} from '@/services/auth';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';
import {useToast} from 'vue-toastification';

@Options({
    components: {
        'app-checkbox': Checkbox,
        'app-input': Input,
        'app-button': Button
    }
})
export default class Login extends Vue {
    private appElement: HTMLElement | null = null;
    public email: string = '';
    public password: string = '';
    public rememberMe: boolean = false;
    public isAuthLoading: boolean = false;
    public isFacebookLoading: boolean = false;
    public isGoogleLoading: boolean = false;
    private toast = useToast();

    public mounted(): void {
        this.email = 'admin@example.com';
        this.password = 'admin';
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('login-page');
    }

    public unmounted(): void {
        (this.appElement as HTMLElement).classList.remove('login-page');
    }

    public async loginByAuth(): Promise<void> {
        try {
            this.isAuthLoading = true;
            const token = await loginByAuth(this.email, this.password);
            this.$store.dispatch('auth/login', token);
            this.toast.success('Login succeeded');
            this.isAuthLoading = false;
        } catch (error: any) {
            this.toast.error(error.message);
            this.isAuthLoading = false;
        }
    }
}
