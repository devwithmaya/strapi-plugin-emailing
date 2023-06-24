import { jsx as t } from "react/jsx-runtime";
import "react";
import i from "prop-types";
import e from "styled-components";
import { Grid as a } from "../Grid/Grid.js";
const p = `${232 / 16}rem`, s = e(a)`
  width: ${p};
  background: ${({ theme: r }) => r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
  z-index: 1;
`, n = ({ ariaLabel: r, ...o }) => /* @__PURE__ */ t(s, { "aria-label": r, as: "nav", ...o });
n.propTypes = {
  ariaLabel: i.string.isRequired
};
export {
  n as SubNav,
  p as subNavWidth
};
