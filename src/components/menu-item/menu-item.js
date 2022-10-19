import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMenuExtended = false;
        _this.isExpandable = false;
        _this.isMainActive = false;
        _this.isOneOfChildrenActive = false;
        return _this;
    }
    MenuItem.prototype.mounted = function () {
        var _this = this;
        this.isExpandable =
            this.menuItem &&
                this.menuItem.children &&
                this.menuItem.children.length > 0;
        this.calculateIsActive(this.$router.currentRoute.value.path);
        this.$router.afterEach(function (to) {
            _this.calculateIsActive(to.path);
        });
    };
    MenuItem.prototype.handleMainMenuAction = function () {
        if (this.isExpandable) {
            this.toggleMenu();
            return;
        }
        this.$router.replace(this.menuItem.path);
    };
    MenuItem.prototype.toggleMenu = function () {
        this.isMenuExtended = !this.isMenuExtended;
    };
    MenuItem.prototype.calculateIsActive = function (url) {
        var _this = this;
        this.isMainActive = false;
        this.isOneOfChildrenActive = false;
        if (this.isExpandable) {
            this.menuItem.children.forEach(function (item) {
                if (item.path === url) {
                    _this.isOneOfChildrenActive = true;
                    _this.isMenuExtended = true;
                }
            });
        }
        else if (this.menuItem.path === url) {
            this.isMainActive = true;
        }
        if (!this.isMainActive && !this.isOneOfChildrenActive) {
            this.isMenuExtended = false;
        }
    };
    MenuItem = __decorate([
        Options({
            name: 'app-menu-item',
            props: {
                menuItem: Object,
                icon: String,
                type: String,
                placeholder: String,
                autocomplete: String
            }
        })
    ], MenuItem);
    return MenuItem;
}(Vue));
export default MenuItem;
//# sourceMappingURL=menu-item.js.map