import { createI18n } from "vue-i18n";
import zhCN from "./zh-CN";
import enUS from "./en-US";
// import { globalConfigStore } from "../store/base-config";
import { useEnv } from "../utils/hooks/useEnv";

// const { getLocale } = globalConfigStore();
const { isSSR } = useEnv();

const i18 = createI18n({
  legacy: false,
  // @ts-ignore
  locale: isSSR ? "zh-cn" : window.localStorage.getItem("locale") ?? "zh-cn",
  messages: {
    "zh-cn": zhCN,
    en: enUS,
  },
});
export default i18;
