/// <reference types="node" />
import path from 'path';
import fs from 'fs-extra';
/**
 * 获取一个model实例，如果不存在则创建一个新的返回
 * @param {*} m class
 * @example
 * yapi.getInst(groupModel, arg1, arg2)
 */
declare function getInst(m: any, ...args: any[]): any;
declare function delInst(m: any): void;
declare const r: {
    fs: typeof fs;
    path: path.PlatformPath;
    WEBROOT: string;
    WEBROOT_SERVER: string;
    WEBROOT_RUNTIME: string;
    WEBROOT_LOG: string;
    WEBCONFIG: {};
    WEBROOT_STATIC: string;
    getInst: typeof getInst;
    delInst: typeof delInst;
    getInsts: Map<any, any>;
};
export default r;
