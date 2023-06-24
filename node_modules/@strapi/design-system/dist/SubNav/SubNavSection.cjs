"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),a=require("react"),b=require("prop-types"),S=require("styled-components"),q=require("./SubNavSectionLabel.cjs"),v=require("../hooks/useId.cjs"),d=require("../Box/Box.cjs"),j=require("../Flex/Flex.cjs"),m=require("../Badge/Badge.cjs"),u=e=>e&&e.__esModule?e:{default:e},n=u(b),y=u(S),_=y.default(d.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,o=({collapsable:e,label:c,badgeLabel:r,children:p,id:g})=>{const[l,h]=a.useState(!0),s=v.useId(g),f=()=>{h(i=>!i)};return t.jsxs(j.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t.jsx(_,{paddingLeft:6,paddingTop:1,paddingBottom:1,paddingRight:4,children:t.jsxs(d.Box,{position:"relative",paddingRight:r?6:0,children:[t.jsx(q.SubNavSectionLabel,{onClick:f,ariaExpanded:l,ariaControls:s,collapsable:e,label:c}),r&&t.jsx(m.Badge,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:r})]})}),(!e||l)&&t.jsx("ol",{id:s,children:a.Children.map(p,(i,x)=>t.jsx("li",{children:i},x))})]})};o.defaultProps={badgeLabel:null,children:void 0,collapsable:!1,id:void 0};o.propTypes={badgeLabel:n.default.string,children:n.default.node,collapsable:n.default.bool,id:n.default.string,label:n.default.string.isRequired};exports.SubNavSection=o;
