"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var servers_1 = require("../servers");
var i18n_warpper_1 = require("../utils/i18n-warpper");
var router = (0, express_1.Router)();
router.get('/has_admin', servers_1.hasAdmin);
var createAdminValidation = [
    (0, express_validator_1.body)('username')
        .notEmpty()
        .withMessage((0, i18n_warpper_1.defaultI18nWarpper)('user.admin.emptyUserNameMessage'))
        .isString()
        .withMessage((0, i18n_warpper_1.defaultI18nWarpper)('user.admin.notStringUserNameMessage')),
    (0, express_validator_1.body)('password')
        .notEmpty()
        .withMessage((0, i18n_warpper_1.defaultI18nWarpper)('user.admin.emptyPasswordMessage'))
        .isString()
        .withMessage((0, i18n_warpper_1.defaultI18nWarpper)('user.admin.notStringPasswordMessage')),
];
router.post('/create_admin', createAdminValidation, servers_1.createAdmin);
router.post('/login', createAdminValidation, servers_1.login);
exports.default = router;
