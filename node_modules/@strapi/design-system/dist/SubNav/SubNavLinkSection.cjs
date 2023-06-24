"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),l=require("react"),f=require("@strapi/icons"),y=require("prop-types"),j=require("styled-components"),b=require("../hooks/useId.cjs"),o=require("../Box/Box.cjs"),S=require("../Flex/Flex.cjs"),m=require("../Typography/Typography.cjs"),c=e=>e&&e.__esModule?e:{default:e},i=c(y),s=c(j),q=s.default(o.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,v=s.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,k=s.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,d=({label:e,children:u,id:p})=>{const[n,h]=l.useState(!0),a=b.useId(p),g=()=>{h(r=>!r)};return t.jsxs(o.Box,{children:[t.jsx(q,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:t.jsx(S.Flex,{justifyContent:"space-between",children:t.jsxs(v,{onClick:g,"aria-expanded":n,"aria-controls":a,children:[t.jsx(k,{rotated:n,children:t.jsx(f.CarretDown,{"aria-hidden":!0})}),t.jsx(o.Box,{paddingLeft:2,children:t.jsx(m.Typography,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),n&&t.jsx("ul",{id:a,children:l.Children.map(u,(r,x)=>t.jsx("li",{children:r},x))})]})};d.defaultProps={children:void 0,id:void 0};d.propTypes={children:i.default.node,id:i.default.string,label:i.default.string.isRequired};exports.SubNavLinkSection=d;
