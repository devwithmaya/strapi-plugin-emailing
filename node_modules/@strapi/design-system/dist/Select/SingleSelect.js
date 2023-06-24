import { jsxs as p, jsx as e } from "react/jsx-runtime";
import * as u from "react";
import { Item as j, ItemText as q, Root as W, Trigger as _, Value as H, Portal as M, Content as P, Viewport as z } from "./SelectParts.js";
import { stripReactIdOfColon as A } from "../helpers/strings.js";
import { useId as R } from "../hooks/useId.js";
import { useIntersection as D } from "../hooks/useIntersection.js";
import { Box as x } from "../Box/Box.js";
import { Typography as G } from "../Typography/Typography.js";
import { Field as J } from "../Field/Field.js";
import { Flex as K } from "../Flex/Flex.js";
import { FieldLabel as Q } from "../Field/FieldLabel.js";
import { FieldHint as U } from "../Field/FieldHint.js";
import { FieldError as X } from "../Field/FieldError.js";
const pe = ({ error: r, hint: i, id: c, label: n, labelAction: o, required: f, selectButtonTitle: m, ...d }) => {
  const l = R(c), a = u.useRef(null);
  return e(J, { hint: i, error: r, id: l, required: f, children: p(K, { direction: "column", alignItems: "stretch", gap: 1, children: [e(Q, { onClick: () => {
    a.current.focus();
  }, action: o, children: n }), e(Y, { label: n, id: l, triggerRef: a, required: f, ...d }), e(U, {}), e(X, {})] }) });
}, Y = ({ id: r, children: i, clearLabel: c = "Clear", customizeContent: n, disabled: o, error: f, label: m, onChange: d, onClear: l, onReachEnd: a, placeholder: g, required: C, selectButtonTitle: Z, startIcon: B, size: O = "M", value: h, triggerRef: T, ...F }) => {
  const [$, I] = u.useState(), [y, k] = u.useState(!1), w = (t) => {
    k(t);
  }, L = (t) => {
    l && l(t), d || I("");
  }, v = `${r}-hint`, E = `${r}-error`, N = (t) => {
    d ? d(typeof h == "number" ? Number(t) : t) : I(t);
  }, b = u.useRef(null), V = R(), S = `intersection-${A(V)}`;
  D(b, (t) => {
    a && a(t);
  }, {
    selectorToWatch: `#${S}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !y
  });
  const s = (typeof h < "u" && h !== null ? h.toString() : $) ?? "";
  return p(W, { onOpenChange: w, disabled: o, required: C, onValueChange: N, value: s, ...F, children: [e(_, { ref: T, "aria-label": m, "aria-describedby": r ? `${v} ${E}` : void 0, id: r, startIcon: B, size: O, hasError: !!f, disabled: o, clearLabel: c, onClear: s && l ? L : void 0, children: e(H, { placeholder: g, textColor: s ? "neutral800" : "neutral600", children: s && n ? n(s) : void 0 }) }), e(M, { children: e(P, { position: "popper", sideOffset: 4, children: p(z, { ref: b, children: [i, e(x, { id: S, width: "100%", height: "1px" })] }) }) })] });
}, me = u.forwardRef(({ value: r, startIcon: i, children: c, ...n }, o) => p(j, { ref: o, value: r.toString(), ...n, children: [i && e(x, { as: "span", "aria-hidden": !0, children: i }), e(G, { textColor: "neutral800", children: e(q, { children: c }) })] }));
export {
  pe as SingleSelect,
  Y as SingleSelectInput,
  me as SingleSelectOption
};
