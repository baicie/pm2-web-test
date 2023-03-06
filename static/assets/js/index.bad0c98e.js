import { c as createApp } from "./@vue_runtime-dom@3.2.47.74256b40.js";
import { E as ElMessage, a as ElConfigProvider, z as zhCn, e as en, b as ElFooter, c as ElPopover, d as ElCol, f as ElIcon, g as ElButton, h as ElRow, i as ElMenu, j as ElMenuItem, k as ElDrawer, l as ElAffix, m as ElAvatar, n as ElDropdown } from "./element-plus@2.2.33_vue@3.2.47.8041d5fe.js";
import { d as dayjs } from "./dayjs@1.11.7.cf8c3118.js";
import { d as defineStore, s as storeToRefs, c as createPinia } from "./pinia@2.0.32_hmuptsblhheur2tugfgucj7gc4.9cba9e2c.js";
import { a as axios } from "./axios@1.3.4.d005116e.js";
import { c as createI18n } from "./vue-i18n@9.2.2_vue@3.2.47.59f844d7.js";
import { k as ref, u as unref } from "./@vue_reactivity@3.2.47.a187b501.js";
import { m as computed, x as defineComponent, z as watchEffect, j as onMounted, G as createBlock, E as withCtx, o as openBlock, e as createVNode, R as resolveComponent, k as warn, c as createElementBlock, y as renderSlot, I as createTextVNode, J as createCommentVNode, A as mergeProps, w as watch, W as renderList, F as Fragment, S as guardReactiveProps, a as createBaseVNode, X as pushScopeId, Y as popScopeId } from "./@vue_runtime-core@3.2.47.d509c546.js";
import { i as isObject, c as hasOwn, n as normalizeClass, l as normalizeStyle, L as toDisplayString, M as normalizeProps } from "./@vue_shared@3.2.47.a04d2a46.js";
import { f as fromPairs, j as groupBy, k as sortBy } from "./lodash-es@4.17.21.9d4261b4.js";
import { u as useRoute, a as useRouter, c as createRouter, b as createWebHistory } from "./vue-router@4.1.6_vue@3.2.47.d5424973.js";
import { N as NProgress } from "./nprogress@0.2.0.73855ae8.js";
import { j as switch_button_default, k as expand_default } from "./@element-plus_icons-vue@2.1.0_vue@3.2.47.b66fb575.js";
import "./@vueuse_core@9.13.0_vue@3.2.47.ea1d236e.js";
import "./@vueuse_shared@9.13.0_vue@3.2.47.8159928d.js";
import "./async-validator@4.2.5.3256c125.js";
import "./@ctrl_tinycolor@3.6.0.ab5a38b7.js";
import "./@sxzz_popperjs-es@2.11.7.8eb851c6.js";
import "./escape-html@1.0.3.18ec2d56.js";
import "./normalize-wheel-es@1.2.0.a50d6d2e.js";
import "./vue-demi@0.13.11_vue@3.2.47.7bee6169.js";
import "./@intlify_shared@9.2.2.963cc756.js";
import "./@intlify_core-base@9.2.2.5f84c8f1.js";
import "./@intlify_message-compiler@9.2.2.4f6e4b3c.js";
import "./@intlify_devtools-if@9.2.2.b4106369.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function defaultErrorHandler(err) {
  console.log(err);
  if (err instanceof Array) {
    console.error(err);
    ElMessage.error(err.map((item) => item.msg).join(","));
  } else if (err instanceof Error) {
    console.error(err);
    ElMessage.error(err.message);
  } else {
    const errMsg = String(err ?? "");
    console.error(errMsg);
    ElMessage.error(errMsg);
  }
}
const useEnv = () => {
  return {
    // @ts-ignore
    isSSR: false
  };
};
const zhCN = {
  demo: {
    login: "登录"
  },
  layout: {
    header: {
      languages: "English"
    }
  },
  login: {
    register: {
      username: "用户名",
      password: "密码",
      passwordConfirmation: "确认密码",
      usernameMessage: "请输入用户名!",
      passwordsMessage: "请输入密码!",
      passwordConfirmationMessage: "请输入确认密码!",
      loginButton: "登陆",
      registerButton: "注册管理员",
      createAdminSuccessMessage: "管理员创建成功",
      createAdminPasswordsMessage: "密码不一致"
    }
  }
};
const enUS = {
  demo: {
    login: "login"
  },
  layout: {
    header: {
      languages: "中文"
    }
  },
  login: {
    register: {
      username: "username",
      password: "password",
      passwordConfirmation: "confirm password",
      usernameMessage: "Please input your username!",
      passwordsMessage: "Please input your password!!",
      passwordConfirmationMessage: "Please input your confirm password!!",
      loginButton: "login",
      registerButton: "registered administrator"
    }
  }
};
const { isSSR: isSSR$2 } = useEnv();
const i18 = createI18n({
  legacy: false,
  // @ts-ignore
  locale: isSSR$2 ? "zh-cn" : window.localStorage.getItem("locale") ?? "zh-cn",
  messages: {
    "zh-cn": zhCN,
    en: enUS
  }
});
const globalConfigStore = defineStore("clobal-config-store", () => {
  const { getType: getType2 } = useI18n();
  const locale = ref(getType2());
  const isMobile = ref(false);
  const has_admin = ref(false);
  const getLocale = computed(() => locale.value);
  const isZhCN = computed(() => locale.value === "zh-cn");
  function setHasAdmin(value) {
    has_admin.value = value;
  }
  function setLocale(value) {
    locale.value = value;
  }
  function setMobile(value) {
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
    isZhCN
  };
});
const key = "locale";
const defaultLocale = "zh-cn";
const useI18n = () => {
  const { isSSR: isSSR2 } = useEnv();
  const { setLocale } = globalConfigStore();
  function setType(value) {
    i18.global.locale.value = value;
    window.localStorage.setItem(key, value);
    setLocale(value);
  }
  function getType2() {
    return isSSR2 ? defaultLocale : window.localStorage.getItem(key) ?? defaultLocale;
  }
  return { setType, getType: getType2 };
};
const useI18nNotPinia = () => {
  const { isSSR: isSSR2 } = useEnv();
  function setType(value) {
    i18.global.locale.value = value;
    window.localStorage.setItem(key, value);
  }
  function getType2() {
    return isSSR2 ? defaultLocale : window.localStorage.getItem(key) ?? defaultLocale;
  }
  function returnI18n(value) {
    return i18.global.t(value);
  }
  return { setType, getType: getType2, returnI18n };
};
const MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: "(max-width: 575px)"
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: "(min-width: 576px) and (max-width: 767px)"
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: "(min-width: 768px) and (max-width: 991px)"
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: "(min-width: 992px) and (max-width: 1199px)"
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: "(min-width: 1200px) and (max-width: 1599px)"
  },
  xxl: {
    minWidth: 1600,
    matchMedia: "(min-width: 1600px)"
  },
  xxxl: {
    minWidth: 2e3,
    matchMedia: "(min-width: 2000px)"
  }
};
const getScreenClassName = () => {
  let className = "md";
  if (typeof window === "undefined") {
    return className;
  }
  const mediaQueryKey = Object.keys(MediaQueryEnum).find(
    (key2) => {
      const { matchMedia } = MediaQueryEnum[key2];
      if (window.matchMedia(matchMedia).matches) {
        return true;
      }
      return false;
    }
  );
  className = mediaQueryKey;
  return className;
};
const useMedia = () => {
  const { isSSR: isSSR2 } = useEnv();
  const colSpan = ref(getScreenClassName());
  Object.keys(MediaQueryEnum).forEach((key2) => {
    const { matchMedia } = MediaQueryEnum[key2];
    const mediaQuery = isSSR2 ? {} : window.matchMedia(matchMedia);
    if (mediaQuery.matches) {
      colSpan.value = key2;
    }
    mediaQuery.onchange = (e) => {
      if (e.matches) {
        colSpan.value = key2;
      }
    };
  });
  return colSpan;
};
const TOKEN = "token";
const { isSSR: isSSR$1 } = useEnv();
function getToken() {
  return isSSR$1 ? "" : localStorage.getItem(TOKEN);
}
function setToken(token) {
  isSSR$1 ? "" : localStorage.setItem(TOKEN, token);
}
function clearLocalStorage() {
  isSSR$1 ? "" : localStorage.clear();
}
const { getType } = useI18nNotPinia();
const fetch$1 = axios.create({
  timeout: 6e4,
  withCredentials: false
});
async function ajax(param) {
  const { method, url, data, form, query, header, extra, cancel, headers } = param;
  let config = {
    ...extra,
    method: method.toLowerCase(),
    headers: { ...headers, ...header }
  };
  if (getToken()) {
    config.headers = {
      token: getToken(),
      ...config.headers
    };
  }
  if (data) {
    config = {
      ...config,
      headers: {
        // 可覆盖
        "Content-Type": "application/json",
        ...config.headers
      },
      data
    };
  }
  if (form) {
    config = {
      ...config,
      data: form
    };
  }
  if (extra == null ? void 0 : extra.download) {
    config = {
      ...config,
      responseType: "blob"
    };
  }
  const response = await fetch$1.request({
    ...config,
    url: `http://localhost:6174${url}`,
    // url: url,
    params: {
      ...query,
      lang: getType()
    }
  });
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  if (response.data && response.data.code !== 200) {
    throw new Error(response.data.data);
  }
  return response.data;
}
function get(url, params) {
  return ajax({
    method: "GET",
    url,
    query: params ?? {}
  });
}
function post(url, params) {
  return ajax({
    method: "POST",
    url,
    data: params ?? {}
  });
}
function createClassName(name) {
  return `bc-${name}`;
}
class UserApi {
  static hasAdmin() {
    return get("/api/user/has_admin");
  }
  static createAdmin(data) {
    return post("/api/user/create_admin", data);
  }
  static login(data) {
    return post("/api/user/login", data);
  }
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const colSize = useMedia();
    const store = globalConfigStore();
    const { getLocale } = storeToRefs(store);
    const locale = computed(() => {
      const tyep = getLocale.value;
      dayjs.locale(tyep);
      switch (tyep) {
        case "zh-cn":
          return zhCn;
        case "en":
          return en;
        default:
          return zhCn;
      }
    });
    watchEffect(() => {
      if (colSize.value === "sm" || colSize.value === "xs") {
        store.setMobile(true);
      } else {
        store.setMobile(false);
      }
    });
    async function hasAdmin() {
      try {
        const res = await UserApi.hasAdmin();
        store.setHasAdmin(res.data);
      } catch (error) {
        defaultErrorHandler(error);
      }
    }
    async function init() {
      await hasAdmin();
    }
    onMounted(() => {
      console.log("App onMounted");
    });
    init();
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_el_config_provider = ElConfigProvider;
      return openBlock(), createBlock(_component_el_config_provider, { locale: unref(locale) }, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }, 8, ["locale"]);
    };
  }
});
const App_vue_vue_type_style_index_0_scoped_700a0fd7_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-700a0fd7"]]);
const index$1 = "";
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key2) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid = valid || allowedValues.includes(val);
    }
    if (validator)
      valid = valid || validator(val);
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(
        `Invalid prop: validation failed${key2 ? ` for prop "${key2}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(
          val
        )}.`
      );
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(
  Object.entries(props).map(([key2, option]) => [
    key2,
    buildProp(option, key2)
  ])
);
const demo = buildProps({
  /**
   * @description CSS style
   */
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: demo,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(createClassName)("page")]),
        style: normalizeStyle(_ctx.bodyStyle)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BcPage: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
function install(app2) {
  Object.keys(components).forEach(function(key2) {
    const component = components[key2];
    app2.component(key2, component);
    return app2;
  });
}
const BcComponents = {
  install
};
const { isSSR } = useEnv();
function beforeEach(to, from, next) {
  console.log(`[route] from ${from.fullPath} to ${to.fullPath}`);
  if (to.path !== from.path) {
    isSSR ? "" : NProgress.start();
  }
  next();
}
function afterEach(to, from) {
  if (to.path !== from.path) {
    isSSR ? "" : NProgress.done();
    isSSR ? "" : document.documentElement.scrollTop = 0;
  }
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/client/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const useMenus = () => {
  const route = useRoute();
  const router2 = useRouter();
  const routes2 = router2.getRoutes();
  const menus = computed(() => {
    const path = route.path;
    path.split("/")[1];
    const ms = routes2;
    return ms;
  });
  const activeMenuItem = computed(() => {
    return route.path.split("-cn")[0];
  });
  const currentMenuIndex = computed(() => {
    return menus.value.findIndex((m) => m.path === activeMenuItem.value);
  });
  const dataSource = computed(() => {
    const group = groupBy(menus.value, (m) => m.type || m.category);
    const keys = Object.keys(group);
    const newMenus = keys.map((key2) => {
      return {
        title: key2,
        //   order: typeOrder[key] && typeOrder[key].order,
        //   enTitle: typeOrder[key] && typeOrder[key].en,
        children: sortBy(group[key2], "title")
      };
    });
    return keys.length === 1 ? menus.value : newMenus;
  });
  return { menus, dataSource, activeMenuItem, currentMenuIndex };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_footer = ElFooter;
      return openBlock(), createBlock(_component_el_footer, {
        id: "footer",
        style: { "text-align": "center" }
      }, {
        default: withCtx(() => [
          createTextVNode("@baicie/pm2-web ")
        ]),
        _: 1
      });
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_68494f02_lang = "";
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-68494f02"]]);
const LOGIN = "login";
const HOME = "home";
const HOMEHOME = "homehome";
function defaultSucess(data) {
  if (data.code === 200 && typeof data.data === "string") {
    ElMessage.success(data.data);
  }
}
const useUserStore = defineStore("user-store", () => {
  const { returnI18n } = useI18nNotPinia();
  const user = ref();
  computed(() => user.value);
  async function createAdmin(params) {
    try {
      if (params.passwordConfirmation !== params.password) {
        throw new Error(returnI18n("login.register.loginButton"));
      }
      const res = await UserApi.createAdmin(params);
      defaultSucess(res);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }
  async function login(params) {
    try {
      if (!params.password || !params.password) {
        throw new Error(returnI18n("login.register.loginButton"));
      }
      const res = await UserApi.login(params);
      user.value = res.data;
      setToken(user.value.token);
      ElMessage({
        message: "Congrats, this is a success message.",
        type: "success"
      });
      return true;
    } catch (error) {
      defaultErrorHandler(error);
      return false;
    }
  }
  async function loginOut(router2) {
    try {
      clearLocalStorage();
      router2.push({
        name: LOGIN
      });
    } catch (error) {
      defaultErrorHandler(error);
      return false;
    }
  }
  return {
    user,
    createAdmin,
    login,
    loginOut
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  setup(__props) {
    const route = useRoute();
    const { loginOut } = useUserStore();
    const { isMobile } = storeToRefs(globalConfigStore());
    const isHome = computed(() => {
      return ["", "index", "index-cn"].includes(route.path);
    });
    const menuVisible = ref(false);
    const colProps = isHome.value ? [{ flex: "none" }, { flex: "auto" }] : [
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
      "home-header": isHome.value
    };
    function handleExit() {
      loginOut(router);
    }
    return (_ctx, _cache) => {
      const _component_el_popover = ElPopover;
      const _component_el_col = ElCol;
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      const _component_el_row = ElRow;
      return openBlock(), createElementBlock("header", {
        id: "header",
        class: normalizeClass(headerClassName)
      }, [
        unref(isMobile) ? (openBlock(), createBlock(_component_el_popover, {
          key: 0,
          visible: menuVisible.value,
          "overlay-class-name": "popover-menu",
          trigger: "click"
        }, {
          reference: withCtx(() => []),
          _: 1
        }, 8, ["visible"])) : createCommentVNode("", true),
        createVNode(_component_el_row, { style: { flexFlow: "nowrap", height: "64px", justifyContent: "space-between" } }, {
          default: withCtx(() => [
            createVNode(_component_el_col, mergeProps(unref(colProps)[0], { class: "menu-row" }), {
              default: withCtx(() => [
                createTextVNode(" 诚信征婚,广告招租 ")
              ]),
              _: 1
            }, 16),
            createVNode(_component_el_button, {
              link: "",
              type: "primary",
              class: "quit",
              onClick: handleExit
            }, {
              default: withCtx(() => [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(unref(switch_button_default))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Header_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const activeMenuItem = ref("/home/home");
    const navInfo = ref([
      {
        path: "/home/home",
        title: "首页"
      }
    ]);
    const menuMode = computed(() => {
      return props.isMobile ? "vertical" : "horizontal";
    });
    watch(
      () => route.path,
      (pathname) => {
        const modules = pathname.split("/");
        activeMenuItem.value = `/${modules[1]}`;
      },
      { immediate: true }
    );
    function handleSelect(key2, keyPath) {
      console.log(key2, keyPath);
    }
    return (_ctx, _cache) => {
      const _component_el_menu_item = ElMenuItem;
      const _component_el_menu = ElMenu;
      return openBlock(), createBlock(_component_el_menu, {
        id: "nav",
        mode: unref(menuMode),
        class: "menu-site",
        "default-active": unref(activeMenuItem),
        onSelect: handleSelect
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navInfo), (item) => {
            return openBlock(), createBlock(_component_el_menu_item, {
              key: item.path,
              index: item.path
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.title), 1)
              ]),
              _: 2
            }, 1032, ["index"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["mode", "default-active"]);
    };
  }
});
const _sfc_main$1 = defineComponent({
  name: "ThemeIcon",
  components: {
    ElIcon
  },
  setup() {
    return {};
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("g", { fillRule: "evenodd" }, [
  /* @__PURE__ */ createBaseVNode("g", { fillRule: "nonzero" }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z" })
  ])
], -1);
const _hoisted_2$1 = [
  _hoisted_1$1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElIcon = ElIcon;
  return openBlock(), createBlock(_component_ElIcon, normalizeProps(guardReactiveProps(_ctx.$attrs)), {
    component: withCtx(() => [
      (openBlock(), createElementBlock("svg", mergeProps({
        width: 21,
        height: 21,
        viewBox: "0 0 21 21",
        fill: "currentColor"
      }, _ctx.$attrs), _hoisted_2$1, 16))
    ]),
    _: 1
  }, 16);
}
const ThemeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _withScopeId = (n) => (pushScopeId("data-v-a30364cf"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main-wrapper" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("section", { class: "main-menu-inner" }, " 这块应该是二级菜单但好像没必要 ", -1));
const _hoisted_3 = { class: "fixed-widgets" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  setup(__props) {
    const visible = ref(false);
    useRoute();
    const store = globalConfigStore();
    const { isMobile, isZhCN } = storeToRefs(store);
    const { menus, activeMenuItem, currentMenuIndex, dataSource } = useMenus();
    computed(() => {
      return [{ title: "API", href: "#API" }];
    });
    const mainContainerClass = computed(() => {
      return {
        "main-container": true,
        "main-container-component": false,
        "is-mobile": isMobile
      };
    });
    const handleClickShowButton = () => {
      visible.value = !visible.value;
    };
    const iconStyle = {
      // color: '#fff',
      fontSize: "20px"
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_drawer = ElDrawer;
      const _component_el_affix = ElAffix;
      const _component_el_col = ElCol;
      const _component_router_view = resolveComponent("router-view");
      const _component_el_menu_item = ElMenuItem;
      const _component_el_menu = ElMenu;
      const _component_el_avatar = ElAvatar;
      const _component_el_dropdown = ElDropdown;
      const _component_el_row = ElRow;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_el_row, null, {
            default: withCtx(() => [
              unref(isMobile) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", {
                  class: "drawer-handle",
                  onClick: handleClickShowButton
                }, [
                  createVNode(_component_el_icon, { style: iconStyle }, {
                    default: withCtx(() => [
                      createVNode(unref(expand_default))
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_el_drawer, {
                  key: "mobile-menu",
                  closable: false,
                  class: "drawer drawer-left",
                  modelValue: visible.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
                  "wrapper-class-name": "drawer-wrapper",
                  size: "60%",
                  direction: "ltr"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, {
                      "is-mobile": unref(isMobile),
                      menus: unref(dataSource),
                      "active-menu-item": unref(activeMenuItem)
                    }, null, 8, ["is-mobile", "menus", "active-menu-item"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 64)) : (openBlock(), createBlock(_component_el_col, {
                key: 1,
                xxxl: 4,
                xxl: 4,
                xl: 5,
                lg: 6,
                md: 6,
                sm: 24,
                xs: 24,
                class: "main-menu"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_affix, null, {
                    default: withCtx(() => [
                      _hoisted_2
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })),
              createVNode(_component_el_col, {
                xxxl: 20,
                xxl: 20,
                xl: 19,
                lg: 18,
                md: 18,
                sm: 24,
                xs: 24
              }, {
                default: withCtx(() => [
                  createBaseVNode("section", {
                    class: normalizeClass(unref(mainContainerClass))
                  }, [
                    createVNode(_component_router_view)
                  ], 2),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_el_dropdown, { placement: "top" }, {
                      overlay: withCtx(() => [
                        createVNode(_component_el_menu, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_menu_item, { key: "default" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("app.theme.switch.default")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_menu_item, { key: "dark" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t("app.theme.switch.dark")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_el_avatar, {
                          class: "fixed-widgets-avatar",
                          size: 44
                        }, {
                          icon: withCtx(() => [
                            createVNode(ThemeIcon)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(Footer)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
const layout_vue_vue_type_style_index_0_scoped_a30364cf_lang = "";
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a30364cf"]]);
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: LOGIN,
    meta: { requiresAuth: false },
    // @ts-ignore
    component: () => __vitePreload(() => import("./login.1d5c2cff.js"), true ? ["assets/js/login.1d5c2cff.js","assets/js/element-plus@2.2.33_vue@3.2.47.8041d5fe.js","assets/js/@vueuse_core@9.13.0_vue@3.2.47.ea1d236e.js","assets/js/@vueuse_shared@9.13.0_vue@3.2.47.8159928d.js","assets/js/@vue_reactivity@3.2.47.a187b501.js","assets/js/@vue_shared@3.2.47.a04d2a46.js","assets/js/@vue_runtime-core@3.2.47.d509c546.js","assets/js/lodash-es@4.17.21.9d4261b4.js","assets/js/@vue_runtime-dom@3.2.47.74256b40.js","assets/js/async-validator@4.2.5.3256c125.js","assets/js/@element-plus_icons-vue@2.1.0_vue@3.2.47.b66fb575.js","assets/js/dayjs@1.11.7.cf8c3118.js","assets/js/@ctrl_tinycolor@3.6.0.ab5a38b7.js","assets/js/@sxzz_popperjs-es@2.11.7.8eb851c6.js","assets/js/escape-html@1.0.3.18ec2d56.js","assets/js/normalize-wheel-es@1.2.0.a50d6d2e.js","assets/css/element-plus@2.2.33_vue@3.2.a230514b.css","assets/js/pinia@2.0.32_hmuptsblhheur2tugfgucj7gc4.9cba9e2c.js","assets/js/vue-demi@0.13.11_vue@3.2.47.7bee6169.js","assets/js/vue-router@4.1.6_vue@3.2.47.d5424973.js","assets/js/axios@1.3.4.d005116e.js","assets/js/vue-i18n@9.2.2_vue@3.2.47.59f844d7.js","assets/js/@intlify_shared@9.2.2.963cc756.js","assets/js/@intlify_core-base@9.2.2.5f84c8f1.js","assets/js/@intlify_message-compiler@9.2.2.4f6e4b3c.js","assets/js/@intlify_devtools-if@9.2.2.b4106369.js","assets/js/nprogress@0.2.0.73855ae8.js","assets/css/login.044904ad.css"] : void 0)
  },
  {
    path: "/home",
    name: HOME,
    meta: { requiresAuth: true },
    component: Layout,
    redirect: "/home/home",
    children: [
      {
        path: "home",
        name: HOMEHOME,
        meta: { requiresAuth: true, authtype: "all", title: "首页" },
        component: () => __vitePreload(() => import("./home.251f8e35.js"), true ? ["assets/js/home.251f8e35.js","assets/js/element-plus@2.2.33_vue@3.2.47.8041d5fe.js","assets/js/@vueuse_core@9.13.0_vue@3.2.47.ea1d236e.js","assets/js/@vueuse_shared@9.13.0_vue@3.2.47.8159928d.js","assets/js/@vue_reactivity@3.2.47.a187b501.js","assets/js/@vue_shared@3.2.47.a04d2a46.js","assets/js/@vue_runtime-core@3.2.47.d509c546.js","assets/js/lodash-es@4.17.21.9d4261b4.js","assets/js/@vue_runtime-dom@3.2.47.74256b40.js","assets/js/async-validator@4.2.5.3256c125.js","assets/js/@element-plus_icons-vue@2.1.0_vue@3.2.47.b66fb575.js","assets/js/dayjs@1.11.7.cf8c3118.js","assets/js/@ctrl_tinycolor@3.6.0.ab5a38b7.js","assets/js/@sxzz_popperjs-es@2.11.7.8eb851c6.js","assets/js/escape-html@1.0.3.18ec2d56.js","assets/js/normalize-wheel-es@1.2.0.a50d6d2e.js","assets/css/element-plus@2.2.33_vue@3.2.a230514b.css","assets/js/pinia@2.0.32_hmuptsblhheur2tugfgucj7gc4.9cba9e2c.js","assets/js/vue-demi@0.13.11_vue@3.2.47.7bee6169.js","assets/js/axios@1.3.4.d005116e.js","assets/js/vue-i18n@9.2.2_vue@3.2.47.59f844d7.js","assets/js/@intlify_shared@9.2.2.963cc756.js","assets/js/@intlify_core-base@9.2.2.5f84c8f1.js","assets/js/@intlify_message-compiler@9.2.2.4f6e4b3c.js","assets/js/@intlify_devtools-if@9.2.2.b4106369.js","assets/js/vue-router@4.1.6_vue@3.2.47.d5424973.js","assets/js/nprogress@0.2.0.73855ae8.js"] : void 0)
      }
    ]
  }
];
const base = "/client/";
const router = createRouter({
  // @ts-ignore
  history: createWebHistory(base),
  routes
});
router.beforeEach(beforeEach);
router.afterEach(afterEach);
const pinia = createPinia();
const style = "";
const index = "";
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18);
app.use(BcComponents);
app.mount("#app");
export {
  HOMEHOME as H,
  _export_sfc as _,
  useUserStore as a,
  get as b,
  defaultErrorHandler as d,
  globalConfigStore as g,
  post as p,
  useI18n as u
};
