<?php
/**
 * Modal block controller
 *
 * @since x.x
 */

class frmBtsModBlockController {

	public static function init_block() {
		register_block_type( frmBtsModApp::plugin_path() . '/blocks/frm-modal' );
	}
}
