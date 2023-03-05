import i18 from "../../languages";
import { globalConfigStore, LocaleType } from "../../store/base-config";
import { useEnv } from "./useEnv";

const key = "locale";
const defaultLocale = "zh-cn";

const useI18n = () => {
  const { isSSR } = useEnv();
  const { setLocale } = globalConfigStore();

  function setType(value: LocaleType) {
    i18.global.locale.value = value;
    window.localStorage.setItem(key, value);
    setLocale(value);
  }

  function getType(): LocaleType {
    // 服务端返回中文 客户端获取本地存储 或者中文
    return isSSR
      ? defaultLocale
      : (window.localStorage.getItem(key) as LocaleType) ?? defaultLocale;
  }

  return { setType, getType };
};

const useI18nNotPinia = () => {
  const { isSSR } = useEnv();
  // const { setLocale } = globalConfigStore();

  function setType(value: LocaleType) {
    i18.global.locale.value = value;
    window.localStorage.setItem(key, value);
    // setLocale(value);
  }

  function getType(): LocaleType {
    // 服务端返回中文 客户端获取本地存储 或者中文
    return isSSR
      ? defaultLocale
      : (window.localStorage.getItem(key) as LocaleType) ?? defaultLocale;
  }

  function returnI18n(value: string) {
    return i18.global.t(value);
  }

  return { setType, getType, returnI18n };
};

export { useI18n, useI18nNotPinia };
