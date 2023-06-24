import { jsx as e } from "react/jsx-runtime";
import "react";
import { CarretDown as t } from "@strapi/icons";
import o from "prop-types";
import m from "styled-components";
import { SimpleMenu as n } from "../SimpleMenu/SimpleMenu.js";
import { Button as s } from "../../Button/Button.js";
const a = m(s)`
  padding: ${({ theme: r }) => `${r.spaces[1]} ${r.spaces[3]}`};

  :hover,
  :focus {
    background-color: ${({ theme: r }) => r.colors.neutral200};
  }
`, i = ({ children: r, ...p }) => /* @__PURE__ */ e(n, { noBorder: !0, icon: /* @__PURE__ */ e(t, {}), as: a, size: "S", ...p, children: r });
i.displayName = "CrumbSimpleMenu";
i.propTypes = {
  "aria-label": o.string.isRequired,
  children: o.oneOfType([o.arrayOf(o.node), o.node]).isRequired
};
export {
  i as CrumbSimpleMenu
};
