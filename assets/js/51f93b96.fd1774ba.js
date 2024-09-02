"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[49144],{75807:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var o=t(74848),s=t(28453);const a={id:"columns-taxonomy",title:"Taxonomy"},l=void 0,c={id:"legacy/v4/guides/columns-taxonomy",title:"Taxonomy",description:"docs-source",source:"@site/docs/legacy/v4/guides/columns-taxonomy.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/columns-taxonomy",permalink:"/docs/legacy/v4/guides/columns-taxonomy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"columns-taxonomy",title:"Taxonomy"},sidebar:"docs",previous:{title:"Post Type",permalink:"/docs/legacy/v4/guides/columns-post-type"},next:{title:"User",permalink:"/docs/legacy/v4/guides/columns-user"}},i={},r=[{value:"Example:",id:"example",level:2}];function m(n){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/columns/class-base-taxonomy-columns.php",children:(0,o.jsx)(e.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,o.jsxs)(e.p,{children:["Taxonomy Column class is located in ",(0,o.jsx)(e.code,{children:"Eightshift Libs"}),". To extend it use ",(0,o.jsx)(e.code,{children:"Eightshift_Libs\\Columns\\Base_Taxonomy_Columns"})," class."]}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example:"}),"\n",(0,o.jsx)(e.p,{children:"To create custom taxonomy column:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["make a new class ",(0,o.jsx)(e.code,{children:"src/columns/class-example-taxonomy-column.php"}),"."]}),"\n",(0,o.jsx)(e.li,{children:"implement all the methods provided in the example."}),"\n",(0,o.jsxs)(e.li,{children:["register the class inside the ",(0,o.jsx)(e.code,{children:"class-main.php"})," file."]}),"\n",(0,o.jsx)(e.li,{children:"dump autoload."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"<?php\n/**\n * Example_Taxonomy_Column class file\n *\n * @since 1.1.0\n * @package Eightshift_Boilerplate\\Columns\n */\n\ndeclare( strict_types=1 );\n\nnamespace Eightshift_Boilerplate\\Columns;\n\n/**\n * Class Example_Taxonomy_Column.\n */\nclass Example_Taxonomy_Column extends Base_Taxonomy_Columns {\n\n  /**\n   * Column name constant name.\n   *\n   * @var string\n   */\n  const COLUMN_NAME = 'example';\n\n  /**\n   * Get the slug of the taxonomy where the additional column should appear.\n   *\n   * @return array The name of the taxonomy.\n   *\n   * @since 2.0.5\n   */\n  protected function get_taxonomy_slug() : array {\n    return [ 'category' ];\n  }\n\n  /**\n   * Add additional taxonomy columns to the columns array.\n   *\n   * @param array $columns The existing column names array with default taxonomy columns (title, author, date etc.).\n   *\n   * @return array         Modified column names array.\n   *\n   * @since 2.0.5\n   */\n  public function add_column_name( array $columns ) : array {\n    $columns[ static::COLUMN_NAME ] = esc_html__( 'Example', 'eightshift-boilerplate' );\n\n    return $columns;\n  }\n\n  /**\n   * Render the taxonomy column content in the custom taxonomy column\n   *\n   * @param  string $string      Blank string.\n   * @param  string $column_name Name of the column.\n   * @param  int    $term_id     Term ID.\n   *\n   * @return string The contetnt to display in the custom column.\n   *\n   * @since 2.0.5\n   */\n  public function render_column_content( string $string, string $column_name, int $term_id ) : string {\n    if ( $column_name === static::COLUMN_NAME ) {\n      echo 'column value';\n    }\n  }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var o=t(96540);const s={},a=o.createContext(s);function l(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);