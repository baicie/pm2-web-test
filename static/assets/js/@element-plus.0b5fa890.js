import { o as openBlock, c as createElementBlock, a as createBaseVNode } from "./@vue.6d08682a.js";
/*! Element Plus Icons Vue v2.0.10 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var expand_vue_vue_type_script_lang_default = {
  name: "Expand"
};
var _hoisted_198 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_298 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1), _hoisted_397 = [
  _hoisted_298
];
function _sfc_render98(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_198, _hoisted_397);
}
var expand_default = /* @__PURE__ */ export_helper_default(expand_vue_vue_type_script_lang_default, [["render", _sfc_render98], ["__file", "expand.vue"]]);
var switch_button_vue_vue_type_script_lang_default = {
  name: "SwitchButton"
};
var _hoisted_1256 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2256 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), _hoisted_3255 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1), _hoisted_477 = [
  _hoisted_2256,
  _hoisted_3255
];
function _sfc_render256(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1256, _hoisted_477);
}
var switch_button_default = /* @__PURE__ */ export_helper_default(switch_button_vue_vue_type_script_lang_default, [["render", _sfc_render256], ["__file", "switch-button.vue"]]);
export {
  expand_default as e,
  switch_button_default as s
};
