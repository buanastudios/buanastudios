"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[71328],{59516:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(74848),i=n(28453),a=n(8968);const s={id:"jira",title:"Jira"},o=void 0,l={id:"php/filters/integrations/jira",title:"Jira",description:"",source:"@site/forms/php/filters/integrations/jira.mdx",sourceDirName:"php/filters/integrations",slug:"/php/filters/integrations/jira",permalink:"/forms/php/filters/integrations/jira",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"jira",title:"Jira"},sidebar:"forms",previous:{title:"HubSpot",permalink:"/forms/php/filters/integrations/hubspot"},next:{title:"Mailchimp",permalink:"/forms/php/filters/integrations/mailchimp"}},d={},m=[];function f(t){return(0,r.jsx)(a.k,{name:"Jira",filter:"jira",onlyUse:["prePostParamsFilter"]})}function c(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(f,{...t})}):f()}},8968:(t,e,n)=>{n.d(e,{Z:()=>o,k:()=>s});n(96540);var r=n(52364),i=n(17453),a=n(74848);function s(t){let{filter:e,onlyUse:n=["dataFilter","orderFilter","prePostIdFilter","prePostParamsFilter"]}=t;return(0,a.jsxs)(a.Fragment,{children:[n.includes("dataFilter")&&(0,a.jsx)(l,{filter:e}),n.includes("orderFilter")&&(0,a.jsx)(d,{filter:e}),n.includes("prePostIdFilter")&&(0,a.jsx)(m,{filter:e}),n.includes("prePostParamsFilter")&&(0,a.jsx)(f,{filter:e})]})}function o(t){let{filter:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Allows adding custom content before the field element's closing tag. Useful for adding markup, styles, etc."}),(0,a.jsx)(r.A,{language:"php",children:(0,i.g)(`\n\t\t\tadd_filter('es_forms_block_${e}_additional_content', function(): string {\n\t\t\t\treturn '<custom-string>';\n\t\t\t})\n\t\t\t`)})]})}function l(t){let{filter:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Data filter"}),(0,a.jsx)("p",{children:"Allows modifying form field data before it's shown in the Block Editor or output on the frontend."}),(0,a.jsx)("p",{children:"Useful if, for example, you want to ensure that all fields fit into a 2-column layout."}),(0,a.jsx)("p",{children:"Overrides any Block Editor changes!"}),(0,a.jsx)(r.A,{language:"php",children:(0,i.g)(`\n\t\t\tadd_filter('es_forms_integrations_${e}_data', 'getIntegrationFilterData', 10, 2);\n\n\t\t\t/**\n\t\t\t * Manipulate form fields data before it is sent to the Block Editor.\n\t\t\t *\n\t\t\t * @param array<mixed> $data Form fields data.\n\t\t\t * @param string $formId Form ID.\n\t\t\t *\n\t\t\t * @return array<mixed>\n\t\t\t */\n\t\t\tfunction getIntegrationFilterData(array $data, string $formId): array\n\t\t\t{\n\t\t\t\tforeach ($data as $index => $field) {\n\t\t\t\t\t$component = $field['component'] ?? '';\n\n\t\t\t\t\tif (!$component) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\t$name = $field["{$component}Name"] ?? '';\n\n\t\t\t\t\tif (!$name) {\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\n\t\t\t\t\tswitch ($name) {\n\t\t\t\t\t\tcase 'firstname':\n\t\t\t\t\t\tcase 'lastname':\n\t\t\t\t\t\t\t$data[$index]["{$component}FieldWidthMobile"] = 12;\n\t\t\t\t\t\t\t$data[$index]["{$component}FieldWidthLarge"] = 6;\n\t\t\t\t\t\t\t$data[$index]["{$component}DisabledOptions"] = array_merge(\n\t\t\t\t\t\t\t\t$data[$index]["{$component}DisabledOptions"],\n\t\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\t\t"{$component}FieldWidthMobile",\n\t\t\t\t\t\t\t\t\t"{$component}FieldWidthLarge",\n\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn $data;\n\t\t\t}\n\t\t\t`)})]})}function d(t){let{filter:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Order filter"}),(0,a.jsx)("p",{children:"Forces a form field order, regardless of how it's set in the Block editor. Fields not modified through the filter will use order in which they're set in the Block editor."}),(0,a.jsxs)("p",{children:["Not all fields need to have an order defined. For example, you may want to make sure ",(0,a.jsx)("code",{children:"firstname"}),", ",(0,a.jsx)("code",{children:"lastname"})," and ",(0,a.jsx)("code",{children:"email"})," are displayed first, but other fields follow their Block editor order."]}),(0,a.jsx)(r.A,{language:"php",children:(0,i.g)(`\n\t\t\t\t\tadd_filter('es_forms_integrations_${e}_order', 'getIntegrationOrder');\n\n\t\t\t\t\t/**\n\t\t\t\t\t * Forces form field order for the provided fields. For other fields, Block editor order is used.\n\t\t\t\t\t *\n\t\t\t\t\t * @return array<string>\n\t\t\t\t\t */\n\t\t\t\t\tfunction getIntegrationOrder(): array\n\t\t\t\t\t{\n\t\t\t\t\t\treturn [\n\t\t\t\t\t\t\t'firstname',\n\t\t\t\t\t\t\t'lastname',\n\t\t\t\t\t\t\t'email',\n\t\t\t\t\t\t];\n\t\t\t\t\t}\n\t\t\t\t`)})]})}function m(t){let{filter:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Pre-post ID filter"}),(0,a.jsx)("p",{children:"Allows updating item IDs sent to external integrations to which the form data is sent."}),(0,a.jsx)(r.A,{language:"php",children:(0,i.g)(`\n\t\t\t\t\tadd_filter('es_forms_integrations_${e}_pre_post_id', 'getIntegrationPrePostId', 10, 3);\n\n\t\t\t\t\t/**\n\t\t\t\t\t * Modifies integration item ID.\n\t\t\t\t\t * \n\t\t\t\t\t * @param string $itemId Integration item ID.\n\t\t\t\t\t * @param array<mixed> $params Params to be sent to the integration.\n\t\t\t\t\t * @param string $formId Form ID.\n\t\t\t\t\t * \n\t\t\t\t\t * @return array<mixed>\n\t\t\t\t\t */\n\t\t\t\t\tfunction getIntegrationPrePostId(string $itemId, array $params, string $formId): array\n\t\t\t\t\t{\n\t\t\t\t\t\treturn $itemId;\n\t\t\t\t\t}\n\t\t\t\t`)})]})}function f(t){let{filter:e}=t,n="";switch(e){case"mailer":n="mailer system";break;case"calculator":n="calculator";break;default:n="external integration"}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Pre-post parameters filter"}),(0,a.jsxs)("p",{children:["Allows modifying form field data before it's sent to ",n,". Useful if you want to make values derived from the sent data, or add new fields."]}),(0,a.jsx)(r.A,{language:"php",children:(0,i.g)(`\n\t\t\t\t\tadd_filter('es_forms_integrations_${e}_pre_post_params', 'getIntegrationPrePostParams', 10, 2);\n\n\t\t\t\t\t/**\n\t\t\t\t\t * Modifies form field data before it's sent to ${n}.\n\t\t\t\t\t *\n\t\t\t\t\t * @param array<string, mixed> $params Array of params.\n\t\t\t\t\t * @param string $formId Form ID.\n\t\t\t\t\t *\n\t\t\t\t\t * @return array<string, mixed>\n\t\t\t\t\t */\n\t\t\t\t\tfunction getIntegrationPrePostParams(array $params, string $formId): array\n\t\t\t\t\t{\n\t\t\t\t\t\t$formSubmissionPageLt = $params['form_submission_page_lt']['value'] ?? '';\n\n\t\t\t\t\t\tif ($formSubmissionPageLt) {\n\t\t\t\t\t\t\t$params['ib-submission-source'] = [\n\t\t\t\t\t\t\t\t'name' => 'ib-submission-source',\n\t\t\t\t\t\t\t\t'value' => $formSubmissionPageLt,\n\t\t\t\t\t\t\t\t'type' => 'text',\n\t\t\t\t\t\t\t\t'internalType' => '',\n\t\t\t\t\t\t\t];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn $params;\n\t\t\t\t\t}\n\t\t\t\t`)})]})}},17453:(t,e,n)=>{function r(t){const e=t.split(/\n/g);for(;0===e[0]?.replace(/\s/g,"").length;)e.shift();for(;0===e[e.length-1]?.replace(/\s/g,"").length;)e.pop();const n=t.split(/\n/g).filter((t=>t.replace(/\s/g,"").length>0)).map((t=>t.match(/^\s*/)?.[0]?.length??0)),r=Math.min(...n);return e.map((t=>t.slice(r))).join("\n")}n.d(e,{g:()=>r})}}]);