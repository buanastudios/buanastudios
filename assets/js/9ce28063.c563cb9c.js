"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[43827],{86689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>h,toc:()=>v});var i=t(74848),s=t(28453),a=t(34842),l=t(8232),o=t(69314),r=t(49378),p=t(13731),c=t(36763);const d={},u="Responsive",h={id:"es-ui-components/responsive",title:"Responsive",description:"Easily manage values that can be set per-breakpoint.",source:"@site/ui-components/es-ui-components/responsive.mdx",sourceDirName:"es-ui-components",slug:"/es-ui-components/responsive",permalink:"/components/es-ui-components/responsive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Expandable",permalink:"/components/es-ui-components/expandable"},next:{title:"Breakpoint preview",permalink:"/components/es-ui-components/breakpoint-preview"}},b={},v=[{value:"Highlighted props",id:"highlighted-props",level:2},{value:"Inline",id:"inline",level:3},{value:"Different control when inline (collapsed view)",id:"different-control-when-inline-collapsed-view",level:3},{value:"Different control when inline (expanded view)",id:"different-control-when-inline-expanded-view",level:3},{value:"Disable desktop-first/mobile-first picker",id:"disable-desktop-firstmobile-first-picker",level:3},{value:"<code>ResponsiveLegacy</code>",id:"responsivelegacy",level:2},{value:"Inherited values",id:"inherited-values",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"responsive",children:"Responsive"}),"\n","\n",(0,i.jsx)(n.p,{children:"Easily manage values that can be set per-breakpoint."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If using Frontend libs (that has ",(0,i.jsx)(n.strong,{children:"one attribute per breakpoint"}),"), use the ",(0,i.jsx)(n.a,{href:"#responsivelegacy",children:"ResponsiveLegacy"})," component."]})}),"\n",(0,i.jsx)(a.d,{defaultValue:{_default:"sans",_desktopFirst:!1},preContent:e=>(0,i.jsx)(n.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,n)=>(0,i.jsx)(l.F,{icon:p.Pt.fontFamily,label:"Font family",value:e,onChange:n,options:c.bs,breakpoints:c.uV,breakpointData:c.xn.globalVariables.breakpoints,children:({currentValue:e,handleChange:n,options:t})=>(0,i.jsx)(o.w,{options:t,onChange:e=>n(e),value:e})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Responsive\n\ticon={icons.fontFamily}\n\tlabel='Font family'\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'sans', label: 'Sans-serif' },\n\t\t{ value: 'serif', label: 'Serif' },\n\t\t{ value: 'mono', label: 'Monospace' },\n\t]}\n\tbreakpoints={['mobile', 'tablet', 'desktop', 'large']}\n\tbreakpointData={{\n\t\tmobile: 480,\n\t\ttablet: 960,\n\t\tdesktop: 1440,\n\t\tlarge: 1920,\n\t}}\n>\n\t{({ currentValue, handleChange, options }) => (\n\t\t<OptionSelect\n\t\t\toptions={options}\n\t\t\tonChange={(value) => handleChange(value)}\n\t\t\tvalue={currentValue}\n\t\t/>\n\t)}\n</Responsive>\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In Frontend libs Tailwind you can use the ",(0,i.jsx)(n.code,{children:"getResponsiveData"})," helper to fetch breakpoint data."]})}),"\n",(0,i.jsx)(n.h2,{id:"highlighted-props",children:"Highlighted props"}),"\n",(0,i.jsx)(n.p,{children:"For the complete list of props, use your IDE's autocomplete functionality."}),"\n",(0,i.jsx)(n.h3,{id:"inline",children:"Inline"}),"\n",(0,i.jsx)(a.d,{defaultValue:{_default:"sans",_desktopFirst:!1},preContent:e=>(0,i.jsx)(n.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,n)=>(0,i.jsx)(l.F,{icon:p.Pt.fontFamily,label:"Font family",value:e,onChange:n,options:c.bs,breakpoints:c.uV,breakpointData:c.xn.globalVariables.breakpoints,inline:!0,children:({currentValue:e,handleChange:n,options:t})=>(0,i.jsx)(o.w,{options:t,onChange:e=>n(e),value:e})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Responsive\n\ticon={icons.fontFamily}\n\tlabel='Font family'\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'sans', label: 'Sans-serif' },\n\t\t{ value: 'serif', label: 'Serif' },\n\t\t{ value: 'mono', label: 'Monospace' },\n\t]}\n\tbreakpoints={['mobile', 'tablet', 'desktop', 'large']}\n\tbreakpointData={{\n\t\tmobile: 480,\n\t\ttablet: 960,\n\t\tdesktop: 1440,\n\t\tlarge: 1920,\n\t}}\n\t// highlight-next-line\n\tinline\n>\n\t{({ currentValue, handleChange, options }) => (\n\t\t<OptionSelect\n\t\t\toptions={options}\n\t\t\tonChange={(value) => handleChange(value)}\n\t\t\tvalue={currentValue}\n\t\t/>\n\t)}\n</Responsive>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"different-control-when-inline-collapsed-view",children:"Different control when inline (collapsed view)"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Only applies to the control for the default breakpoint."})}),"\n",(0,i.jsx)(a.d,{defaultValue:{_default:"sans",_desktopFirst:!1},preContent:e=>(0,i.jsx)(n.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,n)=>(0,i.jsx)(l.F,{icon:p.Pt.fontFamily,label:"Font family",value:e,onChange:n,options:c.bs,breakpoints:c.uV,breakpointData:c.xn.globalVariables.breakpoints,inline:!0,children:({currentValue:e,handleChange:n,options:t,isInlineCollapsedView:s})=>(0,i.jsx)(o.w,{options:t,onChange:e=>n(e),value:e,type:s?"menu":"toggleButtons"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Responsive\n\ticon={icons.fontFamily}\n\tlabel='Font family'\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'sans', label: 'Sans-serif' },\n\t\t{ value: 'serif', label: 'Serif' },\n\t\t{ value: 'mono', label: 'Monospace' },\n\t]}\n\tbreakpoints={['mobile', 'tablet', 'desktop', 'large']}\n\tbreakpointData={{\n\t\tmobile: 480,\n\t\ttablet: 960,\n\t\tdesktop: 1440,\n\t\tlarge: 1920,\n\t}}\n\tinline\n>\n\t// highlight-next-line\n\t{({ currentValue, handleChange, options, isInlineCollapsedView }) => (\n\t\t<OptionSelect\n\t\t\toptions={options}\n\t\t\tonChange={(value) => handleChange(value)}\n\t\t\tvalue={currentValue}\n\t\t\t// highlight-next-line\n\t\t\ttype={isInlineCollapsedView ? 'menu' : 'toggleButtons'}\n\t\t/>\n\t)}\n</Responsive>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"different-control-when-inline-expanded-view",children:"Different control when inline (expanded view)"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Only applies to the control for the default breakpoint."})}),"\n",(0,i.jsx)(a.d,{defaultValue:{_default:"sans",_desktopFirst:!1},preContent:e=>(0,i.jsx)(n.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,n)=>(0,i.jsx)(l.F,{icon:p.Pt.fontFamily,label:"Font family",value:e,onChange:n,options:c.bs,breakpoints:c.uV,breakpointData:c.xn.globalVariables.breakpoints,inline:!0,children:({currentValue:e,handleChange:n,options:t,isInlineExpandedView:s})=>(0,i.jsx)(o.w,{options:t,onChange:e=>n(e),value:e,type:s?"radiosSegmented":"toggleButtons"})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Responsive\n\ticon={icons.fontFamily}\n\tlabel='Font family'\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'sans', label: 'Sans-serif' },\n\t\t{ value: 'serif', label: 'Serif' },\n\t\t{ value: 'mono', label: 'Monospace' },\n\t]}\n\tbreakpoints={['mobile', 'tablet', 'desktop', 'large']}\n\tbreakpointData={{\n\t\tmobile: 480,\n\t\ttablet: 960,\n\t\tdesktop: 1440,\n\t\tlarge: 1920,\n\t}}\n\tinline\n>\n\t// highlight-next-line\n\t{({ currentValue, handleChange, options, isInlineExpandedView }) => (\n\t\t<OptionSelect\n\t\t\toptions={options}\n\t\t\tonChange={(value) => handleChange(value)}\n\t\t\tvalue={currentValue}\n\t\t\t// highlight-next-line\n\t\t\ttype={isInlineExpandedView ? 'radiosSegmented' : 'toggleButtons'}\n\t\t/>\n\t)}\n</Responsive>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"disable-desktop-firstmobile-first-picker",children:"Disable desktop-first/mobile-first picker"}),"\n",(0,i.jsx)(a.d,{defaultValue:{_default:"sans",_desktopFirst:!1},preContent:e=>(0,i.jsx)(n.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,n)=>(0,i.jsx)(l.F,{icon:p.Pt.fontFamily,label:"Font family",value:e,onChange:n,options:c.bs,breakpoints:c.uV,breakpointData:c.xn.globalVariables.breakpoints,noModeSelect:!0,children:({currentValue:e,handleChange:n,options:t})=>(0,i.jsx)(o.w,{options:t,onChange:e=>n(e),value:e})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Responsive\n\ticon={icons.fontFamily}\n\tlabel='Font family'\n\tvalue={value}\n\tonChange={(value) => setValue(value)}\n\toptions={[\n\t\t{ value: 'sans', label: 'Sans-serif' },\n\t\t{ value: 'serif', label: 'Serif' },\n\t\t{ value: 'mono', label: 'Monospace' },\n\t]}\n\tbreakpoints={['mobile', 'tablet', 'desktop', 'large']}\n\tbreakpointData={{\n\t\tmobile: 480,\n\t\ttablet: 960,\n\t\tdesktop: 1440,\n\t\tlarge: 1920,\n\t}}\n\t// highlight-next-line\n\tnoModeSelect\n>\n\t{({ currentValue, handleChange, options }) => (\n\t\t<OptionSelect\n\t\t\toptions={options}\n\t\t\tonChange={(value) => handleChange(value)}\n\t\t\tvalue={currentValue}\n\t\t/>\n\t)}\n</Responsive>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"responsivelegacy",children:(0,i.jsx)(n.code,{children:"ResponsiveLegacy"})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["This component is meant to be used in projects that have ",(0,i.jsx)(n.strong,{children:"one attribute per breakpoint"}),", e.g. regular Frontend libs. If using Frontend libs ",(0,i.jsx)(n.strong,{children:"Tailwind"}),", use the ",(0,i.jsx)(n.a,{href:"/components/es-ui-components/responsive",children:"Responsive"})," component."]})}),"\n",(0,i.jsxs)(n.p,{children:["Props are mostly the same as in the ",(0,i.jsx)(n.code,{children:"Responsive"})," component."]}),"\n",(0,i.jsx)(n.p,{children:"Main differences:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"there is not desktop-first/mobile-first mode switcher"}),"\n",(0,i.jsxs)(n.li,{children:["there is no ",(0,i.jsx)(n.em,{children:"Responsive preview"})]}),"\n"]}),"\n",(0,i.jsx)(a.d,{defaultValue:{myAttrLarge:"serif",myAttrDesktop:"",myAttrTablet:"",myAttrMobile:""},preContent:e=>(0,i.jsx)(n.span,{className:"es-uic-font-mono es-uic-text-xs esd-white-space-pre",children:JSON.stringify(e,null,2)}),children:(e,n)=>(0,i.jsx)(r.s,{icon:p.Pt.fontFamily,label:"Font family",attribute:c.Z$,value:e,onChange:(t,i)=>{n({...e,[t]:i})},options:c.bs,breakpointData:c.xn.globalVariables.breakpoints,children:({currentValue:e,options:n,handleChange:t})=>(0,i.jsx)(o.w,{options:n,onChange:e=>t(e),value:e})})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ResponsiveLegacy\n\ticon={icons.fontFamily}\n\tlabel='Font family'\n\tattribute={manifest.responsiveAttributes.myAttr}\n\tvalue={attributes}\n\tonChange={(attributeName, newValue) => {\n\t\tsetAttributes({\n\t\t\t...attributes,\n\t\t\t[attributeName]: newValue,\n\t\t});\n\t}}\n\toptions={[\n\t\t{ value: 'sans', label: 'Sans-serif' },\n\t\t{ value: 'serif', label: 'Serif' },\n\t\t{ value: 'mono', label: 'Monospace' },\n\t]}\n\tbreakpointData={globalManifest.globalVariables.breakpoints}\n>\n\t{({ currentValue, handleChange, options }) => (\n\t\t<OptionSelect\n\t\t\toptions={options}\n\t\t\tonChange={(value) => handleChange(value)}\n\t\t\tvalue={currentValue}\n\t\t/>\n\t)}\n</ResponsiveLegacy>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"inherited-values",children:"Inherited values"}),"\n",(0,i.jsxs)(n.p,{children:["The default value that marks an attribute as ",(0,i.jsx)(n.em,{children:"inherited"})," from the breakpoint above is an empty string.\nTo set a custom one, use the ",(0,i.jsx)(n.code,{children:"inheritValue"})," prop."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need the inherited value to be ",(0,i.jsx)(n.code,{children:"undefined"}),", set the ",(0,i.jsx)(n.code,{children:"allowUndefined"})," prop instead."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},34842:(e,n,t)=>{t.d(n,{d:()=>r});var i=t(96540),s=t(82972),a=t(34164),l=t(78478),o=t(74848);const r=e=>{let{children:n,defaultValue:t,className:r,fitWidth:p=!1,resettable:c=!1,preContent:d}=e;const[u,h]=(0,i.useState)(t),b=(0,i.useRef)();return(0,o.jsx)(l.A,{children:()=>(0,o.jsxs)("div",{className:"es-uic-flex es-uic-font-sans",children:[(0,o.jsxs)("div",{className:(0,a.$)("es-uic-border es-uic-border-dashed es-uic-border-gray-200 es-uic-p-4 es-uic-rounded-lg es-uic-space-y-2.5 es-uic-shrink-0",p?"es-uic-w-fit":"es-uic-w-96",r),children:["function"==typeof n&&n(u,h),"function"!=typeof n&&n]}),(0,o.jsxs)("div",{className:"es-uic-space-y-2.5 es-uic-ml-3 es-uic-grow",children:[d&&d(u,h,b),c&&(0,o.jsx)(s.$,{size:"small",onPress:()=>h(t),disabled:u===t,children:"Reset"})]})]})})}},36763:(e,n,t)=>{t.d(n,{Z$:()=>l,bs:()=>i,uV:()=>a,xn:()=>s});const i=[{label:"Sans",value:"sans"},{label:"Serif",value:"serif"},{label:"Monospace",value:"mono"}],s={globalVariables:{breakpoints:{mobile:480,tablet:960,desktop:1440,large:1920}}},a=["mobile","tablet","desktop","large"],l={large:"myAttrLarge",desktop:"myAttrDesktop",tablet:"myAttrTablet",mobile:"myAttrMobile"}}}]);