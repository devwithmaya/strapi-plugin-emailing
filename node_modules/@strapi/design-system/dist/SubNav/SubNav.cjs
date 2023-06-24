"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime");require("react");const u=require("prop-types"),a=require("styled-components"),n=require("../Grid/Grid.cjs"),t=e=>e&&e.__esModule?e:{default:e},l=t(u),d=t(a),r=`${232/16}rem`,c=d.default(n.Grid)`
  width: ${r};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,o=({ariaLabel:e,...s})=>i.jsx(c,{"aria-label":e,as:"nav",...s});o.propTypes={ariaLabel:l.default.string.isRequired};exports.SubNav=o;exports.subNavWidth=r;
