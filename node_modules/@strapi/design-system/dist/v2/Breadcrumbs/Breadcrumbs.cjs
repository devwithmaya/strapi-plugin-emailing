"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),n=require("react"),f=require("prop-types"),m=require("styled-components"),p=require("./Divider.cjs"),a=require("../../Flex/Flex.cjs"),y=require("../../Box/Box.cjs"),l=e=>e&&e.__esModule?e:{default:e},r=l(f),b=l(m),g=b.default(a.Flex)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,s=({label:e,children:d,...o})=>{const i=n.Children.toArray(d);return t.jsx(y.Box,{"aria-label":e,...o,children:t.jsx(g,{as:"ol",horizontal:!0,children:n.Children.map(i,(u,c)=>{const h=i.length>1&&c+1<i.length;return t.jsxs(a.Flex,{inline:!0,as:"li",children:[u,h&&t.jsx(p.Divider,{})]})})})})};s.displayName="Breadcrumbs";s.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,label:r.default.string.isRequired};exports.Breadcrumbs=s;
