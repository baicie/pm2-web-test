<template>
  <el-container class="layout">
    <el-header class="layot_header">
      <el-button size="small" @click="handleChangeLocale">
        {{ localeText }}</el-button
      >
    </el-header>
    <el-main style="padding: 0 50px">
      <slot></slot>
    </el-main>
    <el-footer style="text-align: center">@baicie/pm2-web </el-footer>
  </el-container>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
// import { useI18n } from "vue-i18n";
import { globalConfigStore } from "../../store/base-config";
import { useI18n } from "../../utils";
// const i18 = useI18n();
const store = globalConfigStore();

const { getLocale } = storeToRefs(store);
const { setType } = useI18n();

/**
 * @deprecated
 */
const localeText = computed(() => {
  switch (getLocale.value) {
    case "en":
      return "中文";
    case "zh-cn":
      return "English";
  }
});

function handleChangeLocale() {
  const locale = getLocale.value === "zh-cn" ? "en" : "zh-cn";
  setType(locale);
  location.reload();
}
</script>
<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.layot_header {
  background-color: var(--bc-primary-color);
  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 100;
}
</style>
