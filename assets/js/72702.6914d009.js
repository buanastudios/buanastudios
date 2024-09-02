"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[72702],{72702:(e,t,n)=>{n.d(t,{$:()=>Y,a:()=>H,b:()=>A,c:()=>S,d:()=>C,e:()=>M,f:()=>m,g:()=>y,h:()=>T,i:()=>E,j:()=>x});var r=n(67680),o=n(5599),a=n(35971),i=n(96540),u=n(22399),l=n(1234),s=n(8064),d=n(74741),c=n(8775),p=n(29116),g=n(945),h=n(52973),b=n(74702),v=n(35952);function m(e){let{onMoveStart:t,onMove:n,onMoveEnd:o}=e,a=(0,i.useRef)({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:u,removeGlobalListener:l}=(0,d.$)(),s=(0,r.f)(((e,r,o,i)=>{0===o&&0===i||(a.current.didMove||(a.current.didMove=!0,null==t||t({type:"movestart",pointerType:r,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})),null==n||n({type:"move",pointerType:r,deltaX:o,deltaY:i,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey}))})),c=(0,r.f)(((e,t)=>{(0,d.a)(),a.current.didMove&&(null==o||o({type:"moveend",pointerType:t,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey}))}));return{moveProps:(0,i.useMemo)((()=>{let e={},t=()=>{(0,d.b)(),a.current.didMove=!1};if("undefined"==typeof PointerEvent){let n=e=>{var t,n,r,o;0===e.button&&(s(e,"mouse",e.pageX-(null!==(r=null===(t=a.current.lastPosition)||void 0===t?void 0:t.pageX)&&void 0!==r?r:0),e.pageY-(null!==(o=null===(n=a.current.lastPosition)||void 0===n?void 0:n.pageY)&&void 0!==o?o:0)),a.current.lastPosition={pageX:e.pageX,pageY:e.pageY})},r=e=>{0===e.button&&(c(e,"mouse"),l(window,"mousemove",n,!1),l(window,"mouseup",r,!1))};e.onMouseDown=e=>{0===e.button&&(t(),e.stopPropagation(),e.preventDefault(),a.current.lastPosition={pageX:e.pageX,pageY:e.pageY},u(window,"mousemove",n,!1),u(window,"mouseup",r,!1))};let o=e=>{let t=[...e.changedTouches].findIndex((({identifier:e})=>e===a.current.id));if(t>=0){var n,r;let{pageX:u,pageY:l}=e.changedTouches[t];var o,i;s(e,"touch",u-(null!==(o=null===(n=a.current.lastPosition)||void 0===n?void 0:n.pageX)&&void 0!==o?o:0),l-(null!==(i=null===(r=a.current.lastPosition)||void 0===r?void 0:r.pageY)&&void 0!==i?i:0)),a.current.lastPosition={pageX:u,pageY:l}}},i=e=>{[...e.changedTouches].findIndex((({identifier:e})=>e===a.current.id))>=0&&(c(e,"touch"),a.current.id=null,l(window,"touchmove",o),l(window,"touchend",i),l(window,"touchcancel",i))};e.onTouchStart=e=>{if(0===e.changedTouches.length||null!=a.current.id)return;let{pageX:n,pageY:r,identifier:l}=e.changedTouches[0];t(),e.stopPropagation(),e.preventDefault(),a.current.lastPosition={pageX:n,pageY:r},a.current.id=l,u(window,"touchmove",o,!1),u(window,"touchend",i,!1),u(window,"touchcancel",i,!1)}}else{let n=e=>{if(e.pointerId===a.current.id){var t,n;let i=e.pointerType||"mouse";var r,o;s(e,i,e.pageX-(null!==(r=null===(t=a.current.lastPosition)||void 0===t?void 0:t.pageX)&&void 0!==r?r:0),e.pageY-(null!==(o=null===(n=a.current.lastPosition)||void 0===n?void 0:n.pageY)&&void 0!==o?o:0)),a.current.lastPosition={pageX:e.pageX,pageY:e.pageY}}},r=e=>{if(e.pointerId===a.current.id){let t=e.pointerType||"mouse";c(e,t),a.current.id=null,l(window,"pointermove",n,!1),l(window,"pointerup",r,!1),l(window,"pointercancel",r,!1)}};e.onPointerDown=e=>{0===e.button&&null==a.current.id&&(t(),e.stopPropagation(),e.preventDefault(),a.current.lastPosition={pageX:e.pageX,pageY:e.pageY},a.current.id=e.pointerId,u(window,"pointermove",n,!1),u(window,"pointerup",r,!1),u(window,"pointercancel",r,!1))}}let n=(e,n,r)=>{t(),s(e,"keyboard",n,r),c(e,"keyboard")};return e.onKeyDown=e=>{switch(e.key){case"Left":case"ArrowLeft":e.preventDefault(),e.stopPropagation(),n(e,-1,0);break;case"Right":case"ArrowRight":e.preventDefault(),e.stopPropagation(),n(e,1,0);break;case"Up":case"ArrowUp":e.preventDefault(),e.stopPropagation(),n(e,0,-1);break;case"Down":case"ArrowDown":e.preventDefault(),e.stopPropagation(),n(e,0,1)}},e}),[a,u,l,s,c])}}const f=new WeakMap;function w(e,t){let n=f.get(e);if(!n)throw new Error("Unknown slider state");return`${n.id}-${t}`}function y(e,t,n){let{labelProps:o,fieldProps:a}=(0,c.$)(e),u="vertical"===e.orientation;var g;f.set(t,{id:null!==(g=o.id)&&void 0!==g?g:a.id,"aria-describedby":e["aria-describedby"],"aria-details":e["aria-details"]});let{direction:h}=(0,p.$)(),{addGlobalListener:b,removeGlobalListener:v}=(0,d.$)();const y=(0,i.useRef)(null),T="rtl"===h,P=(0,i.useRef)(null),{moveProps:D}=m({onMoveStart(){P.current=null},onMove({deltaX:e,deltaY:r}){let{height:o,width:a}=n.current.getBoundingClientRect(),i=u?o:a;null==P.current&&(P.current=t.getThumbPercent(y.current)*i);let l=u?r:e;if((u||T)&&(l=-l),P.current+=l,null!=y.current&&n.current){const e=(0,s.$)(P.current/i,0,1);t.setThumbPercent(y.current,e)}},onMoveEnd(){null!=y.current&&(t.setThumbDragging(y.current,!1),y.current=null)}});let K=(0,i.useRef)(void 0),M=(r,o,a,i)=>{if(n.current&&!e.isDisabled&&t.values.every(((e,n)=>!t.isThumbDragging(n)))){let{height:e,width:l,top:s,left:d}=n.current.getBoundingClientRect();let c=((u?i:a)-(u?s:d))/(u?e:l);("rtl"===h||u)&&(c=1-c);let p,g=t.getPercentValue(c),v=t.values.findIndex((e=>g-e<0));if(0===v)p=v;else if(-1===v)p=t.values.length-1;else{let e=t.values[v-1],n=t.values[v];p=Math.abs(e-g)<Math.abs(n-g)?v-1:v}p>=0&&t.isThumbEditable(p)?(r.preventDefault(),y.current=p,t.setFocusedThumb(p),K.current=o,t.setThumbDragging(y.current,!0),t.setThumbValue(p,g),b(window,"mouseup",k,!1),b(window,"touchend",k,!1),b(window,"pointerup",k,!1)):y.current=null}},k=e=>{var n,r;(null!==(r=e.pointerId)&&void 0!==r?r:null===(n=e.changedTouches)||void 0===n?void 0:n[0].identifier)===K.current&&(null!=y.current&&(t.setThumbDragging(y.current,!1),y.current=null),v(window,"mouseup",k,!1),v(window,"touchend",k,!1),v(window,"pointerup",k,!1))};return"htmlFor"in o&&o.htmlFor&&(delete o.htmlFor,o.onClick=()=>{var e;null===(e=document.getElementById(w(t,0)))||void 0===e||e.focus(),(0,l.i)("keyboard")}),{labelProps:o,groupProps:{role:"group",...a},trackProps:(0,r.c)({onMouseDown(e){0!==e.button||e.altKey||e.ctrlKey||e.metaKey||M(e,void 0,e.clientX,e.clientY)},onPointerDown(e){"mouse"===e.pointerType&&(0!==e.button||e.altKey||e.ctrlKey||e.metaKey)||M(e,e.pointerId,e.clientX,e.clientY)},onTouchStart(e){M(e,e.changedTouches[0].identifier,e.changedTouches[0].clientX,e.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},D),outputProps:{htmlFor:t.values.map(((e,n)=>w(t,n))).join(" "),"aria-live":"off"}}}function T(e,t){let{index:n=0,isRequired:o,validationState:a,isInvalid:u,trackRef:b,inputRef:v,orientation:y=t.orientation,name:T}=e,P=e.isDisabled||t.isDisabled,D="vertical"===y,{direction:K}=(0,p.$)(),{addGlobalListener:M,removeGlobalListener:k}=(0,d.$)(),V=f.get(t);var R;const{labelProps:$,fieldProps:C}=(0,c.$)({...e,id:w(t,n),"aria-labelledby":`${V.id} ${null!==(R=e["aria-labelledby"])&&void 0!==R?R:""}`.trim()}),E=t.values[n],x=(0,i.useCallback)((()=>{v.current&&(0,l.m)(v.current)}),[v]),X=t.focusedThumb===n;(0,i.useEffect)((()=>{X&&x()}),[X,x]);let Y="rtl"===K,F=(0,i.useRef)(null),{keyboardProps:S}=(0,h.a)({onKeyDown(e){let{getThumbMaxValue:r,getThumbMinValue:o,decrementThumb:a,incrementThumb:i,setThumbValue:u,setThumbDragging:l,pageSize:s}=t;if(/^(PageUp|PageDown|Home|End)$/.test(e.key)){switch(e.preventDefault(),l(n,!0),e.key){case"PageUp":i(n,s);break;case"PageDown":a(n,s);break;case"Home":u(n,o(n));break;case"End":u(n,r(n))}l(n,!1)}else e.continuePropagation()}}),{moveProps:I}=m({onMoveStart(){F.current=null,t.setThumbDragging(n,!0)},onMove({deltaX:e,deltaY:r,pointerType:o,shiftKey:a}){const{getThumbPercent:i,setThumbPercent:u,decrementThumb:l,incrementThumb:d,step:c,pageSize:p}=t;let{width:g,height:h}=b.current.getBoundingClientRect(),v=D?h:g;if(null==F.current&&(F.current=i(n)*v),"keyboard"===o)e>0&&Y||e<0&&!Y||r>0?l(n,a?p:c):d(n,a?p:c);else{let t=D?r:e;(D||Y)&&(t=-t),F.current+=t,u(n,(0,s.$)(F.current/v,0,1))}},onMoveEnd(){t.setThumbDragging(n,!1)}});t.setThumbEditable(n,!P);const{focusableProps:H}=(0,h.$)((0,r.c)(e,{onFocus:()=>t.setFocusedThumb(n),onBlur:()=>t.setFocusedThumb(void 0)}),v);let L=(0,i.useRef)(void 0),A=e=>{x(),L.current=e,t.setThumbDragging(n,!0),M(window,"mouseup",B,!1),M(window,"touchend",B,!1),M(window,"pointerup",B,!1)},B=e=>{var r,o;(null!==(o=e.pointerId)&&void 0!==o?o:null===(r=e.changedTouches)||void 0===r?void 0:r[0].identifier)===L.current&&(x(),t.setThumbDragging(n,!1),k(window,"mouseup",B,!1),k(window,"touchend",B,!1),k(window,"pointerup",B,!1))},j=t.getThumbPercent(n);(D||"rtl"===K)&&(j=1-j);let G=P?{}:(0,r.c)(S,I,{onMouseDown:e=>{0!==e.button||e.altKey||e.ctrlKey||e.metaKey||A()},onPointerDown:e=>{0!==e.button||e.altKey||e.ctrlKey||e.metaKey||A(e.pointerId)},onTouchStart:e=>{A(e.changedTouches[0].identifier)}});return(0,g.$)(v,E,(e=>{t.setThumbValue(n,e)})),{inputProps:(0,r.c)(H,C,{type:"range",tabIndex:P?void 0:0,min:t.getThumbMinValue(n),max:t.getThumbMaxValue(n),step:t.step,value:E,name:T,disabled:P,"aria-orientation":y,"aria-valuetext":t.getThumbValueLabel(n),"aria-required":o||void 0,"aria-invalid":u||"invalid"===a||void 0,"aria-errormessage":e["aria-errormessage"],"aria-describedby":[V["aria-describedby"],e["aria-describedby"]].filter(Boolean).join(" "),"aria-details":[V["aria-details"],e["aria-details"]].filter(Boolean).join(" "),onChange:e=>{t.setThumbValue(n,parseFloat(e.target.value))}}),thumbProps:{...G,style:{position:"absolute",[D?"top":"left"]:100*j+"%",transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:$,isDragging:t.isThumbDragging(n),isDisabled:P,isFocused:X}}const P=0,D=100,K=1;function M(e){const{isDisabled:t=!1,minValue:n=P,maxValue:r=D,numberFormatter:o,step:a=K,orientation:u="horizontal"}=e;let d=(0,i.useMemo)((()=>{let e=(r-n)/10;return e=(0,s.a)(e,0,e+a,a),Math.max(e,a)}),[a,r,n]),c=(0,i.useCallback)((e=>null==e?void 0:e.map(((t,o)=>{let i=0===o?n:t[o-1],u=o===e.length-1?r:t[o+1];return(0,s.a)(t,i,u,a)}))),[n,r,a]),p=(0,i.useMemo)((()=>c(V(e.value))),[e.value]),g=(0,i.useMemo)((()=>{var t;return c(null!==(t=V(e.defaultValue))&&void 0!==t?t:[n])}),[e.defaultValue,n]),h=R(e.value,e.defaultValue,e.onChange),b=R(e.value,e.defaultValue,e.onChangeEnd);const[v,m]=(0,l.e)(p,g,h),[f,w]=(0,i.useState)(new Array(v.length).fill(!1)),y=(0,i.useRef)(new Array(v.length).fill(!0)),[T,M]=(0,i.useState)(void 0),$=(0,i.useRef)(v),C=(0,i.useRef)(f);let E=e=>{$.current=e,m(e)};function x(e){return(e-n)/(r-n)}function X(e){return 0===e?n:v[e-1]}function Y(e){return e===v.length-1?r:v[e+1]}function F(e){return y.current[e]}function S(e,n){if(t||!F(e))return;const r=X(e),o=Y(e);n=(0,s.a)(n,r,o,a);let i=k($.current,e,n);E(i)}function I(e){return o.format(e)}function H(e){const t=e*(r-n)+n;return(0,s.$)((o=t,Math.round((o-n)/a)*a+n),n,r);var o}return{values:v,getThumbValue:e=>v[e],setThumbValue:S,setThumbPercent:function(e,t){S(e,H(t))},isThumbDragging:e=>f[e],setThumbDragging:function(e,n){if(t||!F(e))return;n&&($.current=v);const r=C.current[e];var o;C.current=k(C.current,e,n),o=C.current,C.current=o,w(o),b&&r&&!C.current.some(Boolean)&&b($.current)},focusedThumb:T,setFocusedThumb:M,getThumbPercent:e=>x(v[e]),getValuePercent:x,getThumbValueLabel:e=>I(v[e]),getFormattedValue:I,getThumbMinValue:X,getThumbMaxValue:Y,getPercentValue:H,isThumbEditable:F,setThumbEditable:function(e,t){y.current[e]=t},incrementThumb:function(e,t=1){let o=Math.max(t,a);S(e,(0,s.a)(v[e]+o,n,r,a))},decrementThumb:function(e,t=1){let o=Math.max(t,a);S(e,(0,s.a)(v[e]-o,n,r,a))},step:a,pageSize:d,orientation:u,isDisabled:t}}function k(e,t,n){return e[t]===n?e:[...e.slice(0,t),n,...e.slice(t+1)]}function V(e){if(null!=e)return Array.isArray(e)?e:[e]}function R(e,t,n){return r=>{"number"==typeof e||"number"==typeof t?null==n||n(r[0]):null==n||n(r)}}const $=(0,i.createContext)(null),C=(0,i.createContext)(null),E=(0,i.createContext)(null),x=(0,i.createContext)(null);function X(e,t){[e,t]=(0,r.a)(e,t,$);let n=(0,i.useRef)(null),l=(0,u.$)(e.formatOptions),s=M({...e,numberFormatter:l}),[d,c]=(0,r.h)(),{groupProps:p,trackProps:g,labelProps:h,outputProps:b}=y({...e,label:c},s,n),v=(0,r.b)({...e,values:{orientation:s.orientation,isDisabled:s.isDisabled,state:s},defaultClassName:"react-aria-Slider"}),m=(0,a.$)(e);return delete m.id,i.createElement(r.j,{values:[[C,s],[E,{...g,ref:n}],[x,b],[o.a,{...h,ref:d}]]},i.createElement("div",{...m,...p,...v,ref:t,slot:e.slot||void 0,"data-orientation":s.orientation,"data-disabled":s.isDisabled||void 0}))}const Y=(0,i.forwardRef)(X);function F(e,t){[e,t]=(0,r.a)(e,t,x);let{children:n,style:o,className:a,...u}=e,l=(0,i.useContext)(C),s=(0,r.b)({className:a,style:o,children:n,defaultChildren:l.getThumbValueLabel(0),defaultClassName:"react-aria-SliderOutput",values:{orientation:l.orientation,isDisabled:l.isDisabled,state:l}});return i.createElement("output",{...u,...s,ref:t,"data-orientation":l.orientation||void 0,"data-disabled":l.isDisabled||void 0})}const S=(0,i.forwardRef)(F);function I(e,t){[e,t]=(0,r.a)(e,t,E);let n=(0,i.useContext)(C),{onHoverStart:o,onHoverEnd:a,onHoverChange:u,...s}=e,{hoverProps:d,isHovered:c}=(0,l.$)({onHoverStart:o,onHoverEnd:a,onHoverChange:u}),p=(0,r.b)({...e,defaultClassName:"react-aria-SliderTrack",values:{orientation:n.orientation,isDisabled:n.isDisabled,isHovered:c,state:n}});return i.createElement("div",{...(0,r.c)(s,d),...p,ref:t,"data-hovered":c||void 0,"data-orientation":n.orientation||void 0,"data-disabled":n.isDisabled||void 0})}const H=(0,i.forwardRef)(I);function L(e,t){let{inputRef:n=null}=e,u=(0,i.useContext)(C),{ref:s}=(0,r.$)(E),{index:d=0}=e,c=(0,i.useRef)(null),p=n||c,[g,h]=(0,r.h)(),{thumbProps:m,inputProps:f,labelProps:w,isDragging:y,isFocused:P,isDisabled:D}=T({...e,index:d,trackRef:s,inputRef:p,label:h},u),{focusProps:K,isFocusVisible:M}=(0,b.$)(),{hoverProps:k,isHovered:V}=(0,l.$)(e),R=(0,r.b)({...e,defaultClassName:"react-aria-SliderThumb",values:{state:u,isHovered:V,isDragging:y,isFocused:P,isFocusVisible:M,isDisabled:D}}),$=(0,a.$)(e);return delete $.id,i.createElement("div",{...(0,r.c)($,m,k),...R,ref:t,style:{...m.style,...R.style},"data-hovered":V||void 0,"data-dragging":y||void 0,"data-focused":P||void 0,"data-focus-visible":M||void 0,"data-disabled":D||void 0},i.createElement(v.$,null,i.createElement("input",{ref:p,...(0,r.c)(f,K)})),i.createElement(r.j,{values:[[o.a,{...w,ref:g}]]},R.children))}const A=(0,i.forwardRef)(L)}}]);