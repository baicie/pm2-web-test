"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultI18nWarpper = void 0;
function defaultI18nWarpper(i18nStr) {
    return function (value, _a) {
        var req = _a.req, location = _a.location, path = _a.path;
        return req['__'](i18nStr, { value: value, location: location, path: path });
    };
}
exports.defaultI18nWarpper = defaultI18nWarpper;
