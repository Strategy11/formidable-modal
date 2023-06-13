import classnames from "classnames";

export const CloseButton = () => (
	<a className="close alignright" data-dismiss="modal" data-bs-dismiss="modal">&times;</a>
);

export const ModalHeader = () => {
	const headerClassNames = classnames( 'modal-header', 'frm_modal_header_no_title' );
	return (
		<div className={ headerClassNames }>
			<CloseButton />
		</div>
	)
};

export const getModalDialogClassNames = attributes => classnames( 'modal-dialog', attributes.size );
