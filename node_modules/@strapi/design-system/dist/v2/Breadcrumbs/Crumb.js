import { jsx as p } from "react/jsx-runtime";
import "react";
import i from "prop-types";
import { Box as a } from "../../Box/Box.js";
import { Typography as d } from "../../Typography/Typography.js";
const r = ({ children: t, isCurrent: o, ...e }) => /* @__PURE__ */ p(a, { paddingLeft: 2, paddingRight: 2, paddingTop: 1, paddingBottom: 1, children: /* @__PURE__ */ p(
  d,
  {
    variant: "pi",
    textColor: "neutral800",
    fontWeight: o ? "bold" : "normal",
    "aria-current": o,
    ...e,
    children: t
  }
) });
r.displayName = "Crumb";
r.defaultProps = {
  isCurrent: !1
};
r.propTypes = {
  children: i.node.isRequired,
  isCurrent: i.bool
};
export {
  r as Crumb
};
