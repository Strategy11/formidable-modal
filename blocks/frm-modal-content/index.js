!function(){"use strict";window.wp.i18n;var e=window.wp.element,t=window.wp.primitives,r=(0,e.createElement)(t.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(t.Path,{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"})),n=window.wp.blocks,o=window.wp.data,a=window.wp.blockEditor;window.wp.components;var l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"frm-modal/content","title":"Formidable Modal Content","category":"widgets","parent":["frm-modal/modal"],"description":"Gather blocks in a layout container.","keywords":["container","wrapper","row","section"],"editorScript":"file:./index.js","textdomain":"frmmodal","attributes":{"allowedBlocks":{"type":"array"}},"supports":{"__experimentalOnEnter":true,"__experimentalSettings":true,"ariaLabel":true,"html":false,"inserter":false,"lock":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"padding":true,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"dimensions":{"minHeight":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalLayout":{"allowSizingOnChildren":true}},"editorStyle":"wp-block-group-editor","style":"wp-block-group"}');const{name:i}=l,s={icon:r,edit:function(t){let{attributes:r,name:n,setAttributes:l,clientId:i,__unstableLayoutClassNames:s}=t;const{hasInnerBlocks:c}=(0,o.useSelect)((e=>{const{getBlock:t}=e(a.store),r=t(i);return{hasInnerBlocks:!(!r||!r.innerBlocks.length)}}),[i]),u=(0,a.useBlockProps)({className:s}),p=c?void 0:a.InnerBlocks.ButtonBlockAppender,m=(0,a.useInnerBlocksProps)({className:"wp-block-group__inner-container"},{renderAppender:p,__unstableDisableLayoutClassNames:!0,templateLock:!1});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",u,(0,e.createElement)("div",m)))},save:function(){return(0,e.createElement)("div",a.useInnerBlocksProps.save(a.useBlockProps.save()))}};(0,n.registerBlockType)({name:i,...l},s)}();