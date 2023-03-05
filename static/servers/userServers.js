"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.deleteAllAdminUsers = exports.createAdmin = exports.hasAdmin = void 0;
var boom_1 = __importDefault(require("@hapi/boom"));
var express_validator_1 = require("express-validator");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var entity_1 = require("../entity");
var utils_1 = require("../utils");
var db_1 = __importDefault(require("../utils/db/db"));
var error_handle_1 = require("../utils/error-handle");
var sucess_handle_1 = require("../utils/sucess-handle");
var userRepository = db_1.default.getRepository(entity_1.User);
/**
 * 查询是否有管理员 没有显示创建管理员
 * @param req
 * @param res
 * @param next
 */
function hasAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userRepository.findOneBy({
                        role: 'admin',
                    })];
                case 1:
                    result = _a.sent();
                    // const result = false;
                    res.json({
                        code: utils_1.CODE_SUCCESS,
                        msg: utils_1.MESSAGE_SUCCESS,
                        data: Boolean(result),
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.hasAdmin = hasAdmin;
/**
 * 创建新管理
 * @param req
 * @param res
 * @param next
 */
function createAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var err, _a, username, password, admin, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    err = (0, express_validator_1.validationResult)(req);
                    if (!!err.isEmpty()) return [3 /*break*/, 1];
                    next(boom_1.default.badRequest('error', err.array()));
                    return [3 /*break*/, 8];
                case 1:
                    _a = req.body, username = _a.username, password = _a.password;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, , 8]);
                    return [4 /*yield*/, userRepository.findOneBy({
                            role: 'admin',
                            username: username,
                        })];
                case 3:
                    admin = _b.sent();
                    if (!admin) return [3 /*break*/, 4];
                    next(boom_1.default.badRequest('error', res.__('user.admin.adminExistence')));
                    return [3 /*break*/, 6];
                case 4:
                    result = userRepository.create({
                        role: 'admin',
                        username: username,
                        password: password,
                    });
                    return [4 /*yield*/, userRepository.save(result)];
                case 5:
                    _b.sent();
                    (0, sucess_handle_1.defaultSucesshandler)(res, res.__('user.admin.createSuccessMessage'));
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    (0, error_handle_1.defaultErrorHandler)(res, error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.createAdmin = createAdmin;
function deleteAllAdminUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    userId = (0, utils_1.decode)(req);
                    return [4 /*yield*/, userRepository.findOneBy({
                            role: 'admin',
                            userid: userId,
                        })];
                case 1:
                    result = _a.sent();
                    if (!result) return [3 /*break*/, 3];
                    return [4 /*yield*/, userRepository.clear()];
                case 2:
                    _a.sent();
                    (0, sucess_handle_1.defaultSucesshandler)(res, res.__('user.admin.deleteSuccessMessage'));
                    return [3 /*break*/, 4];
                case 3:
                    next(boom_1.default.badRequest('error', res.__('user.admin.adminExistence')));
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    (0, error_handle_1.defaultErrorHandler)(res, error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteAllAdminUsers = deleteAllAdminUsers;
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var err, _a, username, password, user, token, result, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    err = (0, express_validator_1.validationResult)(req);
                    if (!!err.isEmpty()) return [3 /*break*/, 1];
                    next(boom_1.default.badRequest('error', err.array()));
                    return [3 /*break*/, 5];
                case 1:
                    _a = req.body, username = _a.username, password = _a.password;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, userRepository.findOneBy({
                            username: username,
                            password: password,
                        })];
                case 3:
                    user = _b.sent();
                    // console.log("user", user);
                    if (user) {
                        token = jsonwebtoken_1.default.sign({
                            userid: user.userid,
                            role: user.role,
                        }, utils_1.PRIVATE_KEY, {
                            expiresIn: '1d',
                        });
                        result = __assign(__assign({}, user), { password: '', token: token });
                        res.json({
                            code: utils_1.CODE_SUCCESS,
                            msg: utils_1.MESSAGE_SUCCESS,
                            data: result,
                        });
                    }
                    else {
                        next(boom_1.default.badRequest('error', res.__('user.admin.adminExistence')));
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    console.log(error_3 instanceof Error, error_3.message);
                    (0, error_handle_1.defaultErrorHandler)(res, error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
