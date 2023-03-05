import { ElMessage } from 'element-plus';

type MessageType = 'success' | 'warning' | 'info' | 'error';

export default function useMessage() {
  function messageFun(message: string, type: MessageType = 'success') {
    ElMessage({
      message: message,
      type: type,
      showClose: true,
      center: true
    });
  }

  return {
    message: messageFun
  };
}
