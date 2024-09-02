"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[17996],{30794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(74848),i=n(28453);const r={id:"rest-field-example",title:"Field Example"},a=void 0,l={id:"legacy/v4/guides/rest-field-example",title:"Field Example",description:"docs-source",source:"@site/docs/legacy/v4/guides/rest-field-example.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/rest-field-example",permalink:"/docs/legacy/v4/guides/rest-field-example",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rest-field-example",title:"Field Example"},sidebar:"docs",previous:{title:"Rest Intro",permalink:"/docs/legacy/v4/guides/rest-intro"},next:{title:"Route Example",permalink:"/docs/legacy/v4/guides/rest-route-example"}},o={},c=[{value:"Example:",id:"example",level:2},{value:"Test in action",id:"test-in-action",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-libs/tree/master/src/rest",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsxs)(t.p,{children:["REST Field class is located in ",(0,s.jsx)(t.code,{children:"Eightshift Libs"}),". To extend it, use ",(0,s.jsx)(t.code,{children:"use Eightshift_Libs\\Rest\\Base_Field"})," class. This is an abstract class."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(t.p,{children:"To create custom REST Field:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["make a new class ",(0,s.jsx)(t.code,{children:"src/rest-routes/fields/class-example-field.php"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"implement all the methods provided in the example."}),"\n",(0,s.jsxs)(t.li,{children:["register the class inside the ",(0,s.jsx)(t.code,{children:"class-main.php"})," file."]}),"\n",(0,s.jsx)(t.li,{children:"dump autoload."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"<?php\n/**\n * The class register field for example endpoint\n *\n * @since   1.0.0\n * @package Eightshift_Boilerplate\\Rest_Routes\\Fields\n */\n\n declare( strict_types=1 );\n\nnamespace Eightshift_Boilerplate\\Rest_Routes\\Fields;\n\nuse Eightshift_Libs\\Rest\\Base_Field;\nuse Eightshift_Libs\\Rest\\Callable_Field;\n\n/**\n * Class Register Field\n */\nclass Example_Field extends Base_Field implements Callable_Field {\n\n  /**\n   * Method that returns field object type.\n   * Object(s) the field is being registered to, \"post\"|\"term\"|\"comment\" etc.\n   *\n   * @return string|array\n   *\n   * @since 2.0.0 Added in the project\n   */\n  protected function get_object_type() : string {\n    return 'post';\n  }\n\n  /**\n   * Get the name of the field you want to register or override.\n   *\n   * @return string The attribute name.\n   *\n   * @since 2.0.0 Added in the project\n   */\n  protected function get_field_name() : string {\n    return 'example-field-name';\n  }\n\n  /**\n   * Get callback arguments array\n   *\n   * @return array Either an array of options for the endpoint, or an array of arrays for multiple methods.\n   *\n   * @since 2.0.0 Added in the project\n   */\n  protected function get_callback_arguments() : array {\n    return [\n      'get_callback' => [ $this, 'field_callback' ],\n    ];\n  }\n\n  /**\n   * Method that returns rest response\n   *\n   * @param object|array $object      Post or custom post type object of the request.\n   * @param string       $attr        Rest field/attr string identifier from the second parameter of your register_rest_field() declaration.\n   * @param object       $request     Full request payload \u2013 as a WP_REST_Request object.\n   * @param string       $object_type The object type which the field is registered against. Typically first parameter of your register_rest_field() declaration.\n   *\n   * @return mixed If response generated an error, WP_Error, if response\n   *               is already an instance, WP_HTTP_Response, otherwise\n   *               returns a new WP_REST_Response instance.\n   *\n   * @since 0.8.0 Removing type hinting void for php 7.0.\n   * @since 0.2.0 Removed type hinting from first argument because it can be object|array.\n   * @since 0.1.0\n   */\n  public function field_callback( $object, string $attr, $request, string $object_type ) : string {\n    return \\rest_ensure_response( 'output data' );\n  }\n}\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"test-in-action",children:"Test in action"}),"\n",(0,s.jsx)(t.p,{children:"To test it in action for default boilerplate the link would be:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"domain.ext/wp-json/eightshift-boilerplate/v2/posts"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This link will be different based on your project implementation."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);