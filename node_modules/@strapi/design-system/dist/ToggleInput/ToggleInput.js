import { jsx as r, jsxs as m } from "react/jsx-runtime";
import p from "styled-components";
import { useId as F } from "../hooks/useId.js";
import { ToggleCheckbox as I } from "../ToggleCheckbox/ToggleCheckbox.js";
import { Field as T } from "../Field/Field.js";
import { TextButton as j } from "../TextButton/TextButton.js";
import { Flex as d } from "../Flex/Flex.js";
import { FieldLabel as k } from "../Field/FieldLabel.js";
import { FieldHint as y } from "../Field/FieldHint.js";
import { FieldError as B } from "../Field/FieldError.js";
const C = p(T)`
  max-width: 320px;
`, q = p(j)`
  align-self: flex-end;
  margin-left: auto;
`, w = ({ disabled: e = !1, size: s = "M", error: f, hint: c, label: o, name: a, labelAction: g, required: h = !1, id: u, onClear: i, clearLabel: t, checked: n = !1, ...x }) => {
  const l = F(u);
  return r(C, { name: a, hint: c, error: f, id: l, required: h, children: m(d, { direction: "column", alignItems: "stretch", gap: 1, children: [m(d, { children: [r(k, { action: g, children: o }), t && i && n !== null && !e && r(q, { onClick: i, children: t })] }), r(I, { id: l, size: s, checked: n, disabled: e, ...x, children: o }), r(y, {}), r(B, {})] }) });
};
w.displayName = "ToggleInput";
export {
  w as ToggleInput
};
