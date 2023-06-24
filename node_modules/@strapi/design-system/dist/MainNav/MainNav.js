import { jsx as r } from "react/jsx-runtime";
import "react";
import n from "prop-types";
import i from "styled-components";
import { MainNavContext as a } from "./MainNavContext.js";
import { Flex as p } from "../Flex/Flex.js";
const m = i(p)`
  width: ${({ condensed: o }) => o ? "max-content" : `${224 / 16}rem`};
  border-right: 1px solid ${({ theme: o }) => o.colors.neutral150};
`, t = ({ condensed: o, ...e }) => /* @__PURE__ */ r(a.Provider, { value: o, children: /* @__PURE__ */ r(
  m,
  {
    alignItems: "normal",
    as: "nav",
    background: "neutral0",
    condensed: o,
    direction: "column",
    height: "100vh",
    position: "sticky",
    top: 0,
    zIndex: 2,
    ...e
  }
) });
t.defaultProps = {
  condensed: !1
};
t.propTypes = {
  condensed: n.bool
};
export {
  t as MainNav
};
