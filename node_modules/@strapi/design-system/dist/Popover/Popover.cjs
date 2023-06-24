"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),M=require("react"),u=require("@floating-ui/react-dom"),z=require("@radix-ui/react-focus-scope"),m=require("@strapi/ui-primitives"),T=require("aria-hidden"),W=require("react-remove-scroll"),A=require("styled-components"),B=require("../DismissibleLayer/index.cjs"),P=require("../helpers/strings.cjs"),H=require("../hooks/useComposeRefs.cjs"),K=require("../hooks/useId.cjs"),N=require("../hooks/useIntersection.cjs"),g=require("../Box/Box.cjs"),U=require("../Portal/Portal.cjs"),V=e=>e&&e.__esModule?e:{default:e};function Z(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const s=Z(M),R=V(A),G=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],J=R.default(g.Box)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices[0]};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,E=s.forwardRef(({source:e,children:r,spacing:t=0,fullWidth:n=!1,placement:c="bottom-start",centered:l=!1,onEscapeKeyDown:d,onPointerDownOutside:f,onDismiss:a,onFocusOutside:p,...O},S)=>{const[h,k]=s.useState(null),[j,q]=s.useState(void 0),w=s.useRef(!1),{x:C,y:D,reference:v,floating:_,strategy:L}=u.useFloating({strategy:"fixed",placement:l?"bottom":c,middleware:[u.offset({mainAxis:t}),u.shift(),u.flip()],whileElementsMounted:u.autoUpdate});s.useLayoutEffect(()=>{v(e.current)},[e,v]),s.useLayoutEffect(()=>{n&&q(e.current.offsetWidth)},[n,e]),s.useEffect(()=>{if(h)return T.hideOthers(h)},[h]);const x=m.useCallbackRef(a);s.useEffect(()=>{const o=()=>{x()};return window.addEventListener("blur",o),window.addEventListener("resize",o),()=>{window.removeEventListener("blur",o),window.removeEventListener("resize",o)}},[x]);const I=H.useComposedRefs(S,o=>k(o),_);return i.jsx(W.RemoveScroll,{allowPinchZoom:!0,children:i.jsx(z.FocusScope,{asChild:!0,loop:!0,trapped:!0,onUnmountAutoFocus:o=>{o.preventDefault(),w.current||e.current?.focus({preventScroll:!0})},children:i.jsx(B.DismissibleLayer,{asChild:!0,onEscapeKeyDown:d,onPointerDownOutside:m.composeEventHandlers(f,o=>{const b=o.detail.originalEvent,$=b.button===0&&b.ctrlKey===!0,F=b.button===2||$;w.current=F},{checkForDefaultPrevented:!1}),onFocusOutside:m.composeEventHandlers(p,o=>o.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:a,children:i.jsx(J,{ref:I,style:{left:C,top:D,position:L,width:j||void 0},hasRadius:!0,background:"neutral0",padding:1,...O,children:r})})})})}),y=({children:e,intersectionId:r,onReachEnd:t,...n})=>{const c=s.useRef(null),l=K.useId();return N.useIntersection(c,t??(()=>{}),{selectorToWatch:`#${P.stripReactIdOfColon(l)}`,skipWhen:!r||!t}),i.jsxs(Q,{ref:c,...n,children:[e,r&&t&&i.jsx(g.Box,{id:P.stripReactIdOfColon(l),width:"100%",height:"1px"})]})},Q=R.default(g.Box)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3*5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral150};
    border-radius: ${({theme:e})=>e.borderRadius};
    margin-right: 10px;
  }
`,X=({children:e,source:r,spacing:t,fullWidth:n,placement:c,centered:l,onEscapeKeyDown:d,onPointerDownOutside:f,onDismiss:a,...p})=>i.jsx(U.Portal,{children:i.jsx(E,{source:r,spacing:t,fullWidth:n,placement:c,centered:l,onEscapeKeyDown:d,onPointerDownOutside:f,onDismiss:a,children:i.jsx(y,{...p,children:e})})});exports.Content=E;exports.POPOVER_PLACEMENTS=G;exports.Popover=X;exports.Scrolling=y;
