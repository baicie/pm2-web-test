import type { Meta } from 'express-validator';
export declare function defaultI18nWarpper(i18nStr: string): (value: any, { req, location, path }: Meta) => any;
