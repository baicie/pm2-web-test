function t(t2) {
  return t2.split("-")[1];
}
function e(t2) {
  return "y" === t2 ? "height" : "width";
}
function n$1(t2) {
  return t2.split("-")[0];
}
function o$1(t2) {
  return ["top", "bottom"].includes(n$1(t2)) ? "x" : "y";
}
function i$1(i2, r2, a2) {
  let { reference: l2, floating: s2 } = i2;
  const c2 = l2.x + l2.width / 2 - s2.width / 2, f2 = l2.y + l2.height / 2 - s2.height / 2, m2 = o$1(r2), u2 = e(m2), g2 = l2[u2] / 2 - s2[u2] / 2, d2 = "x" === m2;
  let p2;
  switch (n$1(r2)) {
    case "top":
      p2 = { x: c2, y: l2.y - s2.height };
      break;
    case "bottom":
      p2 = { x: c2, y: l2.y + l2.height };
      break;
    case "right":
      p2 = { x: l2.x + l2.width, y: f2 };
      break;
    case "left":
      p2 = { x: l2.x - s2.width, y: f2 };
      break;
    default:
      p2 = { x: l2.x, y: l2.y };
  }
  switch (t(r2)) {
    case "start":
      p2[m2] -= g2 * (a2 && d2 ? -1 : 1);
      break;
    case "end":
      p2[m2] += g2 * (a2 && d2 ? -1 : 1);
  }
  return p2;
}
const r$1 = async (t2, e2, n2) => {
  const { placement: o2 = "bottom", strategy: r2 = "absolute", middleware: a2 = [], platform: l2 } = n2, s2 = a2.filter(Boolean), c2 = await (null == l2.isRTL ? void 0 : l2.isRTL(e2));
  let f2 = await l2.getElementRects({ reference: t2, floating: e2, strategy: r2 }), { x: m2, y: u2 } = i$1(f2, o2, c2), g2 = o2, d2 = {}, p2 = 0;
  for (let n3 = 0; n3 < s2.length; n3++) {
    const { name: a3, fn: h2 } = s2[n3], { x: y2, y: x2, data: w2, reset: v2 } = await h2({ x: m2, y: u2, initialPlacement: o2, placement: g2, strategy: r2, middlewareData: d2, rects: f2, platform: l2, elements: { reference: t2, floating: e2 } });
    m2 = null != y2 ? y2 : m2, u2 = null != x2 ? x2 : u2, d2 = { ...d2, [a3]: { ...d2[a3], ...w2 } }, v2 && p2 <= 50 && (p2++, "object" == typeof v2 && (v2.placement && (g2 = v2.placement), v2.rects && (f2 = true === v2.rects ? await l2.getElementRects({ reference: t2, floating: e2, strategy: r2 }) : v2.rects), { x: m2, y: u2 } = i$1(f2, g2, c2)), n3 = -1);
  }
  return { x: m2, y: u2, placement: g2, strategy: r2, middlewareData: d2 };
};
function a$1(t2) {
  return "number" != typeof t2 ? function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l$1(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
const c$1 = Math.min, f$1 = Math.max;
function m$1(t2, e2, n2) {
  return f$1(t2, c$1(e2, n2));
}
const u$1 = (n2) => ({ name: "arrow", options: n2, async fn(i2) {
  const { element: r2, padding: l2 = 0 } = n2 || {}, { x: s2, y: c2, placement: f2, rects: u2, platform: g2, elements: d2 } = i2;
  if (null == r2)
    return {};
  const p2 = a$1(l2), h2 = { x: s2, y: c2 }, y2 = o$1(f2), x2 = e(y2), w2 = await g2.getDimensions(r2), v2 = "y" === y2, b2 = v2 ? "top" : "left", R2 = v2 ? "bottom" : "right", A2 = v2 ? "clientHeight" : "clientWidth", P = u2.reference[x2] + u2.reference[y2] - h2[y2] - u2.floating[x2], T2 = h2[y2] - u2.reference[y2], O2 = await (null == g2.getOffsetParent ? void 0 : g2.getOffsetParent(r2));
  let E2 = O2 ? O2[A2] : 0;
  E2 && await (null == g2.isElement ? void 0 : g2.isElement(O2)) || (E2 = d2.floating[A2] || u2.floating[x2]);
  const D2 = P / 2 - T2 / 2, L2 = p2[b2], k = E2 - w2[x2] - p2[R2], B = E2 / 2 - w2[x2] / 2 + D2, C2 = m$1(L2, B, k), H2 = null != t(f2) && B != C2 && u2.reference[x2] / 2 - (B < L2 ? p2[b2] : p2[R2]) - w2[x2] / 2 < 0;
  return { [y2]: h2[y2] - (H2 ? B < L2 ? L2 - B : k - B : 0), data: { [y2]: C2, centerOffset: B - C2 } };
} }), g$1 = ["top", "right", "bottom", "left"];
g$1.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
const O$1 = function(e2) {
  return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i2) {
    const { x: r2, y: a2 } = i2, l2 = await async function(e3, i3) {
      const { placement: r3, platform: a3, elements: l3 } = e3, s2 = await (null == a3.isRTL ? void 0 : a3.isRTL(l3.floating)), c2 = n$1(r3), f2 = t(r3), m2 = "x" === o$1(r3), u2 = ["left", "top"].includes(c2) ? -1 : 1, g2 = s2 && m2 ? -1 : 1, d2 = "function" == typeof i3 ? i3(e3) : i3;
      let { mainAxis: p2, crossAxis: h2, alignmentAxis: y2 } = "number" == typeof d2 ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d2 };
      return f2 && "number" == typeof y2 && (h2 = "end" === f2 ? -1 * y2 : y2), m2 ? { x: h2 * g2, y: p2 * u2 } : { x: p2 * u2, y: h2 * g2 };
    }(i2, e2);
    return { x: r2 + l2.x, y: a2 + l2.y, data: l2 };
  } };
};
function n(t2) {
  var e2;
  return (null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
}
function o(t2) {
  return n(t2).getComputedStyle(t2);
}
const i = Math.min, r = Math.max, l = Math.round;
function c(t2) {
  const e2 = o(t2);
  let n2 = parseFloat(e2.width), i2 = parseFloat(e2.height);
  const r2 = t2.offsetWidth, c2 = t2.offsetHeight, s2 = l(n2) !== r2 || l(i2) !== c2;
  return s2 && (n2 = r2, i2 = c2), { width: n2, height: i2, fallback: s2 };
}
function s(t2) {
  return h(t2) ? (t2.nodeName || "").toLowerCase() : "";
}
let f;
function u() {
  if (f)
    return f;
  const t2 = navigator.userAgentData;
  return t2 && Array.isArray(t2.brands) ? (f = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), f) : navigator.userAgent;
}
function a(t2) {
  return t2 instanceof n(t2).HTMLElement;
}
function d(t2) {
  return t2 instanceof n(t2).Element;
}
function h(t2) {
  return t2 instanceof n(t2).Node;
}
function p(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof n(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function g(t2) {
  const { overflow: e2, overflowX: n2, overflowY: i2, display: r2 } = o(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e2 + i2 + n2) && !["inline", "contents"].includes(r2);
}
function m(t2) {
  return ["table", "td", "th"].includes(s(t2));
}
function y(t2) {
  const e2 = /firefox/i.test(u()), n2 = o(t2), i2 = n2.backdropFilter || n2.WebkitBackdropFilter;
  return "none" !== n2.transform || "none" !== n2.perspective || !!i2 && "none" !== i2 || e2 && "filter" === n2.willChange || e2 && !!n2.filter && "none" !== n2.filter || ["transform", "perspective"].some((t3) => n2.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
    const e3 = n2.contain;
    return null != e3 && e3.includes(t3);
  });
}
function x() {
  return /^((?!chrome|android).)*safari/i.test(u());
}
function w(t2) {
  return ["html", "body", "#document"].includes(s(t2));
}
function v(t2) {
  return d(t2) ? t2 : t2.contextElement;
}
const b = { x: 1, y: 1 };
function L(t2) {
  const e2 = v(t2);
  if (!a(e2))
    return b;
  const n2 = e2.getBoundingClientRect(), { width: o2, height: i2, fallback: r2 } = c(e2);
  let s2 = (r2 ? l(n2.width) : n2.width) / o2, f2 = (r2 ? l(n2.height) : n2.height) / i2;
  return s2 && Number.isFinite(s2) || (s2 = 1), f2 && Number.isFinite(f2) || (f2 = 1), { x: s2, y: f2 };
}
function E(e2, o2, i2, r2) {
  var l2, c2;
  void 0 === o2 && (o2 = false), void 0 === i2 && (i2 = false);
  const s2 = e2.getBoundingClientRect(), f2 = v(e2);
  let u2 = b;
  o2 && (r2 ? d(r2) && (u2 = L(r2)) : u2 = L(e2));
  const a2 = f2 ? n(f2) : window, h2 = x() && i2;
  let p2 = (s2.left + (h2 && (null == (l2 = a2.visualViewport) ? void 0 : l2.offsetLeft) || 0)) / u2.x, g2 = (s2.top + (h2 && (null == (c2 = a2.visualViewport) ? void 0 : c2.offsetTop) || 0)) / u2.y, m2 = s2.width / u2.x, y2 = s2.height / u2.y;
  if (f2) {
    const t2 = n(f2), e3 = r2 && d(r2) ? n(r2) : r2;
    let o3 = t2.frameElement;
    for (; o3 && r2 && e3 !== t2; ) {
      const t3 = L(o3), e4 = o3.getBoundingClientRect(), i3 = getComputedStyle(o3);
      e4.x += (o3.clientLeft + parseFloat(i3.paddingLeft)) * t3.x, e4.y += (o3.clientTop + parseFloat(i3.paddingTop)) * t3.y, p2 *= t3.x, g2 *= t3.y, m2 *= t3.x, y2 *= t3.y, p2 += e4.x, g2 += e4.y, o3 = n(o3).frameElement;
    }
  }
  return l$1({ width: m2, height: y2, x: p2, y: g2 });
}
function R(t2) {
  return ((h(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function T(t2) {
  return d(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function C(t2) {
  return E(R(t2)).left + T(t2).scrollLeft;
}
function F(t2) {
  if ("html" === s(t2))
    return t2;
  const e2 = t2.assignedSlot || t2.parentNode || p(t2) && t2.host || R(t2);
  return p(e2) ? e2.host : e2;
}
function W(t2) {
  const e2 = F(t2);
  return w(e2) ? e2.ownerDocument.body : a(e2) && g(e2) ? e2 : W(e2);
}
function D(t2, e2) {
  var o2;
  void 0 === e2 && (e2 = []);
  const i2 = W(t2), r2 = i2 === (null == (o2 = t2.ownerDocument) ? void 0 : o2.body), l2 = n(i2);
  return r2 ? e2.concat(l2, l2.visualViewport || [], g(i2) ? i2 : []) : e2.concat(i2, D(i2));
}
function S(e2, i2, l2) {
  let c2;
  if ("viewport" === i2)
    c2 = function(t2, e3) {
      const o2 = n(t2), i3 = R(t2), r2 = o2.visualViewport;
      let l3 = i3.clientWidth, c3 = i3.clientHeight, s3 = 0, f3 = 0;
      if (r2) {
        l3 = r2.width, c3 = r2.height;
        const t3 = x();
        (!t3 || t3 && "fixed" === e3) && (s3 = r2.offsetLeft, f3 = r2.offsetTop);
      }
      return { width: l3, height: c3, x: s3, y: f3 };
    }(e2, l2);
  else if ("document" === i2)
    c2 = function(t2) {
      const e3 = R(t2), n2 = T(t2), i3 = t2.ownerDocument.body, l3 = r(e3.scrollWidth, e3.clientWidth, i3.scrollWidth, i3.clientWidth), c3 = r(e3.scrollHeight, e3.clientHeight, i3.scrollHeight, i3.clientHeight);
      let s3 = -n2.scrollLeft + C(t2);
      const f3 = -n2.scrollTop;
      return "rtl" === o(i3).direction && (s3 += r(e3.clientWidth, i3.clientWidth) - l3), { width: l3, height: c3, x: s3, y: f3 };
    }(R(e2));
  else if (d(i2))
    c2 = function(t2, e3) {
      const n2 = E(t2, true, "fixed" === e3), o2 = n2.top + t2.clientTop, i3 = n2.left + t2.clientLeft, r2 = a(t2) ? L(t2) : { x: 1, y: 1 };
      return { width: t2.clientWidth * r2.x, height: t2.clientHeight * r2.y, x: i3 * r2.x, y: o2 * r2.y };
    }(i2, l2);
  else {
    const t2 = { ...i2 };
    if (x()) {
      var s2, f2;
      const o2 = n(e2);
      t2.x -= (null == (s2 = o2.visualViewport) ? void 0 : s2.offsetLeft) || 0, t2.y -= (null == (f2 = o2.visualViewport) ? void 0 : f2.offsetTop) || 0;
    }
    c2 = t2;
  }
  return l$1(c2);
}
function A(t2, e2) {
  return a(t2) && "fixed" !== o(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
}
function H(t2, e2) {
  const i2 = n(t2);
  if (!a(t2))
    return i2;
  let r2 = A(t2, e2);
  for (; r2 && m(r2) && "static" === o(r2).position; )
    r2 = A(r2, e2);
  return r2 && ("html" === s(r2) || "body" === s(r2) && "static" === o(r2).position && !y(r2)) ? i2 : r2 || function(t3) {
    let e3 = F(t3);
    for (; a(e3) && !w(e3); ) {
      if (y(e3))
        return e3;
      e3 = F(e3);
    }
    return null;
  }(t2) || i2;
}
function V(t2, e2, n2) {
  const o2 = a(e2), i2 = R(e2), r2 = E(t2, true, "fixed" === n2, e2);
  let l2 = { scrollLeft: 0, scrollTop: 0 };
  const c2 = { x: 0, y: 0 };
  if (o2 || !o2 && "fixed" !== n2)
    if (("body" !== s(e2) || g(i2)) && (l2 = T(e2)), a(e2)) {
      const t3 = E(e2, true);
      c2.x = t3.x + e2.clientLeft, c2.y = t3.y + e2.clientTop;
    } else
      i2 && (c2.x = C(i2));
  return { x: r2.left + l2.scrollLeft - c2.x, y: r2.top + l2.scrollTop - c2.y, width: r2.width, height: r2.height };
}
const O = { getClippingRect: function(t2) {
  let { element: e2, boundary: n2, rootBoundary: l2, strategy: c2 } = t2;
  const f2 = "clippingAncestors" === n2 ? function(t3, e3) {
    const n3 = e3.get(t3);
    if (n3)
      return n3;
    let i2 = D(t3).filter((t4) => d(t4) && "body" !== s(t4)), r2 = null;
    const l3 = "fixed" === o(t3).position;
    let c3 = l3 ? F(t3) : t3;
    for (; d(c3) && !w(c3); ) {
      const t4 = o(c3), e4 = y(c3);
      "fixed" === t4.position ? r2 = null : (l3 ? e4 || r2 : e4 || "static" !== t4.position || !r2 || !["absolute", "fixed"].includes(r2.position)) ? r2 = t4 : i2 = i2.filter((t5) => t5 !== c3), c3 = F(c3);
    }
    return e3.set(t3, i2), i2;
  }(e2, this._c) : [].concat(n2), u2 = [...f2, l2], a2 = u2[0], h2 = u2.reduce((t3, n3) => {
    const o2 = S(e2, n3, c2);
    return t3.top = r(o2.top, t3.top), t3.right = i(o2.right, t3.right), t3.bottom = i(o2.bottom, t3.bottom), t3.left = r(o2.left, t3.left), t3;
  }, S(e2, a2, c2));
  return { width: h2.right - h2.left, height: h2.bottom - h2.top, x: h2.left, y: h2.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n2, strategy: o2 } = t2;
  const i2 = a(n2), r2 = R(n2);
  if (n2 === r2)
    return e2;
  let l2 = { scrollLeft: 0, scrollTop: 0 }, c2 = { x: 1, y: 1 };
  const f2 = { x: 0, y: 0 };
  if ((i2 || !i2 && "fixed" !== o2) && (("body" !== s(n2) || g(r2)) && (l2 = T(n2)), a(n2))) {
    const t3 = E(n2);
    c2 = L(n2), f2.x = t3.x + n2.clientLeft, f2.y = t3.y + n2.clientTop;
  }
  return { width: e2.width * c2.x, height: e2.height * c2.y, x: e2.x * c2.x - l2.scrollLeft * c2.x + f2.x, y: e2.y * c2.y - l2.scrollTop * c2.y + f2.y };
}, isElement: d, getDimensions: function(t2) {
  return a(t2) ? c(t2) : t2.getBoundingClientRect();
}, getOffsetParent: H, getDocumentElement: R, getScale: L, async getElementRects(t2) {
  let { reference: e2, floating: n2, strategy: o2 } = t2;
  const i2 = this.getOffsetParent || H, r2 = this.getDimensions;
  return { reference: V(e2, await i2(n2), o2), floating: { x: 0, y: 0, ...await r2(n2) } };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o(t2).direction };
const z = (t2, n2, o2) => {
  const i2 = /* @__PURE__ */ new Map(), r2 = { platform: O, ...o2 }, l2 = { ...r2.platform, _c: i2 };
  return r$1(t2, n2, { ...r2, platform: l2 });
};
export {
  O$1 as O,
  u$1 as u,
  z
};
