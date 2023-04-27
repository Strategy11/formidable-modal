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
		lock: false,
		attributes: {
			rel: false,
		}
	} ],
	[ 'core/group', {
		tagName: 'div',
		layout: 'constrained'
	} ],
];

export default function Edit( { attributes, setAttributes } ) {
	const { buttonWidth, buttonStyle, buttonText } = attributes;

	const setButtonText = ( newText ) => {
		// Remove anchor tags from button text content.
		setAttributes( { text: newText.replace( /<\/?a[^>]*>/g, '' ) } );
	}

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
