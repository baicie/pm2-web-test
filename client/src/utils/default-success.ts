import { ElMessage } from "element-plus";
import { BaseRes } from "./axios";

export function defaultSucess(data: BaseRes<unknown>) {
  if (data.code === 200 && typeof data.data === "string") {
    ElMessage.success(data.data);
  }
}
