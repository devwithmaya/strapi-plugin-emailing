import { jsxs as m, jsx as r } from "react/jsx-runtime";
import "react";
import { CarretDown as g } from "@strapi/icons";
import o from "prop-types";
import p from "styled-components";
import { Flex as f } from "../Flex/Flex.js";
import { Box as a } from "../Box/Box.js";
import { Typography as i } from "../Typography/Typography.js";
const l = p(f)`
  border: none;
  padding: 0;
  background: transparent;
`, u = p.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, d = ({ collapsable: t, label: e, onClick: s, ariaExpanded: n, ariaControls: c }) => t ? /* @__PURE__ */ m(
  l,
  {
    as: "button",
    onClick: s,
    "aria-expanded": n,
    "aria-controls": c,
    textAlign: "left",
    children: [
      /* @__PURE__ */ r(a, { paddingRight: 1, children: /* @__PURE__ */ r(i, { variant: "sigma", textColor: "neutral600", children: e }) }),
      t && /* @__PURE__ */ r(u, { rotated: n, children: /* @__PURE__ */ r(g, { "aria-hidden": !0 }) })
    ]
  }
) : /* @__PURE__ */ r(l, { children: /* @__PURE__ */ r(a, { paddingRight: 1, children: /* @__PURE__ */ r(i, { variant: "sigma", textColor: "neutral600", children: e }) }) });
d.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  collapsable: !1,
  onClick() {
  }
};
d.propTypes = {
  ariaControls: o.string,
  ariaExpanded: o.bool,
  collapsable: o.bool,
  label: o.string.isRequired,
  onClick: o.func
};
export {
  d as SubNavSectionLabel
};
