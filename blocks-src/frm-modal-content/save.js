/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

import { ModalHeader, getModalDialogClassNames } from './helpers';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	blockProps.style = {
		...blockProps.style,
		backgroundColor: attributes.overlayColor
	};

	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<>
			<div { ...blockProps }>
				<div className={ getModalDialogClassNames( attributes ) } data-size={ attributes.size }>
					<div className="modal-content" style={ { backgroundColor: attributes.bgColor } }>
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
