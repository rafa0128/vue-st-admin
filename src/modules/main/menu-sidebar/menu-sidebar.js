import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import MenuItem from '@/components/menu-item/menu-item.vue';
var MenuSidebar = /** @class */ (function (_super) {
    __extends(MenuSidebar, _super);
    function MenuSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = MENU;
        return _this;
    }
    Object.defineProperty(MenuSidebar.prototype, "user", {
        get: function () {
            return this.$store.getters['auth/user'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MenuSidebar.prototype, "sidebarSkin", {
        get: function () {
            return this.$store.getters['ui/sidebarSkin'];
        },
        enumerable: false,
        configurable: true
    });
    MenuSidebar = __decorate([
        Options({
            name: 'app-menu-sidebar',
            components: {
                'app-menu-item': MenuItem
            }
        })
    ], MenuSidebar);
    return MenuSidebar;
}(Vue));
export default MenuSidebar;
export var MENU = [
    {
        name: '主页',
        icon: 'fas fa-home',
        path: '/'
    },
    {
        name: '服务端测试',
        icon: 'fas fa-server',
        path: '/blank'
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
//# sourceMappingURL=menu-sidebar.js.map