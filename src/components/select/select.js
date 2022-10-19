import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import { v4 as uuidv4 } from 'uuid';
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ID = uuidv4();
        return _this;
    }
    Select.prototype.onValueChange = function (event) {
        this.$emit('update:modelValue', event.target.checked);
    };
    Object.defineProperty(Select.prototype, "isNoneSelected", {
        get: function () {
            var _this = this;
            if (!this.modelValue) {
                return true;
            }
            return (this.options.findIndex(function (option) { return option.value === _this.modelValue; }) < 0);
        },
        enumerable: false,
        configurable: true
    });
    Select = __decorate([
        Options({
            name: 'app-select',
            props: {
                modelValue: String,
                disabled: {
                    type: Boolean,
                    default: false
                },
                type: {
                    type: String,
                    default: 'default'
                },
                options: {
                    type: Array,
                    default: []
                }
            },
            emits: ['update:modelValue']
        })
    ], Select);
    return Select;
}(Vue));
export default Select;
//# sourceMappingURL=select.js.map