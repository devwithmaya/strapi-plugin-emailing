import { jsxs as a, jsx as e } from "react/jsx-runtime";
import * as d from "react";
import { Cross as K } from "@strapi/icons";
import N, { css as T } from "styled-components";
import { Item as S, ItemIndicator as F, ItemText as Q, Group as U, Root as Z, Trigger as ee, Value as re, Portal as te, Content as ne, Viewport as oe } from "./SelectParts.js";
import ie from "../BaseCheckbox/assets/checkmark.svg.js";
import { stripReactIdOfColon as le } from "../helpers/strings.js";
import { useId as O } from "../hooks/useId.js";
import { useIntersection as ce } from "../hooks/useIntersection.js";
import { Tag as de } from "../Tag/Tag.js";
import { Box as g } from "../Box/Box.js";
import { Typography as M } from "../Typography/Typography.js";
import { Field as ae } from "../Field/Field.js";
import { Flex as se } from "../Flex/Flex.js";
import { FieldLabel as he } from "../Field/FieldLabel.js";
import { FieldHint as ue } from "../Field/FieldHint.js";
import { FieldError as pe } from "../Field/FieldError.js";
const Be = ({ children: t, clearLabel: o = "Clear", customizeContent: n, disabled: i, error: l, hint: s, id: h, label: p, labelAction: L, onChange: f, onClear: V, onReachEnd: I, placeholder: j, required: $, selectButtonTitle: fe, startIcon: E, size: z = "M", value: u, withTags: b, ...A }) => {
  const k = d.useRef(null), [C, v] = d.useState(), [G, W] = d.useState(!1), m = O(h), q = `${m}-hint`, H = `${m}-error`, P = (r) => {
    f ? f(r) : v(r);
  }, X = (r) => () => {
    const y = Array.isArray(u) ? u.filter((x) => x !== r) : (C ?? []).filter((x) => x !== r);
    f ? f(y) : v(y);
  }, Y = (r) => {
    W(r);
  }, w = d.useRef(null), _ = () => {
    w.current.focus();
  }, D = O(), R = `intersection-${le(D)}`;
  ce(k, (r) => {
    I && I(r);
  }, {
    selectorToWatch: `#${R}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !G
  });
  const c = typeof u < "u" && u !== null ? u : C, J = (r) => r && typeof r == "object" && r.value ? e(de, { tabIndex: -1, disabled: i, icon: e(K, {}), onClick: X(r.value), children: r.textValue }, r.value) : null;
  return e(ae, { hint: s, error: l, id: m, required: $, children: a(se, { direction: "column", alignItems: "stretch", gap: 1, children: [e(he, { onClick: _, action: L, children: p }), a(Z, { onOpenChange: Y, disabled: i, required: $, onValueChange: P, value: c, ...A, multi: !0, children: [e(ee, { ref: w, "aria-label": p, "aria-describedby": `${q} ${H}`, id: m, startIcon: E, size: z, hasError: !!l, disabled: i, clearLabel: o, onClear: c?.length ? V : void 0, paddingLeft: b && c?.length ? 1 : 3, children: e(re, { placeholder: j, textColor: c?.length ? "neutral800" : "neutral600", children: c?.length ? b ? J : n ? n(c) : void 0 : void 0 }) }), e(te, { children: e(ne, { position: "popper", sideOffset: 4, children: a(oe, { ref: k, children: [t, e(g, { id: R, width: "100%", height: "1px" })] }) }) })] }), e(ue, {}), e(pe, {})] }) });
}, Le = d.forwardRef(({ value: t, children: o, startIcon: n, ...i }, l) => a(S, { ref: l, value: t.toString(), ...i, children: [n && e(g, { as: "span", "aria-hidden": !0, children: n }), e(F, { children: ({ isSelected: s, isIntermediate: h }) => e(B, { hasRadius: !0, overflow: "hidden", position: "relative", $indeterminate: h, $selected: s, zIndex: 1, height: "18px", width: "18px" }) }), e(M, { textColor: "neutral800", children: e(Q, { children: o }) })] })), B = N(g)`
  border: 1px solid
    ${({ theme: t, $selected: o, $indeterminate: n }) => o || n ? t.colors.primary600 : t.colors.neutral300};
  background-color: ${({ theme: t, $selected: o, $indeterminate: n }) => o || n ? t.colors.primary600 : t.colors.neutral0};

  ${({ theme: t, $indeterminate: o }) => o && T`
      &::after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: ${t.colors.neutral0};
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    `}

  ${({ $selected: t }) => t && T`
      &::after {
        content: '';
        background: url(${ie}) no-repeat no-repeat center center;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `}
`, Ve = d.forwardRef(({ children: t, label: o, startIcon: n, values: i = [], ...l }, s) => a(U, { ref: s, children: [a(S, { value: i, ...l, children: [n && e(g, { as: "span", "aria-hidden": !0, children: n }), e(F, { children: ({ isSelected: h, isIntermediate: p }) => e(B, { hasRadius: !0, overflow: "hidden", position: "relative", $indeterminate: p, $selected: h, zIndex: 1, height: "18px", width: "18px" }) }), e(M, { textColor: "neutral800", children: o })] }), t] }));
export {
  Be as MultiSelect,
  Ve as MultiSelectGroup,
  Le as MultiSelectOption
};
