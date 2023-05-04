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
		$exploded_content = 
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

	private static function add_modal_attrs_to_button( $button ) {
		$attrs = '';

		return str_replace( '<a', '<a ' . $attrs, $button );
	}
}
