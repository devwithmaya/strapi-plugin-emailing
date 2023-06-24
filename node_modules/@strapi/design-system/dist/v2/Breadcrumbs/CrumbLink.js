import { jsx as s } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import t from "styled-components";
import { BaseLink as n } from "../../BaseLink/BaseLink.js";
const d = t(n)`
  border-radius: ${({ theme: o }) => o.borderRadius};
  color: ${({ theme: o }) => o.colors.neutral600};
  font-size: ${({ theme: o }) => o.fontSizes[1]};
  line-height: ${({ theme: o }) => o.lineHeights[4]};
  padding: ${({ theme: o }) => `${o.spaces[1]} ${o.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({ theme: o }) => o.colors.neutral200};
    color: ${({ theme: o }) => o.colors.neutral700};
  }
`, r = ({ children: o, ...i }) => /* @__PURE__ */ s(d, { ...i, children: o });
r.displayName = "CrumbLink";
r.defaultProps = {
  to: void 0
};
r.propTypes = {
  children: e.node.isRequired,
  to: e.string
};
export {
  r as CrumbLink
};
