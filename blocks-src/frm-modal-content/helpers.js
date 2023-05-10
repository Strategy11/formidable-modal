import classnames from "classnames";

export const CloseButton = () => (
	<a className="close frm_icon_font frm_cancel1_icon alignright" data-dismiss="modal" data-bs-dismiss="modal"></a>
);

export const ModalHeader = ( { title } ) => (
	<div className="modal-header">
		<CloseButton />

		<h4 className="modal-title">{ title }</h4>
	</div>
);

export const getModalDialogClassNames = attributes => classnames( 'modal-dialog', attributes.size );
