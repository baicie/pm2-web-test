import type { NextFunction, Request, Response } from 'express';
/**
 * 查询是否有管理员 没有显示创建管理员
 * @param req
 * @param res
 * @param next
 */
export declare function hasAdmin(req: Request, res: Response): Promise<void>;
/**
 * 创建新管理
 * @param req
 * @param res
 * @param next
 */
export declare function createAdmin(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function deleteAllAdminUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function login(req: Request, res: Response, next: NextFunction): Promise<void>;
