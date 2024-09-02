"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[70395],{21789:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(74848),s=n(28453);const i={id:"blocks-faq",title:"Faq"},a=void 0,l={id:"legacy/v6/basics/blocks-faq",title:"Faq",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks-faq.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks-faq",permalink:"/docs/legacy/v6/basics/blocks-faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blocks-faq",title:"Faq"},sidebar:"docs",previous:{title:"Important",permalink:"/docs/legacy/v6/basics/blocks-important"},next:{title:"Registration",permalink:"/docs/legacy/v6/basics/blocks-registration"}},r={},c=[{value:"Why do all my blocks look the same and have the same name structure?",id:"why-do-all-my-blocks-look-the-same-and-have-the-same-name-structure",level:3},{value:"What is the difference between components and blocks?",id:"what-is-the-difference-between-components-and-blocks",level:3},{value:"Do I need to have Storybook stories in my block?",id:"do-i-need-to-have-storybook-stories-in-my-block",level:3},{value:"Do you support block variations, and how can I use them?",id:"do-you-support-block-variations-and-how-can-i-use-them",level:3},{value:"Do you support patterns, and how can I use them?",id:"do-you-support-patterns-and-how-can-i-use-them",level:3},{value:"What is a wrapper?",id:"what-is-a-wrapper",level:3},{value:"Do you support inner blocks?",id:"do-you-support-inner-blocks",level:3},{value:"Why do you use manifest.json in all blocks and components?",id:"why-do-you-use-manifestjson-in-all-blocks-and-components",level:3},{value:"Why do you use global manifest.json?",id:"why-do-you-use-global-manifestjson",level:3},{value:"If I want to create a new block/component, what do I do?",id:"if-i-want-to-create-a-new-blockcomponent-what-do-i-do",level:3},{value:"What if I add a block and it throws an error that it is missing some components, what do I do?",id:"what-if-i-add-a-block-and-it-throws-an-error-that-it-is-missing-some-components-what-do-i-do",level:3},{value:"How can I use your pre-made blocks?",id:"how-can-i-use-your-pre-made-blocks",level:3},{value:"Can I use block/component from Eightshift-frontend-libs directly?",id:"can-i-use-blockcomponent-from-eightshift-frontend-libs-directly",level:3},{value:"I want to change attributes on inner blocks. How do I do it?",id:"i-want-to-change-attributes-on-inner-blocks-how-do-i-do-it",level:3},{value:"Do I need to write JS and PHP implementation for all my blocks?",id:"do-i-need-to-write-js-and-php-implementation-for-all-my-blocks",level:3},{value:"How do I use components in blocks?",id:"how-do-i-use-components-in-blocks",level:3},{value:"How do I use multiple heading components in my block?",id:"how-do-i-use-multiple-heading-components-in-my-block",level:3},{value:"Where can I define my global styles?",id:"where-can-i-define-my-global-styles",level:3},{value:"Where can I define global typography for all my blocks/components?",id:"where-can-i-define-global-typography-for-all-my-blockscomponents",level:3},{value:"Can I make a component with WP_Query logic in it?",id:"can-i-make-a-component-with-wp_query-logic-in-it",level:3},{value:"Do I need to make components for all my blocks?",id:"do-i-need-to-make-components-for-all-my-blocks",level:3},{value:"Will this setup work with full site editing?",id:"will-this-setup-work-with-full-site-editing",level:3},{value:"Can I use core blocks with your setup?",id:"can-i-use-core-blocks-with-your-setup",level:3},{value:"How can I limit my blocklist?",id:"how-can-i-limit-my-blocklist",level:3},{value:"How to allow only one pattern category?",id:"how-to-allow-only-one-pattern-category",level:3},{value:"Can I have blocks in multiple categories?",id:"can-i-have-blocks-in-multiple-categories",level:3},{value:"How can I add a new blocks category?",id:"how-can-i-add-a-new-blocks-category",level:3},{value:"What if you don&#39;t yet support something from the native setup? What can I do?",id:"what-if-you-dont-yet-support-something-from-the-native-setup-what-can-i-do",level:3},{value:"Why is my blocks folder called <code>custom</code> and not <code>blocks</code>, for example?",id:"why-is-my-blocks-folder-called-custom-and-not-blocks-for-example",level:3},{value:"In the global manifest, you have a key called \u201ccustomBlocksName\u201d: \u201ceightshift-block\u201d. Can I change this to my-project-name-block?",id:"in-the-global-manifest-you-have-a-key-called-customblocksname-eightshift-block-can-i-change-this-to-my-project-name-block",level:3},{value:"Simple vs Compound blocks",id:"simple-vs-compound-blocks",level:3},{value:"Naming is hard",id:"naming-is-hard",level:3}];function d(e){const o={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/",children:(0,t.jsx)(o.img,{src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})})}),"\n",(0,t.jsxs)(o.p,{children:["Before we dive into blocks and see how everything is set, we should describe this setup's mindset.\nIf you've managed to set up your project by this point with the ",(0,t.jsx)(o.a,{href:"wp-cli",children:"WP-CLI"})," command ",(0,t.jsx)(o.code,{children:"setup_theme"}),", you might have a few questions. We will try to answer all those questions here."]}),"\n",(0,t.jsx)(o.h3,{id:"why-do-all-my-blocks-look-the-same-and-have-the-same-name-structure",children:"Why do all my blocks look the same and have the same name structure?"}),"\n",(0,t.jsxs)(o.p,{children:["This is so because we defined the name structure for all our blocks and components to load everything automatically. For more information, please check the ",(0,t.jsx)(o.a,{href:"block-structure",children:"block structure"})," and ",(0,t.jsx)(o.a,{href:"blocks-component-structure",children:"component structure"})," chapters."]}),"\n",(0,t.jsx)(o.h3,{id:"what-is-the-difference-between-components-and-blocks",children:"What is the difference between components and blocks?"}),"\n",(0,t.jsxs)(o.p,{children:["The main difference is that blocks are available in the block editor's block picker, and components are not. With that being said, blocks are registered using the ",(0,t.jsx)(o.code,{children:"registerBlockType"})," method, and components are just here for you to bundle some functionality in one place and reuse it wherever you need."]}),"\n",(0,t.jsxs)(o.p,{children:["For more information about blocks, read the ",(0,t.jsx)(o.a,{href:"block-structure",children:"block structure"})," chapter. To find out more about components, read the ",(0,t.jsx)(o.a,{href:"blocks-component-structure",children:"component structure"})," chapter."]}),"\n",(0,t.jsx)(o.h3,{id:"do-i-need-to-have-storybook-stories-in-my-block",children:"Do I need to have Storybook stories in my block?"}),"\n",(0,t.jsx)(o.p,{children:"No, you don't. But we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us. \ud83d\ude42"}),"\n",(0,t.jsxs)(o.p,{children:["For more details on how to write stories, check out ",(0,t.jsx)(o.a,{href:"blocks-storybook",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"do-you-support-block-variations-and-how-can-i-use-them",children:"Do you support block variations, and how can I use them?"}),"\n",(0,t.jsxs)(o.p,{children:["Yes, we do. All block variations are located in the ",(0,t.jsx)(o.code,{children:"src/Blocks/variations"})," folder. For more information about this, please check the ",(0,t.jsx)(o.a,{href:"blocks-variations",children:"variations"})," chapter."]}),"\n",(0,t.jsx)(o.h3,{id:"do-you-support-patterns-and-how-can-i-use-them",children:"Do you support patterns, and how can I use them?"}),"\n",(0,t.jsxs)(o.p,{children:["Yes, we do. For more information, please read the ",(0,t.jsx)(o.a,{href:"blocks-patterns",children:"patterns"})," chapter."]}),"\n",(0,t.jsx)(o.h3,{id:"what-is-a-wrapper",children:"What is a wrapper?"}),"\n",(0,t.jsxs)(o.p,{children:["Read about wrappers in ",(0,t.jsx)(o.a,{href:"blocks-wrapper",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"do-you-support-inner-blocks",children:"Do you support inner blocks?"}),"\n",(0,t.jsxs)(o.p,{children:["Yes, we support everything that the core natively supports.  You can find more information on how to use them in ",(0,t.jsx)(o.a,{href:"block-manifest",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"why-do-you-use-manifestjson-in-all-blocks-and-components",children:"Why do you use manifest.json in all blocks and components?"}),"\n",(0,t.jsxs)(o.p,{children:["So that we can provide content, attributes, options, and much more across multiple different files in multiple contexts (in both PHP and JS). You can read all about it in ",(0,t.jsx)(o.a,{href:"block-manifest",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"why-do-you-use-global-manifestjson",children:"Why do you use global manifest.json?"}),"\n",(0,t.jsxs)(o.p,{children:["The answer is the same as the previous one. In the global ",(0,t.jsx)(o.code,{children:"manifest.json"}),", we have options that are shared across all blocks and components. Read more about it in ",(0,t.jsx)(o.a,{href:"blocks-global-manifest",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"if-i-want-to-create-a-new-blockcomponent-what-do-i-do",children:"If I want to create a new block/component, what do I do?"}),"\n",(0,t.jsx)(o.p,{children:"In your terminal, write"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"wp boilerplate use_block --name=example\n"})}),"\n",(0,t.jsx)(o.p,{children:"and style that block however you seem fit."}),"\n",(0,t.jsx)(o.h3,{id:"what-if-i-add-a-block-and-it-throws-an-error-that-it-is-missing-some-components-what-do-i-do",children:"What if I add a block and it throws an error that it is missing some components, what do I do?"}),"\n",(0,t.jsxs)(o.p,{children:["All blocks/components have some kind of documentation and in that documentation we have a list of dependencies each block/component needs to have in the project in order for it to work. For example you can look in the ",(0,t.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/heading/docs/readme.mdx",children:"heading block"}),", as you can see the heading blocks depends on the heading component, so if you install a heading block before heading component it will resolve in to an error. So please be sure that your block/component installation follows the correct order."]}),"\n",(0,t.jsx)(o.h3,{id:"how-can-i-use-your-pre-made-blocks",children:"How can I use your pre-made blocks?"}),"\n",(0,t.jsx)(o.p,{children:"You can check all available blocks/components using these two commands"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"wp boilerplate use_block --help\n\nwp boilerplate use_component --help\n"})}),"\n",(0,t.jsx)(o.h3,{id:"can-i-use-blockcomponent-from-eightshift-frontend-libs-directly",children:"Can I use block/component from Eightshift-frontend-libs directly?"}),"\n",(0,t.jsxs)(o.p,{children:["It depends. You can't use things from the blocks folder like ",(0,t.jsx)(o.code,{children:"components"}),", ",(0,t.jsx)(o.code,{children:"custom"}),", ",(0,t.jsx)(o.code,{children:"variations"}),", ",(0,t.jsx)(o.code,{children:"wrapper"}),", etc. They are meant to be copied to your project, styled, and changed depending on your project's needs."]}),"\n",(0,t.jsxs)(o.p,{children:["You can move things from a block to your project using the commands described ",(0,t.jsx)(o.a,{href:"#how-can-i-use-your-pre-made-blocks",children:"above"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"i-want-to-change-attributes-on-inner-blocks-how-do-i-do-it",children:"I want to change attributes on inner blocks. How do I do it?"}),"\n",(0,t.jsxs)(o.p,{children:["We described how attributes are used and combined in ",(0,t.jsx)(o.a,{href:"blocks-attributes",children:"this chapter"})," and ",(0,t.jsx)(o.a,{href:"blocks-component-in-block",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"do-i-need-to-write-js-and-php-implementation-for-all-my-blocks",children:"Do I need to write JS and PHP implementation for all my blocks?"}),"\n",(0,t.jsx)(o.p,{children:"For a block, you must provide the JS and PHP implementations because it won't work without them."}),"\n",(0,t.jsx)(o.p,{children:"For components, if you are not using the JS part, you don't need to write one, but we recommend you do so because the JS part is used in Storybook."}),"\n",(0,t.jsxs)(o.p,{children:["If you have a more advanced block and don't benefit from writing the JS implementation of the block, you can always use the ",(0,t.jsx)(o.a,{href:"https://developer.wordpress.org/block-editor/packages/packages-server-side-render/",children:"ServerSideRender component"})," form the core. If you have no inputs in the editor from the admin, there is no need to write JS implementation of the block. Just use ",(0,t.jsx)(o.code,{children:"ServerSideRender"})," component in that case."]}),"\n",(0,t.jsx)(o.h3,{id:"how-do-i-use-components-in-blocks",children:"How do I use components in blocks?"}),"\n",(0,t.jsxs)(o.p,{children:["Please check out ",(0,t.jsx)(o.a,{href:"blocks-component-in-block",children:"this chapter"})," for more information."]}),"\n",(0,t.jsx)(o.h3,{id:"how-do-i-use-multiple-heading-components-in-my-block",children:"How do I use multiple heading components in my block?"}),"\n",(0,t.jsxs)(o.p,{children:["You can follow the instructions given in ",(0,t.jsx)(o.a,{href:"blocks-component-in-block",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"where-can-i-define-my-global-styles",children:"Where can I define my global styles?"}),"\n",(0,t.jsxs)(o.p,{children:["You can follow the instructions given in ",(0,t.jsx)(o.a,{href:"writing-styles",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"where-can-i-define-global-typography-for-all-my-blockscomponents",children:"Where can I define global typography for all my blocks/components?"}),"\n",(0,t.jsxs)(o.p,{children:["You can follow the instructions given in ",(0,t.jsx)(o.a,{href:"writing-styles",children:"this chapter"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"can-i-make-a-component-with-wp_query-logic-in-it",children:"Can I make a component with WP_Query logic in it?"}),"\n",(0,t.jsx)(o.p,{children:"Yes, you can, but think of the component as a dumb and simple piece of code that should not hold any business logic. A component should only be used as a view. If you need to write WP_Query logic, you can do that in a block and just pass the data to your component as props."}),"\n",(0,t.jsx)(o.h3,{id:"do-i-need-to-make-components-for-all-my-blocks",children:"Do I need to make components for all my blocks?"}),"\n",(0,t.jsx)(o.p,{children:"No, it might look like that from the examples provided, but that is not the case. You should create components depending on your needs."}),"\n",(0,t.jsx)(o.p,{children:"Ask yourself, will I reuse this functionality anywhere else?"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["If the answer is ",(0,t.jsx)(o.strong,{children:"yes"}),", create a component."]}),"\n",(0,t.jsxs)(o.li,{children:["If the answer is ",(0,t.jsx)(o.strong,{children:"no"}),", don't create a component."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Our recommendation is not to burden yourself with components from the beginning. Start creating blocks and, if you find yourself in need of code that you already wrote, just extract it in a component."}),"\n",(0,t.jsx)(o.h3,{id:"will-this-setup-work-with-full-site-editing",children:"Will this setup work with full site editing?"}),"\n",(0,t.jsx)(o.p,{children:"Yes, it will. We are constantly upgrading this documentation and our code to say that it will work with full site editing. This boilerplate was made for the Infinum/Eightshift WordPress team, so we are constantly using it in our projects."}),"\n",(0,t.jsx)(o.h3,{id:"can-i-use-core-blocks-with-your-setup",children:"Can I use core blocks with your setup?"}),"\n",(0,t.jsx)(o.p,{children:"Yes, you can. We are working on the ability to override core blocks in our smart way. Until we make this work, you can use everything that is already defined in the core documentation."}),"\n",(0,t.jsx)(o.p,{children:"We avoid using core blocks because they add different class naming and additional markup that makes it harder to style things."}),"\n",(0,t.jsx)(o.p,{children:"Also, they are prone to breaking changes every several months, so we prefer to write our own implementation."}),"\n",(0,t.jsx)(o.h3,{id:"how-can-i-limit-my-blocklist",children:"How can I limit my blocklist?"}),"\n",(0,t.jsxs)(o.p,{children:["Easy. We have a method you can extend that limits your project's block to the only block from your project. You should put this filter in your project's ",(0,t.jsx)(o.code,{children:"src/Blocks/Blocks.php"})," file under the ",(0,t.jsx)(o.code,{children:"register"})," method:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"  // Limits the usage of only custom project blocks.\n  add_filter('allowed_block_types', [ $this, 'getAllBlocksList' ], 10, 2);\n"})}),"\n",(0,t.jsx)(o.h3,{id:"how-to-allow-only-one-pattern-category",children:"How to allow only one pattern category?"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"Coming soon"})}),"\n",(0,t.jsx)(o.h3,{id:"can-i-have-blocks-in-multiple-categories",children:"Can I have blocks in multiple categories?"}),"\n",(0,t.jsxs)(o.p,{children:["In your block manifest, you can define in what category your block will appear. You can create a new category for your project or use our category. We created our category called ",(0,t.jsx)(o.code,{children:"eightshift"})," using this filter:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:"  // Create a new custom category for custom blocks.\n  add_filter('block_categories', [ $this, 'getCustomCategory' ]);\n"})}),"\n",(0,t.jsx)(o.h3,{id:"how-can-i-add-a-new-blocks-category",children:"How can I add a new blocks category?"}),"\n",(0,t.jsx)(o.p,{children:"You can provide your implementation, or you can extend our method for registering a custom category. Here is how you do it:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-php",children:" /**\n  * Register all the hooks\n  *\n  * @return void\n  */\npublic function register(): void\n{\n  // Create a new custom category for custom blocks.\n  add_filter('block_categories', [ $this, 'getCustomCategory' ]);\n}\n\n /**\n  * Create a custom category to assign all custom blocks\n  *\n  * This category will be shown on all blocks list in the \"Add Block\" button.\n  *\n  * @param array[]  $categories Array of all block categories.\n  * @param \\WP_Post $post Post being loaded.\n  *\n  * @return array[] Array of block categories.\n  */\npublic function getCustomCategory(array $categories, \\WP_Post $post): array\n{\n  return array_merge(\n    parent::getCustomCategory($categories, $post),\n    [\n      [\n        'slug' => 'custom-category-name',\n        'title' => \\esc_html__('Custom Category', 'project-text-domain'),\n        'icon' => 'admin-settings',\n      ],\n    ]\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"what-if-you-dont-yet-support-something-from-the-native-setup-what-can-i-do",children:"What if you don't yet support something from the native setup? What can I do?"}),"\n",(0,t.jsxs)(o.p,{children:["As we described in ",(0,t.jsx)(o.a,{href:"blocks",children:"this chapter"}),", if we don't support something natively from the core or you can't find it in this documentation, you can always use it in the normal native way from the ",(0,t.jsx)(o.a,{href:"https://developer.wordpress.org/block-editor/tutorials/block-tutorial/",children:"WordPress documentation"}),". Also, if you think we are missing something, please open a ",(0,t.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/pulls",children:"pull request"})," or an ",(0,t.jsx)(o.a,{href:"https://github.com/infinum/eightshift-frontend-libs/issues",children:"issue"})," on our GitHub repository."]}),"\n",(0,t.jsxs)(o.h3,{id:"why-is-my-blocks-folder-called-custom-and-not-blocks-for-example",children:["Why is my blocks folder called ",(0,t.jsx)(o.code,{children:"custom"})," and not ",(0,t.jsx)(o.code,{children:"blocks"}),", for example?"]}),"\n",(0,t.jsx)(o.p,{children:"The idea was to put all your custom blocks inside the custom folder and all core block in the core folder. This boilerplate is not designed only for your custom block, but you can use it as an ultimate block setup."}),"\n",(0,t.jsxs)(o.p,{children:["And folder structure ",(0,t.jsx)(o.code,{children:"src/Blocks/blocks"})," is kind of weird."]}),"\n",(0,t.jsx)(o.h3,{id:"in-the-global-manifest-you-have-a-key-called-customblocksname-eightshift-block-can-i-change-this-to-my-project-name-block",children:"In the global manifest, you have a key called \u201ccustomBlocksName\u201d: \u201ceightshift-block\u201d. Can I change this to my-project-name-block?"}),"\n",(0,t.jsx)(o.p,{children:"You can, but you shouldn't. We use this key to provide the CSS selectors on all our custom blocks in the block editor. Additional styles are added to this selector for the wrapper to work on full width and remove some of the native block editor styles."}),"\n",(0,t.jsx)(o.p,{children:"So don't remove or change this \ud83d\ude05."}),"\n",(0,t.jsx)(o.h3,{id:"simple-vs-compound-blocks",children:"Simple vs Compound blocks"}),"\n",(0,t.jsx)(o.p,{children:"In a nutshell, there is no difference between blocks. The WordPress core block is a block, but we like to make a distinction between what is simple and what is a compound block."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Simple block"})," is a block that is used just as is and provides a small isolated functionality. For example: heading, paragraph, button, etc."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Compound block"})," is a block built from multiple components. For example: card, featured posts, etc"]}),"\n",(0,t.jsx)(o.h3,{id:"naming-is-hard",children:"Naming is hard"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton"})}),"\n",(0,t.jsx)(o.p,{children:"Yes, naming is hard, and no matter how long your development experience is you will always struggle with names for your components, block, files, variables, functions, etc."}),"\n",(0,t.jsx)(o.p,{children:"Here are some of our recommendations to ease your pain:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Always try to name your block based on ",(0,t.jsx)(o.strong,{children:"what they are"}),", rather than ",(0,t.jsx)(o.strong,{children:"what they will be used for"}),". For example, if you have a component card for custom post-type ",(0,t.jsx)(o.code,{children:"books"}),", you should never call this component ",(0,t.jsx)(o.code,{children:"card-book"}),". Instead, use a more generic name like ",(0,t.jsx)(o.code,{children:"card-product"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"Make your names as generic as possible for better reusability, but specific enough to fully understand what the block/component is used for."}),"\n",(0,t.jsx)(o.li,{children:"Always think about the future. How can this feature be used in some other way?"}),"\n",(0,t.jsxs)(o.li,{children:['When naming your attributes ask yourself: "is this attribute going to be used in any other way?". For example, you have an attribute for adding font-weight: bold to your text. You can create an attribute called font-weight and set it as a ',(0,t.jsx)(o.code,{children:"boolean"})," type and that will be ok if you have only one font-weight. A better way would be to put it as a string and provide a ",(0,t.jsx)(o.code,{children:"SelectControl"})," component if there is any possibility that in the future you will have additional font-weight."]}),"\n",(0,t.jsxs)(o.li,{children:["Name booleans positively as a question. Example: ",(0,t.jsx)(o.code,{children:"isValid"}),", ",(0,t.jsx)(o.code,{children:"isLoading"}),", ",(0,t.jsx)(o.code,{children:"isComplete"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"Don\u2019t hesitate to use longer names."}),"\n",(0,t.jsx)(o.li,{children:"Use singular names."}),"\n",(0,t.jsx)(o.li,{children:"The variables or functions should be named by their work: Name of variables/functions should always try to express their meaning without diving into the code base try to pack meaningful information inside the name."}),"\n",(0,t.jsx)(o.li,{children:"Naming should be simple enough to be understood by everyone: Using complex words to describe a simple thing only creates hassle while reading the code. Also, use simple English."}),"\n",(0,t.jsx)(o.li,{children:"You might not be the only person working on your particular project in the future. Think about the next person. Your naming will provide an insight into the process and project."}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"BE CONSISTENT"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>l});var t=n(96540);const s={},i=t.createContext(s);function a(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);