import { ElMessage } from "element-plus";

/**
 * 默认 error 处理
 * @param err
 */
export function defaultErrorHandler(err: unknown): void {
  console.log(err);

  if (err instanceof Array) {
    console.error(err);
    ElMessage.error(err.map((item) => item.msg).join(","));
  } else if (err instanceof Error) {
    console.error(err);
    ElMessage.error(err.message);
  } else {
    const errMsg = String(err ?? "");
    console.error(errMsg);
    ElMessage.error(errMsg);
  }
}
