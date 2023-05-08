import { useSelect } from '@wordpress/data';
import {
	RichText,
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { CloseButton, getModalDialogClassNames } from './helpers';

function GroupEdit( {
	attributes,
	name,
	setAttributes,
	clientId,
	__unstableLayoutClassNames: layoutClassNames,
} ) {
	const { hasInnerBlocks } = useSelect(
		( select ) => {
			const { getBlock } = select( blockEditorStore );
			const block = getBlock( clientId );
			return {
				hasInnerBlocks: !! ( block && block.innerBlocks.length ),
			};
		},
		[ clientId ]
	);

	// Hooks.
	const blockProps = useBlockProps( {
		className: layoutClassNames,
	} );

	// Default to the regular appender being rendered.
	const renderAppender = hasInnerBlocks ? undefined : InnerBlocks.ButtonBlockAppender;

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'wp-block-group__inner-container'
		},
		{
			renderAppender,
			__unstableDisableLayoutClassNames: true,
			templateLock: false,
		}
	);

	return (
		<>
			<InspectorControls group="settings">
				<PanelBody opened={ true }>
					<SelectControl
						label={ __( 'Modal dialog size', 'frmmodal' ) }
						options={ [
							{ label: __( 'Default', 'frmmodal' ), value: '' },
							{ label: __( 'Small', 'frmmodal' ), value: 'modal-sm' },
							{ label: __( 'Large', 'frmmodal' ), value: 'modal-lg' },
						] }
						value={ attributes.size }
						onChange={ size => setAttributes( { size } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className={ getModalDialogClassNames( attributes ) } data-size={ attributes.size }>
					<div className="modal-content">
						<div className="frm_modal_header">
							<CloseButton />

							<RichText
								tagName="div"
								className="frm_modal_title"
								value={ attributes.title }
								onChange={ title => setAttributes( { title } ) }
								placeholder={ __( 'Modal title', 'frmmodal' ) }
							/>
						</div>

						<div className="frm_modal_body">
							<div { ...innerBlocksProps } />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default GroupEdit;
