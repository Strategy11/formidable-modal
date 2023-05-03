import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

const Edit = ( { attributes, setAttributes } ) => {
	const onChangeLabel = newLabel => {
		console.log( newLabel );
		setAttributes( { button_label: newLabel } );
	};

	const blockProps = useBlockProps();
	blockProps.className = blockProps.className + ' ' + 'frm_modal_button';

	return (
		<>
			<RichText
				{ ...blockProps }
				tagName="p"
				onChange={ onChangeLabel }
				value={ attributes.button_label }
			/>

			<div className="frm_modal_content_wrapper">
				<InnerBlocks />
			</div>
		</>
	)
};

registerBlockType( metadata.name, {
	edit: Edit,
	// save: () => {
	// 	return <InnerBlocks.Content />
	// },
	attributes: metadata.attributes,
	supports: metadata.supports
});
