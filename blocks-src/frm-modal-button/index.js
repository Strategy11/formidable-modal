import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import { useSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';

const Edit = props => {
	const { attributes, setAttributes, isSelected } = props;

	const { WPButton } = useSelect( select => ( {
		WPButton: select( 'core/blocks' ).getBlockType( 'core/button' ),
	} ) );

	return (
		<>
			<WPButton.edit { ...props } />
			<InspectorControls>
				Test
			</InspectorControls>
		</>
	);
};

registerBlockType( metadata.name, {
	edit: Edit
});
