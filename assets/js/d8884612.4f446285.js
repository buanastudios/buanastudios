/*! For license information please see d8884612.4f446285.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[73428],{5134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var i=n(74848),s=n(28453),o=n(34842),l=n(6295),r=n(82972),h=n(44798);const c={},d="Tooltip",a={id:"es-ui-components/tooltip",title:"Tooltip",description:"Tooltips don't usually need to be used directly, as they are used internally by other components.",source:"@site/ui-components/es-ui-components/tooltip.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/tooltip",permalink:"/components/es-ui-components/tooltip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Menu",permalink:"/components/es-ui-components/menu"},next:{title:"Number picker",permalink:"/components/es-ui-components/number-picker"}},p={},u=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Themes",id:"themes",level:3},{value:"Arrow",id:"arrow",level:3},{value:"Placement",id:"placement",level:3}];function x(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"tooltip",children:"Tooltip"}),"\n","\n",(0,i.jsx)(t.p,{children:"Tooltips don't usually need to be used directly, as they are used internally by other components.\nBy default, they only work with components that properly handle pointer events."}),"\n",(0,i.jsx)(t.p,{children:"There is an initial delay before showing a tooltip, so they don't show accidentally when the user is just moving the pointer around.\nThis can be modified with props."}),"\n",(0,i.jsxs)(t.p,{children:["After a tooltip has been shown, the surrounding tooltips will ",(0,i.jsx)(t.strong,{children:"not"})," have any delay before showing the tooltip."]}),"\n",(0,i.jsx)(t.p,{children:"Likewise, there's a slight delay when the pointer exits the element with a tooltip, so it doesn't disappear immediately."}),"\n",(0,i.jsx)(t.p,{children:"The tooltip will also be shown when the element is focused. In that case, there is no delay when the tooltip is shown/hidden."}),"\n",(0,i.jsxs)(t.p,{children:["If you need a tooltip on an element which doesn't handle pointer events, you can use the ",(0,i.jsx)(t.code,{children:"DecorativeTooltip"})," component.\nDecorative tooltips ",(0,i.jsx)(t.strong,{children:"do not"})," have special delayed enter/exit behavior as regular tooltips.\nThey will also wrap your element in a container that handles hover events."]}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"caution",children:(0,i.jsx)(t.p,{children:"Never include any crucial info within tooltips as they cannot be triggered on devices without a pointer, e.g. phones."})}),"\n",(0,i.jsx)(o.d,{children:(0,i.jsx)(l.T,{text:"This is a tooltip",children:(0,i.jsx)(r.$,{children:"Hover me"})})}),"\n",(0,i.jsx)(o.d,{children:(0,i.jsxs)(h.z,{children:[(0,i.jsx)(l.T,{text:"Bet you did not...",children:(0,i.jsx)(r.$,{children:"Hello"})}),(0,i.jsx)(l.T,{text:"expect an Adele song...",children:(0,i.jsx)(r.$,{children:"from the"})}),(0,i.jsx)(l.T,{text:"in the examples?",children:(0,i.jsx)(r.$,{children:"other side"})})]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<Tooltip text='This is a tooltip'>\n\t<Button>Hello</Button>\n</Tooltip>\n"})}),"\n",(0,i.jsx)(o.d,{fitWidth:!0,children:(0,i.jsx)(l.D,{text:"This is a tooltip",children:(0,i.jsx)("p",{children:"This is a paragraph with a tooltip"})})}),"\n",(0,i.jsx)(t.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,i.jsx)(t.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,i.jsx)(t.h3,{id:"themes",children:"Themes"}),"\n",(0,i.jsx)(o.d,{children:(0,i.jsxs)(h.z,{children:[(0,i.jsx)(l.T,{text:"This is a tooltip",theme:"dark",children:(0,i.jsx)(r.$,{children:"Dark theme (default)"})}),(0,i.jsx)(l.T,{text:"This is a tooltip",theme:"light",children:(0,i.jsx)(r.$,{children:"Light theme"})})]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<Tooltip\n\ttext='This is a tooltip'\n\t// highlight-next-line\n\ttheme='light'\n>\n\t<Button>Light theme</Button>\n</Tooltip>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"arrow",children:"Arrow"}),"\n",(0,i.jsx)(t.p,{children:"Helps connect the tooltip to the element it's describing."}),"\n",(0,i.jsx)(o.d,{children:(0,i.jsxs)(h.z,{children:[(0,i.jsx)(l.T,{text:"This is a tooltip",children:(0,i.jsx)(r.$,{children:"No arrow (default)"})}),(0,i.jsx)(l.T,{text:"This is a tooltip",arrow:!0,children:(0,i.jsx)(r.$,{children:"Arrow"})})]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<Tooltip\n\ttext='This is a tooltip'\n\t// highlight-next-line\n\tarrow\n>\n\t<Button>Arrow</Button>\n</Tooltip>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"placement",children:"Placement"}),"\n",(0,i.jsx)(o.d,{children:(0,i.jsx)(h.z,{children:(0,i.jsx)(l.T,{text:"This is a tooltip",placement:"right",children:(0,i.jsx)(r.$,{children:"Tooltip on the right"})})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"<Tooltip\n\ttext='This is a tooltip'\n\t// highlight-next-line\n\tplacement='right'\n>\n\t<Button>Tooltip on the right</Button>\n</Tooltip>\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},34842:(e,t,n)=>{n.d(t,{d:()=>h});var i=n(96540),s=n(82972),o=n(34164),l=n(78478),r=n(74848);const h=e=>{let{children:t,defaultValue:n,className:h,fitWidth:c=!1,resettable:d=!1,preContent:a}=e;const[p,u]=(0,i.useState)(n),x=(0,i.useRef)();return(0,r.jsx)(l.A,{children:()=>(0,r.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,r.jsxs)("div",{className:(0,o.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",c?"es-uic-w-fit":"es-uic-w-96",h),children:["function"==typeof t&&t(p,u),"function"!=typeof t&&t]}),(0,r.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[a&&a(p,u,x),d&&(0,r.jsx)(s.$,{size:"small",onPress:()=>u(n),disabled:p===n,children:"Reset"})]})]})})}},44798:(e,t,n)=>{n.d(t,{z:()=>o});var i=n(74848),s=n(49189);const o=e=>{const{children:t,noWrap:n,className:o,hidden:l}=e;return l?null:(0,i.jsx)("div",{className:(0,s.c)("es-uic-flex es-uic-items-center es-uic-gap-x-1.5 es-uic-gap-y-2",!n&&"es-uic-flex-wrap",o),children:t})}}}]);