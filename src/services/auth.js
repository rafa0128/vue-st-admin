import { __awaiter, __generator } from "tslib";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Gatekeeper } from 'gatekeeper-client-sdk';
var getError = function (error) {
    var message = error.message || 'Failed';
    return new Error(message);
};
export var loginByAuth = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var token, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.loginByAuth(email, password)];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_1 = _a.sent();
                throw getError(error_1);
            case 3: return [2 /*return*/];
        }
    });
}); };
export var registerByAuth = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var token, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.registerByAuth(email, password)];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_2 = _a.sent();
                throw getError(error_2);
            case 3: return [2 /*return*/];
        }
    });
}); };
export var loginByGoogle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.loginByGoogle()];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_3 = _a.sent();
                throw getError(error_3);
            case 3: return [2 /*return*/];
        }
    });
}); };
export var registerByGoogle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.registerByGoogle()];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_4 = _a.sent();
                throw getError(error_4);
            case 3: return [2 /*return*/];
        }
    });
}); };
export var loginByFacebook = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.loginByFacebook()];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_5 = _a.sent();
                throw getError(error_5);
            case 3: return [2 /*return*/];
        }
    });
}); };
export var registerByFacebook = function () { return __awaiter(void 0, void 0, void 0, function () {
    var token, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.registerByFacebook()];
            case 1:
                token = _a.sent();
                return [2 /*return*/, token];
            case 2:
                error_6 = _a.sent();
                throw getError(error_6);
            case 3: return [2 /*return*/];
        }
    });
}); };
export var getProfile = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Gatekeeper.getProfile()];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
            case 2:
                error_7 = _a.sent();
                throw getError(error_7);
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=auth.js.map