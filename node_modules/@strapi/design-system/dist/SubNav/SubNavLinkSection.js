import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { useState as f, Children as g } from "react";
import { CarretDown as u } from "@strapi/icons";
import t from "prop-types";
import d from "styled-components";
import { useId as x } from "../hooks/useId.js";
import { Box as o } from "../Box/Box.js";
import { Flex as b } from "../Flex/Flex.js";
import { Typography as k } from "../Typography/Typography.js";
const y = d(o)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral700};
    }
  }
`, v = d.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, C = d.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: r }) => r ? "0deg" : "180deg"});
`, l = ({ label: r, children: s, id: c }) => {
  const [i, m] = f(!0), a = x(c);
  return /* @__PURE__ */ p(o, { children: [
    /* @__PURE__ */ e(y, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: /* @__PURE__ */ e(b, { justifyContent: "space-between", children: /* @__PURE__ */ p(v, { onClick: () => {
      m((n) => !n);
    }, "aria-expanded": i, "aria-controls": a, children: [
      /* @__PURE__ */ e(C, { rotated: i, children: /* @__PURE__ */ e(u, { "aria-hidden": !0 }) }),
      /* @__PURE__ */ e(o, { paddingLeft: 2, children: /* @__PURE__ */ e(k, { as: "span", fontWeight: "semiBold", textColor: "neutral800", children: r }) })
    ] }) }) }),
    i && /* @__PURE__ */ e("ul", { id: a, children: g.map(s, (n, h) => /* @__PURE__ */ e("li", { children: n }, h)) })
  ] });
};
l.defaultProps = {
  children: void 0,
  id: void 0
};
l.propTypes = {
  children: t.node,
  id: t.string,
  label: t.string.isRequired
};
export {
  l as SubNavLinkSection
};
