"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[13089],{98791:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var i=s(74848),n=s(28453),o=s(96540),c=s(23271),a=s(13731);const r=()=>{const[e,t]=(0,o.useState)(!0),[s,n]=(0,o.useState)("Initializing");(0,o.useEffect)((()=>{(async()=>{const e=await(0,c.QH)({iframe:r.current,remoteUrl:"https://playground.wordpress.net/remote.html",blueprint:{preferredVersions:{php:"8.3",wp:"6.4"},phpExtensionBundles:["kitchen-sink"],features:{networking:!0},landingPage:"/wp-admin",steps:[{step:"login",username:"admin",password:"password"}]},sapiName:"cli"});n("Loading theme");const s="devkit-components.zip",i=await fetch(`/${s}`,{headers:{"Content-Type":"application/octet-stream"},credentials:"include"});n("Unpacking theme");const o=await i.blob(),a=new File([o],s);n("Installing theme"),await(0,c.XT)(e,{themeZipFile:a,options:{activate:!0}}),n("Setting up WP-CLI");const p="/wordpress/wp-cli.phar",l=await fetch("https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar"),d=await l.arrayBuffer();await e.writeFile(p,new Uint8Array(d)),n("Initializing block");const{text:m}=await(0,c.gT)(e,{command:"wp post create --post_title='Welcome to Eightshift DevKit!' --post_content='\x3c!-- wp:eightshift-boilerplate/devkit-components /--\x3e' --post_status='publish'",wpCliPath:p}),u=m.substring(m.indexOf("Created post ")+13,m.lastIndexOf(".")).trim();n("Finalizing"),await e.goTo(`/wp-admin/post.php?post=${u}&action=edit`),await new Promise((e=>setTimeout(e,1500))),t(!1)})()}),[]);const r=(0,o.useRef)(null);return(0,i.jsxs)("div",{className:"es-uic-size-full",children:[e&&(0,i.jsxs)("div",{className:"es-uic-flex es-uic-gap-4",children:[(0,i.jsx)("div",{className:"es-uic-mt-2 es-uic-py-1 [&>svg]:es-uic-size-6 text-infinum",children:a.Pt.componentGeneric}),(0,i.jsxs)("div",{className:"es-uic-flow-root",children:[(0,i.jsx)("h3",{className:"!es-uic-mt-2",children:"Preparing component docs"}),(0,i.jsx)("span",{className:"text-12",children:s})]})]}),(0,i.jsx)("iframe",{className:"es-uic-size-full es-uic-aspect-video esd-legacy-docs-iframe",allow:"clipboard-read; clipboard-write",ref:r,style:{visibility:e?"hidden":"visible"}})]})},p={},l="Legacy component docs",d={id:"legacy-component-docs",title:"Legacy component docs",description:"",source:"@site/ui-components/legacy-component-docs.mdx",sourceDirName:".",slug:"/legacy-component-docs",permalink:"/components/legacy-component-docs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Introduction",permalink:"/components/fe-libs-components/introduction"}},m={},u=[];function h(e){const t={h1:"h1",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"legacy-component-docs",children:"Legacy component docs"}),"\n","\n",(0,i.jsx)(r,{})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);