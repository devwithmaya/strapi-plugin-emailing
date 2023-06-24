import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { Children as m } from "react";
import p from "prop-types";
import { useMainNav as u } from "./MainNavContext.js";
import { Divider as g } from "../Divider/Divider.js";
import { Flex as i } from "../Flex/Flex.js";
import { Box as l } from "../Box/Box.js";
import { VisuallyHidden as h } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as f } from "../Typography/Typography.js";
const x = ({ label: o, children: a, spacing: s = 2, horizontal: e = !1, ...c }) => u() ? /* @__PURE__ */ d(i, { direction: "column", alignItems: "stretch", gap: 2, children: [
  /* @__PURE__ */ d(l, { paddingTop: 1, paddingBottom: 1, background: "neutral0", hasRadius: !0, as: "span", children: [
    /* @__PURE__ */ r(g, {}),
    /* @__PURE__ */ r(h, { children: /* @__PURE__ */ r("span", { children: o }) })
  ] }),
  /* @__PURE__ */ r(
    i,
    {
      as: "ul",
      gap: s,
      direction: e ? "row" : "column",
      alignItems: e ? "center" : "stretch",
      ...c,
      children: m.map(a, (n, t) => /* @__PURE__ */ r("li", { children: n }, t))
    }
  )
] }) : /* @__PURE__ */ d(i, { direction: "column", alignItems: "stretch", gap: 2, children: [
  /* @__PURE__ */ r(l, { paddingTop: 1, paddingBottom: 1, background: "neutral0", paddingRight: 3, paddingLeft: 3, hasRadius: !0, as: "span", children: /* @__PURE__ */ r(f, { variant: "sigma", textColor: "neutral600", children: o }) }),
  /* @__PURE__ */ r(
    i,
    {
      as: "ul",
      gap: s,
      direction: e ? "row" : "column",
      alignItems: e ? "center" : "stretch",
      ...c,
      children: m.map(a, (n, t) => /* @__PURE__ */ r("li", { children: n }, t))
    }
  )
] });
x.propTypes = {
  children: p.node.isRequired,
  label: p.string.isRequired
};
export {
  x as NavSection
};
