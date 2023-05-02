import { useBlockProps, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';
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
	[ 'core/button', {
		rel: false
	} ],
	[
		'core/group',
		{
			tagName: 'div',
			templateLock: false,
			layout: {
				type: 'constrained'
			}
		},
		[
			[
				'core/heading',
				{
					level: 2,
					content: 'Modal heading'
				}
			]
		]
	],
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
