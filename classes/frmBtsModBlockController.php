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
		ob_start();
//		var_dump( $attrs );
//		var_dump( $content );
		$blocks = parse_blocks( $content );
		if ( ! empty( $blocks[0]['innerHTML'] ) ) {
			$inner_blocks = parse_blocks( $blocks[0]['innerHTML'] );
		}
		$sep = '<div class="wp-block-frm-modal-content';
		$exploded_content = explode( $sep, $content );
		$button_html      = $exploded_content[0];
		$modal_html       = $sep . $exploded_content[1];
//		echo esc_html( $content );
		echo $button_html;
//		var_dump( $inner_blocks );
		return ob_get_clean();
	}
}
