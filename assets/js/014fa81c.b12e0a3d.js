"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[91303],{24626:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var i=s(74848),o=s(28453);const t={id:"wp-cli",title:"WP-CLI"},l=void 0,r={id:"legacy/v6/basics/wp-cli",title:"WP-CLI",description:"docs-source",source:"@site/docs/legacy/v6/basics/wp-cli.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/wp-cli",permalink:"/docs/legacy/v6/basics/wp-cli",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"wp-cli",title:"WP-CLI"},sidebar:"docs",previous:{title:"Basics",permalink:"/docs/legacy/v6/basics/basics-intro"},next:{title:"Architecture concepts",permalink:"/docs/legacy/v6/basics/architecture-concepts"}},c={},a=[{value:"How it works",id:"how-it-works",level:2},{value:"Options and commands",id:"options-and-commands",level:2},{value:"Commands",id:"commands",level:3},{value:"Running commands in multisite",id:"running-commands-in-multisite",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/infinum/eightshift-libs/tree/4.0.0",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,i.jsxs)(n.p,{children:["Eightshift Development Kit provides extensive ",(0,i.jsx)(n.a,{href:"https://wp-cli.org/",children:"WP-CLI"})," tooling, allowing you to automate bootstrapping of common code, adding blocks from the Frontend Libs library to your projects and more using ",(0,i.jsx)(n.code,{children:"wp boilerplate"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsxs)(n.p,{children:["In your project's entry point (usually ",(0,i.jsx)(n.code,{children:"functions.php"}),"), you'll find something along these lines:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Run all WP-CLI commands.\n */\nif (class_exists(Cli::class)) {\n  (new Cli())->load('boilerplate');\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This code loads the WP-CLI class from Eightshift Libs, which handles command registration for all of our commands. As this command registration is part of the theme/plugin code, this means that the same theme/plugin ",(0,i.jsx)(n.strong,{children:"must be activated"})," for ",(0,i.jsx)(n.code,{children:"wp boilerplate"})," to work."]}),"\n",(0,i.jsx)(n.p,{children:"To run the WP-CLI command and see what you can use, run this command in your terminal:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"wp boilerplate --help"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["By default, your project's WP-CLI commands run under the parent name ",(0,i.jsx)(n.code,{children:"boilerplate"}),", as defined above."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can change that by simply replacing the string inside the load method like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"/**\n * Run all WP-CLI commands.\n */\nif (class_exists(Cli::class)) {\n  (new Cli())->load('superCoolTheme');\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, your project's WP-CLI commands are available using:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"wp superCoolTheme --help"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This is especially handy when you have multiple Eightshift Boilerplate powered themes or plugins installed. In that case, you should change the WP-CLI parent name on each of the projects."}),"\n",(0,i.jsx)(n.h2,{id:"options-and-commands",children:"Options and commands"}),"\n",(0,i.jsxs)(n.p,{children:["To get to know which commands are available and what do they do, run ",(0,i.jsx)(n.code,{children:"wp boilerplate --help"}),".\nThe ",(0,i.jsx)(n.code,{children:"--help"})," argument is available on all of our commands and provides a description of the command and a list of required and optional parameters for the command."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"wp boilerplate create_config --help"})}),"\n",(0,i.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.p,{children:"We use these common prefixes for commands:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"create"})," - services classes that will be copied to your project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"init"})," - additional functions, methods and helpers that will be copied to your project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"run"})," - commands used to run an action directly from Eightshift Libs. They will not copy anything to your project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"setup"})," - commands that runs multiple already defined commands from the list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"use"})," - commands used for blocks and block-related stuff. They will copy various files and folders from the blocks folder to your project."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Make WP-CLI your best friend, and your coding life will be much more comfortable, trust us."})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["While we might go into more details about some of these commands, we won't be documenting all of them here - use the built-in manuals for more information about particular commands and to discover what's available. Don't gloss over them, as using ",(0,i.jsx)(n.code,{children:"wp boilerplate"})," is a particularly useful tool when building projects with Eightshift Development Kit."]}),"\n",(0,i.jsx)(n.h2,{id:"running-commands-in-multisite",children:"Running commands in multisite"}),"\n",(0,i.jsxs)(n.p,{children:["When you are running a multisite setup, you should always provide the additional ",(0,i.jsx)(n.code,{children:"--url"})," parameter. Otherwise, WP-CLI will always run the command on the main site."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example for command running on the primary site:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"wp boilerplate create_config"})}),"\n",(0,i.jsx)(n.p,{children:"and here is an example for command running on the subsite:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"wp boilerplate create_config --url='custom.domain.com'"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const o={},t=i.createContext(o);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);