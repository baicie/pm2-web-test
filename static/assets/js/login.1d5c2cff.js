import { o as ElContainer, g as ElButton, p as ElHeader, q as ElMain, b as ElFooter, r as ElInput, s as ElFormItem, t as ElForm } from "./element-plus@2.2.33_vue@3.2.47.8041d5fe.js";
import { s as storeToRefs } from "./pinia@2.0.32_hmuptsblhheur2tugfgucj7gc4.9cba9e2c.js";
import { a as useRouter } from "./vue-router@4.1.6_vue@3.2.47.d5424973.js";
import { g as globalConfigStore, u as useI18n, _ as _export_sfc, a as useUserStore, H as HOMEHOME } from "./index.bad0c98e.js";
import { x as defineComponent, m as computed, G as createBlock, E as withCtx, o as openBlock, e as createVNode, I as createTextVNode, y as renderSlot, J as createCommentVNode, c as createElementBlock, F as Fragment, R as resolveComponent } from "./@vue_runtime-core@3.2.47.d509c546.js";
import { L as toDisplayString } from "./@vue_shared@3.2.47.a04d2a46.js";
import { u as unref, f as reactive } from "./@vue_reactivity@3.2.47.a187b501.js";
import "./@vueuse_core@9.13.0_vue@3.2.47.ea1d236e.js";
import "./@vueuse_shared@9.13.0_vue@3.2.47.8159928d.js";
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
import "./nprogress@0.2.0.73855ae8.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "base-layout",
  setup(__props) {
    const store = globalConfigStore();
    const { getLocale } = storeToRefs(store);
    const { setType } = useI18n();
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
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_header = ElHeader;
      const _component_el_main = ElMain;
      const _component_el_footer = ElFooter;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, { class: "layout" }, {
        default: withCtx(() => [
          createVNode(_component_el_header, { class: "layot_header" }, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                size: "small",
                onClick: handleChangeLocale
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(localeText)), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_el_main, { style: { "padding": "0 50px" } }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }),
          createVNode(_component_el_footer, { style: { "text-align": "center" } }, {
            default: withCtx(() => [
              createTextVNode("@baicie/pm2-web ")
            ]),
            _: 1
          })
        ]),
        _: 3
      });
    };
  }
});
const baseLayout_vue_vue_type_style_index_0_scoped_48f5dc9a_lang = "";
const BaseLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-48f5dc9a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  setup(__props) {
    const router = useRouter();
    const formState = reactive({
      username: "",
      password: "",
      passwordConfirmation: ""
    });
    const { has_admin, locale } = storeToRefs(globalConfigStore());
    const { createAdmin, login: login2 } = useUserStore();
    storeToRefs(useUserStore());
    async function handleAdmin() {
      if (has_admin.value) {
        const res = await login2(formState);
        if (res) {
          router.push({
            name: HOMEHOME,
            query: {}
          });
        }
      } else {
        await createAdmin(formState);
      }
    }
    const bcPageStyle = {
      justifyContent: "center",
      alignContent: "center"
    };
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_BcPage = resolveComponent("BcPage");
      return openBlock(), createBlock(BaseLayout, null, {
        default: withCtx(() => [
          createVNode(_component_BcPage, { "body-style": bcPageStyle }, {
            default: withCtx(() => [
              createVNode(_component_el_form, {
                model: formState,
                name: "basic",
                "label-col": { span: 9 },
                "wrapper-col": { span: 15 },
                autocomplete: "off"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: _ctx.$t("login.register.username"),
                    name: "username",
                    rules: [{ required: true, message: _ctx.$t("login.register.usernameMessage") }]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: formState.username,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formState.username = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label", "rules"]),
                  createVNode(_component_el_form_item, {
                    label: _ctx.$t("login.register.password"),
                    name: "password",
                    rules: [{ required: true, message: _ctx.$t("login.register.passwordsMessage") }]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        type: "password",
                        modelValue: formState.password,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formState.password = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label", "rules"]),
                  !unref(has_admin) ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 0,
                    label: _ctx.$t("login.register.passwordConfirmation"),
                    name: "passwordConfirmation",
                    rules: [
                      {
                        required: true,
                        message: _ctx.$t("login.register.passwordConfirmationMessage")
                      }
                    ]
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        type: "password",
                        modelValue: formState.passwordConfirmation,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formState.passwordConfirmation = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label", "rules"])) : createCommentVNode("", true),
                  createVNode(_component_el_form_item, { style: { width: "100%" } }, {
                    default: withCtx(() => [
                      createVNode(_component_el_button, {
                        type: "primary",
                        "html-type": "submit",
                        onClick: handleAdmin
                      }, {
                        default: withCtx(() => [
                          unref(has_admin) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(_ctx.$t("login.register.loginButton")), 1)
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.$t("login.register.registerButton")), 1)
                          ], 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const login_vue_vue_type_style_index_0_scoped_3c292cd4_lang = "";
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c292cd4"]]);
export {
  login as default
};
