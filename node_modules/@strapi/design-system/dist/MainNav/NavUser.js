import { jsx as r, jsxs as l } from "react/jsx-runtime";
import m from "react";
import i from "prop-types";
import f from "styled-components";
import { useMainNav as c } from "./MainNavContext.js";
import { Avatar as u, Initials as h } from "../Avatar/Avatar.js";
import { Box as n } from "../Box/Box.js";
import { Flex as g } from "../Flex/Flex.js";
import { VisuallyHidden as v } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as x } from "../Typography/Typography.js";
const y = f(n)`
  border-top: 1px solid ${({ theme: o }) => o.colors.neutral150};
`, t = m.forwardRef(({ src: o, children: e, initials: a, ...s }, p) => {
  const d = c();
  return /* @__PURE__ */ r(y, { paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, ...s, children: /* @__PURE__ */ l(g, { as: "button", justifyContent: d ? "center" : void 0, ref: p, children: [
    o ? /* @__PURE__ */ r(u, { src: o, alt: "", "aria-hidden": !0 }) : /* @__PURE__ */ r(h, { children: a }),
    d ? /* @__PURE__ */ r(v, { children: /* @__PURE__ */ r("span", { children: e }) }) : /* @__PURE__ */ r(n, { width: `${130 / 16}rem`, paddingLeft: 2, as: "span", children: /* @__PURE__ */ r(x, { ellipsis: !0, textColor: "neutral600", children: e }) })
  ] }) });
});
t.displayName = "NavUser";
t.defaultProps = {
  src: void 0,
  initials: void 0
};
t.propTypes = {
  children: i.node.isRequired,
  initials: i.node,
  src: i.string
};
export {
  t as NavUser
};
