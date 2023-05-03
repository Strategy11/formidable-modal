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
		register_block_type(
			frmBtsModApp::plugin_path() . '/blocks/frm-modal-2',
			array(
				'render_callback' => array( __CLASS__, 'render_modal_block_2' ),
			)
		);
	}

	public static function render_modal_block( $attrs, $content ) {
		ob_start();
//		var_dump( $attrs );
//		var_dump( $content );
		$blocks = parse_blocks( $content );
		if ( ! empty( $blocks[0]['innerHTML'] ) ) {
			$inner_blocks = parse_blocks( $blocks[0]['innerHTML'] );
		}
		echo '<pre>';
//		echo esc_html( $content );
		echo $content;
//		var_dump( $inner_blocks );
		echo '</pre>';
		return ob_get_clean();
	}

	public static function render_modal_block_2( $attrs, $content ) {
		ob_start();
//		var_dump( $attrs );
//		var_dump( $content );
		return ob_get_clean();
	}
}
