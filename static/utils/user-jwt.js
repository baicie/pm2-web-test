"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSign = exports.decode = exports.jwtAuth = void 0;
var express_jwt_1 = require("express-jwt"); // 引入express-jwt模块
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // 引入验证jsonwebtoken模块
var constant_1 = require("./constant"); // 引入自定义的jwt密钥
// 验证token是否过期
exports.jwtAuth = (0, express_jwt_1.expressjwt)({
    // 设置密钥
    secret: constant_1.PRIVATE_KEY,
    // 设置为true表示校验，false表示不校验
    credentialsRequired: true,
    algorithms: ['ES256'],
    // 自定义获取token的函数
    // getToken: (req) => {
    //   if (
    //     req.headers.authorization &&
    //     req.headers.authorization.split(' ')[0] === 'Bearer'
    //   ) {
    //     return req.headers.authorization.split(' ')[1];
    //   } else if (req.headers && req.headers['token']) {
    //     return req.headers['token'];
    //   }
    //   return undefined;
    // },
    // 设置jwt认证白名单，比如/api/login登录接口不需要拦截
}).unless({
    path: [
        '/',
        '/api/demo/index',
        '/api/user/has_admin',
        '/api/user/create_admin',
        '/api/user/login',
        '/api/user/logout',
        '/api/pm2/list',
        '/api/pm2/stop',
        '/api/pm2/reload',
    ],
});
// jwt-token解析
function decode(req) {
    var token = req.get('Authorization');
    if (!token)
        return;
    return jsonwebtoken_1.default.verify(token, constant_1.PRIVATE_KEY);
}
exports.decode = decode;
function jwtSign(userId, role) {
    return jsonwebtoken_1.default.sign({
        userid: userId,
        role: role,
    }, constant_1.PRIVATE_KEY, {
        expiresIn: '1d',
    });
}
exports.jwtSign = jwtSign;
