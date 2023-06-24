"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),Y=require("react"),J=require("@strapi/icons"),I=require("styled-components"),o=require("./SelectParts.cjs"),K=require("../BaseCheckbox/assets/checkmark.svg.cjs"),Q=require("../helpers/strings.cjs"),w=require("../hooks/useId.cjs"),U=require("../hooks/useIntersection.cjs"),Z=require("../Tag/Tag.cjs"),j=require("../Box/Box.cjs"),C=require("../Typography/Typography.cjs"),ee=require("../Field/Field.cjs"),te=require("../Flex/Flex.cjs"),re=require("../Field/FieldLabel.cjs"),ne=require("../Field/FieldHint.cjs"),ie=require("../Field/FieldError.cjs"),oe=e=>e&&e.__esModule?e:{default:e};function le(e){if(e&&e.__esModule)return e;const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const l=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(i,r,l.get?l:{enumerable:!0,get:()=>e[r]})}}return i.default=e,Object.freeze(i)}const a=le(Y),se=oe(I),ce=({children:e,clearLabel:i="Clear",customizeContent:r,disabled:l,error:s,hint:d,id:u,label:p,labelAction:T,onChange:f,onClear:M,onReachEnd:b,placeholder:F,required:y,selectButtonTitle:ue,startIcon:_,size:B="M",value:h,withTags:q,...L})=>{const m=a.useRef(null),[$,S]=a.useState(),[P,V]=a.useState(!1),x=w.useId(u),z=`${x}-hint`,E=`${x}-error`,G=n=>{f?f(n):S(n)},A=n=>()=>{const O=Array.isArray(h)?h.filter(g=>g!==n):($??[]).filter(g=>g!==n);f?f(O):S(O)},D=n=>{V(n)},k=a.useRef(null),H=()=>{k.current.focus()},W=w.useId(),v=`intersection-${Q.stripReactIdOfColon(W)}`,N=n=>{b&&b(n)};U.useIntersection(m,N,{selectorToWatch:`#${v}`,skipWhen:!P});const c=typeof h<"u"&&h!==null?h:$,X=n=>n&&typeof n=="object"&&n.value?t.jsx(Z.Tag,{tabIndex:-1,disabled:l,icon:t.jsx(J.Cross,{}),onClick:A(n.value),children:n.textValue},n.value):null;return t.jsx(ee.Field,{hint:d,error:s,id:x,required:y,children:t.jsxs(te.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t.jsx(re.FieldLabel,{onClick:H,action:T,children:p}),t.jsxs(o.Root,{onOpenChange:D,disabled:l,required:y,onValueChange:G,value:c,...L,multi:!0,children:[t.jsx(o.Trigger,{ref:k,"aria-label":p,"aria-describedby":`${z} ${E}`,id:x,startIcon:_,size:B,hasError:!!s,disabled:l,clearLabel:i,onClear:c?.length?M:void 0,paddingLeft:q&&c?.length?1:3,children:t.jsx(o.Value,{placeholder:F,textColor:c?.length?"neutral800":"neutral600",children:c?.length?q?X:r?r(c):void 0:void 0})}),t.jsx(o.Portal,{children:t.jsx(o.Content,{position:"popper",sideOffset:4,children:t.jsxs(o.Viewport,{ref:m,children:[e,t.jsx(j.Box,{id:v,width:"100%",height:"1px"})]})})})]}),t.jsx(ne.FieldHint,{}),t.jsx(ie.FieldError,{})]})})},ae=a.forwardRef(({value:e,children:i,startIcon:r,...l},s)=>t.jsxs(o.Item,{ref:s,value:e.toString(),...l,children:[r&&t.jsx(j.Box,{as:"span","aria-hidden":!0,children:r}),t.jsx(o.ItemIndicator,{children:({isSelected:d,isIntermediate:u})=>t.jsx(R,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:u,$selected:d,zIndex:1,height:"18px",width:"18px"})}),t.jsx(C.Typography,{textColor:"neutral800",children:t.jsx(o.ItemText,{children:i})})]})),R=se.default(j.Box)`
  border: 1px solid
    ${({theme:e,$selected:i,$indeterminate:r})=>i||r?e.colors.primary600:e.colors.neutral300};
  background-color: ${({theme:e,$selected:i,$indeterminate:r})=>i||r?e.colors.primary600:e.colors.neutral0};

  ${({theme:e,$indeterminate:i})=>i&&I.css`
      &::after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: ${e.colors.neutral0};
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    `}

  ${({$selected:e})=>e&&I.css`
      &::after {
        content: '';
        background: url(${K}) no-repeat no-repeat center center;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `}
`,de=a.forwardRef(({children:e,label:i,startIcon:r,values:l=[],...s},d)=>t.jsxs(o.Group,{ref:d,children:[t.jsxs(o.Item,{value:l,...s,children:[r&&t.jsx(j.Box,{as:"span","aria-hidden":!0,children:r}),t.jsx(o.ItemIndicator,{children:({isSelected:u,isIntermediate:p})=>t.jsx(R,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:p,$selected:u,zIndex:1,height:"18px",width:"18px"})}),t.jsx(C.Typography,{textColor:"neutral800",children:i})]}),e]}));exports.MultiSelect=ce;exports.MultiSelectGroup=de;exports.MultiSelectOption=ae;
