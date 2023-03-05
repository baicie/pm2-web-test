"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_jwt_1 = require("../utils/user-jwt");
var demo_1 = __importDefault(require("./demo"));
var pm2_1 = __importDefault(require("./pm2"));
var user_1 = __importDefault(require("./user"));
var router = (0, express_1.Router)();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
router.use(user_jwt_1.jwtAuth);
router.use('/demo', demo_1.default);
router.use('/user', user_1.default);
router.use('/pm2', pm2_1.default);
router.use(function (err, req, res) {
    // 自定义用户认证失败的错误返回
    // console.log("err===", JSON.stringify(err));
    if (err && err.name === 'UnauthorizedError') {
        var _a = err.status, status = _a === void 0 ? 401 : _a;
        // 抛出401异常
        res.status(200).json({
            code: status,
            msg: 'token失效，请重新登录',
            data: null,
        });
    }
    else {
        var output = (err || {}).output;
        var errCode = (output && output.statusCode) || 500;
        var errMsg = err.message;
        var errData = err.data;
        res.status(200).json({
            code: errCode,
            msg: errMsg,
            data: errData,
        });
    }
});
exports.default = router;
