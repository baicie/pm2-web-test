"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSucesshandler = void 0;
var constant_1 = require("./constant");
function defaultSucesshandler(res, data) {
    if (data === void 0) { data = null; }
    res.json({
        code: constant_1.CODE_SUCCESS,
        msg: constant_1.MESSAGE_SUCCESS,
        data: data,
    });
}
exports.defaultSucesshandler = defaultSucesshandler;
