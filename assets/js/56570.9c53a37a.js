/*! For license information please see 56570.9c53a37a.js.LICENSE.txt */
"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[56570],{56570:(e,t,n)=>{n.d(t,{Dr:()=>Y,H9:()=>X,W1:()=>W,ZO:()=>Z,bX:()=>q});var r=n(74848),s=n(82451),o=n(62993),i=n(67680),l=n(96540),a=n(92280),c=n(46405),u=n(35971),d=n(6295),p=n(1234),g=n(71290),f=n(12732),m=n(52973),b=n(29116),y=n(74702),h=n(20152),v=n(13731),x=n(82972),P=n(67922),C=n(49189),k=n(6314);const M=new WeakMap;const K=2,S=50,w=1e3,E=Math.PI/12;function R(e,t,n){let{parentMenuRef:r,submenuRef:s,type:o="menu",isDisabled:a,delay:c=200}=e,u=(0,i.e)(),g=(0,i.e)(),{direction:f}=(0,b.$)(),m=(0,l.useRef)(void 0),y=(0,l.useCallback)((()=>{m.current&&(clearTimeout(m.current),m.current=void 0)}),[m]),h=(0,i.f)((e=>{y(),t.open(e)})),v=(0,i.f)((()=>{y(),t.close()}));(0,i.g)((()=>()=>{y()}),[y]);let x={id:g,"aria-labelledby":u,submenuLevel:t.submenuLevel,..."menu"===o&&{onClose:t.closeAll,autoFocus:t.focusStrategy,onKeyDown:e=>{switch(e.key){case"ArrowLeft":"ltr"===f&&e.currentTarget.contains(e.target)&&(e.stopPropagation(),v(),n.current.focus());break;case"ArrowRight":"rtl"===f&&e.currentTarget.contains(e.target)&&(e.stopPropagation(),v(),n.current.focus());break;case"Escape":e.stopPropagation(),t.closeAll()}}}};return function(e){let{menuRef:t,submenuRef:n,isOpen:r,isDisabled:s}=e,o=(0,l.useRef)(void 0),i=(0,l.useRef)(void 0),a=(0,l.useRef)(0),c=(0,l.useRef)(void 0),u=(0,l.useRef)(void 0),g=(0,l.useRef)(void 0),f=(0,l.useRef)(2),[m,b]=(0,l.useState)(!1);(0,d.a)({ref:n,onResize:()=>{n.current&&(i.current=n.current.getBoundingClientRect(),g.current=void 0)}});let y=()=>{b(!1),f.current=K,o.current=void 0},h=(0,p.t)();(0,l.useEffect)((()=>{m&&t.current?t.current.style.pointerEvents="none":t.current.style.pointerEvents=""}),[t,m]),(0,l.useEffect)((()=>{let e=n.current,l=t.current;if(s||!e||!r||"pointer"!==h)return void y();i.current=e.getBoundingClientRect();let d=e=>{if("touch"===e.pointerType||"pen"===e.pointerType)return;let t=Date.now();if(t-a.current<S)return;clearTimeout(c.current),clearTimeout(u.current);let{clientX:n,clientY:r}=e;if(!o.current)return void(o.current={x:n,y:r});if(!i.current)return;if(g.current||(g.current=n>i.current.right?"left":"right"),n<l.getBoundingClientRect().left||n>l.getBoundingClientRect().right||r<l.getBoundingClientRect().top||r>l.getBoundingClientRect().bottom)return void y();let s=o.current.x,d=o.current.y,p="right"===g.current?i.current.left-s:s-i.current.right,m=Math.atan2(d-i.current.top,p)+E,h=Math.atan2(d-i.current.bottom,p)-E,v=Math.atan2(d-r,"left"===g.current?-(n-s):n-s),x=v<m&&v>h;f.current=x?Math.min(f.current+1,K):Math.max(f.current-1,0),f.current>=K?b(!0):b(!1),a.current=t,o.current={x:n,y:r},x&&(c.current=setTimeout((()=>{y(),u.current=setTimeout((()=>{let e=document.elementFromPoint(n,r);e&&l.contains(e)&&e.dispatchEvent(new PointerEvent("pointerover",{bubbles:!0,cancelable:!0}))}),100)}),w))};return window.addEventListener("pointermove",d),()=>{window.removeEventListener("pointermove",d),clearTimeout(c.current),clearTimeout(u.current),f.current=K}}),[s,r,t,h,b,n])}({menuRef:r,submenuRef:s,isOpen:t.isOpen,isDisabled:a}),{submenuTriggerProps:{id:u,"aria-controls":t.isOpen?g:void 0,"aria-haspopup":a?void 0:o,"aria-expanded":t.isOpen?"true":"false",onPressStart:e=>{a||"virtual"!==e.pointerType&&"keyboard"!==e.pointerType||h("first")},onPress:e=>{a||"touch"!==e.pointerType&&"mouse"!==e.pointerType||h()},onHoverChange:e=>{a||(e&&!t.isOpen?m.current||(m.current=setTimeout((()=>{h()}),c)):e||y())},onKeyDown:e=>{switch(e.key){case"ArrowRight":a||("ltr"===f?(t.isOpen||h("first"),"menu"===o&&(null==s?void 0:s.current)&&document.activeElement===(null==n?void 0:n.current)&&s.current.focus()):t.isOpen?v():e.continuePropagation());break;case"ArrowLeft":a||("rtl"===f?(t.isOpen||h("first"),"menu"===o&&(null==s?void 0:s.current)&&document.activeElement===(null==n?void 0:n.current)&&s.current.focus()):t.isOpen?v():e.continuePropagation());break;case"Escape":t.closeAll();break;default:e.continuePropagation()}},onBlur:e=>{t.isOpen&&r.current.contains(e.relatedTarget)&&v()},isOpen:t.isOpen},submenuProps:x,popoverProps:{isNonModal:!0,disableFocusManagement:!0,shouldCloseOnInteractOutside:e=>e!==n.current}}}function O(e){let t=(0,d.$)(e),[n,r]=(0,l.useState)(null),[s,o]=(0,l.useState)([]);return{focusStrategy:n,...t,open(e=null){r(e),t.open()},toggle(e=null){r(e),t.toggle()},close(){o([]),t.close()},expandedKeysStack:s,openSubmenu:(e,t)=>{o((n=>t>n.length?n:[...n.slice(0,t),e]))},closeSubmenu:(e,t)=>{o((n=>n[t]===e?n.slice(0,t):n))}}}class N{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}constructor(e,{expandedKeys:t}={}){this.keyMap=new Map,this.iterable=e,t=t||new Set;let n,r=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&("section"===e.type||t.has(e.key)))for(let t of e.childNodes)r(t)};for(let o of e)r(o);let s=0;for(let[o,i]of this.keyMap)n?(n.nextKey=o,i.prevKey=n.key):(this.firstKey=o,i.prevKey=void 0),"item"===i.type&&(i.index=s++),n=i,n.nextKey=void 0;this.lastKey=null==n?void 0:n.key}}function T(e){let{onExpandedChange:t}=e,[n,r]=(0,p.e)(e.expandedKeys?new Set(e.expandedKeys):void 0,e.defaultExpandedKeys?new Set(e.defaultExpandedKeys):new Set,t),s=(0,o.$)(e),i=(0,l.useMemo)((()=>e.disabledKeys?new Set(e.disabledKeys):new Set),[e.disabledKeys]),a=(0,o.a)(e,(0,l.useCallback)((e=>new N(e,{expandedKeys:n})),[n]),null);(0,l.useEffect)((()=>{null==s.focusedKey||a.getItem(s.focusedKey)||s.setFocusedKey(null)}),[a,s.focusedKey]);return{collection:a,expandedKeys:n,disabledKeys:i,toggleKey:e=>{r(function(e,t){let n=new Set(e);n.has(t)?n.delete(t):n.add(t);return n}(n,e))},setExpandedKeys:r,selectionManager:new o.b(a,s)}}const A=(0,l.createContext)({}),B=(0,l.createContext)(null),D=(0,l.createContext)(null),j=(0,l.createContext)(null);function F(e){let t=O(e),n=(0,l.useRef)(null),{menuTriggerProps:r,menuProps:s}=(0,g.$)({...e,type:"menu"},t,n),[o,c]=(0,l.useState)(null),u=(0,l.useCallback)((()=>{n.current&&c(n.current.offsetWidth+"px")}),[n]);(0,d.a)({ref:n,onResize:u});let p=(0,l.useRef)(null);return l.createElement(i.j,{values:[[B,{...s,ref:p}],[a.f,t],[j,t],[a.i,{trigger:"MenuTrigger",triggerRef:n,scrollRef:p,placement:"bottom start",style:{"--trigger-width":o}}]]},l.createElement(a.j,{...r,ref:n,isPressed:t.isOpen},e.children))}const I=(0,l.createContext)(null),$=(0,o.l)("submenutrigger",((e,t,n)=>{let{CollectionBranch:r}=(0,l.useContext)(o.g),s=(0,l.useContext)(D),c=(0,l.useContext)(j),u=function(e,t){let{triggerKey:n}=e,{expandedKeysStack:r,openSubmenu:s,closeSubmenu:o,close:i}=t,[a]=(0,l.useState)(null==r?void 0:r.length),c=(0,l.useMemo)((()=>r[a]===n),[r,n,a]),[u,d]=(0,l.useState)(null),p=(0,l.useCallback)(((e=null)=>{d(e),s(n,a)}),[s,a,n]),g=(0,l.useCallback)((()=>{d(null),o(n,a)}),[o,a,n]),f=(0,l.useCallback)(((e=null)=>{d(e),c?g():p(e)}),[g,p,c]);return(0,l.useMemo)((()=>({focusStrategy:u,isOpen:c,open:p,close:g,closeAll:i,submenuLevel:a,setOpen:()=>{},toggle:f})),[c,p,g,i,u,f,a])}({triggerKey:n.key},c),d=(0,l.useRef)(null),p=(0,i.l)(t),g=(0,i.$)(a.i),{parentMenuRef:f}=(0,l.useContext)(I),{submenuTriggerProps:m,submenuProps:b,popoverProps:y}=R({parentMenuRef:f,submenuRef:d,delay:e.delay},u,p);return l.createElement(i.j,{values:[[U,{...m,onAction:void 0,ref:p}],[B,b],[a.f,u],[a.i,{ref:d,trigger:"SubmenuTrigger",triggerRef:p,placement:"end top",UNSTABLE_portalContainer:g.UNSTABLE_portalContainer||void 0,...y}]]},l.createElement(r,{collection:s.collection,parent:n}),e.children[1])}),(e=>e.children[0]));function L(e,t){return[e,t]=(0,i.a)(e,t,B),l.createElement(o.e,{content:l.createElement(o.f,e)},(n=>n.size>0&&l.createElement(_,{props:e,collection:n,menuRef:t})))}function _({props:e,collection:t,menuRef:n}){let r=T({...e,collection:t,children:void 0}),[c,d]=(0,l.useState)(null),{isVirtualized:p,CollectionRoot:g}=(0,l.useContext)(o.g),{menuProps:f}=function(e,t,n){let{shouldFocusWrap:r=!0,onKeyDown:o,onKeyUp:l,...a}=e;e["aria-label"]||e["aria-labelledby"]||console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let c=(0,u.$)(e,{labelable:!0}),{listProps:d}=(0,s.$)({...a,ref:n,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,shouldFocusWrap:r,linkBehavior:"override"});return M.set(t,{onClose:e.onClose,onAction:e.onAction}),{menuProps:(0,i.c)(c,{onKeyDown:o,onKeyUp:l},{role:"menu",...d,onKeyDown:e=>{"Escape"!==e.key&&d.onKeyDown(e)}})}}({...e,isVirtualized:p},r,n),m=(0,l.useContext)(j),b=(0,l.useContext)(a.i),y="SubmenuTrigger"===(null==b?void 0:b.trigger);(0,a.k)({ref:n,onInteractOutside:e=>{m&&!(null==c?void 0:c.contains(e.target))&&m.close()},isDisabled:y||0===(null==m?void 0:m.expandedKeysStack.length)});let v=(0,l.useRef)(null),[x,P]=(0,l.useState)({left:0});(0,l.useEffect)((()=>{if(c&&v.current!==c&&0===x.left){v.current=c;let{left:e}=c.getBoundingClientRect();P({left:-1*e})}}),[x,c]);let C=(0,i.b)({defaultClassName:"react-aria-Menu",className:e.className,style:e.style,values:{}});return l.createElement(h.$,null,l.createElement("div",{...(0,u.$)(e),...f,...C,ref:n,slot:e.slot||void 0,onScroll:e.onScroll},l.createElement(i.j,{values:[[D,r],[s.d,{elementType:"div"}],[a.i,{UNSTABLE_portalContainer:c||void 0}],[o.h,{render:z}],[I,{parentMenuRef:n}],[U,null]]},l.createElement(g,{collection:t,persistedKeys:(0,o.j)(r.selectionManager.focusedKey),scrollRef:n}))),l.createElement("div",{ref:d,style:{width:"100vw",position:"absolute",top:0,...x}}))}const H=(0,l.forwardRef)(L);function z(e,t,n){var r,a;let c=(0,l.useContext)(D),{CollectionBranch:d}=(0,l.useContext)(o.g),[p,g]=(0,i.h)();var f;let{headingProps:m,groupProps:b}=function(e){let{heading:t,"aria-label":n}=e,r=(0,i.e)();return{itemProps:{role:"presentation"},headingProps:t?{id:r,role:"presentation"}:{},groupProps:{role:"group","aria-label":n,"aria-labelledby":t?r:void 0}}}({heading:g,"aria-label":null!==(f=n.props["aria-label"])&&void 0!==f?f:void 0}),y=(0,i.b)({defaultClassName:"react-aria-Section",className:null===(r=n.props)||void 0===r?void 0:r.className,style:null===(a=n.props)||void 0===a?void 0:a.style,values:{}});return l.createElement("section",{...(0,u.$)(e),...b,...y,ref:t},l.createElement(s.e.Provider,{value:{...m,ref:p}},l.createElement(d,{collection:c.collection,parent:n})))}const U=(0,l.createContext)(null),V=(0,o.d)("item",(function(e,t,n){var r;[e,t]=(0,i.a)(e,t,U);let a=null===(r=(0,i.$)(U))||void 0===r?void 0:r.id,d=(0,l.useContext)(D),g=(0,i.l)(t),{menuItemProps:b,labelProps:h,descriptionProps:v,keyboardShortcutProps:x,...P}=function(e,t,n){let{id:r,key:l,closeOnSelect:a,isVirtualized:c,"aria-haspopup":d,onPressStart:g,onPressUp:b,onPress:y,onPressChange:h,onPressEnd:v,onHoverStart:x,onHoverChange:P,onHoverEnd:C,onKeyDown:k,onKeyUp:K,onFocus:S,onFocusChange:w,onBlur:E}=e,R=!!d;var O;let N=null!==(O=e.isDisabled)&&void 0!==O?O:t.selectionManager.isDisabled(l);var T;let A=null!==(T=e.isSelected)&&void 0!==T?T:t.selectionManager.isSelected(l),B=M.get(t),D=t.collection.getItem(l),j=e.onClose||B.onClose,F=(0,f.b)(),I=e=>{var t;R||((null==D||null===(t=D.props)||void 0===t?void 0:t.onAction)&&D.props.onAction(),B.onAction&&(0,B.onAction)(l),e.target instanceof HTMLAnchorElement&&F.open(e.target,e,D.props.href,D.props.routerOptions))},$="menuitem";R||("single"===t.selectionManager.selectionMode?$="menuitemradio":"multiple"===t.selectionManager.selectionMode&&($="menuitemcheckbox"));let L=(0,i.k)(),_=(0,i.k)(),H=(0,i.k)(),z={id:r,"aria-disabled":N||void 0,role:$,"aria-label":e["aria-label"],"aria-labelledby":L,"aria-describedby":[_,H].filter(Boolean).join(" ")||void 0,"aria-controls":e["aria-controls"],"aria-haspopup":d,"aria-expanded":e["aria-expanded"]};"none"===t.selectionManager.selectionMode||R||(z["aria-checked"]=A),c&&(z["aria-posinset"]=null==D?void 0:D.index,z["aria-setsize"]=(0,s.a)(t.collection));let{itemProps:U,isFocused:V}=(0,o.c)({selectionManager:t.selectionManager,key:l,ref:n,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,linkBehavior:"none"}),{pressProps:W,isPressed:X}=(0,f.$)({onPressStart:e=>{"keyboard"===e.pointerType&&I(e),null==g||g(e)},onPress:y,onPressUp:e=>{"keyboard"!==e.pointerType&&(I(e),!R&&j&&(null!=a?a:"multiple"!==t.selectionManager.selectionMode||t.selectionManager.isLink(l))&&j()),null==b||b(e)},onPressChange:h,onPressEnd:v,isDisabled:N}),{hoverProps:q}=(0,p.$)({isDisabled:N,onHoverStart(e){(0,p.a)()||(t.selectionManager.setFocused(!0),t.selectionManager.setFocusedKey(l)),null==x||x(e)},onHoverChange:P,onHoverEnd:C}),{keyboardProps:Y}=(0,m.a)({onKeyDown:e=>{if(e.repeat)e.continuePropagation();else switch(e.key){case" ":N||"none"!==t.selectionManager.selectionMode||R||!1===a||!j||j();break;case"Enter":N||!1===a||R||!j||j();break;default:R||e.continuePropagation(),null==k||k(e)}},onKeyUp:K}),{focusProps:Z}=(0,p.c)({onBlur:E,onFocus:S,onFocusChange:w}),G=(0,u.$)(D.props);delete G.id;let J=(0,f.a)(D.props);return{menuItemProps:{...z,...(0,i.c)(G,J,R?{onFocus:U.onFocus,"data-key":U["data-key"]}:U,W,q,Y,Z),tabIndex:null!=U.tabIndex?-1:void 0},labelProps:{id:L},descriptionProps:{id:_},keyboardShortcutProps:{id:H},isFocused:V,isSelected:A,isPressed:X,isDisabled:N}}({...e,id:a,key:n.key},d,g),{isFocusVisible:C,focusProps:k}=(0,y.$)(),{hoverProps:K,isHovered:S}=(0,p.$)({isDisabled:P.isDisabled}),w=(0,i.b)({...e,id:void 0,children:n.rendered,defaultClassName:"react-aria-MenuItem",values:{...P,isHovered:S,isFocusVisible:C,selectionMode:d.selectionManager.selectionMode,selectionBehavior:d.selectionManager.selectionBehavior,hasSubmenu:!!e["aria-haspopup"],isOpen:"true"===e["aria-expanded"]}}),E=e.href?"a":"div";return l.createElement(E,{...(0,i.c)(b,k,K),...w,ref:g,"data-disabled":P.isDisabled||void 0,"data-hovered":S||void 0,"data-focused":P.isFocused||void 0,"data-focus-visible":C||void 0,"data-pressed":P.isPressed||void 0,"data-selected":P.isSelected||void 0,"data-selection-mode":"none"===d.selectionManager.selectionMode?void 0:d.selectionManager.selectionMode,"data-has-submenu":!!e["aria-haspopup"]||void 0,"data-open":"true"===e["aria-expanded"]||void 0},l.createElement(i.j,{values:[[c.a,{slots:{label:h,description:v}}],[A,x]]},w.children))})),W=e=>{var t;const{children:n,triggerLabel:s,triggerIcon:o=!s&&v.Pt.hamburgerMenu,triggerProps:i,popoverProps:l,tooltip:a,keepOpen:c=!1,"aria-label":u=s??(0,k._)("Menu","eightshift-ui-components"),openOnLongPress:d=!1,hidden:p}=e;if(p)return null;let g={};c&&(g={...g,selectionMode:"multiple",selectedKeys:[],onSelectionChange:()=>{},items:[]}),d&&(g.trigger="longPress");const f=Array.isArray(n)?n.some((e=>{var t;return"SubMenuItem"===(null==(t=null==e?void 0:e.type)?void 0:t.displayName)})):"SubMenuItem"===(null==(t=null==n?void 0:n.type)?void 0:t.displayName);return(0,r.jsxs)(F,{...e,...g,children:[(0,r.jsx)(x.$,{icon:o,tooltip:a,...i,children:s}),(0,r.jsx)(P.A,{className:"!es-uic-p-0 focus:es-uic-outline-none","aria-label":u,wrapperClassName:(0,C.c)(!f&&"es-uic-overflow-y-auto"),...l,children:(0,r.jsx)(H,{className:"es-uic-outline-none",...e,...g,children:n})})]})},X=e=>{const{children:t,label:n}=e;return(0,r.jsxs)(o.m,{className:(0,C.c)("es-uic-space-y-1 es-uic-border-b es-uic-border-b-gray-200 es-uic-pb-1 last:es-uic-border-b-0",n&&"es-uic-pt-2 first:es-uic-pt-1.5",!n&&"last:es-uic-pb-1"),children:[n&&(0,r.jsx)(s.f,{className:"es-uic-ml-1.5 es-uic-text-xs es-uic-font-medium es-uic-text-gray-400",children:n}),t]})},q=()=>(0,r.jsx)(s.g,{className:"es-uic-mb-1 es-uic-border-b es-uic-border-gray-300"}),Y=e=>{const{icon:t,children:n,checked:s,selected:o,disabled:i,endIcon:l,onClick:a,shortcut:c,className:u,"aria-label":d=("string"==typeof n?n:(0,k._)("Menu item","eightshift-ui-components"))}=e;return(0,r.jsxs)(V,{...e,"aria-label":d,isDisabled:i,className:(0,C.c)("es-uic-mx-1 es-uic-mb-1 es-uic-flex es-uic-min-w-40 es-uic-items-center es-uic-gap-1.5","first:es-uic-mt-1 [&>svg]:es-uic-size-5 [&>svg]:es-uic-text-gray-500","es-uic-select-none es-uic-rounded es-uic-border es-uic-border-transparent es-uic-px-1 es-uic-py-1.5 es-uic-text-sm es-uic-transition","hover:es-uic-bg-gray-100","focus:es-uic-outline-none focus-visible:es-uic-outline-none focus-visible:es-uic-ring focus-visible:es-uic-ring-teal-500 focus-visible:es-uic-ring-opacity-50",i?"es-uic-text-gray-400":"es-uic-text-gray-800",u),onAction:a,children:[!0===s&&v.Pt.menuItemCheck,!0===o&&v.Pt.menuItemCircle,(!1===o||!1===s)&&v.Pt.dummySpacer,t,n,c&&(0,r.jsx)("div",{className:"es-uic-ml-auto es-uic-pl-2 es-uic-text-[0.6875rem] es-uic-tracking-tight es-uic-text-gray-400",children:c}),l&&(0,r.jsx)("div",{className:(0,C.c)(!c&&"es-uic-ml-auto es-uic-pl-2"),children:l})]})},Z=e=>{const{children:t,trigger:n,popoverProps:s}=e;return(0,r.jsxs)($,{children:[(0,l.cloneElement)(n,{endIcon:(0,r.jsx)("span",{className:"es-uic-text-gray-400",children:v.Pt.caretRightFill})}),(0,r.jsx)(P.A,{"aria-label":e["aria-label"]??(0,k._)("Submenu","eightshift-ui-components"),className:"!es-uic-p-0 focus:es-uic-outline-none",offset:-1,...s,children:(0,r.jsx)(H,{"aria-label":e["aria-label"]??(0,k._)("Submenu","eightshift-ui-components"),className:"focus:es-uic-outline-none",children:t})})]})};Z.displayName="SubMenuItem"},67922:(e,t,n)=>{n.d(t,{A:()=>a,T:()=>c});var r=n(74848),s=n(92280),o=n(49189),i=n(6314),l=n(82972);const a=e=>{const{children:t,triggerRef:n,openByDefault:i,isOpen:l,onOpenChange:a,placement:c,className:u,wrapperClassName:d,style:p,offset:g,crossOffset:f,containerPadding:m,shouldFlip:b,shouldCloseOnInteractOutside:y=()=>!0,"aria-label":h,hidden:v,...x}=e;let P=h;return!1===P&&(P=void 0),v?null:(0,r.jsx)(s.$,{shouldFlip:b,shouldCloseOnInteractOutside:y,triggerRef:n,isOpen:l,onOpenChange:a,defaultOpen:i,placement:c,offset:g,crossOffset:f,containerPadding:m,className:({isEntering:e,isExiting:t})=>(0,o.c)("es-uic-rounded-md es-uic-border es-uic-border-gray-200 es-uic-bg-white es-uic-shadow-lg es-uic-outline-none",e&&"es-uic-animate-in es-uic-fade-in-0 es-uic-slide-in-from-top-3 es-uic-fill-mode-forwards",t&&"es-uic-animate-out es-uic-fade-out-0 es-uic-slide-out-to-top-2 es-uic-fill-mode-forwards",d),style:p,children:(0,r.jsx)(s.a,{className:(0,o.c)("es-uic-p-1 es-uic-text-sm es-uic-outline-none",u),"aria-label":P,...x,children:t})})},c=e=>{const{trigger:t,triggerButtonIcon:n,triggerButtonLabel:o=!n&&(0,i._)("Open","eightshift-ui-components"),triggerButtonProps:c,children:u,onOpenChange:d,openByDefault:p,placement:g,style:f,className:m,offset:b,crossOffset:y,containerPadding:h,hidden:v,...x}=e;return v?null:(0,r.jsxs)(s.b,{onOpenChange:d,children:[t,!t&&(0,r.jsx)(l.$,{icon:n,...c,children:o}),(0,r.jsx)(a,{placement:g,openByDefault:p,offset:b,crossOffset:y,containerPadding:h,className:m,style:f,...x,children:u})]})}}}]);