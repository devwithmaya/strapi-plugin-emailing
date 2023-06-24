"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),c=require("react"),u=require("prop-types"),a=require("styled-components"),p=require("../Box/Box.cjs"),f=require("../Flex/Flex.cjs"),o=e=>e&&e.__esModule?e:{default:e},g=o(u),x=o(a),y=x.default(p.Box)`
  flex-grow: 1;
  overflow-y: auto;
`,n=({children:e,spacing:s=4,horizontal:r=!1,...i})=>t.jsx(y,{paddingLeft:3,paddingRight:2,paddingTop:3,paddingBottom:8,children:t.jsx(f.Flex,{as:"ul",gap:s,direction:r?"row":"column",alignItems:r?"center":"stretch",...i,children:c.Children.map(e,(d,l)=>t.jsx("li",{children:d},l))})});n.propTypes={children:g.default.node.isRequired};exports.NavSections=n;
