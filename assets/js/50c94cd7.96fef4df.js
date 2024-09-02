"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[31532],{74696:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(74848),s=i(28453);const o={id:"debug",title:"Debugging"},a=void 0,r={id:"features/debug",title:"Debugging",description:"The debugging screen provides configuration options and overrides default functionalities for developers, but caution should be used as these options can break form functionality.",source:"@site/forms/features/debug.md",sourceDirName:"features",slug:"/features/debug",permalink:"/forms/features/debug",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"debug",title:"Debugging"},sidebar:"forms",previous:{title:"Cache",permalink:"/forms/features/cache"},next:{title:"Fallback e-mails",permalink:"/forms/features/fallback-emails"}},l={},d=[{value:"Bypass validation",id:"bypass-validation",level:2},{value:"Bypass captcha",id:"bypass-captcha",level:2},{value:"Don\u2019t clear form after submission",id:"dont-clear-form-after-submission",level:2},{value:"Developer mode",id:"developer-mode",level:2},{value:"Stop form syncing",id:"stop-form-syncing",level:2},{value:"Skip internal cache",id:"skip-internal-cache",level:2},{value:"Output Query Monitor log",id:"output-query-monitor-log",level:2},{value:"Enable disabled fields admin overrides",id:"enable-disabled-fields-admin-overrides",level:2},{value:"Debug Encrypt",id:"debug-encrypt",level:2}];function c(e){const t={code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The debugging screen provides configuration options and overrides default functionalities for developers, but caution should be used as these options can break form functionality."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Debug screen",src:i(77907).A+"",width:"601",height:"893"})}),"\n",(0,n.jsx)(t.h2,{id:"bypass-validation",children:"Bypass validation"}),"\n",(0,n.jsx)(t.p,{children:"When a form is submitted, an internal validator is triggered to validate the form. Once all internal validations are successfully passed, the form data is sent to the integration. With this toggle, you have the option to bypass internal validation for all forms and directly send the data to the integration."}),"\n",(0,n.jsx)(t.h2,{id:"bypass-captcha",children:"Bypass captcha"}),"\n",(0,n.jsx)(t.p,{children:"This toggle allows sending the form without CAPTCHA validation while enabling the feature. It is helpful for testing or running automated tests."}),"\n",(0,n.jsx)(t.h2,{id:"dont-clear-form-after-submission",children:"Don\u2019t clear form after submission"}),"\n",(0,n.jsx)(t.p,{children:"After the form is successfully submitted, all fields will be reset to their original state. This toggle will prevent that from happening, allowing multiple submissions with the same data."}),"\n",(0,n.jsx)(t.h2,{id:"developer-mode",children:"Developer mode"}),"\n",(0,n.jsx)(t.p,{children:"Enabling the developer mode will provide various small yet helpful features to simplify the debugging process. List of all features is available on the plugin settings page."}),"\n",(0,n.jsx)(t.h2,{id:"stop-form-syncing",children:"Stop form syncing"}),"\n",(0,n.jsx)(t.p,{children:"When editing integration-based forms, a synchronization happens every time the form editor is opened. This ensures that the form is always up-to-date with the external integrations. If you prefer syncing forms manually, you can use enable this option to prevent automatic synchronization."}),"\n",(0,n.jsx)(t.h2,{id:"skip-internal-cache",children:"Skip internal cache"}),"\n",(0,n.jsxs)(t.p,{children:["This option disables storage of integration data in a temporary internal storage (cache), which optimizes load time and prevents too many API calls. Turning on this option will bypass the cache and directly call APIs, which may cause a lot of API calls in short time, which can lead to a temporary suspension on some platforms. ",(0,n.jsx)(t.strong,{children:"Use with caution."})]}),"\n",(0,n.jsx)(t.h2,{id:"output-query-monitor-log",children:"Output Query Monitor log"}),"\n",(0,n.jsx)(t.p,{children:"If you encounter issues with PHP functions, you can debug them using the Query Monitor plugin (3rd-party). This plugin allows you to log API data without the user being able to see it. Make sure Query Monitor is installed and enabled before enabling this option."}),"\n",(0,n.jsx)(t.h2,{id:"enable-disabled-fields-admin-overrides",children:"Enable disabled fields admin overrides"}),"\n",(0,n.jsxs)(t.p,{children:["Administrators usually cannot modify global constants stored in ",(0,n.jsx)(t.code,{children:"wp-config.php"}),". However, enabling this toggle will bypass this restriction, allowing easier debugging."]}),"\n",(0,n.jsx)(t.h2,{id:"debug-encrypt",children:"Debug Encrypt"}),"\n",(0,n.jsx)(t.p,{children:"We have implemented a custom encryption/decryption debug tool for sensitive data. This toggle will allow you to see the encrypted data in the browser console. This is useful for debugging and testing purposes when using variations on the success redirect pages."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Debug encrypt screen",src:i(1139).A+"",width:"647",height:"856"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1139:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/debug-encrypt-d2d87ca25492d9409fef92facb192ed8.webp"},77907:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/debug-1a0b738ebfb0940aff4838aac7bd8a0a.webp"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);