"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[19811],{2827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(74848),s=t(28453);const o={title:"Making your project multilingual",description:"Examples of using I18n in a project",slug:"making-your-project-multilingual",authors:"obradovic",date:new Date("2024-02-01T00:00:00.000Z"),tags:["eightshift","boilerplate","i18n","multilingual"],hide_table_of_contents:!1},r=void 0,a={permalink:"/blog/making-your-project-multilingual",source:"@site/blog/2024-02-01-making-your-project-multilingual.md",title:"Making your project multilingual",description:"Examples of using I18n in a project",date:"2024-02-01T00:00:00.000Z",tags:[{inline:!0,label:"eightshift",permalink:"/blog/tags/eightshift"},{inline:!0,label:"boilerplate",permalink:"/blog/tags/boilerplate"},{inline:!0,label:"i18n",permalink:"/blog/tags/i-18-n"},{inline:!0,label:"multilingual",permalink:"/blog/tags/multilingual"}],readingTime:5.75,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Making your project multilingual",description:"Examples of using I18n in a project",slug:"making-your-project-multilingual",authors:"obradovic",date:"2024-02-01T00:00:00.000Z",tags:["eightshift","boilerplate","i18n","multilingual"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Tips & useful features",permalink:"/blog/tips-useful-features"},nextItem:{title:"How to use the Wrapper as a standalone component",permalink:"/blog/wrapper-as-a-standalone-component"}},l={authorsImageUrls:[void 0]},c=[{value:"Making strings translatable in PHP",id:"making-strings-translatable-in-php",level:2},{value:"Making strings translatable in JS",id:"making-strings-translatable-in-js",level:2},{value:"The I18n class",id:"the-i18n-class",level:2},{value:"Generating .pot file",id:"generating-pot-file",level:2},{value:"Translating with Poedit",id:"translating-with-poedit",level:2},{value:"JS translations",id:"js-translations",level:2},{value:"Enabling languages and content translation",id:"enabling-languages-and-content-translation",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Tools like Google Translate can automatically translate websites with reasonable quality. However, users will have a much better experience if you add support for multiple languages in your project and manage the translations yourself."}),"\n",(0,i.jsx)(n.h2,{id:"making-strings-translatable-in-php",children:"Making strings translatable in PHP"}),"\n",(0,i.jsx)(n.p,{children:"A good practice is to use one of the I18n (internationalization) functions for your hardcoded strings, even if your website starts with a single language. This way, you can add multilingual support more easily later."}),"\n",(0,i.jsxs)(n.p,{children:["If you've worked on a multilanguage-capable project, you most likely came across ",(0,i.jsx)(n.code,{children:"__()"})," and ",(0,i.jsx)(n.code,{children:"_e()"})," functions. The main difference between the ",(0,i.jsx)(n.code,{children:"__()"})," and ",(0,i.jsx)(n.code,{children:"_e()"})," is that ",(0,i.jsx)(n.code,{children:"__()"})," returns the value, while ",(0,i.jsx)(n.code,{children:"_e()"})," echoes it. Both functions take two arguments: the first one is the string to be translated, and the second one is the textdomain that identifies the translation file."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Textdomain is usually your project name written in kebab-case."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["While WordPress functions like ",(0,i.jsx)(n.code,{children:"__()"})," and ",(0,i.jsx)(n.code,{children:"_e()"})," will definitely do the job, it is much better to use the variants of these functions that also escape the output. These are ",(0,i.jsx)(n.code,{children:"esc_html__()"})," and ",(0,i.jsx)(n.code,{children:"esc_html_e()"}),". There are also a few more functions for I18n you can use, but to keep it simple, we'll just mention these two for now."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of using one of these functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<?php echo esc_html__('Contact', 'project-name'); ?>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"making-strings-translatable-in-js",children:"Making strings translatable in JS"}),"\n",(0,i.jsxs)(n.p,{children:["To translate the strings in the Block editor or options, you will first have to import the function from the ",(0,i.jsx)(n.code,{children:"@wordpress/i18n"})," library."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { __ } from '@wordpress/i18n';\n"})}),"\n",(0,i.jsx)(n.p,{children:"To output your string, simply use it like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"{__('Icon position', 'project-name')}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Alternative functions you can use are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_n"})," for singular/plural forms"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_nx"})," for singular/plural forms with ",(0,i.jsx)(n.em,{children:"gettext"})," context"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_x"})," for a translated string with a ",(0,i.jsx)(n.em,{children:"gettext"})," context"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can refer to the ",(0,i.jsx)(n.a,{href:"https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/",children:"block editor handbook"})," for more information on these functions."]}),"\n",(0,i.jsx)(n.h2,{id:"the-i18n-class",children:"The I18n class"}),"\n",(0,i.jsx)(n.p,{children:"The easiest way to add I18n support to a project created with Eightshift boilerplate is by using the WP-CLI command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wp boilerplate create i18n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command generated a new class inside the ",(0,i.jsx)(n.code,{children:"src/I18n"})," folder. This class instructs WordPress to look for translations in ",(0,i.jsx)(n.code,{children:"src/I18n/languages"})," with the textdomain defined as your project name. The next step is generating .po and .mo files that are used for translation."]}),"\n",(0,i.jsx)(n.h2,{id:"generating-pot-file",children:"Generating .pot file"}),"\n",(0,i.jsxs)(n.p,{children:["You can create a ",(0,i.jsx)(n.code,{children:".pot"})," (",(0,i.jsx)(n.em,{children:"Portable object template"}),") file by using WP-CLI. Run the following command in your project root:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wp i18n make-pot\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use tools like ",(0,i.jsx)(n.a,{href:"https://poedit.net/",children:"Poedit"})," to generate a ",(0,i.jsx)(n.code,{children:".pot"})," file and generate translations from it later."]}),"\n",(0,i.jsx)(n.h2,{id:"translating-with-poedit",children:"Translating with Poedit"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have the ",(0,i.jsx)(n.code,{children:".pot"})," file, you can use Poedit to generate ",(0,i.jsx)(n.code,{children:".po"})," and ",(0,i.jsx)(n.code,{children:".mo"})," files that are used for translating hardcoded strings in your project. When generating the files, you can choose for which locale you're creating the translation for. For example, if you are creating a translation for the German language, your files should be named ",(0,i.jsx)(n.code,{children:"de_DE.po"})," and ",(0,i.jsx)(n.code,{children:"de_DE.mo"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After generating the files, go to ",(0,i.jsx)(n.strong,{children:"Translation -> Properties"})," and navigate to the ",(0,i.jsx)(n.strong,{children:"Sources Paths"})," tab. Set the ",(0,i.jsx)(n.em,{children:"Base path"})," to the theme folder path. In ",(0,i.jsx)(n.em,{children:"Excluded paths"})," you can add folders like ",(0,i.jsx)(n.code,{children:"node_modules"}),", ",(0,i.jsx)(n.code,{children:"vendor"}),", and ",(0,i.jsx)(n.code,{children:"public"})," to exclude external packages."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"Sources keywords"})," tab you can set additional functions for use in your project for translations. Commonly used functions are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_e"})," for translating a string and echoing it"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"__"})," for returning a translated string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"esc_html__"})," for returning a translated string which is escaped in a way it's safe to use within HTML"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"esc_html_e"})," for echoing a translated string which is escaped in a way it's safe to use within HTML"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"esc_attr__"})," for returning a translated string which is escaped in a way it's safe to use within an attribute"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"esc_html_x"})," for returning a translated string which is escaped in a way it's safe to use within HTML, with a ",(0,i.jsx)(n.em,{children:"gettext"})," context"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_n"})," for returning a translated string in a singular or plural form, based on the supplied number"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If you're missing a string in your ",(0,i.jsx)(n.code,{children:".po"})," file be sure to check which function is used for translation for that string, and that the function is added to ",(0,i.jsx)(n.em,{children:"Sources keywords"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After updating the settings, click on ",(0,i.jsx)(n.em,{children:"Update from source code"})," option to get the updated list of strings to translate."]}),"\n",(0,i.jsxs)(n.p,{children:["The translation process is simple. The left column represents the source text, and the right column the translation. When you have finished translating the strings, copy the ",(0,i.jsx)(n.code,{children:".po"})," and ",(0,i.jsx)(n.code,{children:".mo"})," files to the ",(0,i.jsx)(n.code,{children:"src/I18n/languages"})," folder."]}),"\n",(0,i.jsx)(n.h2,{id:"js-translations",children:"JS translations"}),"\n",(0,i.jsx)(n.p,{children:"The process of translating strings in JS has a couple of extra steps."}),"\n",(0,i.jsxs)(n.p,{children:["In order to translate strings in JS (e.g. Block editor strings), you will have to generate translation file. To do this, navigate to your ",(0,i.jsx)(n.code,{children:"src/I18n/languages"})," folder and use the following WP-CLI command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wp i18n make-json <po-file> --no-purge\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will generate a ",(0,i.jsx)(n.code,{children:".json"})," file for each JS file present. The strings are extracted from ",(0,i.jsx)(n.code,{children:".po"})," files, so you'll already have the translations added. The ",(0,i.jsx)(n.code,{children:"--no-purge"})," flag is used to keep the existing translations in the ",(0,i.jsx)(n.code,{children:".po"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["The method used for setting the script translations is ",(0,i.jsx)(n.code,{children:"setScriptTranslations()"})," from the ",(0,i.jsx)(n.code,{children:"I18n"})," class."]}),"\n",(0,i.jsxs)(n.p,{children:["The default way this works in Eightshift DevKit is that you need to have a single ",(0,i.jsx)(n.code,{children:".json"})," file with all the JS translations. If needed, you can either modify this method to read from multiple files, or just merge all the ",(0,i.jsx)(n.code,{children:".json"})," files into one."]}),"\n",(0,i.jsxs)(n.p,{children:["If using the default setup (everything in one file) follow this naming structure: ",(0,i.jsx)(n.code,{children:"{textdomain}-{locale}-{handle}.json"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if your ",(0,i.jsx)(n.em,{children:"textdomain"})," is ",(0,i.jsx)(n.code,{children:"project-name"})," and your locale is ",(0,i.jsx)(n.code,{children:"de_DE"}),", your file should be named ",(0,i.jsx)(n.code,{children:"project-name-de_DE-project-name-block-editor-scripts.json"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The block-related translations depend on the language the user has set in WP admin."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enabling-languages-and-content-translation",children:"Enabling languages and content translation"}),"\n",(0,i.jsx)(n.p,{children:"If the website itself needs to support content in multiple languages, a plugin is a good option."}),"\n",(0,i.jsx)(n.p,{children:"The most common multi-language plugins are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WPML"})," - one of the most popular plugins on the market. It is a paid plugin, but offers a lot of advanced options."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Polylang"})," - a free plugin (also has a paid ",(0,i.jsx)(n.em,{children:"Pro"})," version)."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Explore other options as well, you might find a plugin that is a better fit for your project than WPML or Polylang."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Most of the translation work will be done through the editor, since you'll need to translate the content on posts and pages."}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsxs)(n.p,{children:["Internationalization (",(0,i.jsx)(n.em,{children:"I18n"}),") and Localization (",(0,i.jsx)(n.em,{children:"L10n"}),") are very broad topics, so it's impossible to cover everything in a single blog post."]}),"\n",(0,i.jsx)(n.p,{children:"If you wish to know about the core I18n functionalities, or a bit more about how it is used in the Eightshift DevKit, here are a few resources which you may find interesting:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://codex.wordpress.org/I18n_for_WordPress_Developers",children:"WordPress Codex - I18n for WordPress Developers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eightshift.com/docs/basics/tips-tricks/#internationalization-i18n-and-localization-l10n",children:"Eightshift Development kit documentation - Tips & Tricks"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://infinum.com/handbook/wordpress/translations/localization",children:"Infinum WordPress Handbook - Localization"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);