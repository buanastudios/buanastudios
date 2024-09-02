"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[505],{93043:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(74848),o=s(28453);const a={id:"blocks-variations",title:"Variations"},n=void 0,r={id:"legacy/v6/basics/blocks-variations",title:"Variations",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks-variations.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks-variations",permalink:"/docs/legacy/v6/basics/blocks-variations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-variations",title:"Variations"},sidebar:"docs",previous:{title:"Wrapper",permalink:"/docs/legacy/v6/basics/blocks-wrapper"},next:{title:"Patterns",permalink:"/docs/legacy/v6/basics/blocks-patterns"}},c={},l=[{value:"Structure",id:"structure",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Changes from native WordPress block variations API",id:"changes-from-native-wordpress-block-variations-api",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsx)(t.p,{children:"Block variations allow developers to define instances of existing blocks by changing their default values."}),"\n",(0,i.jsxs)(t.p,{children:["An example that you\u2019ll see below is a button block. Perhaps your site has three variations of how to display a button on your site. You must create a ",(0,i.jsx)(t.code,{children:"default"})," button block and you can create additional variations that changes the default values for the other two buttons. This sounds awfully familiar to block styles, but the concept of variations goes a bit further than that, as you\u2019ll see."]}),"\n",(0,i.jsxs)(t.p,{children:["Here is the best article on how to better understand ",(0,i.jsx)(t.a,{href:"https://css-tricks.com/how-to-use-block-variations-in-wordpress/",children:"block variations"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["What we did with variations is just like blocks. Provide the structured data from the ",(0,i.jsx)(t.code,{children:"manifest.json"})," and use that to register your variation."]}),"\n",(0,i.jsx)(t.h3,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.p,{children:["The structure is the same as a normal block but with some limitations on what you can use. You can check the ",(0,i.jsx)(t.a,{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#variations-optional",children:"WordPress documentation"})," for more on this subject."]}),"\n",(0,i.jsx)(t.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(t.p,{children:["As we saw from our testing, you are not limited to only changing the block's default attributes, but adding additional data like inner blocks and such. With this setup, you can use variations the same way as you would block patterns, only in the variation you provide the data using ",(0,i.jsx)(t.code,{children:"manifest.json"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"changes-from-native-wordpress-block-variations-api",children:"Changes from native WordPress block variations API"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"parentName"})," key is the only addition to the original documentation. We implemented this key to be able to connect the original block with its variation. This key must be the same as it is defined in the original blocks ",(0,i.jsx)(t.code,{children:"blockName"})," key."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var i=s(96540);const o={},a=i.createContext(o);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);