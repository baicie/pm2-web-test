"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
// import nodemailer from 'nodemailer';
var config_json_1 = __importDefault(require("../config.json"));
var insts = new Map();
// let mail;
var WEBROOT = path_1.default.resolve(__dirname, '..'); //路径
var WEBROOT_SERVER = __dirname;
var WEBROOT_RUNTIME = path_1.default.resolve(__dirname, '../..');
var WEBROOT_LOG = path_1.default.join(WEBROOT_RUNTIME, 'log');
var WEBROOT_STATIC = path_1.default.join(WEBROOT, 'static/');
var WEBCONFIG = config_json_1.default;
fs_extra_1.default.ensureDirSync(WEBROOT_LOG);
// if (WEBCONFIG.mail && WEBCONFIG.mail.enable) {
//   mail = nodemailer.createTransport(WEBCONFIG.mail);
// }
/**
 * 获取一个model实例，如果不存在则创建一个新的返回
 * @param {*} m class
 * @example
 * yapi.getInst(groupModel, arg1, arg2)
 */
function getInst(m) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!insts.get(m)) {
        insts.set(m, new m(args));
    }
    return insts.get(m);
}
function delInst(m) {
    try {
        insts.delete(m);
    }
    catch (err) {
        console.error(err); // eslint-disable-line
    }
}
var r = {
    fs: fs_extra_1.default,
    path: path_1.default,
    WEBROOT: WEBROOT,
    WEBROOT_SERVER: WEBROOT_SERVER,
    WEBROOT_RUNTIME: WEBROOT_RUNTIME,
    WEBROOT_LOG: WEBROOT_LOG,
    WEBCONFIG: WEBCONFIG,
    WEBROOT_STATIC: WEBROOT_STATIC,
    getInst: getInst,
    delInst: delInst,
    getInsts: insts,
};
// if (mail) r.mail = mail;
exports.default = r;
