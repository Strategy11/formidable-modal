!function(){var e={184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.i18n,t=window.wp.element,a=window.wp.primitives,n=(0,t.createElement)(a.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(a.Path,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"})),l=window.wp.blocks,o=window.wp.data,i=window.wp.blockEditor,s=window.wp.components,c=r(184),m=r.n(c);const u=()=>(0,t.createElement)("a",{className:"close frm_icon_font frm_cancel1_icon alignright","data-dismiss":"modal"}),d=e=>{let{title:r}=e;return(0,t.createElement)("div",{className:"modal-header"},(0,t.createElement)(u,null),(0,t.createElement)("h4",{className:"modal-title"},r))},p=e=>m()("modal-dialog",e.size);var _=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"frm-modal/content","title":"Formidable Modal Content","category":"widgets","parent":["frm-modal/modal"],"description":"Gather blocks in a layout container.","keywords":["container","wrapper","row","section"],"editorScript":"file:./index.js","textdomain":"frmmodal","attributes":{"title":{"type":"string","source":"html","selector":".modal-title"},"size":{"type":"string","source":"attribute","selector":".modal-dialog","attribute":"data-size"},"allowedBlocks":{"type":"array"}},"supports":{"__experimentalOnEnter":true,"__experimentalSettings":true,"ariaLabel":true,"html":false,"inserter":false,"lock":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"padding":true,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"dimensions":{"minHeight":false},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalLayout":{"allowSizingOnChildren":true}},"editorStyle":"wp-block-group-editor","style":"wp-block-group"}');const{name:f}=_,v={icon:n,edit:function(r){let{attributes:a,name:n,setAttributes:l,clientId:c,__unstableLayoutClassNames:m}=r;const{hasInnerBlocks:d}=(0,o.useSelect)((e=>{const{getBlock:t}=e(i.store),r=t(c);return{hasInnerBlocks:!(!r||!r.innerBlocks.length)}}),[c]),_=(0,i.useBlockProps)({className:m}),f=d?void 0:i.InnerBlocks.ButtonBlockAppender,v=(0,i.useInnerBlocksProps)({className:"wp-block-group__inner-container"},{renderAppender:f,__unstableDisableLayoutClassNames:!0,templateLock:!1});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.InspectorControls,{group:"settings"},(0,t.createElement)(s.PanelBody,{opened:!0},(0,t.createElement)(s.SelectControl,{label:(0,e.__)("Modal dialog size","frmmodal"),options:[{label:(0,e.__)("Default","frmmodal"),value:""},{label:(0,e.__)("Small","frmmodal"),value:"modal-sm"},{label:(0,e.__)("Large","frmmodal"),value:"modal-lg"}],value:a.size,onChange:e=>l({size:e})}))),(0,t.createElement)("div",_,(0,t.createElement)("div",{className:p(a),"data-size":a.size},(0,t.createElement)("div",{className:"modal-content"},(0,t.createElement)("div",{className:"frm_modal_header"},(0,t.createElement)(u,null),(0,t.createElement)(i.RichText,{tagName:"div",className:"frm_modal_title",value:a.title,onChange:e=>l({title:e}),placeholder:(0,e.__)("Modal title","frmmodal")})),(0,t.createElement)("div",{className:"frm_modal_body"},(0,t.createElement)("div",v))))))},save:function(e){let{attributes:r}=e;const a=i.useBlockProps.save(),n=i.useInnerBlocksProps.save();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",a,(0,t.createElement)("div",{className:p(r),"data-size":r.size},(0,t.createElement)("div",{className:"modal-content"},(0,t.createElement)(d,{title:r.title}),(0,t.createElement)("div",{className:"frm_modal_body"},(0,t.createElement)("div",n))))))}};(0,l.registerBlockType)({name:f,..._},v)}()}();