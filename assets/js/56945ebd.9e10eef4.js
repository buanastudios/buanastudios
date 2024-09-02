/*! For license information please see 56945ebd.9e10eef4.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[57909],{35316:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var a=s(74848),t=s(28453),o=s(34842),n=s(4658),r=s(82972),l=s(13731);const c={},u="UI icons",d={id:"es-ui-components/ui-icons",title:"UI icons",description:"<ComponentShowcase",source:"@site/ui-components/es-ui-components/ui-icons.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/ui-icons",permalink:"/components/es-ui-components/ui-icons",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Getting started",permalink:"/components/es-ui-components/getting-started"},next:{title:"Block icons",permalink:"/components/es-ui-components/block-icons"}},p={},v=[];function f(e){const i={h1:"h1",span:"span",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"ui-icons",children:"UI icons"}),"\n","\n",(0,a.jsx)(o.d,{className:"es-uic-flex es-uic-flex-wrap es-uic-gap-2 !es-uic-space-y-0 es-uic-w-full",fitWidth:!0,preContent:(e,i)=>(0,a.jsx)(n.F,{placeholder:"Search icons","aria-label":"Search icons",value:e,onChange:i,className:"es-uic-min-w-24 es-uic-w-48"}),children:e=>{const s=Object.keys(l.Pt).filter((i=>!(e?.length>0)||i.toLowerCase().includes(e?.toLowerCase())));return s.length<1?(0,a.jsx)(i.span,{children:"Nothing found"}):s.map(((e,s)=>(0,a.jsx)(r.$,{className:"esd-icon-showcase-button",icon:l.Pt[e],tooltip:(0,a.jsx)(i.span,{className:"es-uic-font-mono",children:e}),"aria-label":e,onPress:()=>{navigator.clipboard.writeText(e)}},s)))}})]})}function m(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},34842:(e,i,s)=>{s.d(i,{d:()=>l});var a=s(96540),t=s(82972),o=s(34164),n=s(78478),r=s(74848);const l=e=>{let{children:i,defaultValue:s,className:l,fitWidth:c=!1,resettable:u=!1,preContent:d}=e;const[p,v]=(0,a.useState)(s),f=(0,a.useRef)();return(0,r.jsx)(n.A,{children:()=>(0,r.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,r.jsxs)("div",{className:(0,o.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",c?"es-uic-w-fit":"es-uic-w-96",l),children:["function"==typeof i&&i(p,v),"function"!=typeof i&&i]}),(0,r.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[d&&d(p,v,f),u&&(0,r.jsx)(t.$,{size:"small",onPress:()=>v(s),disabled:p===s,children:"Reset"})]})]})})}},17220:(e,i,s)=>{s.d(i,{$:()=>a});const a=(0,s(96540).createContext)(null)},28610:(e,i,s)=>{s.d(i,{$:()=>f,a:()=>h,b:()=>v});var a=s(96540),t=s(1234),o=s(67680),n=s(35971),r=s(945),l=s(85058),c=s(52973),u=s(5233),d=s(36273),p=s(74702);function v(e,i){let{inputElementType:s="input",isDisabled:d=!1,isRequired:p=!1,isReadOnly:v=!1,type:f="text",validationBehavior:m="aria"}=e,[b,h]=(0,t.e)(e.value,e.defaultValue||"",e.onChange),{focusableProps:g}=(0,c.$)(e,i),x=(0,u.$)({...e,value:b}),{isInvalid:C,validationErrors:y,validationDetails:P}=x.displayValidation,{labelProps:w,fieldProps:j,descriptionProps:$,errorMessageProps:I}=(0,l.a)({...e,isInvalid:C,errorMessage:e.errorMessage||y}),N=(0,n.$)(e,{labelable:!0});const F={type:f,pattern:e.pattern};return(0,r.$)(i,b,h),(0,u.a)(e,x,i),(0,a.useEffect)((()=>{if(i.current instanceof(0,t.f)(i.current).HTMLTextAreaElement){let e=i.current;Object.defineProperty(e,"defaultValue",{get:()=>e.value,set:()=>{},configurable:!0})}}),[i]),{labelProps:w,inputProps:(0,o.c)(N,"input"===s?F:void 0,{disabled:d,readOnly:v,required:p&&"native"===m,"aria-required":p&&"aria"===m||void 0,"aria-invalid":C||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:b,onChange:e=>h(e.target.value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...g,...j}),descriptionProps:$,errorMessageProps:I,isInvalid:C,validationErrors:y,validationDetails:P}}const f=(0,a.createContext)({});let m=e=>{let{onHoverStart:i,onHoverChange:s,onHoverEnd:a,...t}=e;return t};function b(e,i){[e,i]=(0,o.a)(e,i,f);let{hoverProps:s,isHovered:n}=(0,t.$)(e),{isFocused:r,isFocusVisible:l,focusProps:c}=(0,p.$)({isTextInput:!0,autoFocus:e.autoFocus}),u=!!e["aria-invalid"]&&"false"!==e["aria-invalid"],d=(0,o.b)({...e,values:{isHovered:n,isFocused:r,isFocusVisible:l,isDisabled:e.disabled||!1,isInvalid:u},defaultClassName:"react-aria-Input"});return a.createElement("input",{...(0,o.c)(m(e),c,s),...d,ref:i,"data-focused":r||void 0,"data-disabled":e.disabled||void 0,"data-hovered":n||void 0,"data-focus-visible":l||void 0,"data-invalid":u||void 0})}const h=(0,d.$)(b)},4658:(e,i,s)=>{s.d(i,{F:()=>w});var a=s(74848),t=s(28610),o=s(5599),n=s(67680),r=s(96540),l=s(1234),c=s(74702),u=s(85058),d=s(17220),p=s(46405),v=s(35971),f=s(23338),m=s(49189);const b=(0,r.createContext)({});let h=e=>{let{onHoverStart:i,onHoverChange:s,onHoverEnd:a,...t}=e;return t};function g(e,i){[e,i]=(0,n.a)(e,i,b);let{hoverProps:s,isHovered:a}=(0,l.$)(e),{isFocused:t,isFocusVisible:o,focusProps:u}=(0,c.$)({isTextInput:!0,autoFocus:e.autoFocus}),d=!!e["aria-invalid"]&&"false"!==e["aria-invalid"],p=(0,n.b)({...e,values:{isHovered:a,isFocused:t,isFocusVisible:o,isDisabled:e.disabled||!1,isInvalid:d},defaultClassName:"react-aria-TextArea"});return r.createElement("textarea",{...(0,n.c)(h(e),u,s),...p,ref:i,"data-focused":t||void 0,"data-disabled":e.disabled||void 0,"data-hovered":a||void 0,"data-focus-visible":o||void 0,"data-invalid":d||void 0})}const x=(0,r.forwardRef)(g),C=(0,r.createContext)(null);function y(e,i){[e,i]=(0,n.a)(e,i,C);let{validationBehavior:s}=(0,n.$)(d.$)||{};var a,l;let c=null!==(l=null!==(a=e.validationBehavior)&&void 0!==a?a:s)&&void 0!==l?l:"native",f=(0,r.useRef)(null),[m,h]=(0,n.h)(),[g,x]=(0,r.useState)("input"),{labelProps:y,inputProps:P,descriptionProps:w,errorMessageProps:j,...$}=(0,t.b)({...(0,n.i)(e),inputElementType:g,label:h,validationBehavior:c},f),I=(0,r.useCallback)((e=>{f.current=e,e&&x(e instanceof HTMLTextAreaElement?"textarea":"input")}),[]),N=(0,n.b)({...e,values:{isDisabled:e.isDisabled||!1,isInvalid:$.isInvalid,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1},defaultClassName:"react-aria-TextField"}),F=(0,v.$)(e);return delete F.id,r.createElement("div",{...F,...N,ref:i,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":$.isInvalid||void 0,"data-readonly":e.isReadOnly||void 0,"data-required":e.isRequired||void 0},r.createElement(n.j,{values:[[o.a,{...y,ref:m}],[t.$,{...P,ref:I}],[b,{...P,ref:I}],[p.a,{slots:{description:w,errorMessage:j}}],[u.$,$]]},N.children))}const P=(0,r.forwardRef)(y),w=e=>{const{icon:i,label:s,subtitle:n,help:r,actions:l,value:c,onChange:u,type:d="text",disabled:p,readOnly:v,className:b,wrapperClassName:h,hidden:g,...C}=e;return g?null:(0,a.jsx)(P,{value:c??"",onChange:u,isDisabled:p,isReadOnly:v,className:h,...C,children:(0,a.jsxs)(f.p,{icon:i,label:s,subtitle:n,actions:l,labelAs:o.$,help:r,children:["multiline"!==d&&(0,a.jsx)(t.a,{...C,type:d,className:(0,m.c)("es-uic-min-h-10 es-uic-w-full es-uic-rounded-md es-uic-border es-uic-border-gray-300 es-uic-p-2 es-uic-text-sm es-uic-shadow-sm es-uic-transition selection:es-uic-bg-teal-500/20 selection:es-uic-text-teal-950","focus:es-uic-outline-none focus-visible:es-uic-outline-none focus-visible:es-uic-ring focus-visible:es-uic-ring-teal-500 focus-visible:es-uic-ring-opacity-50",b)}),"multiline"===d&&(0,a.jsx)(x,{...C,className:(0,m.c)("es-uic-min-h-10 es-uic-w-full es-uic-rounded-md es-uic-border es-uic-border-gray-300 es-uic-p-2 es-uic-text-sm es-uic-shadow-sm es-uic-transition selection:es-uic-bg-teal-500/20 selection:es-uic-text-teal-950","focus:es-uic-outline-none focus-visible:es-uic-outline-none focus-visible:es-uic-ring focus-visible:es-uic-ring-teal-500 focus-visible:es-uic-ring-opacity-50",b)})]})})}}}]);