<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
// # config import
import zhCN from 'element-plus/dist/locale/zh-cn.mjs';
import enUS from 'element-plus/dist/locale/en.mjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import { storeToRefs } from 'pinia';
import { computed, onMounted, watchEffect } from 'vue';
import UserApi from './api/user';
import { globalConfigStore } from './store/base-config';
import { defaultErrorHandler } from './utils';
import useMediaQuery from './utils/hooks/useMediaQuery';
// # base state
const colSize = useMediaQuery();
// # pinia

const store = globalConfigStore();

const { getLocale } = storeToRefs(store);

//  # computed
// # 国际化
const locale = computed(() => {
  const tyep = getLocale.value;
  dayjs.locale(tyep);
  switch (tyep) {
    case 'zh-cn':
      return zhCN;
    case 'en':
      return enUS;
    default:
      return zhCN;
  }
});

// #watch
watchEffect(() => {
  if (colSize.value === 'sm' || colSize.value === 'xs') {
    store.setMobile(true);
  } else {
    store.setMobile(false);
  }
});

//  # function
function getPopupContainer(node: HTMLElement | undefined) {
  if (node) {
    return node.parentNode as HTMLElement;
  }
  return document.body;
}

async function hasAdmin() {
  try {
    const res = await UserApi.hasAdmin<boolean>();

    store.setHasAdmin(res.data);
  } catch (error) {
    defaultErrorHandler(error);
  }
}

async function init() {
  await hasAdmin();
}

// #lifecycle
onMounted(() => {
  console.log('App onMounted');
});
// #style
init();
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
