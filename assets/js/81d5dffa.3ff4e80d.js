"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[59594],{19011:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(74848),r=s(28453);const i={id:"helpers-components-helpers",title:"Components"},o=void 0,l={id:"legacy/v4/advanced/helpers-components-helpers",title:"Components",description:"docs-source",source:"@site/docs/legacy/v4/advanced/helpers-components.md",sourceDirName:"legacy/v4/advanced",slug:"/legacy/v4/advanced/helpers-components-helpers",permalink:"/docs/legacy/v4/advanced/helpers-components-helpers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"helpers-components-helpers",title:"Components"},sidebar:"docs",previous:{title:"Object",permalink:"/docs/legacy/v4/advanced/helpers-object-helpers"},next:{title:"Shortcode",permalink:"/docs/legacy/v4/advanced/helpers-shortcode-helpers"}},a={},c=[{value:"ensure_string",id:"ensure_string",level:2},{value:"classnames",id:"classnames",level:2},{value:"render",id:"render",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/helpers/class-components.php",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,t.jsxs)(n.p,{children:["Components helper is located in ",(0,t.jsx)(n.code,{children:"Eightshift Libs"}),". To extend it, use ",(0,t.jsx)(n.code,{children:"Eightshift_Libs\\Helpers\\Components"})," class."]}),"\n",(0,t.jsxs)(n.p,{children:["We have created this simple helper that you can use in any PHP class as a static helper. To see all of the components helpers go ",(0,t.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/helpers/class-components.php",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ensure_string",children:"ensure_string"}),"\n",(0,t.jsx)(n.p,{children:"Makes sure the output is a string. Useful for converting an array of components into a string."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@param  array|string $variable Variable we need to convert into a string."}),"\n",(0,t.jsx)(n.li,{children:"@return string"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"classnames",children:"classnames"}),"\n",(0,t.jsx)(n.p,{children:"Converts an array of classes into a string which can be echoed."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@param  array $classes Array of classes."}),"\n",(0,t.jsx)(n.li,{children:"@return string"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"render",children:"render"}),"\n",(0,t.jsx)(n.p,{children:"Renders components and (optionally) passes some attributes to it."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:'Note about "parentClass" attribute'}),":\nIf provided, the component will be wrapped with a parent BEM selector. For example, if ",(0,t.jsx)(n.code,{children:"$attributes['parentClass'] === 'header'"})," and ",(0,t.jsx)(n.code,{children:"$component === 'logo'"})," are set, the component will be wrapped with a ",(0,t.jsx)(n.code,{children:'<div class="header__logo"></div>'})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@param  string $component  Component's name or full path (ending with .php)."}),"\n",(0,t.jsx)(n.li,{children:"@param  array  $attributes Array of attributes that are implicitly passed to the component."}),"\n",(0,t.jsx)(n.li,{children:"@return string"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);