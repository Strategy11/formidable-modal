<?php
/**
 * Modal block controller
 *
 * @since x.x
 */

class frmBtsModBlockController {

	public static function init_block() {
		register_block_type(
			frmBtsModApp::plugin_path() . '/blocks/frm-modal',
			array(
				'render_callback' => array( __CLASS__, 'render_modal_block' ),
			)
		);
		register_block_type( frmBtsModApp::plugin_path() . '/blocks/frm-modal-button' );
		register_block_type( frmBtsModApp::plugin_path() . '/blocks/frm-modal-content' );
	}

	public static function render_modal_block( $attrs, $content ) {
		$exploded_content = self::extract_block_content( $content );
		if ( ! $exploded_content ) {
			return $content;
		}

		// TODO: process the first arg.
		return frmBtsModApp::insert_modal_link( array( 'button_html' => $exploded_content[0] ), $exploded_content[1] );
	}

	/**
	 * Extracts the block content to get the button and modal content.
	 *
	 * @param string $content Formidable modal block content.
	 * @return array|false The first item is the button, the second is the modal content. Returns `false` if can't invalid content.
	 */
	private static function extract_block_content( $content ) {
		$sep = '<div class="wp-block-frm-modal-content';

		$exploded_content = explode( $sep, $content );
		if ( ! $exploded_content || 2 !== count( $exploded_content ) ) {
			return false;
		}

		return array( $exploded_content[0], $sep . $exploded_content[1] );
	}
}
