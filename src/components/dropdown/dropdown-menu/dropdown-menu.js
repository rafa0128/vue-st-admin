import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
var DropdownMenu = /** @class */ (function (_super) {
    __extends(DropdownMenu, _super);
    function DropdownMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropdownMenuElement = null;
        return _this;
    }
    DropdownMenu.prototype.mounted = function () {
        this.dropdownMenuElement = this.$refs.dropdownMenu;
    };
    Object.defineProperty(DropdownMenu.prototype, "fixStyles", {
        get: function () {
            if (this.dropdownMenuElement) {
                var windowWidth = document.getElementById('app').offsetWidth;
                var offsetLeft = this.dropdownMenuElement.getBoundingClientRect().left;
                var offsetWidth = this.dropdownMenuElement.offsetWidth;
                var visiblePart = windowWidth - offsetLeft;
                if (offsetLeft < 0) {
                    return {
                        left: 'inherit',
                        right: "".concat(offsetLeft - 5, "px")
                    };
                }
                else if (visiblePart < offsetWidth) {
                    return { left: 'inherit', right: "0px" };
                }
                return { left: 'inherit', right: "0px" };
            }
            return { left: 'inherit', right: "0px" };
        },
        enumerable: false,
        configurable: true
    });
    DropdownMenu = __decorate([
        Options({
            name: 'app-dropdown-menu',
            props: {
                size: String
            }
        })
    ], DropdownMenu);
    return DropdownMenu;
}(Vue));
export default DropdownMenu;
//# sourceMappingURL=dropdown-menu.js.map