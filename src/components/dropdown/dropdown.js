import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import DropdownMenu from './dropdown-menu/dropdown-menu.vue';
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOpen = false;
        _this.size = 'md';
        return _this;
    }
    Dropdown.prototype.mounted = function () {
        this.dropdownElement = this.$refs.dropdown;
        document.addEventListener('click', this.documentClick);
    };
    Dropdown.prototype.unmounted = function () {
        document.removeEventListener('click', this.documentClick);
    };
    Dropdown.prototype.documentClick = function (event) {
        var target = event.target;
        if (this.dropdownElement !== target &&
            !this.dropdownElement.contains(target)) {
            this.isOpen = false;
        }
    };
    Dropdown.prototype.toggleDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    Dropdown = __decorate([
        Options({
            name: 'app-dropdown',
            components: {
                'app-dropdown-menu': DropdownMenu
            },
            props: {
                size: String
            }
        })
    ], Dropdown);
    return Dropdown;
}(Vue));
export default Dropdown;
//# sourceMappingURL=dropdown.js.map