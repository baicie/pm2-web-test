import { E as ElMessage, u as ElTableColumn, g as ElButton, v as ElTable } from "./element-plus@2.2.33_vue@3.2.47.8041d5fe.js";
import { d as defineStore, s as storeToRefs } from "./pinia@2.0.32_hmuptsblhheur2tugfgucj7gc4.9cba9e2c.js";
import { b as get, p as post, d as defaultErrorHandler } from "./index.bad0c98e.js";
import { k as ref, u as unref } from "./@vue_reactivity@3.2.47.a187b501.js";
import { m as computed, x as defineComponent, j as onMounted, q as onBeforeUnmount, G as createBlock, E as withCtx, R as resolveComponent, o as openBlock, e as createVNode, I as createTextVNode } from "./@vue_runtime-core@3.2.47.d509c546.js";
import "./@vueuse_core@9.13.0_vue@3.2.47.ea1d236e.js";
import "./@vueuse_shared@9.13.0_vue@3.2.47.8159928d.js";
import "./@vue_shared@3.2.47.a04d2a46.js";
import "./lodash-es@4.17.21.9d4261b4.js";
import "./@vue_runtime-dom@3.2.47.74256b40.js";
import "./async-validator@4.2.5.3256c125.js";
import "./@element-plus_icons-vue@2.1.0_vue@3.2.47.b66fb575.js";
import "./dayjs@1.11.7.cf8c3118.js";
import "./@ctrl_tinycolor@3.6.0.ab5a38b7.js";
import "./@sxzz_popperjs-es@2.11.7.8eb851c6.js";
import "./escape-html@1.0.3.18ec2d56.js";
import "./normalize-wheel-es@1.2.0.a50d6d2e.js";
import "./vue-demi@0.13.11_vue@3.2.47.7bee6169.js";
import "./axios@1.3.4.d005116e.js";
import "./vue-i18n@9.2.2_vue@3.2.47.59f844d7.js";
import "./@intlify_shared@9.2.2.963cc756.js";
import "./@intlify_core-base@9.2.2.5f84c8f1.js";
import "./@intlify_message-compiler@9.2.2.4f6e4b3c.js";
import "./@intlify_devtools-if@9.2.2.b4106369.js";
import "./vue-router@4.1.6_vue@3.2.47.d5424973.js";
import "./nprogress@0.2.0.73855ae8.js";
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
