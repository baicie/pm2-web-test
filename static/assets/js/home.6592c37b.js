import { E as ElMessage, u as ElTableColumn, g as ElButton, v as ElTable } from "./element-plus@2.2.33.d46b68df.js";
import { d as defineStore, s as storeToRefs } from "./pinia.5add07d6.js";
import { b as get, p as post, d as defaultErrorHandler } from "./index.c1023cbc.js";
import { r as ref, s as computed, C as defineComponent, e as onMounted, z as onBeforeUnmount, S as createBlock, R as withCtx, aa as resolveComponent, o as openBlock, O as createVNode, U as createTextVNode, u as unref } from "./@vue.6d08682a.js";
import "./@vueuse_core@9.13.0.a9ace334.js";
import "./@vueuse_shared@9.13.0.f18de1e1.js";
import "./lodash-es@4.17.21.722c3f34.js";
import "./async-validator@4.2.5.3256c125.js";
import "./@element-plus_icons-vue@2.1.0.822357dc.js";
import "./dayjs@1.11.7.4ed993c7.js";
import "./@ctrl_tinycolor@3.6.0.ab5a38b7.js";
import "./@sxzz_popperjs-es@2.11.7.8eb851c6.js";
import "./escape-html@1.0.3.18ec2d56.js";
import "./normalize-wheel-es@1.2.0.a50d6d2e.js";
import "./dayjs.cf8c3118.js";
import "./axios.d005116e.js";
import "./vue-i18n.639b7442.js";
import "./@intlify.2afef829.js";
import "./vue-router.84a5edab.js";
import "./nprogress.70823bc4.js";
import "./@element-plus.0b5fa890.js";
import "./lodash-es.703b907f.js";
function useMessage() {
  function messageFun(message, type = "success") {
    ElMessage({
      message,
      type,
      showClose: true,
      center: true
    });
  }
  return {
    message: messageFun
  };
}
class Pm2Api {
  static getList() {
    return get("/api/pm2/list");
  }
  static stop(id) {
    return post("/api/pm2/stop", {
      id
    });
  }
  static reload(id) {
    return post("/api/pm2/reload", {
      id
    });
  }
  static delete(id) {
    return post("/api/pm2/delete", {
      id
    });
  }
}
const usePm2Store = defineStore("pm2-store", () => {
  const { message } = useMessage();
  const list = ref([]);
  const getList = computed(() => list.value);
  async function getListFn() {
    try {
      const res = await Pm2Api.getList();
      list.value = resetList(res.data);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }
  async function stopPm2(params) {
    try {
      const res = await Pm2Api.stop(params.pm_id);
      if (res.code === 200) {
        message("操作成功", "success");
        await getListFn();
      }
    } catch (error) {
      defaultErrorHandler(error);
    }
  }
  async function reloadPm2(params) {
    try {
      const res = await Pm2Api.reload(params.pm_id);
      if (res.code === 200) {
        message("操作成功", "success");
        await getListFn();
      }
    } catch (error) {
      defaultErrorHandler(error);
    }
  }
  async function deletPm2(params) {
    try {
      const res = await Pm2Api.delete(params.pm_id);
      if (res.code === 200) {
        message("操作成功", "success");
        await getListFn();
      }
    } catch (error) {
      defaultErrorHandler(error);
    }
  }
  function resetList(value) {
    return value.map((data) => ({
      ...data,
      cpu: data.monit.cpu,
      memory: data.monit.memory
    }));
  }
  return {
    list,
    getList,
    getListFn,
    deletPm2,
    stopPm2,
    reloadPm2
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  setup(__props) {
    const store = usePm2Store();
    const { getList } = storeToRefs(store);
    const timer = ref(0);
    onMounted(() => {
    });
    function handleStop(record) {
      store.stopPm2(record);
    }
    function handleReload(record) {
      store.reloadPm2(record);
    }
    function handleDelete(record) {
      store.deletPm2(record);
    }
    async function init() {
      await store.getListFn();
      timer.value = setInterval(() => store.getListFn(), 5e3);
    }
    onBeforeUnmount(() => {
      clearInterval(timer.value);
    });
    init();
    return (_ctx, _cache) => {
      const _component_el_table_column = ElTableColumn;
      const _component_el_button = ElButton;
      const _component_el_table = ElTable;
      const _component_BcPage = resolveComponent("BcPage");
      return openBlock(), createBlock(_component_BcPage, null, {
        default: withCtx(() => [
          createVNode(_component_el_table, {
            data: unref(getList),
            style: { "width": "100%" },
            fit: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_el_table_column, {
                fixed: "",
                prop: "pm_id",
                label: "进程id"
              }),
              createVNode(_component_el_table_column, {
                prop: "name",
                label: "进程名称"
              }),
              createVNode(_component_el_table_column, {
                prop: "pid",
                label: "进程端口号"
              }),
              createVNode(_component_el_table_column, {
                prop: "cpu",
                label: "cpu资源占有率"
              }),
              createVNode(_component_el_table_column, {
                prop: "memory",
                label: "memory"
              }),
              createVNode(_component_el_table_column, {
                label: "操作",
                width: "200"
              }, {
                default: withCtx(({ row }) => [
                  createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    onClick: ($event) => handleStop(row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("停止")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    onClick: ($event) => handleReload(row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("重载")
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    onClick: ($event) => handleDelete(row)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("删除")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["data"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
