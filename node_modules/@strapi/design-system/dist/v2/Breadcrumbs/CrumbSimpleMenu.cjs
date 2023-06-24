"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react/jsx-runtime");require("react");const s=require("@strapi/icons"),i=require("prop-types"),l=require("styled-components"),a=require("../SimpleMenu/SimpleMenu.cjs"),d=require("../../Button/Button.cjs"),o=e=>e&&e.__esModule?e:{default:e},r=o(i),c=o(l),p=c.default(d.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,t=({children:e,...n})=>u.jsx(a.SimpleMenu,{noBorder:!0,icon:u.jsx(s.CarretDown,{}),as:p,size:"S",...n,children:e});t.displayName="CrumbSimpleMenu";t.propTypes={"aria-label":r.default.string.isRequired,children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired};exports.CrumbSimpleMenu=t;
