import { jsx as o, jsxs as t } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import { NavLink as g } from "react-router-dom";
import s from "styled-components";
import { useMainNav as f } from "./MainNavContext.js";
import { Box as v } from "../Box/Box.js";
import { Typography as i } from "../Typography/Typography.js";
import { Flex as $ } from "../Flex/Flex.js";
import { Badge as b } from "../Badge/Badge.js";
import { Tooltip as y } from "../Tooltip/Tooltip.js";
const p = s(v)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, m = s(g)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: r }) => r.borderRadius};
  background: ${({ theme: r }) => r.colors.neutral0};

  ${i} {
    color: ${({ theme: r }) => r.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: r }) => r.colors.neutral100};

    ${i} {
      color: ${({ theme: r }) => r.colors.neutral700};
    }

    svg path {
      fill: ${({ theme: r }) => r.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme: r }) => r.colors.primary100};

    svg path {
      fill: ${({ theme: r }) => r.colors.primary600};
    }

    ${i} {
      color: ${({ theme: r }) => r.colors.primary600};
      font-weight: 500;
    }
  }
`, u = s($)`
  padding: ${({ theme: r }) => `${r.spaces[2]} ${r.spaces[3]}`};
`, h = s(b)`
  ${({ theme: r, condensed: a }) => a && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${r.spaces[3]};
    right:  -${r.spaces[1]};
  `}

  ${i} {
    //find a solution to remove !important
    color: ${({ theme: r }) => r.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: r }) => r.spaces[6]};
  height: ${({ theme: r }) => r.spaces[5]};
  padding: ${({ theme: r }) => `0 ${r.spaces[2]}`};
  border-radius: ${({ theme: r }) => r.spaces[10]};
  background: ${({ theme: r }) => r.colors.primary600};
`, l = ({ children: r, icon: a, badgeContent: n, badgeAriaLabel: c, ...d }) => f() ? /* @__PURE__ */ o(y, { position: "right", label: r, children: /* @__PURE__ */ o(m, { ...d, children: /* @__PURE__ */ t(u, { as: "span", children: [
  /* @__PURE__ */ o(p, { "aria-hidden": !0, paddingRight: 0, as: "span", children: a }),
  n && /* @__PURE__ */ o(h, { condensed: !0, "aria-label": c, children: n })
] }) }) }) : /* @__PURE__ */ o(m, { ...d, children: /* @__PURE__ */ t(u, { as: "span", justifyContent: "space-between", children: [
  /* @__PURE__ */ t($, { children: [
    /* @__PURE__ */ o(p, { "aria-hidden": !0, paddingRight: 3, as: "span", children: a }),
    /* @__PURE__ */ o(i, { children: r })
  ] }),
  n && /* @__PURE__ */ o(h, { justifyContent: "center", "aria-label": c, children: n })
] }) });
l.displayName = "NavLink";
l.defaultProps = {
  badgeContent: void 0,
  badgeAriaLabel: void 0
};
l.propTypes = {
  badgeAriaLabel: e.string,
  badgeContent: e.oneOfType([e.string, e.number]),
  children: e.node.isRequired,
  icon: e.node.isRequired
};
export {
  l as NavLink
};
