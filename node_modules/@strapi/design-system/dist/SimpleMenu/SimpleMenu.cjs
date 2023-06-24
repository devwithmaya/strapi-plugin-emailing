"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),r=require("react"),H=require("@strapi/icons"),M=require("@strapi/ui-primitives"),U=require("prop-types"),G=require("react-router-dom"),J=require("styled-components"),C=require("./utils.cjs"),i=require("../helpers/keyboardKeys.cjs"),Q=require("../hooks/useId.cjs"),X=require("../Link/Link.cjs"),w=require("../Button/Button.cjs"),_=require("../Popover/Popover.cjs"),b=require("../Box/Box.cjs"),q=require("../Typography/Typography.cjs"),Y=require("../Flex/Flex.cjs"),O=e=>e&&e.__esModule?e:{default:e},B=O(r),n=O(U),h=O(J),Z=h.default.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  ${C.getOptionStyle}
`,ee=h.default(G.NavLink)`
  text-decoration: none;
  ${C.getOptionStyle}
`,ne=h.default(X.Link)`
  /* Removing Link hover effect */
  &:hover {
    color: currentColor;
  }

  &:focus-visible {
    /* Removing Link focus-visible after properties and reset to global outline */
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    &:after {
      content: none;
    }
  }

  ${C.getOptionStyle}
`,te=h.default.span`
  display: flex;
  align-items: center;
  svg {
    height: 4px;
    width: 6px;
  }
`,oe=h.default(w.Button)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[3]}`};
`,S=({children:e,onClick:g,to:u,isFocused:a,href:d,...R})=>{const l=r.useRef();r.useEffect(()=>{a&&l.current&&l.current.focus()},[a]);const c={tabIndex:a?0:-1,ref:l,role:"menuitem",...R},f=v=>{(v.key===i.KeyboardKeys.SPACE||v.key===i.KeyboardKeys.ENTER)&&g()};return u&&!d?o.jsx(ee,{to:u,...c,children:o.jsx(b.Box,{padding:2,children:o.jsx(q.Typography,{children:e})})}):d&&!u?o.jsx(ne,{isExternal:!0,href:d,...c,children:o.jsx(b.Box,{padding:2,children:o.jsx(q.Typography,{children:e})})}):o.jsx(Z,{onKeyDown:f,onMouseDown:g,type:"button",...c,children:o.jsx(b.Box,{padding:2,children:o.jsx(q.Typography,{children:e})})})};S.defaultProps={as:void 0,href:void 0,isFocused:!1,onClick(){},to:void 0};S.propTypes={as:n.default.elementType,children:n.default.node.isRequired,href:n.default.string,isFocused:n.default.bool,onClick:n.default.func,to:n.default.string};const x=({label:e,children:g,id:u,as:a,onOpen:d=()=>{},onClose:R=()=>{},size:l,popoverPlacement:c,onReachEnd:f,...v})=>{const p=r.useRef(),k=Q.useId(u),K=r.useRef(!1),[y,m]=r.useState(!1),[P,j]=r.useState(0),E=r.Children.toArray(g),L=l==="S"?oe:w.Button,$=a||L,T=!!f&&typeof f=="function";r.useEffect(()=>{if(["string","number"].includes(typeof e)){const t=E.findIndex(s=>s.props.children===e);t!==-1&&j(t)}},[e]);const I=M.useCallbackRef(d),D=M.useCallbackRef(R);r.useEffect(()=>{K?.current?y?I():D():K.current=!0},[K,D,I,y]),r.useEffect(()=>{B.default.isValidElement(e)&&P===-1&&p.current.focus()},[e,P]);const A=t=>{y&&(t.key===i.KeyboardKeys.ESCAPE&&(t.stopPropagation(),m(!1),p.current.focus()),t.key===i.KeyboardKeys.DOWN&&j(s=>s===E.length-1?0:s+1),t.key===i.KeyboardKeys.UP&&j(s=>s===0?E.length-1:s-1))},N=t=>{(t.key===i.KeyboardKeys.ENTER||t.key===i.KeyboardKeys.SPACE)&&m(s=>!s)},F=t=>{t.preventDefault(),t.currentTarget.contains(t.relatedTarget)||m(!1)},V=t=>{t.preventDefault(),m(s=>!s)},W=()=>{T&&f()},z=E.map((t,s)=>o.jsx(Y.Flex,{as:"li",justifyContent:"center",role:"menuitem",children:r.cloneElement(t,{onClick(){t.props.onClick(),m(!1),p.current.focus()},isFocused:P===s})},s));return o.jsxs("div",{onKeyDown:A,children:[o.jsx($,{label:B.default.isValidElement(e)?null:e,"aria-haspopup":!0,"aria-expanded":y,"aria-controls":k,onKeyDown:N,onMouseDown:V,ref:p,type:"button",variant:"ghost",endIcon:o.jsx(te,{children:o.jsx(H.CarretDown,{"aria-hidden":!0})}),...v,children:e}),y&&o.jsx(_.Popover,{onBlur:F,placement:c,source:p,onReachEnd:W,intersectionId:T?`popover-${k}`:void 0,spacing:4,children:o.jsx(b.Box,{role:"menu",as:"ul",padding:1,id:k,children:z})})]})};x.defaultProps={as:void 0};x.displayName="SimpleMenu";x.defaultProps={id:void 0,onOpen:void 0,onClose:void 0,onReachEnd:void 0,popoverPlacement:"bottom-start",size:"M"};x.propTypes={as:n.default.any,children:n.default.oneOfType([n.default.arrayOf(n.default.node),n.default.node]).isRequired,id:n.default.string,label:n.default.oneOfType([n.default.string,n.default.number,n.default.element]).isRequired,onClose:n.default.func,onOpen:n.default.func,onReachEnd:n.default.func,popoverPlacement:n.default.oneOf(_.POPOVER_PLACEMENTS),size:n.default.oneOf(["S","M"])};exports.MenuItem=S;exports.SimpleMenu=x;
