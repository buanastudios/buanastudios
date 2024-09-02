"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[98040],{10651:(t,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var e=n(74848),i=n(28453);const r={id:"migrations",title:"Migrations"},s=void 0,a={id:"php/actions/migrations",title:"Migrations",description:"Based on the migration version you can run custom actions before migration is triggered.",source:"@site/forms/php/actions/migrations.md",sourceDirName:"php/actions",slug:"/php/actions/migrations",permalink:"/forms/php/actions/migrations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"migrations",title:"Migrations"},sidebar:"forms",previous:{title:"How to use?",permalink:"/forms/php/actions/how-to-use"},next:{title:"Shortcodes",permalink:"/forms/php/shortcodes"}},c={},l=[{value:"How to use",id:"how-to-use",level:2}];function u(t){const o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.p,{children:"Based on the migration version you can run custom actions before migration is triggered."}),"\n",(0,e.jsx)(o.p,{children:(0,e.jsx)(o.strong,{children:"Actions list:"})}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsx)(o.li,{children:"es_forms_migration_two_to_three_general"}),"\n",(0,e.jsx)(o.li,{children:"es_forms_migration_two_to_three_forms"}),"\n",(0,e.jsx)(o.li,{children:"es_forms_migration_two_to_three_locale"}),"\n"]}),"\n",(0,e.jsx)(o.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,e.jsx)(o.pre,{children:(0,e.jsx)(o.code,{className:"language-php",children:"\\add_action('es_forms_migration_two_to_three_locale', [$this, 'runMigration2To3Locale']);\n\n/**\n * Run custom action after migration from version 2 to 3 locale.\n *\n * @return void\n */\npublic function runMigration2To3Locale(): void\n{\n\t\\update_option('<option-name>', '<option-value>');\n}\n"})})]})}function d(t={}){const{wrapper:o}={...(0,i.R)(),...t.components};return o?(0,e.jsx)(o,{...t,children:(0,e.jsx)(u,{...t})}):u(t)}},28453:(t,o,n)=>{n.d(o,{R:()=>s,x:()=>a});var e=n(96540);const i={},r=e.createContext(i);function s(t){const o=e.useContext(r);return e.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function a(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),e.createElement(r.Provider,{value:o},t.children)}}}]);