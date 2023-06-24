import { jsxs as s, jsx as r } from "react/jsx-runtime";
import "react";
import { Dot as f } from "@strapi/icons";
import e from "prop-types";
import { NavLink as g } from "react-router-dom";
import l from "styled-components";
import { Box as t } from "../Box/Box.js";
import { Typography as c } from "../Typography/Typography.js";
import { Flex as p } from "../Flex/Flex.js";
const h = l(t)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: o }) => o.colors.neutral800};
  svg > * {
    fill: ${({ theme: o }) => o.colors.neutral600};
  }

  &.active {
    ${({ theme: o }) => `
      background-color: ${o.colors.primary100};
      border-right: 2px solid ${o.colors.primary600};
      svg > * {
        fill: ${o.colors.primary700};
      }
      ${c} {
        color: ${o.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, a = l(f)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: o, $active: i }) => i ? o.colors.primary600 : o.colors.neutral600};
  }
`, $ = l.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, n = ({ children: o, icon: i, withBullet: d, isSubSectionChild: m, ...u }) => /* @__PURE__ */ s(
  h,
  {
    as: g,
    icon: i,
    background: "neutral100",
    paddingLeft: m ? 9 : 7,
    paddingBottom: 2,
    paddingTop: 2,
    ...u,
    children: [
      /* @__PURE__ */ s(p, { children: [
        i ? /* @__PURE__ */ r($, { children: i }) : /* @__PURE__ */ r(a, {}),
        /* @__PURE__ */ r(t, { paddingLeft: 2, children: /* @__PURE__ */ r(c, { as: "span", children: o }) })
      ] }),
      d && /* @__PURE__ */ r(t, { as: p, paddingRight: 4, children: /* @__PURE__ */ r(a, { $active: !0 }) })
    ]
  }
);
n.displayName = "SubNavLink";
n.defaultProps = {
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
n.propTypes = {
  children: e.node.isRequired,
  icon: e.element,
  isSubSectionChild: e.bool,
  withBullet: e.bool
};
export {
  n as SubNavLink
};
