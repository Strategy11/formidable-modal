import { useSelect } from '@wordpress/data';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { SelectControl, PanelBody, ColorPicker } from '@wordpress/components';
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

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'wp-block-group__inner-container'
		},
		{
			__unstableDisableLayoutClassNames: true,
			templateLock: false,
		}
	);

	const onClickResetOverlayColor = event => {
		event.preventDefault();

		setAttributes( { overlayColor: '' } );
	};

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

				<PanelBody opened={ true }>
					<h3>{ __( 'Overlay color', 'frmmodal' ) }</h3>

					<p>
						<a href="#" onClick={ onClickResetOverlayColor }>{ __( 'Reset color', 'frmmodal' ) }</a>
					</p>

					<ColorPicker
						enableAlpha
						color={ attributes.overlayColor }
						onChange={ overlayColor => setAttributes( { overlayColor } ) }
						copyFormat="rgb"
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="frm_modal_overlay" style={ { backgroundColor: attributes.overlayColor } }></div>

				<div className={ getModalDialogClassNames( attributes ) } data-size={ attributes.size }>
					<div className="modal-content">
						<div className="modal-header">
							<RichText
								tagName="div"
								className="modal-title"
								value={ attributes.title }
								onChange={ title => setAttributes( { title } ) }
								placeholder={ __( 'Modal title', 'frmmodal' ) }
							/>

							<CloseButton />
						</div>

						<div className="modal-body">
							<div { ...innerBlocksProps } />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default GroupEdit;
