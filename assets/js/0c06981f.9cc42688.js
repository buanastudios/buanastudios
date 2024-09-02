"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[81588],{74556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var s=r(74848),n=r(28453);const a={id:"pre-post-params",title:"Pre-Post Params"},i=void 0,o={id:"php/filters/entries/pre-post-params",title:"Pre-Post Params",description:"Allows modifying field data before storing it into the database. Useful if, for example, a field value needs to determine a custom output of a different field.",source:"@site/forms/php/filters/entries/pre-post-params.md",sourceDirName:"php/filters/entries",slug:"/php/filters/entries/pre-post-params",permalink:"/forms/php/filters/entries/pre-post-params",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pre-post-params",title:"Pre-Post Params"},sidebar:"forms",previous:{title:"Pipedrive",permalink:"/forms/php/filters/integrations/pipedrive"},next:{title:"Manual map",permalink:"/forms/php/filters/enrichment/manual-map"}},p={},m=[];function f(e){const t={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Allows modifying field data before storing it into the database. Useful if, for example, a field value needs to determine a custom output of a different field."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"\\add_filter('es_forms_entries_pre_post_params', [$this, 'getIntegrationPrePostParams'], 10, 3);\n\n/**\n * Change form fields data before it is stored to the WordPress database\n *\n * @param array<string, mixed> $params Array of params.\n * @param string $formId Form ID.\n * @param array<string, mixed> $formDetails Data passed from the `getFormDetailsApi` function.\n *\n * @return array<string, mixed>\n */\npublic function getIntegrationPrePostParams(array $params, string $formId, array $formDetails): array\n{\n\t$formSubmissionPageLt = $params['form_submission_page_lt']['value'] ?? '';\n\n\tif ($formSubmissionPageLt) {\n\t\t$params['ib-submission-source'] = [\n\t\t\t'name' => 'ib-submission-source',\n\t\t\t'value' => $formSubmissionPageLt,\n\t\t\t'type' => 'text',\n\t\t\t'internalType' => '',\n\t\t];\n\t}\n\n\treturn $params;\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var s=r(96540);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);