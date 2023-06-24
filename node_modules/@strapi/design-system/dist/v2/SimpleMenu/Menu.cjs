"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),l=require("react"),y=require("@radix-ui/react-dropdown-menu"),d=require("@strapi/icons"),c=require("styled-components"),S=require("../../helpers/theme.cjs"),w=require("../Link/Link.cjs"),j=require("../../Button/Button.cjs"),m=require("../../Box/Box.cjs"),u=require("../../Flex/Flex.cjs"),i=require("../../Typography/Typography.cjs"),T=e=>e&&e.__esModule?e:{default:e};function C(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const s=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,s.get?s:{enumerable:!0,get:()=>e[o]})}}return r.default=e,Object.freeze(r)}const n=C(y),a=T(c),R=n.Root,$=l.forwardRef(({size:e,...r},o)=>t.jsx(n.Trigger,{asChild:!0,children:t.jsx(j.Button,{ref:o,type:"button",variant:"ghost",endIcon:t.jsx(d.CarretDown,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...r})})),v=l.forwardRef(({children:e,intersectionId:r,popoverPlacement:o="bottom-start",...s},p)=>{const[f,x]=o.split("-");return t.jsx(n.Portal,{children:t.jsx(n.Content,{align:x,side:f,loop:!0,asChild:!0,children:t.jsxs(h,{ref:p,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...s,children:[e,t.jsx(m.Box,{id:r,width:"100%",height:"1px"})]})})})}),h=a.default(u.Flex)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,k=({onSelect:e,disabled:r=!1,...o})=>t.jsx(n.Item,{asChild:!0,onSelect:e,disabled:r,children:o.isLink||o.isExternal?t.jsx(M,{color:"neutral800",...o,isExternal:o.isExternal??!1,children:t.jsx(i.Typography,{children:o.children})}):t.jsx(b,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...o,children:t.jsx(i.Typography,{children:o.children})})}),g=({theme:e})=>c.css`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${i.Typography} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${i.Typography} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,b=a.default(u.Flex)`
  ${g}
`,M=a.default(w.Link)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:r})=>S.extractStyleFromTheme(e.colors,r,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${g}
`,q=l.forwardRef((e,r)=>t.jsx(n.Label,{asChild:!0,children:t.jsx(L,{ref:r,variant:"sigma",textColor:"neutral600",...e})})),L=a.default(i.Typography)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,O=n.Sub,_=l.forwardRef(({disabled:e=!1,...r},o)=>t.jsx(n.SubTrigger,{asChild:!0,disabled:e,children:t.jsxs(B,{ref:o,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...r,children:[t.jsx(i.Typography,{children:r.children}),t.jsx(I,{height:12,width:12})]})})),B=a.default(b)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,I=a.default(d.ChevronRight)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,D=l.forwardRef((e,r)=>t.jsx(n.Portal,{children:t.jsx(n.SubContent,{sideOffset:8,asChild:!0,children:t.jsx(h,{ref:r,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",...e})})})),P=R,F=$,E=v,W=k,H=q,A=O,N=_,V=D;exports.Content=E;exports.Item=W;exports.Label=H;exports.Root=P;exports.SubContent=V;exports.SubRoot=A;exports.SubTrigger=N;exports.Trigger=F;
