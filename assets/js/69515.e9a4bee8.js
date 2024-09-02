"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[69515],{9533:(e,t,l)=>{l.d(t,{$:()=>C,a:()=>F,b:()=>m,c:()=>y,d:()=>P,e:()=>S,f:()=>h,g:()=>b,h:()=>K,i:()=>k,j:()=>x});var o=l(62993),i=l(67680),r=l(96540),n=l(82451),s=l(46405),a=l(35971),d=l(12732),c=l(1234),u=l(8775),p=l(56859),g=l(29116),v=l(74702),f=l(20152);const m=new WeakMap;function y(e,t){let l=m.get(e);if(!l)throw new Error("Unknown list");return`${l.id}-option-${o=t,"string"==typeof o?o.replace(/\s*/g,""):""+o}`;var o}const h=(0,r.createContext)({}),b=(0,r.createContext)(null);function D(e,t){let{render:l}=(0,r.useContext)(b);return r.createElement(r.Fragment,null,l(e,t))}const x=(0,r.forwardRef)(D);function k(e,t){var l;let o=null==e?void 0:e.renderDropIndicator,i=null==e||null===(l=e.isVirtualDragging)||void 0===l?void 0:l.call(e),n=(0,r.useCallback)((e=>{if(i||(null==t?void 0:t.isDropTarget(e)))return o?o(e):r.createElement(x,{target:e})}),[null==t?void 0:t.target,i,o]);return(null==e?void 0:e.useDropIndicator)?n:void 0}function K(e,t,l){var o,i;let n=e.focusedKey,s=null;var a;(null==t||null===(o=t.isVirtualDragging)||void 0===o?void 0:o.call(t))&&"item"===(null==l||null===(i=l.target)||void 0===i?void 0:i.type)&&(s=l.target.key,"after"===l.target.dropPosition&&(s=null!==(a=l.collection.getKeyAfter(s))&&void 0!==a?a:s));return(0,r.useMemo)((()=>new Set([n,s].filter((e=>null!==e)))),[n,s])}const P=(0,r.createContext)(null),S=(0,r.createContext)(null);function M(e,t){[e,t]=(0,i.a)(e,t,P);let l=(0,r.useContext)(S);return l?r.createElement(I,{state:l,props:e,listBoxRef:t}):r.createElement(o.e,{content:r.createElement(o.f,e)},(l=>r.createElement(w,{props:e,listBoxRef:t,collection:l})))}function w({props:e,listBoxRef:t,collection:l}){e={...e,collection:l,children:null,items:null};let o=(0,p.$)(e);return r.createElement(I,{state:o,props:e,listBoxRef:t})}const C=(0,r.forwardRef)(M);function I({state:e,props:t,listBoxRef:l}){let s,d,p,{dragAndDropHooks:y,layout:D="stack",orientation:x="vertical"}=t,{collection:M,selectionManager:w}=e,C=!!(null==y?void 0:y.useDraggableCollectionState),I=!!(null==y?void 0:y.useDroppableCollectionState),{direction:F}=(0,g.$)(),{disabledBehavior:B,disabledKeys:A}=w,V=(0,n.b)({usage:"search",sensitivity:"base"}),{isVirtualized:H,layoutDelegate:$,dropTargetDelegate:N,CollectionRoot:R}=(0,r.useContext)(o.g),z=(0,r.useMemo)((()=>t.keyboardDelegate||new n.c({collection:M,collator:V,ref:l,disabledKeys:A,disabledBehavior:B,layout:D,orientation:x,direction:F,layoutDelegate:$})),[M,V,l,B,A,x,F,t.keyboardDelegate,D,$]),{listBoxProps:U}=function(e,t,l){let o=(0,a.$)(e,{labelable:!0}),r=e.selectionBehavior||"toggle",s=e.linkBehavior||("replace"===r?"action":"override");"toggle"===r&&"action"===s&&(s="override");let{listProps:d}=(0,n.$)({...e,ref:l,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,linkBehavior:s}),{focusWithinProps:p}=(0,c.d)({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),g=(0,i.e)(e.id);m.set(t,{id:g,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:s});let{labelProps:v,fieldProps:f}=(0,u.$)({...e,id:g,labelElementType:"span"});return{labelProps:v,listBoxProps:(0,i.c)(o,p,"multiple"===t.selectionManager.selectionMode?{"aria-multiselectable":"true"}:{},{role:"listbox",...(0,i.c)(f,d)})}}({...t,shouldSelectOnPressUp:C||t.shouldSelectOnPressUp,keyboardDelegate:z,isVirtualized:H},e,l),O=(0,r.useRef)(C),W=(0,r.useRef)(I);(0,r.useEffect)((()=>{O.current!==C&&console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."),W.current!==I&&console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.")}),[C,I]);let L=!1,_=null,j=(0,r.useRef)(null);if(C&&y){s=y.useDraggableCollectionState({collection:M,selectionManager:w,preview:y.renderDragPreview?j:void 0}),y.useDraggableCollection({},s,l);let e=y.DragPreview;_=y.renderDragPreview?r.createElement(e,{ref:j},y.renderDragPreview):null}if(I&&y){d=y.useDroppableCollectionState({collection:M,selectionManager:w});let e=y.dropTargetDelegate||N||new y.ListDropTargetDelegate(M,l,{orientation:x,layout:D,direction:F});p=y.useDroppableCollection({keyboardDelegate:z,dropTargetDelegate:e},d,l),L=d.isDropTarget({type:"root"})}let{focusProps:q,isFocused:G,isFocusVisible:J}=(0,v.$)(),Q={isDropTarget:L,isEmpty:0===e.collection.size,isFocused:G,isFocusVisible:J,layout:t.layout||"stack",state:e},X=(0,i.b)({className:t.className,style:t.style,defaultClassName:"react-aria-ListBox",values:Q}),Y=null;return 0===e.collection.size&&t.renderEmptyState&&(Y=r.createElement("div",{role:"option",style:{display:"contents"}},t.renderEmptyState(Q))),r.createElement(f.$,null,r.createElement("div",{...(0,a.$)(t),...(0,i.c)(U,q,null==p?void 0:p.collectionProps),...X,ref:l,slot:t.slot||void 0,onScroll:t.onScroll,"data-drop-target":L||void 0,"data-empty":0===e.collection.size||void 0,"data-focused":G||void 0,"data-focus-visible":J||void 0,"data-layout":t.layout||"stack","data-orientation":t.orientation||"vertical"},r.createElement(i.j,{values:[[P,t],[S,e],[h,{dragAndDropHooks:y,dragState:s,dropState:d}],[n.d,{elementType:"div"}],[b,{render:T}],[o.h,{render:E}]]},r.createElement(R,{collection:M,scrollRef:l,persistedKeys:K(w,y,d),renderDropIndicator:k(y,d)})),Y,_))}function E(e,t,l){let s=(0,r.useContext)(S),{dragAndDropHooks:d,dropState:c}=(0,r.useContext)(h),{CollectionBranch:u}=(0,r.useContext)(o.g),[p,g]=(0,i.h)();var v;let{headingProps:f,groupProps:m}=function(e){let{heading:t,"aria-label":l}=e,o=(0,i.e)();return{itemProps:{role:"presentation"},headingProps:t?{id:o,role:"presentation"}:{},groupProps:{role:"group","aria-label":l,"aria-labelledby":t?o:void 0}}}({heading:g,"aria-label":null!==(v=e["aria-label"])&&void 0!==v?v:void 0}),y=(0,i.b)({defaultClassName:"react-aria-Section",className:e.className,style:e.style,values:{}});return r.createElement("section",{...(0,a.$)(e),...m,...y,ref:t},r.createElement(n.e.Provider,{value:{...f,ref:p}},r.createElement(u,{collection:s.collection,parent:l,renderDropIndicator:k(d,c)})))}const F=(0,o.d)("item",(function(e,t,l){let u=(0,i.l)(t),p=(0,r.useContext)(S),{dragAndDropHooks:g,dragState:v,dropState:f}=(0,r.useContext)(h),{optionProps:b,labelProps:D,descriptionProps:x,...k}=function(e,t,l){var r,s;let{key:u}=e,p=m.get(t);var g;let v=null!==(g=e.isDisabled)&&void 0!==g?g:t.selectionManager.isDisabled(u);var f;let h=null!==(f=e.isSelected)&&void 0!==f?f:t.selectionManager.isSelected(u);var b;let D=null!==(b=e.shouldSelectOnPressUp)&&void 0!==b?b:null==p?void 0:p.shouldSelectOnPressUp;var x;let k=null!==(x=e.shouldFocusOnHover)&&void 0!==x?x:null==p?void 0:p.shouldFocusOnHover;var K;let P=null!==(K=e.shouldUseVirtualFocus)&&void 0!==K?K:null==p?void 0:p.shouldUseVirtualFocus;var S;let M=null!==(S=e.isVirtualized)&&void 0!==S?S:null==p?void 0:p.isVirtualized,w=(0,i.k)(),C=(0,i.k)(),I={role:"option","aria-disabled":v||void 0,"aria-selected":"none"!==t.selectionManager.selectionMode?h:void 0};(0,c.n)()&&(0,c.o)()||(I["aria-label"]=e["aria-label"],I["aria-labelledby"]=w,I["aria-describedby"]=C);let E=t.collection.getItem(u);if(M){let e=Number(null==E?void 0:E.index);I["aria-posinset"]=Number.isNaN(e)?void 0:e+1,I["aria-setsize"]=(0,n.a)(t.collection)}let F=(null==p?void 0:p.onAction)?()=>{var e;return null==p||null===(e=p.onAction)||void 0===e?void 0:e.call(p,u)}:void 0,{itemProps:T,isPressed:B,isFocused:A,hasAction:V,allowsSelection:H}=(0,o.c)({selectionManager:t.selectionManager,key:u,ref:l,shouldSelectOnPressUp:D,allowsDifferentPressOrigin:D&&k,isVirtualized:M,shouldUseVirtualFocus:P,isDisabled:v,onAction:F||(null==E||null===(r=E.props)||void 0===r?void 0:r.onAction)?(0,i.n)(null==E||null===(s=E.props)||void 0===s?void 0:s.onAction,F):void 0,linkBehavior:null==p?void 0:p.linkBehavior}),{hoverProps:$}=(0,c.$)({isDisabled:v||!k,onHoverStart(){(0,c.a)()||(t.selectionManager.setFocused(!0),t.selectionManager.setFocusedKey(u))}}),N=(0,a.$)(null==E?void 0:E.props);delete N.id;let R=(0,d.a)(null==E?void 0:E.props);return{optionProps:{...I,...(0,i.c)(N,T,$,R),id:y(t,u)},labelProps:{id:w},descriptionProps:{id:C},isFocused:A,isFocusVisible:A&&(0,c.a)(),isSelected:h,isDisabled:v,isPressed:B,allowsSelection:H,hasAction:V}}({key:l.key,"aria-label":null==e?void 0:e["aria-label"]},p,u),{hoverProps:K,isHovered:P}=(0,c.$)({isDisabled:!k.allowsSelection&&!k.hasAction,onHoverStart:l.props.onHoverStart,onHoverChange:l.props.onHoverChange,onHoverEnd:l.props.onHoverEnd}),M=null;v&&g&&(M=g.useDraggableItem({key:l.key},v));let w=null;f&&g&&(w=g.useDroppableItem({target:{type:"item",key:l.key,dropPosition:"on"}},f,u));let C=v&&v.isDragging(l.key),I=(0,i.b)({...e,id:void 0,children:e.children,defaultClassName:"react-aria-ListBoxItem",values:{...k,isHovered:P,selectionMode:p.selectionManager.selectionMode,selectionBehavior:p.selectionManager.selectionBehavior,allowsDragging:!!v,isDragging:C,isDropTarget:null==w?void 0:w.isDropTarget}});(0,r.useEffect)((()=>{l.textValue||console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.")}),[l.textValue]);let E=e.href?"a":"div";return r.createElement(E,{...(0,i.c)(b,K,null==M?void 0:M.dragProps,null==w?void 0:w.dropProps),...I,ref:u,"data-allows-dragging":!!v||void 0,"data-selected":k.isSelected||void 0,"data-disabled":k.isDisabled||void 0,"data-hovered":P||void 0,"data-focused":k.isFocused||void 0,"data-focus-visible":k.isFocusVisible||void 0,"data-pressed":k.isPressed||void 0,"data-dragging":C||void 0,"data-drop-target":(null==w?void 0:w.isDropTarget)||void 0,"data-selection-mode":"none"===p.selectionManager.selectionMode?void 0:p.selectionManager.selectionMode},r.createElement(i.j,{values:[[s.a,{slots:{label:D,description:x}}]]},I.children))}));function T(e,t){t=(0,i.l)(t);let{dragAndDropHooks:l,dropState:o}=(0,r.useContext)(h),{dropIndicatorProps:n,isHidden:s,isDropTarget:a}=l.useDropIndicator(e,o,t);return s?null:r.createElement(A,{...e,dropIndicatorProps:n,isDropTarget:a,ref:t})}function B(e,t){let{dropIndicatorProps:l,isDropTarget:o,...n}=e,s=(0,i.b)({...n,defaultClassName:"react-aria-DropIndicator",values:{isDropTarget:o}});return r.createElement("div",{...l,...s,role:"option",ref:t,"data-drop-target":o||void 0})}const A=(0,r.forwardRef)(B)},93535:(e,t,l)=>{l.d(t,{$:()=>r,a:()=>i});var o=l(96540);function i(e){let{initialItems:t=[],initialSelectedKeys:l,getKey:i=e=>{var t;return null!==(t=e.id)&&void 0!==t?t:e.key},filter:n,initialFilterText:s=""}=e,[a,d]=(0,o.useState)({items:t,selectedKeys:"all"===l?"all":new Set(l||[]),filterText:s}),c=(0,o.useMemo)((()=>n?a.items.filter((e=>n(e,a.filterText))):a.items),[a.items,a.filterText,n]);return{...a,items:c,...r({getKey:i},d),getItem:e=>a.items.find((t=>i(t)===e))}}function r(e,t){let{cursor:l,getKey:o}=e;return{setSelectedKeys(e){t((t=>({...t,selectedKeys:e})))},setFilterText(e){t((t=>({...t,filterText:e})))},insert(e,...l){t((t=>n(t,e,...l)))},insertBefore(e,...l){t((t=>{let i=t.items.findIndex((t=>o(t)===e));if(-1===i){if(0!==t.items.length)return t;i=0}return n(t,i,...l)}))},insertAfter(e,...l){t((t=>{let i=t.items.findIndex((t=>o(t)===e));if(-1===i){if(0!==t.items.length)return t;i=0}return n(t,i+1,...l)}))},prepend(...e){t((t=>n(t,0,...e)))},append(...e){t((t=>n(t,t.items.length,...e)))},remove(...e){t((t=>{let i=new Set(e),r=t.items.filter((e=>!i.has(o(e)))),n="all";if("all"!==t.selectedKeys){n=new Set(t.selectedKeys);for(let t of e)n.delete(t)}return null==l&&0===r.length&&(n=new Set),{...t,items:r,selectedKeys:n}}))},removeSelectedItems(){t((e=>{if("all"===e.selectedKeys)return{...e,items:[],selectedKeys:new Set};let t=e.selectedKeys,l=e.items.filter((e=>!t.has(o(e))));return{...e,items:l,selectedKeys:new Set}}))},move(e,l){t((t=>{let i=t.items.findIndex((t=>o(t)===e));if(-1===i)return t;let r=t.items.slice(),[n]=r.splice(i,1);return r.splice(l,0,n),{...t,items:r}}))},moveBefore(e,l){t((t=>{let i=t.items.findIndex((t=>o(t)===e));if(-1===i)return t;let r=(Array.isArray(l)?l:[...l]).map((e=>t.items.findIndex((t=>o(t)===e)))).sort(((e,t)=>e-t));return s(t,r,i)}))},moveAfter(e,l){t((t=>{let i=t.items.findIndex((t=>o(t)===e));if(-1===i)return t;let r=(Array.isArray(l)?l:[...l]).map((e=>t.items.findIndex((t=>o(t)===e)))).sort(((e,t)=>e-t));return s(t,r,i+1)}))},update(e,l){t((t=>{let i=t.items.findIndex((t=>o(t)===e));return-1===i?t:{...t,items:[...t.items.slice(0,i),l,...t.items.slice(i+1)]}}))}}}function n(e,t,...l){return{...e,items:[...e.items.slice(0,t),...l,...e.items.slice(t)]}}function s(e,t,l){l-=t.filter((e=>e<l)).length;let o=t.map((e=>({from:e,to:l++})));for(let r=0;r<o.length;r++){let e=o[r].from;for(let t=r;t<o.length;t++){o[t].from>e&&o[t].from--}}for(let r=0;r<o.length;r++){let e=o[r];for(let t=o.length-1;t>r;t--){let l=o[t];l.from<e.to?e.to++:l.from++}}let i=e.items.slice();for(let r of o){let[e]=i.splice(r.from,1);i.splice(r.to,0,e)}return{...e,items:i}}},56859:(e,t,l)=>{l.d(t,{$:()=>n,a:()=>r});var o=l(62993),i=l(96540);class r{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){this.keyMap=new Map,this.iterable=e;let t,l=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)l(t)};for(let i of e)l(i);let o=0;for(let[i,r]of this.keyMap)t?(t.nextKey=i,r.prevKey=t.key):(this.firstKey=i,r.prevKey=void 0),"item"===r.type&&(r.index=o++),t=r,t.nextKey=void 0;this.lastKey=null==t?void 0:t.key}}function n(e){let{filter:t}=e,l=(0,o.$)(e),n=(0,i.useMemo)((()=>e.disabledKeys?new Set(e.disabledKeys):new Set),[e.disabledKeys]),s=(0,i.useCallback)((e=>new r(t?t(e):e)),[t]),a=(0,i.useMemo)((()=>({suppressTextValueWarning:e.suppressTextValueWarning})),[e.suppressTextValueWarning]),d=(0,o.a)(e,s,a),c=(0,i.useMemo)((()=>new o.b(d,l)),[d,l]);const u=(0,i.useRef)(null);return(0,i.useEffect)((()=>{if(null!=l.focusedKey&&!d.getItem(l.focusedKey)){const e=u.current.getItem(l.focusedKey),t=[...u.current.getKeys()].map((e=>{const t=u.current.getItem(e);return"item"===t.type?t:null})).filter((e=>null!==e)),o=[...d.getKeys()].map((e=>{const t=d.getItem(e);return"item"===t.type?t:null})).filter((e=>null!==e)),i=t.length-o.length;let r,n=Math.min(i>1?Math.max(e.index-i+1,0):e.index,o.length-1),s=!1;for(;n>=0;){if(!c.isDisabled(o[n].key)){r=o[n];break}n<o.length-1&&!s?n++:(s=!0,n>e.index&&(n=e.index),n--)}l.setFocusedKey(r?r.key:null)}u.current=d}),[d,c,l,l.focusedKey]),{collection:d,disabledKeys:n,selectionManager:c}}}}]);