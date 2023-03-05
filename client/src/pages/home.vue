<template>
  <BcPage>
    <el-table :data="getList" style="width: 100%" fit>
      <el-table-column fixed prop="pm_id" label="进程id" />
      <el-table-column prop="name" label="进程名称" />
      <el-table-column prop="pid" label="进程端口号" />
      <el-table-column prop="cpu" label="cpu资源占有率" />
      <el-table-column prop="memory" label="memory" />
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button link type="primary" @click="handleStop(row)">停止</el-button>
          <el-button link type="primary" @click="handleReload(row)">重载</el-button>
          <el-button link type="primary" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </BcPage>
</template>
<script lang="ts" setup>
// # config import
import { DataFont, usePm2Store } from '../store/pm2';
// import { StopOutlined, RedoOutlined } from "@ant-design/icons-vue";
// # base state

// # pinia
const store = usePm2Store();
const { getList } = storeToRefs(store);
const timer = ref(0);
// # computed
// # watch

onMounted(() => {});

// # function
function handleStop(record: unknown) {
  store.stopPm2(record as DataFont);
}

function handleReload(record: unknown) {
  store.reloadPm2(record as DataFont);
}

function handleDelete(record: unknown) {
  store.deletPm2(record as DataFont);
}
// async function getList

async function init() {
  // await hasAdmin();
  await store.getListFn();
  timer.value = setInterval(() => store.getListFn(), 5000);
}
// # lifecycle
onBeforeUnmount(() => {
  clearInterval(timer.value);
});
init();
// # style
</script>
<style lang="less" scoped></style>
