"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime");require("react");const i=require("prop-types"),u=require("styled-components"),l=require("../../BaseLink/BaseLink.cjs"),t=e=>e&&e.__esModule?e:{default:e},r=t(i),d=t(u),a=d.default(l.BaseLink)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,o=({children:e,...s})=>n.jsx(a,{...s,children:e});o.displayName="CrumbLink";o.defaultProps={to:void 0};o.propTypes={children:r.default.node.isRequired,to:r.default.string};exports.CrumbLink=o;
