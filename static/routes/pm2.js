"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var pm2Servers_1 = require("../servers/pm2Servers");
var router = (0, express_1.Router)();
// const vaildator = [
//   body('username').isString().withMessage('用户名类型错误'),
//   body('password').isString().withMessage('密码类型错误'),
// ];
router.get('/list', pm2Servers_1.pm2List);
var vaildatorId = [(0, express_validator_1.body)('id').notEmpty().withMessage('用户名类型错误')];
router.post('/stop', vaildatorId, pm2Servers_1.pm2Stop);
router.post('/reload', vaildatorId, pm2Servers_1.pm2Reload);
exports.default = router;
