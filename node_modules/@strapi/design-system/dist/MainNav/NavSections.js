import { jsx as r } from "react/jsx-runtime";
import { Children as d } from "react";
import m from "prop-types";
import l from "styled-components";
import { Box as s } from "../Box/Box.js";
import { Flex as c } from "../Flex/Flex.js";
const a = l(s)`
  flex-grow: 1;
  overflow-y: auto;
`, f = ({ children: e, spacing: i = 4, horizontal: o = !1, ...t }) => /* @__PURE__ */ r(a, { paddingLeft: 3, paddingRight: 2, paddingTop: 3, paddingBottom: 8, children: /* @__PURE__ */ r(
  c,
  {
    as: "ul",
    gap: i,
    direction: o ? "row" : "column",
    alignItems: o ? "center" : "stretch",
    ...t,
    children: d.map(e, (p, n) => /* @__PURE__ */ r("li", { children: p }, n))
  }
) });
f.propTypes = {
  children: m.node.isRequired
};
export {
  f as NavSections
};
