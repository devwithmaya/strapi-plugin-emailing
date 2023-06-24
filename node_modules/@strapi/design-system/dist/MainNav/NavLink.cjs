"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const f=require("prop-types"),$=require("react-router-dom"),x=require("styled-components"),v=require("./MainNavContext.cjs"),b=require("../Box/Box.cjs"),a=require("../Typography/Typography.cjs"),h=require("../Flex/Flex.cjs"),j=require("../Badge/Badge.cjs"),m=require("../Tooltip/Tooltip.cjs"),y=e=>e&&e.__esModule?e:{default:e},o=y(f),n=y(x),c=n.default(b.Box)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,u=n.default($.NavLink)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${a.Typography} {
    color: ${({theme:e})=>e.colors.neutral600};
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};

    ${a.Typography} {
      color: ${({theme:e})=>e.colors.neutral700};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:e})=>e.colors.primary100};

    svg path {
      fill: ${({theme:e})=>e.colors.primary600};
    }

    ${a.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: 500;
    }
  }
`,p=n.default(h.Flex)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,g=n.default(j.Badge)`
  ${({theme:e,condensed:s})=>s&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${a.Typography} {
    //find a solution to remove !important
    color: ${({theme:e})=>e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:e})=>e.spaces[6]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  border-radius: ${({theme:e})=>e.spaces[10]};
  background: ${({theme:e})=>e.colors.primary600};
`,i=({children:e,icon:s,badgeContent:t,badgeAriaLabel:l,...d})=>v.useMainNav()?r.jsx(m.Tooltip,{position:"right",label:e,children:r.jsx(u,{...d,children:r.jsxs(p,{as:"span",children:[r.jsx(c,{"aria-hidden":!0,paddingRight:0,as:"span",children:s}),t&&r.jsx(g,{condensed:!0,"aria-label":l,children:t})]})})}):r.jsx(u,{...d,children:r.jsxs(p,{as:"span",justifyContent:"space-between",children:[r.jsxs(h.Flex,{children:[r.jsx(c,{"aria-hidden":!0,paddingRight:3,as:"span",children:s}),r.jsx(a.Typography,{children:e})]}),t&&r.jsx(g,{justifyContent:"center","aria-label":l,children:t})]})});i.displayName="NavLink";i.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0};i.propTypes={badgeAriaLabel:o.default.string,badgeContent:o.default.oneOfType([o.default.string,o.default.number]),children:o.default.node.isRequired,icon:o.default.node.isRequired};exports.NavLink=i;
