import { __decorate, __extends } from "tslib";
import { calculateWindowSize } from '@/utils/helpers';
import { Options, Vue } from 'vue-class-component';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(App.prototype, "currentWindowSize", {
        get: function () {
            if (this.$store.getters['ui/screenSize'] !== this.windowSize) {
                this.$store.dispatch('ui/setWindowSize', this.windowSize);
            }
            return this.windowSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App.prototype, "windowSize", {
        get: function () {
            return calculateWindowSize(this.$windowWidth);
        },
        enumerable: false,
        configurable: true
    });
    App = __decorate([
        Options({
            watch: {
                currentWindowSize: function (value) {
                    console.log(value);
                }
            }
        })
    ], App);
    return App;
}(Vue));
export default App;
//# sourceMappingURL=app.js.map