"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime");require("react");const a=require("prop-types"),s=require("styled-components"),i=require("./MainNavContext.cjs"),l=require("../Flex/Flex.cjs"),r=e=>e&&e.__esModule?e:{default:e},u=r(a),d=r(s),c=d.default(l.Flex)`
  width: ${({condensed:e})=>e?"max-content":`${224/16}rem`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,t=({condensed:e,...n})=>o.jsx(i.MainNavContext.Provider,{value:e,children:o.jsx(c,{alignItems:"normal",as:"nav",background:"neutral0",condensed:e,direction:"column",height:"100vh",position:"sticky",top:0,zIndex:2,...n})});t.defaultProps={condensed:!1};t.propTypes={condensed:u.default.bool};exports.MainNav=t;
