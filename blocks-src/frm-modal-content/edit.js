import { useSelect } from '@wordpress/data';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	ColorPicker,
	Button,
	ColorIndicator,
	Dropdown,
	__experimentalVStack as VStack,
	__experimentalHStack as HStack,
	__experimentalText as Text
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

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
					<h3>{ __( 'Modal appearance', 'frmmodal' ) }</h3>

					<VStack>
						<Dropdown
							className="block-editor-tools-panel-color-gradient-settings__dropdown"
							popoverProps={ { placement: 'left-start' } }
							renderToggle={ ( { isOpen, onToggle } ) => (
								<Button onClick={ onToggle } className="block-editor-panel-color-gradient-settings__dropdown" aria-expanded={ isOpen }>
									<HStack justify="flex-start">
										<ColorIndicator colorValue={ attributes.overlayColor }></ColorIndicator>
										<Text>{ __( 'Overlay color', 'frmmodal' ) }</Text>
									</HStack>
								</Button>
							) }
							renderContent={ () => (
								<ColorPicker
									enableAlpha
									color={ attributes.overlayColor }
									onChange={ overlayColor => setAttributes( { overlayColor } ) }
								/>
							) }
						/>

						<Dropdown
							className="block-editor-tools-panel-color-gradient-settings__dropdown"
							popoverProps={ { placement: 'left-start' } }
							renderToggle={ ( { isOpen, onToggle } ) => (
								<Button onClick={ onToggle } className="block-editor-panel-color-gradient-settings__dropdown" aria-expanded={ isOpen }>
									<HStack justify="flex-start">
										<ColorIndicator colorValue={ attributes.bgColor }></ColorIndicator>
										<Text>{ __( 'Background color', 'frmmodal' ) }</Text>
									</HStack>
								</Button>
							) }
							renderContent={ () => (
								<ColorPicker
									enableAlpha
									color={ attributes.bgColor }
									onChange={ bgColor => setAttributes( { bgColor } ) }
								/>
							) }
						/>
					</VStack>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="frm_modal_overlay" style={ { backgroundColor: attributes.overlayColor } }></div>

				<div
					className={ getModalDialogClassNames( attributes ) }
					data-size={ attributes.size }
					style={ { backgroundColor: attributes.bgColor } }
				>
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
