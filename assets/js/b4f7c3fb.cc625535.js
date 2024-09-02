"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[38194],{4258:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(74848),i=n(28453);const o={id:"namespaces",title:"Namespaces"},a=void 0,c={id:"legacy/v6/basics/namespaces",title:"Namespaces",description:"docs-source",source:"@site/docs/legacy/v6/basics/namespaces.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/namespaces",permalink:"/docs/legacy/v6/basics/namespaces",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"namespaces",title:"Namespaces"},sidebar:"docs",previous:{title:"General",permalink:"/docs/legacy/v6/basics/backend"},next:{title:"Extending Classes",permalink:"/docs/legacy/v6/basics/extending-classes"}},r={},l=[{value:"Important note",id:"important-note",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/infinum/eightshift-libs/tree/4.0.0",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["The PHP codebase of this project lives in ",(0,t.jsx)(s.code,{children:"EightshiftLibs"})," namespace."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Because WordPress lives in a global namespace, we had to provide the way for your project to be unique. That is why we implemented ",(0,t.jsx)(s.a,{href:"https://github.com/infinum/imposter-plugin",children:(0,t.jsx)(s.strong,{children:"Imposter"})})," in ",(0,t.jsx)(s.code,{children:"composer.json"}),". Imposter adds a namespace prefix to all the packages inside the ",(0,t.jsx)(s.code,{children:"vendor"})," folder that use namespacing."]}),"\n",(0,t.jsxs)(s.p,{children:["You can change the vendor prefix in your ",(0,t.jsx)(s.code,{children:"composer.json"})," file. If you do this, make sure you delete the ",(0,t.jsx)(s.code,{children:"vendor"})," folder and re-run ",(0,t.jsx)(s.code,{children:"composer install"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Using the default setup, your project will have the namespace you defined in the setup process."}),"\n",(0,t.jsxs)(s.p,{children:["However, let's say you change your ",(0,t.jsx)(s.code,{children:"composer.json"})," file to contain this snippet:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"autoload": {\n  "psr-4": {\n    "CustomProject\\\\": "src/"\n  }\n},\n"extra": {\n  "imposter": {\n    "namespace": "EightshiftBoilerplateVendor"\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Your current namespace is: ",(0,t.jsx)(s.code,{children:"CustomProject"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Namespace for Eightshift Libs becomes: ",(0,t.jsx)(s.code,{children:"EightshiftBoilerplateVendor\\EightshiftLibs"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Every package you additionally install will follow the same convention: ",(0,t.jsx)(s.code,{children:"EightshiftBoilerplateVendor\\SomePackageNamespace"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"To sum it up"}),": you don't need to change the default vendor prefix if you only run one theme or one plugin with Eightshift Development Kit. If you have multiple Eightshift Development Kit-powered themes or plugins installed, please change the vendor prefix on each of the projects."]}),"\n",(0,t.jsx)(s.h3,{id:"important-note",children:"Important note"}),"\n",(0,t.jsxs)(s.p,{children:["If you are installing additional composer packages, make sure that they don't have any inline namespace usage. All referenced classes should be imported with ",(0,t.jsx)(s.code,{children:"use"})," statements, which must be defined at the top of files."]}),"\n",(0,t.jsx)(s.p,{children:"The Imposter plugin is not able to replace inline namespaces, which will cause issues with classname resolution and result in a fatal error getting thrown."}),"\n",(0,t.jsx)(s.p,{children:"To fix these issues, either create a PR on the package and fix this for everyone, or exclude this package from imposter script. Keep in mind that can have some unexpected side effects that we can't predict."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(96540);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);