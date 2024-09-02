/*! For license information please see 79f7acbe.6444f271.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[71897],{37030:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var t=i(74848),l=i(28453),n=i(34842),a=i(8808),c=i(14796),d=i(13731);const r={},o="Toggle / Switch",u={id:"es-ui-components/toggle-switch",title:"Toggle / Switch",description:"{(data, setData) => {",source:"@site/ui-components/es-ui-components/toggle-switch.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/toggle-switch",permalink:"/components/es-ui-components/toggle-switch",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Slider",permalink:"/components/es-ui-components/slider"},next:{title:"Checkbox",permalink:"/components/es-ui-components/checkbox"}},h={},p=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Icon, subtitle",id:"icon-subtitle",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Indeterminate state",id:"indeterminate-state",level:3}];function g(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"toggle--switch",children:"Toggle / Switch"}),"\n","\n",(0,t.jsx)(n.d,{defaultValue:!1,children:(e,s)=>(0,t.jsx)(a.l,{checked:e,onChange:s,label:"Demo"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"<Toggle\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={(value) => setData(value)}\n/>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you need the toggle switch standalone, you can use the ",(0,t.jsx)(s.code,{children:"Switch"})," component."]}),"\n",(0,t.jsx)(s.p,{children:"Other props are the same, with the exception of label and related props."}),"\n",(0,t.jsx)(n.d,{defaultValue:!1,fitWidth:!0,children:(e,s)=>(0,t.jsx)(c.d,{checked:e,onChange:s})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"<Switch\n\tchecked={data}\n\tonChange={(value) => setData(value)}\n/>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,t.jsx)(s.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,t.jsx)(s.h3,{id:"icon-subtitle",children:"Icon, subtitle"}),"\n",(0,t.jsx)(s.p,{children:"Augment the label"}),"\n",(0,t.jsx)(n.d,{defaultValue:!1,children:(e,s)=>(0,t.jsx)(a.l,{icon:d.Pt.emptyRect,subtitle:"Subtitle",checked:e,onChange:s,label:"Demo"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"<Toggle\n\t// highlight-start\n\ticon={icons.emptyRect}\n\tsubtitle='Subtitle'\n\t// highlight-end\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={setData}\n/>\n"})}),"\n",(0,t.jsx)(s.h3,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsx)(s.p,{children:"Prevent interactions with the toggle."}),"\n",(0,t.jsx)(n.d,{defaultValue:!1,children:(e,s)=>(0,t.jsx)(a.l,{label:"Demo",checked:e,onChange:s,disabled:!0})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"<Toggle\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={(value) => setData(value)}\n\t// highlight-next-line\n\tdisabled\n/>\n"})}),"\n",(0,t.jsx)(s.h3,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,t.jsx)(s.p,{children:"Whether the toggle should be rendered in an indeterminate state."}),"\n",(0,t.jsx)(n.d,{defaultValue:null,resettable:!0,children:(e,s)=>(0,t.jsx)(a.l,{label:"Demo",checked:e,onChange:s,isIndeterminate:null===e})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"<Toggle\n\tlabel='Demo'\n\tchecked={data}\n\tonChange={(value) => setData(value)}\n\t// highlight-next-line\n\tisIndeterminate={data === null}\n/>\n"})})]})}function b(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},34842:(e,s,i)=>{i.d(s,{d:()=>d});var t=i(96540),l=i(82972),n=i(34164),a=i(78478),c=i(74848);const d=e=>{let{children:s,defaultValue:i,className:d,fitWidth:r=!1,resettable:o=!1,preContent:u}=e;const[h,p]=(0,t.useState)(i),g=(0,t.useRef)();return(0,c.jsx)(a.A,{children:()=>(0,c.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,c.jsxs)("div",{className:(0,n.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",r?"es-uic-w-fit":"es-uic-w-96",d),children:["function"==typeof s&&s(h,p),"function"!=typeof s&&s]}),(0,c.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[u&&u(h,p,g),o&&(0,c.jsx)(l.$,{size:"small",onPress:()=>p(i),disabled:h===i,children:"Reset"})]})]})})}},5599:(e,s,i)=>{i.d(s,{$:()=>d,a:()=>a});var t=i(67680),l=i(36273),n=i(96540);const a=(0,n.createContext)({});function c(e,s){[e,s]=(0,t.a)(e,s,a);let{elementType:i="label",...l}=e;return n.createElement(i,{className:"react-aria-Label",...l,ref:s})}const d=(0,l.$)(c)},35952:(e,s,i)=>{i.d(s,{$:()=>d,a:()=>c});var t=i(67680),l=i(96540),n=i(1234);const a={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function c(e={}){let{style:s,isFocusable:i}=e,[t,c]=(0,l.useState)(!1),{focusWithinProps:d}=(0,n.d)({isDisabled:!i,onFocusWithinChange:e=>c(e)});return{visuallyHiddenProps:{...d,style:(0,l.useMemo)((()=>t?s:s?{...a,...s}:a),[t])}}}function d(e){let{children:s,elementType:i="div",isFocusable:n,style:a,...d}=e,{visuallyHiddenProps:r}=c(e);return l.createElement(i,(0,t.c)(d,r),s)}},54754:(e,s,i)=>{i.d(s,{b:()=>n});var t=i(74848),l=i(49189);const n=e=>{const{icon:s,label:i,subtitle:n,as:a,className:c,fullWidth:d=!1,contentsOnly:r,hidden:o,noColor:u}=e;if(o)return null;const h=a??"div";return r?(0,t.jsxs)(t.Fragment,{children:[s&&(0,t.jsx)("span",{className:(0,l.c)("[&>svg]:es-uic-size-5.5",!u&&"es-uic-text-slate-500"),children:s}),i&&(0,t.jsx)("span",{className:(0,l.c)("es-uic-text-balance",!u&&"es-uic-text-gray-800"),children:i}),n&&(0,t.jsx)("span",{className:(0,l.c)("es-uic-text-balance es-uic-text-xs es-uic-opacity-65",!u&&"es-uic-text-gray-800"),children:n})]}):(0,t.jsxs)(h,{className:(0,l.c)("es-uic-flex es-uic-items-center es-uic-gap-1.5 es-uic-text-sm",!u&&"es-uic-text-gray-800 [&>span>svg]:es-uic-text-slate-500",u&&"[&>span>svg]:es-uic-opacity-80",d&&"es-uic-grow",c),children:[s&&(0,t.jsx)("span",{className:"[&>svg]:es-uic-size-5.5",children:s}),(i||n)&&(0,t.jsxs)("div",{className:"es-uic-flex es-uic-flex-col es-uic-items-start es-uic-text-balance es-uic-text-start",children:[i&&(0,t.jsx)("span",{children:i}),n&&(0,t.jsx)("span",{className:"es-uic-text-xs es-uic-opacity-65",children:n})]})]})}},14796:(e,s,i)=>{i.d(s,{d:()=>m});var t=i(74848),l=i(67680),n=i(35971),a=i(96540),c=i(12688),d=i(98994),r=i(74702),o=i(1234),u=i(35952),h=i(49189);const p=(0,a.createContext)(null);function g(e,s){let{inputRef:i=null,...t}=e;[e,s]=(0,l.a)(t,s,p);let h=(0,l.l)((0,l.m)(i,void 0!==e.inputRef?e.inputRef:null)),g=(0,c.$)(e),{labelProps:b,inputProps:m,isSelected:x,isDisabled:f,isReadOnly:v,isPressed:j}=function(e,s,i){let{labelProps:t,inputProps:l,isSelected:n,isPressed:a,isDisabled:c,isReadOnly:r}=(0,d.$)(e,s,i);return{labelProps:t,inputProps:{...l,role:"switch",checked:n},isSelected:n,isPressed:a,isDisabled:c,isReadOnly:r}}({...(0,l.i)(e),children:"function"==typeof e.children||e.children},g,h),{isFocused:y,isFocusVisible:w,focusProps:k}=(0,r.$)(),D=e.isDisabled||e.isReadOnly,{hoverProps:N,isHovered:P}=(0,o.$)({...e,isDisabled:D}),C=(0,l.b)({...e,defaultClassName:"react-aria-Switch",values:{isSelected:x,isPressed:j,isHovered:P,isFocused:y,isFocusVisible:w,isDisabled:f,isReadOnly:v,state:g}}),S=(0,n.$)(e);return delete S.id,a.createElement("label",{...(0,l.c)(S,b,N,C),ref:s,slot:e.slot||void 0,"data-selected":x||void 0,"data-pressed":j||void 0,"data-hovered":P||void 0,"data-focused":y||void 0,"data-focus-visible":w||void 0,"data-disabled":f||void 0,"data-readonly":v||void 0},a.createElement(u.$,{elementType:"span"},a.createElement("input",{...(0,l.c)(m,k),ref:h})),C.children)}const b=(0,a.forwardRef)(g),m=e=>{const{checked:s,onChange:i,disabled:l,id:n,children:a,className:c,isIndeterminate:d,hidden:r}=e;return r?null:(0,t.jsxs)(b,{id:n,isDisabled:l,isSelected:s??!1,onChange:i,className:"es-uic-group es-uic-flex es-uic-items-center es-uic-justify-between es-uic-gap-2",children:[a,(0,t.jsx)("div",{className:(0,h.c)("es-uic-flex es-uic-shrink-0 es-uic-items-center es-uic-justify-center",c),children:(0,t.jsx)("div",{className:(0,h.c)("es-uic-no-webkit-highlight es-uic-h-4 es-uic-w-7 es-uic-shrink-0 es-uic-cursor-pointer es-uic-rounded-full es-uic-border es-uic-border-gray-500 es-uic-bg-white es-uic-p-[0.1875rem] es-uic-shadow-sm es-uic-outline-none es-uic-transition","group-focus-visible:es-uic-ring group-focus-visible:es-uic-ring-teal-500 group-focus-visible:es-uic-ring-opacity-50","group-selected:es-uic-border-teal-800/75 group-selected:es-uic-bg-teal-100/25 group-selected:es-uic-shadow-teal-500/25","group-disabled:es-uic-cursor-default group-disabled:es-uic-border-gray-300 group-disabled:es-uic-bg-white"),children:(0,t.jsx)("span",{className:(0,h.c)("es-uic-block es-uic-size-2 es-uic-rounded-full es-uic-border es-uic-border-gray-500 es-uic-bg-gray-500 es-uic-transition es-uic-will-change-transform","group-selected:es-uic-translate-x-3 group-selected:es-uic-scale-125 group-selected:es-uic-border-teal-600 group-selected:es-uic-bg-teal-600","group-disabled:es-uic-border-gray-300 group-disabled:es-uic-bg-white",d&&"es-uic-translate-x-1.5")})})})]})}},8808:(e,s,i)=>{i.d(s,{l:()=>c});var t=i(74848),l=i(5599),n=i(14796),a=i(54754);const c=e=>{const{checked:s,onChange:i,icon:c,label:d,subtitle:r,disabled:o,className:u,labelClassName:h,isIndeterminate:p,hidden:g}=e;return g?null:(0,t.jsx)(n.d,{checked:s,onChange:i,disabled:o,className:u,isIndeterminate:p,children:(0,t.jsx)(a.b,{as:l.$,icon:c,label:d,subtitle:r,className:h,fullWidth:!0})})}},945:(e,s,i)=>{i.d(s,{$:()=>n});var t=i(67680),l=i(96540);function n(e,s,i){let n=(0,l.useRef)(s),a=(0,t.f)((()=>{i&&i(n.current)}));(0,l.useEffect)((()=>{var s;let i=null==e||null===(s=e.current)||void 0===s?void 0:s.form;return null==i||i.addEventListener("reset",a),()=>{null==i||i.removeEventListener("reset",a)}}),[e,a])}},98994:(e,s,i)=>{i.d(s,{$:()=>d});var t=i(67680),l=i(35971),n=i(945),a=i(52973),c=i(12732);function d(e,s,i){let{isDisabled:d=!1,isReadOnly:r=!1,value:o,name:u,children:h,"aria-label":p,"aria-labelledby":g,validationState:b="valid",isInvalid:m}=e;null!=h||(null!=p||null!=g)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:x,isPressed:f}=(0,c.$)({isDisabled:d}),{pressProps:v,isPressed:j}=(0,c.$)({isDisabled:d||r,onPress(){s.toggle()}}),{focusableProps:y}=(0,a.$)(e,i),w=(0,t.c)(x,y),k=(0,l.$)(e,{labelable:!0});return(0,n.$)(i,s.isSelected,s.setSelected),{labelProps:(0,t.c)(v,{onClick:e=>e.preventDefault()}),inputProps:(0,t.c)(k,{"aria-invalid":m||"invalid"===b||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":r||void 0,onChange:e=>{e.stopPropagation(),s.setSelected(e.target.checked)},disabled:d,...null==o?{}:{value:o},name:u,type:"checkbox",...w}),isSelected:s.isSelected,isPressed:f||j,isDisabled:d,isReadOnly:r,isInvalid:m||"invalid"===b}}},12688:(e,s,i)=>{i.d(s,{$:()=>l});var t=i(1234);function l(e={}){let{isReadOnly:s}=e,[i,l]=(0,t.e)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:i,setSelected:function(e){s||l(e)},toggle:function(){s||l(!i)}}}}}]);