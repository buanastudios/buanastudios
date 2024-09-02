"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[38018],{87377:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(74848),o=t(28453);const i={id:"taxonomy",title:"Taxonomy"},a=void 0,r={id:"legacy/v4/guides/taxonomy",title:"Taxonomy",description:"docs-source",source:"@site/docs/legacy/v4/guides/taxonomy.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/taxonomy",permalink:"/docs/legacy/v4/guides/taxonomy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"taxonomy",title:"Taxonomy"},sidebar:"docs",previous:{title:"Post Type",permalink:"/docs/legacy/v4/guides/post-type"},next:{title:"Registration",permalink:"/docs/legacy/v4/guides/blocks-registration"}},c={},l=[{value:"Example:",id:"example",level:2}];function u(n){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/custom-taxonomy",children:(0,s.jsx)(e.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsxs)(e.p,{children:["Custom Taxonomy class is located in ",(0,s.jsx)(e.code,{children:"Eightshift Libs"}),". To extend it, use ",(0,s.jsx)(e.code,{children:"Eightshift_Libs\\Custom_Taxonomy\\Base_Taxonomy"})," class. This is an abstract class."]}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(e.p,{children:"To create custom taxonomy:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["make a new class ",(0,s.jsx)(e.code,{children:"src/custom-taxonomy/class-blog-taxonomy.php"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"implement all the methods provided in the example."}),"\n",(0,s.jsxs)(e.li,{children:["register the class inside the ",(0,s.jsx)(e.code,{children:"class-main.php"})," file."]}),"\n",(0,s.jsx)(e.li,{children:"dump autoload."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"<?php\n/**\n * The Blog_Taxonomy specific functionality.\n *\n * @since   1.0.8\n * @package Eightshift_Boilerplate\\Custom_Taxonomy\n */\n\ndeclare( strict_types=1 );\n\nnamespace Eightshift_Boilerplate\\Custom_Taxonomy;\n\nuse Eightshift_Libs\\Custom_Taxonomy\\Base_Taxonomy;\n\n/**\n * Class Blog_Taxonomy\n */\nclass Blog_Taxonomy extends Base_Taxonomy {\n\n  /**\n   * Taxonomy slug costant.\n   *\n   * @var string\n   *\n   * @since 1.0.0\n   */\n  const TAXONOMY_SLUG = 'blog-category';\n\n  /**\n   * Rest API Endpoint slug costant.\n   *\n   * @var string\n   *\n   * @since 1.0.0\n   */\n  const REST_API_ENDPOINT_SLUG = 'blogs-categories';\n\n  /**\n   * Get the slug of the custom taxonomy\n   *\n   * @return string Custom taxonomy slug.\n   *\n   * @since 0.1.0\n   */\n  protected function get_taxonomy_slug() : string {\n    return static::TAXONOMY_SLUG;\n  }\n\n  /**\n   * Get the post type slug to use the taxonomy.\n   *\n   * @return string Custom post type slug.\n   *\n   * @since 0.1.0\n   */\n  protected function get_post_type_slug() : string {\n    return 'post';\n  }\n\n  /**\n   * Get the arguments that configure the custom taxonomy.\n   *\n   * @return array Array of arguments.\n   *\n   * @since 0.1.0\n   */\n  protected function get_taxonomy_arguments() : array {\n    return [\n      'hierarchical'      => true,\n      'label'             => esc_html__( 'Blog Categories', 'eightshift-boilerplate' ),\n      'show_ui'           => true,\n      'show_admin_column' => true,\n      'show_in_nav_menus' => false,\n      'public'            => true,\n      'show_in_rest'      => true,\n      'query_var'         => true,\n      'rest_base'         => static::REST_API_ENDPOINT_SLUG,\n      'rewrite'           => array(\n        'hierarchical'  => true,\n        'with_front'    => false,\n      ),\n    ];\n  }\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var s=t(96540);const o={},i=s.createContext(o);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);