"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const s=require("@strapi/icons"),d=require("prop-types"),a=require("styled-components"),u=require("./MainNavContext.cjs"),l=require("../Icon/Icon.cjs"),c=require("../VisuallyHidden/VisuallyHidden.cjs"),o=e=>e&&e.__esModule?e:{default:e},h=o(d),p=o(a),g=p.default.button`
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${(9+4)/16}rem; // 9 is the height of the svg and 4 is the padding below
  right: ${({theme:e,condensed:t})=>t?0:e.spaces[5]};
  transform: ${({condensed:e})=>e?"translateX(50%)":void 0};
  z-index: 2;
  width: ${18/16}rem;
  height: ${25/16}rem;

  svg {
    width: ${6/16}rem;
    height: ${9/16}rem;
  }
`,i=({children:e,...t})=>{const n=u.useMainNav();return r.jsxs(g,{as:"button",condensed:n,...t,children:[r.jsx(l.Icon,{as:n?s.ChevronRight:s.ChevronLeft,"aria-hidden":!0,color:"neutral600"}),r.jsx(c.VisuallyHidden,{children:e})]})};i.propTypes={children:h.default.string.isRequired};exports.NavCondense=i;
