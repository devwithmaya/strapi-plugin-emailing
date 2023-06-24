import { jsx as i, jsxs as e } from "react/jsx-runtime";
import "react";
import n from "prop-types";
import { NavLink as o } from "react-router-dom";
import h from "styled-components";
import { useMainNav as g } from "./MainNavContext.js";
import { Box as t } from "../Box/Box.js";
import { VisuallyHidden as s } from "../VisuallyHidden/VisuallyHidden.js";
import { Flex as f } from "../Flex/Flex.js";
import { Typography as m } from "../Typography/Typography.js";
const c = h.div`
  svg,
  img {
    border-radius: ${({ theme: r }) => r.borderRadius};
    object-fit: contain;
    height: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, u = h(o)`
  text-decoration: unset;
  color: inherit;
`, l = ({ workplace: r, title: a, icon: p, to: d }) => g() ? /* @__PURE__ */ i(t, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: /* @__PURE__ */ i(c, { condensed: !0, children: /* @__PURE__ */ e(o, { to: d, children: [
  p,
  /* @__PURE__ */ e(s, { children: [
    /* @__PURE__ */ i("span", { children: a }),
    /* @__PURE__ */ i("span", { children: r })
  ] })
] }) }) }) : /* @__PURE__ */ i(t, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: /* @__PURE__ */ e(f, { children: [
  /* @__PURE__ */ i(c, { as: o, to: d, "aria-hidden": !0, tabIndex: -1, children: p }),
  /* @__PURE__ */ e(t, { paddingLeft: 2, children: [
    /* @__PURE__ */ i(m, { fontWeight: "bold", textColor: "neutral800", as: "span", children: /* @__PURE__ */ e(u, { to: d, children: [
      a,
      /* @__PURE__ */ i(s, { as: "span", children: r })
    ] }) }),
    /* @__PURE__ */ i(m, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": !0, children: r })
  ] })
] }) });
l.defaultProps = {
  to: "/"
};
l.propTypes = {
  icon: n.node.isRequired,
  title: n.string.isRequired,
  to: n.string,
  workplace: n.string.isRequired
};
export {
  l as NavBrand
};
