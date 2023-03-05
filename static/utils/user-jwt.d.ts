import type { Request } from 'express';
import jwt from 'jsonwebtoken';
import type { UserRoleType } from '../entity';
export declare const jwtAuth: unknown;
export declare function decode(req: Request): string | jwt.JwtPayload | undefined;
export declare function jwtSign(userId: string, role: UserRoleType): string;
