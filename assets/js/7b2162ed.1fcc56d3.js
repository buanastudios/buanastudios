"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[30644],{75920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(74848),i=n(28453);const r={id:"helpers-javascript",title:"JavaScript",sidebar_label:"JavaScript"},l=void 0,o={id:"legacy/v5/basics/helpers-javascript",title:"JavaScript",description:"docs-source",source:"@site/docs/legacy/v5/basics/helpers-javascript.md",sourceDirName:"legacy/v5/basics",slug:"/legacy/v5/basics/helpers-javascript",permalink:"/docs/legacy/v5/basics/helpers-javascript",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"helpers-javascript",title:"JavaScript",sidebar_label:"JavaScript"},sidebar:"docs",previous:{title:"Helpers",permalink:"/docs/legacy/v5/basics/helpers"},next:{title:"Scss",permalink:"/docs/legacy/v5/basics/helpers-scss"}},a={},c=[{value:"camelize",id:"camelize",level:2},{value:"checkAttr",id:"checkattr",level:2},{value:"checkAttrResponsive",id:"checkattrresponsive",level:2},{value:"cookies",id:"cookies",level:2},{value:"debounce",id:"debounce",level:2},{value:"devices",id:"devices",level:2},{value:"dynamicImport",id:"dynamicimport",level:2},{value:"elementChildrenHeight",id:"elementchildrenheight",level:2},{value:"escape-string",id:"escape-string",level:2},{value:"responsiveSelectors",id:"responsiveselectors",level:2},{value:"selector",id:"selector",level:2},{value:"getOptionsColor",id:"getoptionscolor",level:2},{value:"getOptions",id:"getoptions",level:2},{value:"getPaletteColors",id:"getpalettecolors",level:2},{value:"outputCssVariablesGlobal",id:"outputcssvariablesglobal",level:2},{value:"outputCssVariables",id:"outputcssvariables",level:2},{value:"getUnique",id:"getunique",level:2},{value:"overrideInnerBlockAttributes",id:"overrideinnerblockattributes",level:2},{value:"overrideInnerBlockSimpleWrapperAttributes",id:"overrideinnerblocksimplewrapperattributes",level:2},{value:"props",id:"props",level:2},{value:"ucfirst",id:"ucfirst",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,s.jsx)(t.h2,{id:"camelize",children:"camelize"}),"\n",(0,s.jsx)(t.p,{children:"Returns a camel-cased string."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param string string Add string to convert."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';\n\ncamelize('New super Test-title');\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"newSuperTestTitle\n"})}),"\n",(0,s.jsx)(t.h2,{id:"checkattr",children:"checkAttr"}),"\n",(0,s.jsxs)(t.p,{children:["Checks whether the attributes exist in the attributes list. If the value is not set, it checks for the default value. If the default value is not set, it adds a fallback value depending on the type, or if ",(0,s.jsx)(t.code,{children:"undefinedAllowed"})," is set to ",(0,s.jsx)(t.code,{children:"true"}),", it sets it to ",(0,s.jsx)(t.code,{children:"undefined"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param string  key Key to check."}),"\n",(0,s.jsx)(t.li,{children:"@param array   attributes Array of attributes."}),"\n",(0,s.jsx)(t.li,{children:"@param array   manifest Array of default attributes from manifest.json."}),"\n",(0,s.jsx)(t.li,{children:"@param string  componentName The real component name."}),"\n",(0,s.jsx)(t.li,{children:"@param boolean undefinedAllowed Allowed detection of undefined values."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { checkAttr } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tcheckAttr('buttonUse', attributes, manifest, componentName, undefinedAllowed);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"checkattrresponsive",children:"checkAttrResponsive"}),"\n",(0,s.jsxs)(t.p,{children:["Map and check attributes for responsive object from ",(0,s.jsx)(t.code,{children:"responsiveAttributes"})," property from manifest."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param string  keyName Key name to find in responsiveAttributes object."}),"\n",(0,s.jsx)(t.li,{children:"@param array   attributes Array of attributes."}),"\n",(0,s.jsx)(t.li,{children:"@param array   manifest Array of default attributes from manifest.json."}),"\n",(0,s.jsx)(t.li,{children:"@param string  componentName The real component name."}),"\n",(0,s.jsx)(t.li,{children:"@param boolean undefinedAllowed Allowed detection of undefined values."}),"\n",(0,s.jsx)(t.li,{children:"@throws \\Exception If missing responsiveAttributes or keyName in responsiveAttributes."}),"\n",(0,s.jsx)(t.li,{children:"@throws \\Exception If missing keyName in responsiveAttributes."}),"\n",(0,s.jsx)(t.li,{children:"@return mixed"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Manifest:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\t"attributes": {\n\t\t"headingContentSpacingLarge": {\n\t\t\t"type": "integer",\n\t\t\t"variable": "default",\n\t\t\t"default": 10,\n\t\t},\n\t\t"headingContentSpacingDesktop": {\n\t\t\t"type": "integer",\n\t\t\t"variable": "default",\n\t\t\t"default": 5,\n\t\t},\n\t\t"headingContentSpacingTablet": {\n\t\t\t"type": "integer",\n\t\t\t"variable": "default",\n\t\t\t"default": 3,\n\t\t},\n\t\t"headingContentSpacingMobile": {\n\t\t\t"type": "integer",\n\t\t\t"variable": "default",\n\t\t\t"default": 1,\n\t\t}\n\t},\n\t"responsiveAttributes": {\n\t\t"headingContentSpacing": {\n\t\t\t"large": "headingContentSpacingLarge",\n\t\t\t"desktop": "headingContentSpacingDesktop",\n\t\t\t"tablet": "headingContentSpacingTablet",\n\t\t\t"mobile": "headingContentSpacingMobile"\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { checkAttrResponsive } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tcheckAttrResponsive('headingContentSpacing', attributes, manifest, componentName, undefinedAllowed);\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"[\n\tlarge: 10,\n\tdesktop: 5,\n\ttablet: 3,\n\tmobile: 1,\n]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"cookies",children:"cookies"}),"\n",(0,s.jsx)(t.p,{children:"Used to set and get cookie values."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { cookies } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tcookies.setCookie('gdpr', '2', cookies.setOneDay(), '/');\n\n\tcookies.getCookie('gdpr');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"debounce",children:"debounce"}),"\n",(0,s.jsxs)(t.p,{children:["Debounces the provided function. For more information, check ",(0,s.jsx)(t.a,{href:"https://davidwalsh.name/javascript-debounce-function",children:"this blog post"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param func Provided function to apply debounce."}),"\n",(0,s.jsx)(t.li,{children:"@param int wait Wait time for debounce."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { debounce } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tdebounce(() => {\n\t\t// callback function.\n\t}, 250);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"devices",children:"devices"}),"\n",(0,s.jsx)(t.p,{children:"Checks if your browser's navigator is a specific device."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { device } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tdevice.iPhone();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"dynamicimport",children:"dynamicImport"}),"\n",(0,s.jsxs)(t.p,{children:["Used to get (require) all the files using the ",(0,s.jsx)(t.code,{children:"require.context"})," method. It will find all files recursively in the folder using a regex. The following example will require all assets/index.js files inside the custom folder, so there is no need to manually add the files to the build."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param object paths All require.context patch to iterate."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tdynamicImport(require.context('./../../custom', true, /assets\\/index.js$/));\n"})}),"\n",(0,s.jsx)(t.h2,{id:"elementchildrenheight",children:"elementChildrenHeight"}),"\n",(0,s.jsx)(t.p,{children:"Returns the height of the element measured by the height of its children."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param object element DOM element"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { dynamicImport } from '@eightshift/frontend-libs/scripts/helpers';\n\nelementChildrenHeight('.js-item');\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'<div class="js-item" style="height: 100px"></div>\n<div class="js-item" style="height: 100px"></div>\n<div class="js-item" style="height: 100px"></div>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"escape-string",children:"escape-string"}),"\n",(0,s.jsxs)(t.p,{children:["Takes the provided string and removes special characters. Characters that will be removed: ",(0,s.jsx)(t.code,{children:"([;&,.+*~':\"!^#$%@[\\]()=>|]"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param string $key Key to check."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { escapeString } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tescapeString.escapeString('Special string');\n"})}),"\n",(0,s.jsx)(t.h2,{id:"responsiveselectors",children:"responsiveSelectors"}),"\n",(0,s.jsx)(t.p,{children:"Create responsive selectors used for responsive attributes."}),"\n",(0,s.jsx)(t.p,{children:"Useful if you want to show how the responsive behavior looks in the editor."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param array   items        Array of breakpoints."}),"\n",(0,s.jsx)(t.li,{children:"@param string  selector     Selector for this breakpoint."}),"\n",(0,s.jsx)(t.li,{children:"@param string  parent       Parent block selector."}),"\n",(0,s.jsx)(t.li,{children:"@param boolean use_modifier If false, you can use this selector for visibility."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { responsiveSelectors } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tresponsiveSelectors($attributes['width'], 'width', $blockClass);\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\t.block-column__width-large--4\n"})}),"\n",(0,s.jsx)(t.h2,{id:"selector",children:"selector"}),"\n",(0,s.jsx)(t.p,{children:"Returns BEM selector for HTML class and checks if the condition part is set."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param boolean condition Check condition."}),"\n",(0,s.jsx)(t.li,{children:"@param string  block BEM Block selector."}),"\n",(0,s.jsx)(t.li,{children:"@param string  element BEM Element selector."}),"\n",(0,s.jsx)(t.li,{children:"@param string  modifier BEM Modifier selector."}),"\n",(0,s.jsx)(t.li,{children:"@return string"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { selector } from '@eightshift/frontend-libs/scripts/helpers';\n\n\tselector(!(buttonContent && buttonUrl), `${componentClass}-placeholder`);\n\n\tselector(test, componentClass, elementClass);\n\n\tselector(!newTest, componentClass, elementClass, modifierClass);\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Equivalent:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\t!(buttonContent && buttonUrl) ? `${componentClass}-placeholder` : '';\n\n\ttest ? `${componentClass}__${elementClass}` : '';\n\n\t!(newTest) ? `${componentClass}__${elementClass}--${modifierClass}` : '';\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getoptionscolor",children:"getOptionsColor"}),"\n",(0,s.jsx)(t.p,{children:"Use this hook to filter the global colors out of the component or block manifest"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param array colors Array of colors to filter."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { getOptions } from '@eightshift/frontend-libs/scripts/editor';\n\n<ColorPaletteCustom\n\t\tlabel={\n\t\t\t<>\n\t\t\t\t<Icon icon={icons.color} />\n\t\t\t\t{__('Color', 'eightshift-frontend-libs')}\n\t\t\t</>\n\t\t}\n\t\tcolors={getOptionColors(getOptions(manifest, componentName, 'color', options))}\n\t\tvalue={headingColor}\n\t\tonChange={(value) => setAttributes({ [`${componentName}Color`]: value })}\n/>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getoptions",children:"getOptions"}),"\n",(0,s.jsxs)(t.p,{children:["Provides the ability to override component options from the parent block/component.\nThe components must have the same option names as attribute standard with ",(0,s.jsx)(t.code,{children:"componentName"})," prefix."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param object manifest Original manifest from the component."}),"\n",(0,s.jsx)(t.li,{children:"@param string componentName Current componentName. This is changed depending on the passed componentName."}),"\n",(0,s.jsx)(t.li,{children:"@param string attribute Attribute name to check without componentName prefix. Value is auto camelCased."}),"\n",(0,s.jsx)(t.li,{children:"@param object options Options provided by the parent block/component."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { getOptions } from '@eightshift/frontend-libs/scripts/editor';\n\n<SelectControl\n\tlabel={\n\t\t<>\n\t\t\t<Icon icon={icons.size} />\n\t\t\t{__('Type', 'eightshift-frontend-libs')}\n\t\t</>\n\t}\n\tvalue={buttonType}\n\toptions={getOptions(manifest, componentName, 'type', options)}\n\tonChange={(value) => setAttributes({ [`${componentName}Type`]: value })}\n/>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getpalettecolors",children:"getPaletteColors"}),"\n",(0,s.jsx)(t.p,{children:"Use this hook to read editor-color-palette colors directly from WP built-in store."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Requires WP => 5.3"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { getPaletteColors } from '@eightshift/frontend-libs/scripts/editor';\n\n\tgetPaletteColors();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"outputcssvariablesglobal",children:"outputCssVariablesGlobal"}),"\n",(0,s.jsxs)(t.p,{children:["Get global manifest.json and return ",(0,s.jsx)(t.code,{children:"globalVariables"})," as CSS variables."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param array globalManifest Array of global variables data."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Data:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const manifestGlobal = {\n\t"globalVariables": {\n\t\t"maxCols": 12,\n\t\t"breakpoints": {\n\t\t\t"mobile": 479,\n\t\t\t"tablet": 1279,\n\t\t\t"desktop": 1919,\n\t\t\t"large": 1920\n\t\t},\n\t\t"containers": {\n\t\t\t"default": "1330px"\n\t\t},\n\t\t"gutters": {\n\t\t\t"none": "0",\n\t\t\t"default": "25px",\n\t\t\t"big": "50px"\n\t\t},\n\t\t"sectionSpacing": {\n\t\t\t"min":  -300,\n\t\t\t"max":  300,\n\t\t\t"step": 10\n\t\t},\n\t\t"sectionInSpacing": {\n\t\t\t"min":  0,\n\t\t\t"max":  300,\n\t\t\t"step": 10\n\t\t},\n\t\t"colors": [\n\t\t\t{\n\t\t\t\t"name": "Infinum",\n\t\t\t\t"slug": "infinum",\n\t\t\t\t"color": "#D8262C"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"name": "Black",\n\t\t\t\t"slug": "black",\n\t\t\t\t"color": "#111111"\n\t\t\t}\n\t\t]\n\t}\n};\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { getUnique } from '@eightshift/frontend-libs/scripts/editor';\nimport globalSettings from './../../manifest.json';\n\noutputCssVariablesGlobal(globalSettings);\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"<style>\n\t:root {\n\t\t--global-max-cols: 12;\n\t\t--global-breakpoints-mobile: 479;\n\t\t--global-breakpoints-tablet: 1279;\n\t\t--global-breakpoints-desktop: 1919;\n\t\t--global-breakpoints-large: 1920;\n\t\t--global-containers-default: 1330px;\n\t\t--global-gutters-none: 0;\n\t\t--global-gutters-default: 25px;\n\t\t--global-gutters-big: 50px;\n\t\t--global-section-spacing-min: -300;\n\t\t--global-section-spacing-max: 300;\n\t\t--global-section-spacing-step: 10;\n\t\t--global-section-in-spacing-min: 0;\n\t\t--global-section-in-spacing-max: 300;\n\t\t--global-section-in-spacing-step: 10;\n\t\t--global-colors-infinum: #D8262C;\n\t\t--global-colors-black: #111111;\n\t\t--global-colors-white: #FFFFFF;\n\t}\n</style>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"outputcssvariables",children:"outputCssVariables"}),"\n",(0,s.jsx)(t.p,{children:"Get component/block options and process them in CSS variables."}),"\n",(0,s.jsxs)(t.p,{children:["For detailed usage check ",(0,s.jsx)(t.a,{href:"blocks-styles",children:"block styles"}),";"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param array  $attributes Built attributes."}),"\n",(0,s.jsx)(t.li,{children:"@param array  $manifest Component/block manifest data."}),"\n",(0,s.jsx)(t.li,{children:"@param string $unique Unique key."}),"\n",(0,s.jsx)(t.li,{children:"@param array  $globalManifest Global manifest array."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getunique",children:"getUnique"}),"\n",(0,s.jsx)(t.p,{children:"Return unique ID for block processing."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { getUnique } from '@eightshift/frontend-libs/scripts/editor';\n\ngetUnique();\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"891273981374b98127419287\n"})}),"\n",(0,s.jsx)(t.h2,{id:"overrideinnerblockattributes",children:"overrideInnerBlockAttributes"}),"\n",(0,s.jsx)(t.p,{children:"Used to set attributes on all innerBlocks. This value will be stored in the block editor store and set to a block."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { useSelect } from '@wordpress/data';\n\timport { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts/editor';\n\n\tuseSelect((select) => {\n\t\toverrideInnerBlockAttributes(\n\t\t\tselect,\n\t\t\tprops.clientId,\n\t\t\t{\n\t\t\t\twrapperDisable: true,\n\t\t\t}\n\t\t);\n\t});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"overrideinnerblocksimplewrapperattributes",children:"overrideInnerBlockSimpleWrapperAttributes"}),"\n",(0,s.jsx)(t.p,{children:"Used to set attributes on all innerBlocks preset only for simple wrapper setup. This value will be stored in the block editor store and set to a block."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { useSelect } from '@wordpress/data';\n\timport { overrideInnerBlockSimpleWrapperAttributes } from '@eightshift/frontend-libs/scripts/editor';\n\n\tuseSelect((select) => {\n\t\toverrideInnerBlockSimpleWrapperAttributes(\n\t\t\tselect,\n\t\t\tprops.clientId,\n\t\t);\n\t});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"props",children:"props"}),"\n",(0,s.jsx)(t.p,{children:"Output only attributes that are used in the component and remove everything else."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param object  attributes Object of attributes from block/component."}),"\n",(0,s.jsx)(t.li,{children:"@param string  realName Old key to use, generally this is the name of the block/component."}),"\n",(0,s.jsx)(t.li,{children:"@param string  newName New key to use to rename attributes."}),"\n",(0,s.jsx)(t.li,{children:"@param boolean isBlock Check if helper is used on block or component."}),"\n",(0,s.jsx)(t.li,{children:"@param string  globalManifestData If global manifest is not provided use the default path."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Data:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const attributes = {\n\tbuttonColor: 'red',\n\tbuttonSize: 'big',\n\tbuttonIcon: 'blue',\n\tblockName: 'button',\n\twrapperSize: 'big',\n\twrapperType: 'normal',\n};\n\nconst blockName = 'button';\nconst componentName = 'button';\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { props } from '@eightshift/frontend-libs/scripts/editor';\n\n{...props(attributes, blockName, '', true)}\n\n{...props(attributes, componentName)}\n\n{...props(attributes, 'typography', componentName)}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"{\n\tbuttonColor: 'red',\n\tbuttonSize: 'big',\n\tbuttonIcon: 'blue',\n\tblockName: 'button',\n};\n\n{\n\tbuttonColor: 'red',\n\tbuttonSize: 'big',\n\tbuttonIcon: 'blue',\n\tblockName: 'button',\n};\n\n{\n\ttypographyColor: 'red',\n\ttypographySize: 'big',\n\ttypographyIcon: 'blue',\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"ucfirst",children:"ucfirst"}),"\n",(0,s.jsx)(t.p,{children:"Converts the first letter of a string to uppercase."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\timport { ucfirst } from '@eightshift/frontend-libs/scripts/editor';\n\n\tucfirst('custom');\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);