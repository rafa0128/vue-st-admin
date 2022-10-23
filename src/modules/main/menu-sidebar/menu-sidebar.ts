import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import MenuItem from '@/components/menu-item/menu-item.vue';

@Options({
    name: 'app-menu-sidebar',
    components: {
        'app-menu-item': MenuItem
    }
})
export default class MenuSidebar extends Vue {
    public menu = MENU;
    get user(): IUser {
        return this.$store.getters['auth/user'];
    }

    get sidebarSkin() {
        return this.$store.getters['ui/sidebarSkin'];
    }
}

export const MENU = [
    {
        name: '主页',
        icon: 'fas fa-home',
        path: '/'
    },
    {
        name: '接口测试',
        icon: 'fas fa-server',
        path: '/blank'
    },
    {
        name: '反馈日志',
        icon: 'fas fa-file',
        children: [
            {
                name: 'APP日志',
                path: '/sub-menu-1'
            },

            {
                name: '服务端日志',
                path: '/sub-menu-2'
            }
        ]
    }
];
