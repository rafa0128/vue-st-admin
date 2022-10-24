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
        path: '/home'
    },
    {
        name: '服务端测试',
        icon: 'fas fa-server',
        children: [
            {
                name: '手工测试',
                path: '/service-test/api-manual-test'
            },

            {
                name: '自动化测试',
                path: '/service-test/api-automation-test'
            },
            {
                name: '压力测试',
                path: '/service-test/api-stress-test'
            },
            {
                name: '服务监控',
                path: '/service-test/service-monitor'
            }
        ]
    },
    {
        name: '客户端测试',
        icon: 'fa fa-mobile',
        path: '/sub-menu-1'
    },
    {
        name: 'WEB端测试',
        icon: 'fas fa-globe',
        path: '/sub-menu-2'
    },
    {
        name: '日志上报',
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
    },
    {
        name: '测试工具',
        icon: 'fas fa-wrench',
        path: '/sub-menu-2'
    },
    {
        name: '代码生成器',
        icon: 'fas fa-code',
        path: '/sub-menu-2'
    },
    {
        name: '个人设置',
        icon: 'fas fa-cog',
        path: '/sub-menu-2'
    },
    {
        name: '用户管理',
        icon: 'fas fa-user',
        path: '/sub-menu-2'
    },
];
