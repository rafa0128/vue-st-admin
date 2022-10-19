import { __decorate, __extends } from "tslib";
import { Options, Vue } from 'vue-class-component';
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeTab = 'ACTIVITY';
        return _this;
    }
    Profile.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    Profile = __decorate([
        Options({})
    ], Profile);
    return Profile;
}(Vue));
export default Profile;
//# sourceMappingURL=profile.js.map