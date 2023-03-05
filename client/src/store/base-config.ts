// import { setItem } from "@renderer/unit/lowdb";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useI18n } from "../utils";

export type LocaleType = "en" | "zh-cn";

export const globalConfigStore = defineStore("clobal-config-store", () => {
  const { getType } = useI18n();
  const locale = ref<LocaleType>(getType());
  const isMobile = ref<boolean>(false);
  const has_admin = ref<boolean>(false);

  const getLocale = computed(() => locale.value);
  const isZhCN = computed(() => locale.value === "zh-cn");

  function setHasAdmin(value: boolean) {
    has_admin.value = value;
  }

  function setLocale(value: LocaleType) {
    locale.value = value;
  }

  function setMobile(value: boolean) {
    isMobile.value = value;
  }

  return {
    locale,
    has_admin,
    setHasAdmin,
    setLocale,
    getLocale,
    isMobile,
    setMobile,
    isZhCN,
  };
});

// types
export interface GlobalConfig {
  /** 中|英文 */
  locale: "zh-cn" | "en";
}
