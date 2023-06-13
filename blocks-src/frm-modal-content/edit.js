import {
	RichText,
	useBlockProps,
	InspectorControls,
	useInnerBlocksProps,
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

import { ModalHeader, getModalDialogClassNames } from './helpers';
import classnames from 'classnames';

const ColorPickerButton = ( { color, onChangeColor, label } ) => (
	<Dropdown
		className="frm_modal_color_setting block-editor-tools-panel-color-gradient-settings__dropdown"
		popoverProps={ { placement: 'left-start' } }
		renderToggle={ ( { isOpen, onToggle } ) => (
			<Button
				onClick={ onToggle }
				className={
					classnames(
						'block-editor-panel-color-gradient-settings__dropdown',
						{ 'is-open': isOpen }
					)
				}
				aria-expanded={ isOpen }
			>
				<HStack justify="flex-start">
					<ColorIndicator className="block-editor-panel-color-gradient-settings__color-indicator" colorValue={ color } />
					<Text>{ label }</Text>
				</HStack>
			</Button>
		) }
		renderContent={ () => (
			<ColorPicker
				enableAlpha
				color={ color }
				onChange={ onChangeColor }
			/>
		) }
	/>
);

const GroupEdit = ( {
	attributes,
	setAttributes,
	clientId,
	__unstableLayoutClassNames: layoutClassNames,
} ) => {
	const blockProps = useBlockProps( {
		className: layoutClassNames,
	} );

	blockProps.style = {
		...blockProps.style,
		backgroundColor: attributes.overlayColor
	};

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'wp-block-group__inner-container'
		},
		{
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

				<PanelBody opened={ true }>
					<h3>{ __( 'Modal appearance', 'frmmodal' ) }</h3>

					<VStack spacing="0">
						<ColorPickerButton
							label={ __( 'Overlay color', 'frmmodal' ) }
							color={ attributes.overlayColor }
							onChangeColor={ overlayColor => setAttributes( { overlayColor } ) }
						/>

						<ColorPickerButton
							label={ __( 'Background color', 'frmmodal' ) }
							color={ attributes.bgColor }
							onChangeColor={ bgColor => setAttributes( { bgColor } ) }
						/>
					</VStack>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div
					className={ getModalDialogClassNames( attributes ) }
					data-size={ attributes.size }
					style={ { backgroundColor: attributes.bgColor } }
				>
					<div className="modal-content">
						<ModalHeader />

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
