import { jsxs as i, jsx as t } from "react/jsx-runtime";
import "react";
import { ChevronRight as n, ChevronLeft as s } from "@strapi/icons";
import d from "prop-types";
import a from "styled-components";
import { useMainNav as m } from "./MainNavContext.js";
import { Icon as p } from "../Icon/Icon.js";
import { VisuallyHidden as h } from "../VisuallyHidden/VisuallyHidden.js";
const l = a.button`
  background: ${({ theme: r }) => r.colors.neutral0};
  border: 1px solid ${({ theme: r }) => r.colors.neutral150};
  border-radius: ${({ theme: r }) => r.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9 + 4) / 16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({ theme: r, condensed: e }) => e ? 0 : r.spaces[5]};
  transform: ${({ condensed: r }) => r ? "translateX(50%)" : void 0};
  z-index: 2;
  width: ${18 / 16}rem;
  height: ${25 / 16}rem;

  svg {
    width: ${6 / 16}rem;
    height: ${9 / 16}rem;
  }
`, c = ({ children: r, ...e }) => {
  const o = m();
  return /* @__PURE__ */ i(l, { as: "button", condensed: o, ...e, children: [
    /* @__PURE__ */ t(p, { as: o ? n : s, "aria-hidden": !0, color: "neutral600" }),
    /* @__PURE__ */ t(h, { children: r })
  ] });
};
c.propTypes = {
  children: d.string.isRequired
};
export {
  c as NavCondense
};
