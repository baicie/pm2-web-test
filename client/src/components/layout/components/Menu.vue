<template>
  <el-menu
    id="nav"
    :mode="menuMode"
    class="menu-site"
    :default-active="activeMenuItem"
    @select="handleSelect"
  >
    <template v-for="item in navInfo" :key="item.path">
      <el-menu-item :index="item.path">
        {{ item.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
// # config import
// # base state
const route = useRoute();
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true
  }
});
const activeMenuItem = ref('/home/home');
const navInfo = ref([
  {
    path: '/home/home',
    title: '首页'
  }
]);
// # pinia
// # computed
const menuMode = computed(() => {
  return props.isMobile ? 'vertical' : 'horizontal';
});

// # watch
watch(
  () => route.path,
  (pathname) => {
    const modules = pathname.split('/');
    activeMenuItem.value = `/${modules[1]}`;
  },
  { immediate: true }
);
// # function
function handleSelect(key: string, keyPath: string[]) {
  console.log(key, keyPath);
}
// # lifecycle
// # style
</script>
<style lang="less" scoped></style>
