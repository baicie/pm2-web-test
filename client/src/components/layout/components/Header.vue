<template>
  <header id="header" :class="headerClassName">
    <el-popover
      v-if="isMobile"
      :visible="menuVisible"
      overlay-class-name="popover-menu"
      trigger="click"
    >
      <template #reference>
        <!-- <el-icon>
          <Edit class="nav-phone-icon" />
        </el-icon> -->
      </template>
    </el-popover>
    <el-row :style="{ flexFlow: 'nowrap', height: '64px', justifyContent: 'space-between' }">
      <el-col v-bind="colProps[0]" class="menu-row">
        <!-- <Menu :is-mobile="isMobile"></Menu> -->
        诚信征婚,广告招租
      </el-col>
      <el-button link type="primary" class="quit" @click="handleExit">
        <el-icon><SwitchButton /></el-icon>
      </el-button>
    </el-row>
  </header>
</template>
<script lang="ts" setup>
import { SwitchButton } from '@element-plus/icons-vue';
import { useUserStore } from '@/store/user';
import { Edit } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { globalConfigStore } from '../../../store/base-config';
import Menu from './Menu.vue';
import router from '@/routes';

const route = useRoute();
const { loginOut } = useUserStore();
const { isMobile } = storeToRefs(globalConfigStore());

const isHome = computed(() => {
  return ['', 'index', 'index-cn'].includes(route.path);
});

const menuVisible = ref(false);
const colProps = isHome.value
  ? [{ flex: 'none' }, { flex: 'auto' }]
  : [
      {
        xxxl: 4,
        xxl: 4,
        xl: 5,
        lg: 6,
        md: 6,
        sm: 24,
        xs: 24
      }
    ];

const headerClassName = {
  clearfix: true,
  'home-header': isHome.value
};

function handleExit() {
  loginOut(router);
}
</script>

<style scope>
#header {
  position: relative;
  z-index: 10;
  max-width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
}
.adblock-banner,
.alert-banner {
  position: relative;
  z-index: 100;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}
.alert-banner {
  background-color: var(--ant-primary-color);
  color: #fff;
  padding: 5px;
}
.alert-banner a {
  color: #fff;
  text-decoration: underline;
}
.alert-banner .close-icon {
  top: 12px;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
.menu-row {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  line-height: 64px;
}
.drawer-handle {
  position: absolute;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  box-shadow: 2px 0 8px #00000026;
}
.quit {
  line-height: 64px;
  padding-right: 64px;
}
</style>
