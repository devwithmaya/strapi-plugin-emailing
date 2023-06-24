import { jsx as t, jsxs as z } from "react/jsx-runtime";
import B, { useRef as T, useEffect as E, useState as K, Children as H, cloneElement as U } from "react";
import { CarretDown as G } from "@strapi/icons";
import { useCallbackRef as $ } from "@strapi/ui-primitives";
import e from "prop-types";
import { NavLink as J } from "react-router-dom";
import y from "styled-components";
import { getOptionStyle as b } from "./utils.js";
import { KeyboardKeys as i } from "../helpers/keyboardKeys.js";
import { useId as Q } from "../hooks/useId.js";
import { Link as X } from "../Link/Link.js";
import { Button as L } from "../Button/Button.js";
import { POPOVER_PLACEMENTS as Y, Popover as Z } from "../Popover/Popover.js";
import { Box as C } from "../Box/Box.js";
import { Typography as O } from "../Typography/Typography.js";
import { Flex as ee } from "../Flex/Flex.js";
const ne = y.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${b}
`, oe = y(J)`
  text-decoration: none;
  ${b}
`, te = y(X)`
  /* Removing Link hover effect */
  &:hover {
    color: currentColor;
  }

  &:focus-visible {
    /* Removing Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({ theme: o }) => o.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }

  ${b}
`, re = y.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`, ie = y(L)`
  padding: ${({ theme: o }) => `${o.spaces[1]} ${o.spaces[3]}`};
`, A = ({ children: o, onClick: h, to: s, isFocused: c, href: a, ...x }) => {
  const d = T();
  E(() => {
    c && d.current && d.current.focus();
  }, [c]);
  const l = {
    tabIndex: c ? 0 : -1,
    ref: d,
    role: "menuitem",
    ...x
  }, p = (g) => {
    (g.key === i.SPACE || g.key === i.ENTER) && h();
  };
  return s && !a ? /* @__PURE__ */ t(oe, { to: s, ...l, children: /* @__PURE__ */ t(C, { padding: 2, children: /* @__PURE__ */ t(O, { children: o }) }) }) : a && !s ? /* @__PURE__ */ t(te, { isExternal: !0, href: a, ...l, children: /* @__PURE__ */ t(C, { padding: 2, children: /* @__PURE__ */ t(O, { children: o }) }) }) : /* @__PURE__ */ t(ne, { onKeyDown: p, onMouseDown: h, type: "button", ...l, children: /* @__PURE__ */ t(C, { padding: 2, children: /* @__PURE__ */ t(O, { children: o }) }) });
};
A.defaultProps = {
  as: void 0,
  href: void 0,
  isFocused: !1,
  onClick() {
  },
  to: void 0
};
A.propTypes = {
  as: e.elementType,
  children: e.node.isRequired,
  href: e.string,
  isFocused: e.bool,
  onClick: e.func,
  to: e.string
};
const k = ({
  label: o,
  children: h,
  id: s,
  as: c,
  onOpen: a = () => {
  },
  onClose: x = () => {
  },
  size: d,
  popoverPlacement: l,
  onReachEnd: p,
  ...g
}) => {
  const u = T(), P = Q(s), R = T(!1), [f, m] = K(!1), [D, I] = K(0), v = H.toArray(h), N = c || (d === "S" ? ie : L), S = !!p && typeof p == "function";
  E(() => {
    if (["string", "number"].includes(typeof o)) {
      const n = v.findIndex((r) => r.props.children === o);
      n !== -1 && I(n);
    }
  }, [o]);
  const w = $(a), M = $(x);
  E(() => {
    R?.current ? f ? w() : M() : R.current = !0;
  }, [R, M, w, f]), E(() => {
    B.isValidElement(o) && D === -1 && u.current.focus();
  }, [o, D]);
  const F = (n) => {
    f && (n.key === i.ESCAPE && (n.stopPropagation(), m(!1), u.current.focus()), n.key === i.DOWN && I((r) => r === v.length - 1 ? 0 : r + 1), n.key === i.UP && I((r) => r === 0 ? v.length - 1 : r - 1));
  }, V = (n) => {
    (n.key === i.ENTER || n.key === i.SPACE) && m((r) => !r);
  }, j = (n) => {
    n.preventDefault(), n.currentTarget.contains(n.relatedTarget) || m(!1);
  }, q = (n) => {
    n.preventDefault(), m((r) => !r);
  }, W = () => {
    S && p();
  }, _ = v.map((n, r) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ t(ee, { as: "li", justifyContent: "center", role: "menuitem", children: U(n, {
      onClick() {
        n.props.onClick(), m(!1), u.current.focus();
      },
      isFocused: D === r
    }) }, r)
  ));
  return (
    // TODO: review why we need to eslint it and how to solve this issue.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z("div", { onKeyDown: F, children: [
      /* @__PURE__ */ t(
        N,
        {
          label: B.isValidElement(o) ? null : o,
          "aria-haspopup": !0,
          "aria-expanded": f,
          "aria-controls": P,
          onKeyDown: V,
          onMouseDown: q,
          ref: u,
          type: "button",
          variant: "ghost",
          endIcon: /* @__PURE__ */ t(re, { children: /* @__PURE__ */ t(G, { "aria-hidden": !0 }) }),
          ...g,
          children: o
        }
      ),
      f && /* @__PURE__ */ t(
        Z,
        {
          onBlur: j,
          placement: l,
          source: u,
          onReachEnd: W,
          intersectionId: S ? `popover-${P}` : void 0,
          spacing: 4,
          children: /* @__PURE__ */ t(C, { role: "menu", as: "ul", padding: 1, id: P, children: _ })
        }
      )
    ] })
  );
};
k.defaultProps = {
  as: void 0
};
k.displayName = "SimpleMenu";
k.defaultProps = {
  id: void 0,
  onOpen: void 0,
  onClose: void 0,
  onReachEnd: void 0,
  popoverPlacement: "bottom-start",
  size: "M"
};
k.propTypes = {
  as: e.any,
  children: e.oneOfType([e.arrayOf(e.node), e.node]).isRequired,
  id: e.string,
  label: e.oneOfType([e.string, e.number, e.element]).isRequired,
  onClose: e.func,
  onOpen: e.func,
  /**
   * Callback function to be called when the popover reaches the end of the scrollable content
   */
  onReachEnd: e.func,
  popoverPlacement: e.oneOf(Y),
  /**
   * Size of the trigger button.
   * Note: in case a custom component is passed through the "as"
   * prop, the size prop is passed along too, but needs to be handled there
   */
  size: e.oneOf(["S", "M"])
};
export {
  A as MenuItem,
  k as SimpleMenu
};
