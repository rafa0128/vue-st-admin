import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
import { version } from '../../../../package.json';
import { DateTime } from 'luxon';
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.version = version;
        _this.currentYear = DateTime.now().toFormat('y');
        return _this;
    }
    Footer = __decorate([
        Options({})
    ], Footer);
    return Footer;
}(Vue));
export default Footer;
//# sourceMappingURL=footer.js.map