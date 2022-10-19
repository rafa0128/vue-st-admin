import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'button';
        _this.loading = false;
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(Button.prototype, "isDisabled", {
        get: function () {
            return this.loading || this.disabled;
        },
        enumerable: false,
        configurable: true
    });
    Button = __decorate([
        Options({
            name: 'app-button',
            props: {
                icon: String,
                type: String,
                block: String,
                theme: String,
                loading: Boolean,
                disabled: Boolean
            }
        })
    ], Button);
    return Button;
}(Vue));
export default Button;
//# sourceMappingURL=button.js.map