"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const x=require("@strapi/icons"),f=require("prop-types"),g=require("styled-components"),b=require("../Flex/Flex.cjs"),l=require("../Box/Box.cjs"),i=require("../Typography/Typography.cjs"),d=e=>e&&e.__esModule?e:{default:e},t=d(f),u=d(g),s=u.default(b.Flex)`
  border: none;
  padding: 0;
  background: transparent;
`,y=u.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,a=({collapsable:e,label:n,onClick:c,ariaExpanded:o,ariaControls:p})=>e?r.jsxs(s,{as:"button",onClick:c,"aria-expanded":o,"aria-controls":p,textAlign:"left",children:[r.jsx(l.Box,{paddingRight:1,children:r.jsx(i.Typography,{variant:"sigma",textColor:"neutral600",children:n})}),e&&r.jsx(y,{rotated:o,children:r.jsx(x.CarretDown,{"aria-hidden":!0})})]}):r.jsx(s,{children:r.jsx(l.Box,{paddingRight:1,children:r.jsx(i.Typography,{variant:"sigma",textColor:"neutral600",children:n})})});a.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}};a.propTypes={ariaControls:t.default.string,ariaExpanded:t.default.bool,collapsable:t.default.bool,label:t.default.string.isRequired,onClick:t.default.func};exports.SubNavSectionLabel=a;
