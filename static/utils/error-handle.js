"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
var constant_1 = require("./constant");
// export function defaultErrorHandler(
//   error: unknown,
//   i18nStr: string = "error.Unexpected"
// ) {
//   return (next: NextFunction, res: Response) => {
//     return next(boom.badRequest("error", `${res.__(i18nStr)}:${error}`));
//   };
// }
function defaultErrorHandler(res, error) {
    if (error instanceof Error) {
        res.json({
            code: constant_1.CODE_ERROR,
            msg: constant_1.MESSAGE_SUCCESS,
            data: error.message,
        });
    }
}
exports.defaultErrorHandler = defaultErrorHandler;
