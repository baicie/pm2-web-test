<template>
  <Header></Header>
  <div class="main-wrapper">
    <el-row>
      <template v-if="isMobile">
        <div class="drawer-handle" @click="handleClickShowButton">
          <el-icon :style="iconStyle"><Expand /></el-icon>
        </div>
        <el-drawer
          key="mobile-menu"
          :closable="false"
          class="drawer drawer-left"
          v-model="visible"
          wrapper-class-name="drawer-wrapper"
          size="60%"
          direction="ltr"
        >
          <Menu :is-mobile="isMobile" :menus="dataSource" :active-menu-item="activeMenuItem"></Menu>
        </el-drawer>
      </template>
      <template v-else>
        <el-col :xxxl="4" :xxl="4" :xl="5" :lg="6" :md="6" :sm="24" :xs="24" class="main-menu">
          <el-affix>
            <section class="main-menu-inner">
              <!-- <Menu
                :is-mobile="isMobile"
                :menus="dataSource"
                :active-menu-item="activeMenuItem"
              ></Menu> -->
              这块应该是二级菜单但好像没必要
            </section>
          </el-affix>
        </el-col>
      </template>
      <el-col :xxxl="20" :xxl="20" :xl="19" :lg="18" :md="18" :sm="24" :xs="24">
        <section :class="mainContainerClass">
          <!-- 核心内容区 -->

          <router-view />
          <!-- 右侧导航 -->
          <!-- <el-affix v-if="headers.length" class="toc-affix" :offset-top="20">
            <el-anchor>
              <el-anchor-link
                v-for="h in headers"
                :key="h.title"
                :href="h.href || `#${slugifyTitle(h.title)}`"
                :target="h.target"
              >
                <template #title>
                  <LinkOutlined v-if="h.target" />
                  {{ isZhCN ? h.title : h.enTitle || h.title }}
                </template>
              </el-anchor-link>
            </el-anchor>
          </el-affix> -->
        </section>
        <!-- 主题切换 -->
        <div class="fixed-widgets">
          <el-dropdown placement="top">
            <template #overlay>
              <el-menu>
                <el-menu-item key="default">{{ $t('app.theme.switch.default') }}</el-menu-item>
                <el-menu-item key="dark">{{ $t('app.theme.switch.dark') }}</el-menu-item>
              </el-menu>
            </template>
            <el-avatar class="fixed-widgets-avatar" :size="44">
              <template #icon><ThemeIcon /></template>
            </el-avatar>
          </el-dropdown>
        </div>
        <!-- 上一部分下一部分 -->
        <!-- <PrevAndNext :menus="menus" :current-menu-index="currentMenuIndex" /> -->
        <Footer></Footer>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { Expand, CloseBold } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { globalConfigStore } from '../../store/base-config';
import { useMenus } from '../../utils/hooks/useMenus';

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
// import PrevAndNext from "./components/PrevAndNext.vue";
import ThemeIcon from './components/ThemeIcon.vue';

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;

const visible = ref(false);
const route = useRoute();

const store = globalConfigStore();
const { isMobile, isZhCN } = storeToRefs(store);
const { menus, activeMenuItem, currentMenuIndex, dataSource } = useMenus();

const headers = computed(() => {
  // let tempHeaders = (pageData.value?.headers || []).filter(
  //   (h: Header) => h.level === 2
  // );

  //   tempHeaders.push({ title: "API", href: "#API" });
  // }

  return [{ title: 'API', href: '#API' }];
});

const mainContainerClass = computed(() => {
  return {
    'main-container': true,
    'main-container-component': false,
    'is-mobile': isMobile
  };
});
const handleClickShowButton = () => {
  visible.value = !visible.value;
};

const slugifyTitle = (str: string) => {
  return (
    str
      // Remove control characters
      .replace(rControl, '')
      // Replace special characters
      .replace(rSpecial, '-')
      // Remove continuos separators
      .replace(/\-{2,}/g, '-')
      // Remove prefixing and trailing separtors
      .replace(/^\-+|\-+$/g, '')
      // ensure it doesn't start with a number (#121)
      .replace(/^(\d)/, '_$1')
  );
};

// const isMobile = globalConfig.isMobile;

const iconStyle = {
  // color: '#fff',
  fontSize: '20px'
};
</script>
<style lang="less" scoped>
.toc-affix :deep(.ant-anchor) {
  font-size: 12px;
  max-width: 110px;
  .ant-anchor-link {
    border-left: 2px solid #f0f0f0;
    padding: 4px 0 4px 16px;
  }

  .ant-anchor-link-active {
    border-left: 2px solid #1890ff;
  }
  .ant-anchor-ink::before {
    display: none;
  }
  .ant-anchor-ink-ball {
    display: none;
  }
}

[data-theme='dark'] .toc-affix :deep(.ant-anchor) {
  .ant-anchor-link {
    border-left: 2px solid #303030;
  }
  .ant-anchor-link-active {
    border-left: 2px solid #177ddc;
  }
}

.fixed-widgets {
  position: fixed;
  right: 32px;
  bottom: 102px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .fixed-widgets-avatar {
    color: #000;
    background-color: #fff;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    transition: color 0.3s;
  }
}
.main-container {
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  position: relative;
  min-height: 500px;
  padding: 0 170px 32px 64px;
  background: #fff;
}

@media only screen and (max-width: 992px) {
  .main-container {
    padding-right: 48px;
    padding-left: 48px;

    .toc-affix {
      display: none;
    }
  }
  .code-boxes-col-2-1,
  .code-boxes-col-1-1 {
    float: none;
    width: 100%;
  }
}

.is-mobile,
.main-container {
  margin-right: 0;
  margin-left: 0;
  padding-right: 16px;
  padding-left: 16px;
  > .markdown > * {
    width: 100% !important;
  }
}
</style>
