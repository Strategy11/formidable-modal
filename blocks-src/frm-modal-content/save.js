/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

import { ModalHeader, getModalDialogClassNames } from './helpers';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<>
			<div { ...blockProps }>
				<div className={ getModalDialogClassNames( attributes ) } data-size={ attributes.size }>
					<div className="modal-content">
						<ModalHeader title={ attributes.title } />

						<div className="modal-body">
							<div { ...innerBlocksProps } />
						</div>
					</div>
				</div>
			</div>
		</>
	)
	return <div { ...useInnerBlocksProps.save( useBlockProps.save() ) } />;
}
