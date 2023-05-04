import { useBlockProps, useInnerBlocksProps, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	TextControl,
	RadioControl,
	Panel,
	PanelBody,
	PanelRow,
	Button,
	ButtonGroup,
	BlockStyles,
	DefaultStylePicker,
	AlignmentControl,
	BlockControls
} from '@wordpress/components';

const MY_TEMPLATE = [
	[
		'core/buttons',
		{
			lock: {
				move: true,
				remove: true
			}
		},
		[
			[
				'frm-modal/button',
				{
					lock: {
						move: true,
						remove: true
					}
				}
			]
		]
	],
	[
		'frm-modal/content',
		{}
	],
];

const MODAL_TEMPLATE = [
	[ 'core/button', {
		lock: {
			move: false,
			remove: false
		}
	} ],
];

export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
			<div { ...useBlockProps() }>
				<InnerBlocks
					template={ MY_TEMPLATE }
					templateLock="all"
				/>
			</div>
		</>
	);
}
