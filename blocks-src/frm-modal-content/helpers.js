import classnames from "classnames";

export const CloseButton = () => (
	<a className="close alignright" data-dismiss="modal" data-bs-dismiss="modal">&times;</a>
);

export const ModalHeader = ( { title } ) => {
	const headerClassNames = classnames( 'modal-header', title ? '' : 'frm_modal_header_no_title' );
	return (
		<div className={ headerClassNames }>
			{ title && <h4 className="modal-title">{ title }</h4> }

			<CloseButton />
		</div>
	)
};

export const getModalDialogClassNames = attributes => classnames( 'modal-dialog', attributes.size );
