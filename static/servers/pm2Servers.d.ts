import type { NextFunction, Request, Response } from 'express';
export declare function pm2Server(req: Request, res: Response): Promise<void>;
export declare function pm2List(req: Request, res: Response): Promise<void>;
export declare function pm2Stop(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function pm2Reload(req: Request, res: Response, next: NextFunction): Promise<void>;
