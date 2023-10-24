<?php
/**
 * Modal block controller
 *
 * @since 3.0
 * @package FrmBtsModal
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Class frmBtsModBlockController
 */
class frmBtsModBlockController {

	/**
	 * Init blocks.
	 *
	 * @return void
	 */
	public static function init_blocks() {
		$menu_name = method_exists( 'FrmAppHelper', 'get_menu_name' ) ? FrmAppHelper::get_menu_name() : 'Formidable';
		register_block_type(
			frmBtsModApp::plugin_path() . '/blocks/frm-modal',
			array(
				'title'           => $menu_name . ' ' . __( 'Modal', 'frmmodal' ),
				'render_callback' => array( __CLASS__, 'render_modal_block' ),
			)
		);
		register_block_type( frmBtsModApp::plugin_path() . '/blocks/frm-modal-button' );
		register_block_type( frmBtsModApp::plugin_path() . '/blocks/frm-modal-content' );
	}

	/**
	 * Render callback for modal block.
	 *
	 * @param array  $attrs   Block attributes.
	 * @param string $content Block content.
	 * @return string
	 */
	public static function render_modal_block( $attrs, $content ) {
		$exploded_content = self::extract_block_content( $content );
		if ( ! $exploded_content ) {
			return $content;
		}

		return frmBtsModApp::insert_modal_link(
			array(
				'button_html'        => $exploded_content[0],
				'skip_modal_wrapper' => true,
			),
			$exploded_content[1]
		);
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
