!function(){var e={184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.i18n,t=window.wp.element,n=window.wp.primitives,o=(0,t.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(n.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"})),l=window.wp.blocks;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var i=r(184),s=r.n(i),c=window.wp.components,u=window.wp.blockEditor,p=window.wp.keycodes,m=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),d=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),_=window.wp.compose,f=window.wp.url;const g="noreferrer noopener";function h(r){let{selectedWidth:n,setAttributes:o}=r;return(0,t.createElement)(c.PanelBody,{title:(0,e.__)("Width settings")},(0,t.createElement)(c.ButtonGroup,{"aria-label":(0,e.__)("Button width")},[25,50,75,100].map((e=>(0,t.createElement)(c.Button,{key:e,isSmall:!0,variant:e===n?"primary":void 0,onClick:()=>{var t;o({width:n===(t=e)?void 0:t})}},e,"%")))))}var b=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"frm-modal/modal-button","title":"Frm Modal Button","category":"widgets","description":"Prompt visitors to take action with a button-style link.","keywords":["link"],"editorScript":"file:./index.js","textdomain":"frmmodal","attributes":{"textAlign":{"type":"string"},"url":{"type":"string","source":"attribute","selector":"a","attribute":"href","__experimentalRole":"content"},"title":{"type":"string","source":"attribute","selector":"a","attribute":"title","__experimentalRole":"content"},"text":{"type":"string","source":"html","selector":"a","__experimentalRole":"content"},"rel":{"type":"string","source":"attribute","selector":"a","attribute":"rel","__experimentalRole":"content"},"placeholder":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"gradient":{"type":"string"},"width":{"type":"number"}},"supports":{"anchor":false,"align":false,"alignWide":false,"color":{"__experimentalSkipSerialization":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"reusable":false,"shadow":true,"spacing":{"__experimentalSkipSerialization":true,"padding":["horizontal","vertical"],"__experimentalDefaultControls":{"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalSkipSerialization":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"__experimentalSelector":".wp-block-frm-modal-button .wp-block-frm-modal-button__link"},"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"editorStyle":"wp-block-frm-modal-button-editor","style":"wp-block-frm-modal-button"}');console.log(b);const{name:w}=b;(0,l.registerBlockType)({name:w,...b,...!["frm-modal/modal-button"].includes(w)&&supports?.color?.gradients?{supports:{...supports,color:{...supports.color,gradients:!1}}}:{}},{icon:o,example:{attributes:{className:"is-style-fill",text:(0,e.__)("Call to Action")}},edit:function(r){const{attributes:n,setAttributes:o,className:i,isSelected:b,onReplace:w,mergeBlocks:v}=r,{textAlign:x,linkTarget:y,placeholder:k,rel:S,style:E,text:C,url:B,width:N}=n,[H,z]=(0,t.useState)(null),A=(0,u.__experimentalUseBorderProps)(n),T=(0,u.__experimentalUseColorProps)(n),P=(0,u.__experimentalGetSpacingClassesAndStyles)(n),O=(0,t.useRef)(),R=(0,t.useRef)(),M=(0,u.useBlockProps)({ref:(0,_.useMergeRefs)([z,O]),onKeyDown:function(e){p.isKeyboardEvent.primary(e,"k")?I(e):p.isKeyboardEvent.primaryShift(e,"k")&&(V(),R.current?.focus())}}),[j,G]=(0,t.useState)(!1),D=!!B,F="_blank"===y;function I(e){e.preventDefault(),G(!0)}function V(){o({url:void 0,linkTarget:void 0,rel:void 0}),G(!1)}return(0,t.useEffect)((()=>{b||G(!1)}),[b]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",a({},M,{className:s()(M.className,{[`has-custom-width wp-block-frm-modal-button__width-${N}`]:N,"has-custom-font-size":M.style.fontSize})}),(0,t.createElement)(u.RichText,{ref:R,"aria-label":(0,e.__)("Button text"),placeholder:k||(0,e.__)("Add text…"),value:C,onChange:e=>{o({text:e.replace(/<\/?a[^>]*>/g,"")})},withoutInteractiveFormatting:!0,className:s()(i,"wp-block-frm-modal-button__link",T.className,A.className,{[`has-text-align-${x}`]:x,"no-border-radius":0===E?.border?.radius},(0,u.__experimentalGetElementClassName)("button")),style:{...A.style,...T.style,...P.style},onSplit:e=>(0,l.createBlock)("core/button",{...n,text:e}),onReplace:w,onMerge:v,identifier:"text"})),(0,t.createElement)(u.BlockControls,{group:"block"},(0,t.createElement)(u.AlignmentControl,{value:x,onChange:e=>{o({textAlign:e})}}),!D&&(0,t.createElement)(c.ToolbarButton,{name:"link",icon:m,title:(0,e.__)("Link"),shortcut:p.displayShortcut.primary("k"),onClick:I}),D&&(0,t.createElement)(c.ToolbarButton,{name:"link",icon:d,title:(0,e.__)("Unlink"),shortcut:p.displayShortcut.primaryShift("k"),onClick:V,isActive:!0})),b&&(j||D)&&(0,t.createElement)(c.Popover,{placement:"bottom",onClose:()=>{G(!1),R.current?.focus()},anchor:H,focusOnMount:!!j&&"firstElement",__unstableSlotName:"__unstable-block-tools-after",shift:!0},(0,t.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:B,opensInNewTab:F},onChange:e=>{let{url:t="",opensInNewTab:r}=e;o({url:(0,f.prependHTTP)(t)}),F!==r&&function(e){const t=e?"_blank":void 0;let r=S;t&&!S?r=g:t||S!==g||(r=void 0),o({linkTarget:t,rel:r})}(r)},onRemove:()=>{V(),R.current?.focus()},forceIsEditingLink:j})),(0,t.createElement)(u.InspectorControls,null,(0,t.createElement)(h,{selectedWidth:N,setAttributes:o})),(0,t.createElement)(u.InspectorControls,{group:"advanced"},(0,t.createElement)(c.TextControl,{__nextHasNoMarginBottom:!0,label:(0,e.__)("Link rel"),value:S||"",onChange:e=>o({rel:e})})))},save:function(e){let{attributes:r,className:n}=e;const{textAlign:o,fontSize:l,linkTarget:a,rel:i,style:c,text:p,title:m,url:d,width:_}=r;if(!p)return null;const f=(0,u.__experimentalGetBorderClassesAndStyles)(r),g=(0,u.__experimentalGetColorClassesAndStyles)(r),h=(0,u.__experimentalGetSpacingClassesAndStyles)(r),b=s()("wp-block-frm-modal-button__link",g.className,f.className,{[`has-text-align-${o}`]:o,"no-border-radius":0===c?.border?.radius},(0,u.__experimentalGetElementClassName)("button")),w={...f.style,...g.style,...h.style},v=s()(n,{[`has-custom-width wp-block-frm-modal-button__width-${_}`]:_,"has-custom-font-size":l||c?.typography?.fontSize});return(0,t.createElement)("div",u.useBlockProps.save({className:v}),(0,t.createElement)(u.RichText.Content,{tagName:"a",className:b,href:d,title:m,style:w,value:p,target:a,rel:i}))},merge:(e,t)=>{let{text:r=""}=t;return{...e,text:(e.text||"")+r}}})}()}();