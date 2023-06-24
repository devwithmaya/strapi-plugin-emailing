import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { Children as o } from "react";
import e from "prop-types";
import p from "styled-components";
import { Divider as f } from "./Divider.js";
import { Flex as n } from "../../Flex/Flex.js";
import { Box as u } from "../../Box/Box.js";
const y = p(n)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({ theme: r }) => `calc(-1*${r.spaces[2]})`};
  }
`, a = ({ label: r, children: s, ...l }) => {
  const i = o.toArray(s);
  return /* @__PURE__ */ t(u, { "aria-label": r, ...l, children: /* @__PURE__ */ t(y, { as: "ol", horizontal: !0, children: o.map(i, (m, d) => {
    const h = i.length > 1 && d + 1 < i.length;
    return /* @__PURE__ */ c(n, { inline: !0, as: "li", children: [
      m,
      h && /* @__PURE__ */ t(f, {})
    ] });
  }) }) });
};
a.displayName = "Breadcrumbs";
a.propTypes = {
  children: e.oneOfType([e.arrayOf(e.node), e.node]).isRequired,
  label: e.string.isRequired
};
export {
  a as Breadcrumbs
};
