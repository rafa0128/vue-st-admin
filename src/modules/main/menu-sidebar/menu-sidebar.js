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
        icon: 'fa-home',
        path: '/'
    },
    {
        name: 'labels.blank',
        path: '/blank'
    },
    {
        name: 'labels.mainMenu',
        children: [
            {
                name: 'labels.subMenu',
                path: '/sub-menu-1'
            },
            {
                name: 'labels.blank',
                path: '/sub-menu-2'
            }
        ]
    }
];
//# sourceMappingURL=menu-sidebar.js.map