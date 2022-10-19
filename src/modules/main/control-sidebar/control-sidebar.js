import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Select from '@/components/select/select.vue';
import { NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS, SIDEBAR_DARK_SKINS, SIDEBAR_LIGHT_SKINS } from '@/utils/themes';
var ControlSidebar = /** @class */ (function (_super) {
    __extends(ControlSidebar, _super);
    function ControlSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navbarLightVariants = NAVBAR_LIGHT_VARIANTS;
        _this.navbarDarkVariants = NAVBAR_DARK_VARIANTS;
        _this.darkSidebarSkins = SIDEBAR_DARK_SKINS;
        _this.lightSidebarSkins = SIDEBAR_LIGHT_SKINS;
        return _this;
    }
    ControlSidebar.prototype.handleDarkModeChange = function () {
        this.$store.dispatch('ui/toggleDarkMode');
    };
    ControlSidebar.prototype.onNavbarVariantChange = function (event) {
        this.$store.dispatch('ui/setNavbarVariant', event.target.value);
    };
    ControlSidebar.prototype.onSidebarSkinChange = function (event) {
        this.$store.dispatch('ui/setSidebarSkin', event.target.value);
    };
    Object.defineProperty(ControlSidebar.prototype, "darkModeSelected", {
        get: function () {
            return this.$store.getters['ui/darkModeSelected'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ControlSidebar.prototype, "navbarVariant", {
        get: function () {
            return this.$store.getters['ui/navbarVariant'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ControlSidebar.prototype, "sidebarSkin", {
        get: function () {
            return this.$store.getters['ui/sidebarSkin'];
        },
        enumerable: false,
        configurable: true
    });
    ControlSidebar = __decorate([
        Options({
            name: 'app-control-sidebar',
            components: {
                'app-checkbox': Checkbox,
                'app-select': Select
            }
        })
    ], ControlSidebar);
    return ControlSidebar;
}(Vue));
export default ControlSidebar;
//# sourceMappingURL=control-sidebar.js.map