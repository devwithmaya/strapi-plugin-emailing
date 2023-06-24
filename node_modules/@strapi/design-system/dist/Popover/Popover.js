import { jsx as r, jsxs as I } from "react/jsx-runtime";
import * as o from "react";
import { useFloating as W, offset as A, shift as K, flip as j, autoUpdate as M } from "@floating-ui/react-dom";
import { FocusScope as T } from "@radix-ui/react-focus-scope";
import { useCallbackRef as U, composeEventHandlers as v } from "@strapi/ui-primitives";
import { hideOthers as B } from "aria-hidden";
import { RemoveScroll as H } from "react-remove-scroll";
import k from "styled-components";
import { DismissibleLayer as N } from "../DismissibleLayer/index.js";
import { stripReactIdOfColon as x } from "../helpers/strings.js";
import { useComposedRefs as V } from "../hooks/useComposeRefs.js";
import { useId as Z } from "../hooks/useId.js";
import { useIntersection as _ } from "../hooks/useIntersection.js";
import { Box as h } from "../Box/Box.js";
import { Portal as q } from "../Portal/Portal.js";
const me = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end"
], G = k(h)`
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  z-index: ${({ theme: e }) => e.zIndices[0]};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
`, J = o.forwardRef(({ source: e, children: s, spacing: n = 0, fullWidth: i = !1, placement: l = "bottom-start", centered: a = !1, onEscapeKeyDown: d, onPointerDownOutside: f, onDismiss: c, onFocusOutside: u, ...E }, R) => {
  const [m, y] = o.useState(null), [P, C] = o.useState(void 0), b = o.useRef(!1), { x: D, y: L, reference: w, floating: S, strategy: O } = W({
    strategy: "fixed",
    placement: a ? "bottom" : l,
    middleware: [
      A({
        mainAxis: n
      }),
      K(),
      j()
    ],
    whileElementsMounted: M
  });
  o.useLayoutEffect(() => {
    w(e.current);
  }, [e, w]), o.useLayoutEffect(() => {
    i && C(e.current.offsetWidth);
  }, [i, e]), o.useEffect(() => {
    if (m)
      return B(m);
  }, [m]);
  const g = U(c);
  o.useEffect(() => {
    const t = () => {
      g();
    };
    return window.addEventListener("blur", t), window.addEventListener("resize", t), () => {
      window.removeEventListener("blur", t), window.removeEventListener("resize", t);
    };
  }, [g]);
  const $ = V(R, (t) => y(t), S);
  return r(H, { allowPinchZoom: !0, children: r(T, {
    asChild: !0,
    loop: !0,
    // we make sure we're not trapping once it's been closed
    // (closed !== unmounted when animating out)
    trapped: !0,
    onUnmountAutoFocus: (t) => {
      t.preventDefault(), b.current || e.current?.focus({ preventScroll: !0 });
    },
    children: r(N, {
      asChild: !0,
      onEscapeKeyDown: d,
      onPointerDownOutside: v(f, (t) => {
        const p = t.detail.originalEvent, F = p.button === 0 && p.ctrlKey === !0, z = p.button === 2 || F;
        b.current = z;
      }, { checkForDefaultPrevented: !1 }),
      // When focus is trapped, a `focusout` event may still happen.
      // We make sure we don't trigger our `onDismiss` in such case.
      onFocusOutside: v(u, (t) => t.preventDefault(), {
        checkForDefaultPrevented: !1
      }),
      onDismiss: c,
      children: r(G, { ref: $, style: {
        left: D,
        top: L,
        position: O,
        width: P || void 0
      }, hasRadius: !0, background: "neutral0", padding: 1, ...E, children: s })
    })
  }) });
}), Q = ({ children: e, intersectionId: s, onReachEnd: n, ...i }) => {
  const l = o.useRef(null), a = Z();
  return _(l, n ?? (() => {
  }), {
    selectorToWatch: `#${x(a)}`,
    skipWhen: !s || !n
  }), I(X, { ref: l, ...i, children: [e, s && n && r(h, { id: x(a), width: "100%", height: "1px" })] });
}, X = k(h)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3 * 5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme: e }) => e.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme: e }) => e.colors.neutral150};
    border-radius: ${({ theme: e }) => e.borderRadius};
    margin-right: 10px;
  }
`, pe = ({ children: e, source: s, spacing: n, fullWidth: i, placement: l, centered: a, onEscapeKeyDown: d, onPointerDownOutside: f, onDismiss: c, ...u }) => r(q, { children: r(J, { source: s, spacing: n, fullWidth: i, placement: l, centered: a, onEscapeKeyDown: d, onPointerDownOutside: f, onDismiss: c, children: r(Q, { ...u, children: e }) }) });
export {
  J as Content,
  me as POPOVER_PLACEMENTS,
  pe as Popover,
  Q as Scrolling
};
