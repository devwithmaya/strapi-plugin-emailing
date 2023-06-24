"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),j=require("styled-components"),p=require("../hooks/useId.cjs"),m=require("../ToggleCheckbox/ToggleCheckbox.cjs"),T=require("../Field/Field.cjs"),I=require("../TextButton/TextButton.cjs"),o=require("../Flex/Flex.cjs"),y=require("../Field/FieldLabel.cjs"),_=require("../Field/FieldHint.cjs"),b=require("../Field/FieldError.cjs"),k=t=>t&&t.__esModule?t:{default:t},d=k(j),B=d.default(T.Field)`
  max-width: 320px;
`,C=d.default(I.TextButton)`
  align-self: flex-end;
  margin-left: auto;
`,u=({disabled:t=!1,size:c="M",error:a,hint:x,label:r,name:g,labelAction:f,required:F=!1,id:h,onClear:i,clearLabel:n,checked:l=!1,...q})=>{const s=p.useId(h);return e.jsx(B,{name:g,hint:x,error:a,id:s,required:F,children:e.jsxs(o.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsxs(o.Flex,{children:[e.jsx(y.FieldLabel,{action:f,children:r}),n&&i&&l!==null&&!t&&e.jsx(C,{onClick:i,children:n})]}),e.jsx(m.ToggleCheckbox,{id:s,size:c,checked:l,disabled:t,...q,children:r}),e.jsx(_.FieldHint,{}),e.jsx(b.FieldError,{})]})})};u.displayName="ToggleInput";exports.ToggleInput=u;
