"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const x=require("prop-types"),t=require("react-router-dom"),g=require("styled-components"),f=require("./MainNavContext.cjs"),d=require("../Box/Box.cjs"),l=require("../VisuallyHidden/VisuallyHidden.cjs"),j=require("../Flex/Flex.cjs"),u=require("../Typography/Typography.cjs"),p=e=>e&&e.__esModule?e:{default:e},n=p(x),h=p(g),c=h.default.div`
  svg,
  img {
    border-radius: ${({theme:e})=>e.borderRadius};
    object-fit: contain;
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,y=h.default(t.NavLink)`
  text-decoration: unset;
  color: inherit;
`,s=({workplace:e,title:a,icon:o,to:i})=>f.useMainNav()?r.jsx(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:r.jsx(c,{condensed:!0,children:r.jsxs(t.NavLink,{to:i,children:[o,r.jsxs(l.VisuallyHidden,{children:[r.jsx("span",{children:a}),r.jsx("span",{children:e})]})]})})}):r.jsx(d.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:r.jsxs(j.Flex,{children:[r.jsx(c,{as:t.NavLink,to:i,"aria-hidden":!0,tabIndex:-1,children:o}),r.jsxs(d.Box,{paddingLeft:2,children:[r.jsx(u.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span",children:r.jsxs(y,{to:i,children:[a,r.jsx(l.VisuallyHidden,{as:"span",children:e})]})}),r.jsx(u.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0,children:e})]})]})});s.defaultProps={to:"/"};s.propTypes={icon:n.default.node.isRequired,title:n.default.string.isRequired,to:n.default.string,workplace:n.default.string.isRequired};exports.NavBrand=s;
