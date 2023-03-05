"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var express_1 = require("express");
var demoServers_1 = require("../servers/demoServers");
var router = (0, express_1.Router)();
var vaildator = [
    (0, express_validator_1.body)('username').isString().withMessage('用户名类型错误'),
    (0, express_validator_1.body)('password').isString().withMessage('密码类型错误'),
];
router.get('/index', vaildator, demoServers_1.demo);
exports.default = router;
