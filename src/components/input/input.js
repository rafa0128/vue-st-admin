import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.onValueChange = function (event) {
        this.$emit('update:modelValue', event.target.value);
    };
    Input = __decorate([
        Options({
            name: 'app-input',
            props: {
                modelValue: String,
                icon: String,
                type: String,
                placeholder: String,
                autocomplete: String
            },
            emits: ['update:modelValue']
        })
    ], Input);
    return Input;
}(Vue));
export default Input;
//# sourceMappingURL=input.js.map