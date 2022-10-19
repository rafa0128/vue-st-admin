import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import { v4 as uuidv4 } from 'uuid';
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ID = uuidv4();
        return _this;
    }
    Checkbox.prototype.onValueChange = function (event) {
        this.$emit('update:modelValue', event.target.checked);
    };
    Checkbox = __decorate([
        Options({
            name: 'app-checkbox',
            props: {
                modelValue: Boolean,
                type: {
                    type: String,
                    default: 'default'
                }
            },
            emits: ['update:modelValue']
        })
    ], Checkbox);
    return Checkbox;
}(Vue));
export default Checkbox;
//# sourceMappingURL=checkbox.js.map