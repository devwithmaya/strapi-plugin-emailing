"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const g=require("@strapi/icons"),y=require("prop-types"),x=require("react-router-dom"),h=require("styled-components"),i=require("../Box/Box.cjs"),u=require("../Typography/Typography.cjs"),n=require("../Flex/Flex.cjs"),c=e=>e&&e.__esModule?e:{default:e},t=c(y),s=c(h),b=s.default(i.Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${u.Typography} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,a=s.default(g.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:o})=>o?e.colors.primary600:e.colors.neutral600};
  }
`,$=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,l=({children:e,icon:o,withBullet:d,isSubSectionChild:p,...f})=>r.jsxs(b,{as:x.NavLink,icon:o,background:"neutral100",paddingLeft:p?9:7,paddingBottom:2,paddingTop:2,...f,children:[r.jsxs(n.Flex,{children:[o?r.jsx($,{children:o}):r.jsx(a,{}),r.jsx(i.Box,{paddingLeft:2,children:r.jsx(u.Typography,{as:"span",children:e})})]}),d&&r.jsx(i.Box,{as:n.Flex,paddingRight:4,children:r.jsx(a,{$active:!0})})]});l.displayName="SubNavLink";l.defaultProps={icon:null,isSubSectionChild:!1,withBullet:!1};l.propTypes={children:t.default.node.isRequired,icon:t.default.element,isSubSectionChild:t.default.bool,withBullet:t.default.bool};exports.SubNavLink=l;
