import { jsx as r } from "react/jsx-runtime";
import { Children as m } from "react";
import d from "prop-types";
import { Box as c } from "../Box/Box.js";
import { Flex as l } from "../Flex/Flex.js";
const s = ({ children: e, spacing: i = 2, horizontal: o = !1, ...p }) => /* @__PURE__ */ r(c, { paddingTop: 2, paddingBottom: 4, children: /* @__PURE__ */ r(
  l,
  {
    as: "ol",
    gap: i,
    direction: o ? "row" : "column",
    alignItems: o ? "center" : "stretch",
    ...p,
    children: m.map(e, (t, n) => /* @__PURE__ */ r("li", { children: t }, n))
  }
) });
s.propTypes = {
  children: d.node.isRequired
};
export {
  s as SubNavSections
};
