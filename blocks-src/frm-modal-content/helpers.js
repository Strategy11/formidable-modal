import classnames from "classnames";
import { RichText } from '@wordpress/block-editor';

export const CloseButton = () => (
	<a className="close alignright" data-dismiss="modal" data-bs-dismiss="modal">&times;</a>
);

export const ModalHeader = ( { title } ) => {
	const headerClassNames = classnames( 'modal-header', title ? '' : 'frm_modal_header_no_title' );
	return (
		<div className={ headerClassNames }>
			{ title && <RichText.Content tagName="h4" value={ title } className="modal-title" /> }

			<CloseButton />
		</div>
	)
};

export const getModalDialogClassNames = attributes => classnames( 'modal-dialog', attributes.size );
