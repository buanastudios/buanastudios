/*! For license information please see 8d6ead81.39c5a767.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[31918],{29051:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=n(74848),s=n(28453),i=n(34842),a=n(1537),o=n(20329);const c={},r="Single select",u={id:"es-ui-components/select",title:"Single select",description:"{(data, setData) => (",source:"@site/ui-components/es-ui-components/select.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/select",permalink:"/components/es-ui-components/select",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Matrix align",permalink:"/components/es-ui-components/matrix-align"},next:{title:"Multi-select",permalink:"/components/es-ui-components/multi-select"}},d={},p=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Allow clearing the selected option",id:"allow-clearing-the-selected-option",level:3},{value:"Disable search",id:"disable-search",level:3},{value:"Simple value",id:"simple-value",level:3}];function h(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"single-select",children:"Single select"}),"\n","\n",(0,t.jsx)(i.d,{children:(e,l)=>(0,t.jsx)(a.l,{value:e,onChange:l,options:o.YP})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-jsx",children:"<Select\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'option-1', label: 'Option 1' },\n\t\t{ value: 'option-2', label: 'Option 2' },\n\t\t{ value: 'option-3', label: 'Option 3' },\n\t]}\n/>\n"})}),"\n",(0,t.jsx)(l.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,t.jsx)(l.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,t.jsx)(l.h3,{id:"allow-clearing-the-selected-option",children:"Allow clearing the selected option"}),"\n",(0,t.jsx)(i.d,{defaultValue:null,children:(e,l)=>(0,t.jsx)(a.l,{value:e,onChange:l,options:o.YP,clearable:!0})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-jsx",children:"<Select\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'option-1', label: 'Option 1' },\n\t\t{ value: 'option-2', label: 'Option 2' },\n\t\t{ value: 'option-3', label: 'Option 3' },\n\t]}\n\t// highlight-next-line\n\tclearable\n/>\n"})}),"\n",(0,t.jsx)(l.h3,{id:"disable-search",children:"Disable search"}),"\n",(0,t.jsx)(i.d,{defaultValue:null,children:(e,l)=>(0,t.jsx)(a.l,{value:e,onChange:l,options:o.YP,noSearch:!0})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-jsx",children:"<Select\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'option-1', label: 'Option 1' },\n\t\t{ value: 'option-2', label: 'Option 2' },\n\t\t{ value: 'option-3', label: 'Option 3' },\n\t]}\n\t// highlight-next-line\n\tnoSearch\n/>\n"})}),"\n",(0,t.jsx)(l.h3,{id:"simple-value",children:"Simple value"}),"\n",(0,t.jsxs)(l.p,{children:["By default, values are objects with ",(0,t.jsx)(l.code,{children:"value"})," and ",(0,t.jsx)(l.code,{children:"label"})," properties (and optionally ",(0,t.jsx)(l.code,{children:"metadata"}),").\nIf you want to use a simple string value, use the ",(0,t.jsx)(l.code,{children:"simpleValue"})," prop."]}),"\n",(0,t.jsx)(i.d,{defaultValue:null,preContent:e=>(0,t.jsx)(l.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,l)=>(0,t.jsx)(a.l,{label:"Default",value:e,onChange:l,options:o.YP})}),"\n",(0,t.jsx)(i.d,{defaultValue:null,preContent:e=>(0,t.jsx)(l.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,l)=>(0,t.jsx)(a.l,{label:"Simple value",value:e,onChange:l,options:o.YP,simpleValue:!0})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-jsx",children:"<Select\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'option-1', label: 'Option 1' },\n\t\t{ value: 'option-2', label: 'Option 2' },\n\t\t{ value: 'option-3', label: 'Option 3' },\n\t]}\n\t// highlight-next-line\n\tsimpleValue\n/>\n"})})]})}function m(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},34842:(e,l,n)=>{n.d(l,{d:()=>c});var t=n(96540),s=n(82972),i=n(34164),a=n(78478),o=n(74848);const c=e=>{let{children:l,defaultValue:n,className:c,fitWidth:r=!1,resettable:u=!1,preContent:d}=e;const[p,h]=(0,t.useState)(n),m=(0,t.useRef)();return(0,o.jsx)(a.A,{children:()=>(0,o.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,o.jsxs)("div",{className:(0,i.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",r?"es-uic-w-fit":"es-uic-w-96",c),children:["function"==typeof l&&l(p,h),"function"!=typeof l&&l]}),(0,o.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[d&&d(p,h,m),u&&(0,o.jsx)(s.$,{size:"small",onPress:()=>h(n),disabled:p===n,children:"Reset"})]})]})})}},20329:(e,l,n)=>{n.d(l,{I_:()=>o,KW:()=>c,QV:()=>u,Y5:()=>p,YP:()=>a,dZ:()=>d,qy:()=>r,uB:()=>h});var t=n(51857),s=n(13731),i=n(74848);const a=[{label:"Item 1",value:"item-1"},{label:"Item 2",value:"item-2"},{label:"Item 3",value:"item-3"},{label:"Item 4 with veeeery very long label",value:"item-4"},{label:"Item 5",value:"item-5"},{label:"Item 6",value:"item-6"}],o=e=>{const l=l=>{let{label:n}=l;return n.toLowerCase().includes(e.toLowerCase())};return new Promise((n=>{setTimeout((()=>{e||n(a.slice(0,3)),n(a.filter(l))}),1500)}))},c=e=>(0,i.jsx)(t.am,{...e,children:(0,i.jsx)("div",{className:"[&>svg]:es-uic-text-red-500",children:e.selectProps.menuIsOpen?s.Pt.arrowUpCircleAlt:s.Pt.arrowDownCircleAlt})}),r=e=>(0,i.jsx)(t.pP,{...e,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{role:"img",children:s.Pt.emptyCircle}),(0,i.jsx)("span",{children:e.label})]})}),u=e=>(0,i.jsx)(t.mw,{...e,children:s.Pt.errorCircleFill}),d=e=>(0,i.jsx)(t.XS,{...e,children:(0,i.jsx)("span",{className:"es-uic-text-red-500 es-uic-font-mono es-uic-font-semibold",children:e.children})}),p=e=>(0,i.jsx)(t.C6,{...e,children:s.Pt.remove}),h=e=>{const l=["es-uic-bg-red-500","es-uic-bg-blue-500","es-uic-bg-green-500","es-uic-bg-yellow-500","es-uic-bg-slate-900"],n=e.options.findIndex((l=>l.value===e.data.value))%l.length;return(0,i.jsx)(t.ym,{...e,children:(0,i.jsx)("span",{className:`${l[n]} es-uic-font-semibold es-uic-p-1 es-uic-text-white`,children:e.children})})}},60721:(e,l,n)=>{n.d(l,{_:()=>t});const t=(e,l,n)=>Array.isArray(l)?e?l.map((e=>null==n?void 0:n.find((({value:l})=>l===e)))):l:e?null==n?void 0:n.find((({value:e})=>e===l)):l},1537:(e,l,n)=>{n.d(l,{l:()=>u});var t=n(74848),s=n(32003),i=n(82685),a=n(60721),o=n(23338),c=n(49290),r=n(7486);const u=e=>{const{icon:l,help:n,label:u,inline:d,actions:p,subtitle:h,value:m,onChange:v,options:x,simpleValue:g=!1,disabled:j=!1,noSearch:b=!1,clearable:f=!1,keepMenuOpenAfterSelect:w=!1,placeholder:C,customMenuOption:S,customValueDisplay:y,customDropdownArrow:O,customClearIndicator:N,className:V,hidden:P,...I}=e;return P?null:(0,t.jsx)(o.p,{label:u,icon:l,subtitle:h,actions:p,help:n,inline:d,children:(0,t.jsx)(s.S,{unstyled:!0,options:x,value:(0,a._)(g,m,x),onChange:e=>{g?v(null==e?void 0:e.value):(delete e.id,v(e))},closeMenuOnSelect:!w,isClearable:f,isSearchable:!b,isDisabled:j,className:V,placeholder:C,classNames:c.U,components:{Option:S??r.c.Option,SingleValue:y??r.c.SingleValue,IndicatorSeparator:null,DropdownIndicator:O??i.D,ClearIndicator:N??i.P1},...I})})}},32003:(e,l,n)=>{n.d(l,{S:()=>a});var t=n(12448),s=n(7486),i=n(96540),a=(0,i.forwardRef)((function(e,l){var n=(0,t.u)(e);return i.createElement(t.S,(0,s._)({ref:l},n))}))}}]);