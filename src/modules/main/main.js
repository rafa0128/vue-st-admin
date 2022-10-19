import { __awaiter, __decorate, __extends, __generator } from "tslib";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Options, Vue } from 'vue-class-component';
import Header from './header/header.vue';
import MenuSidebar from './menu-sidebar/menu-sidebar.vue';
import ControlSidebar from './control-sidebar/control-sidebar.vue';
import Footer from './footer/footer.vue';
import { getProfile } from '@/services/auth';
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appElement = null;
        return _this;
    }
    Main.prototype.mounted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.appElement = document.getElementById('app');
                        this.appElement.classList.add('sidebar-mini');
                        this.appElement.classList.add('layout-fixed');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getProfile()];
                    case 2:
                        user = _a.sent();
                        this.$store.dispatch('auth/getUser', user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.$store.dispatch('auth/logout');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.unmounted = function () {
        this.appElement.classList.remove('sidebar-mini');
        this.appElement.classList.remove('layout-fixed');
    };
    Object.defineProperty(Main.prototype, "watchLayoutChanges", {
        get: function () {
            if (!this.appElement) {
                return;
            }
            this.appElement.classList.remove('dark-mode');
            this.appElement.classList.remove('sidebar-closed');
            this.appElement.classList.remove('sidebar-collapse');
            this.appElement.classList.remove('sidebar-open');
            this.appElement.classList.remove('control-sidebar-slide-open');
            if (this.darkModeSelected) {
                this.appElement.classList.add('dark-mode');
            }
            if (!this.controlSidebarCollapsed) {
                this.appElement.classList.add('control-sidebar-slide-open');
            }
            if (this.menuSidebarCollapsed && this.screenSize === 'lg') {
                this.appElement.classList.add('sidebar-collapse');
            }
            else if (this.menuSidebarCollapsed && this.screenSize === 'xs') {
                this.appElement.classList.add('sidebar-open');
            }
            else if (!this.menuSidebarCollapsed && this.screenSize !== 'lg') {
                this.appElement.classList.add('sidebar-closed');
                this.appElement.classList.add('sidebar-collapse');
            }
            return this.appElement.classList.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "darkModeSelected", {
        get: function () {
            return this.$store.getters['ui/darkModeSelected'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "menuSidebarCollapsed", {
        get: function () {
            return this.$store.getters['ui/menuSidebarCollapsed'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "controlSidebarCollapsed", {
        get: function () {
            return this.$store.getters['ui/controlSidebarCollapsed'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Main.prototype, "screenSize", {
        get: function () {
            return this.$store.getters['ui/screenSize'];
        },
        enumerable: false,
        configurable: true
    });
    Main = __decorate([
        Options({
            components: {
                'app-header': Header,
                'menu-sidebar': MenuSidebar,
                'control-sidebar': ControlSidebar,
                'app-footer': Footer
            },
            watch: {
                watchLayoutChanges: function (_) { }
            }
        })
    ], Main);
    return Main;
}(Vue));
export default Main;
//# sourceMappingURL=main.js.map