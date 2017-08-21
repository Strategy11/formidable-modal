<?php

class frmBtsModApp {

	public function __construct() {
		add_shortcode( 'frmmodal', 'frmBtsModApp::insert_modal_link' );
		add_shortcode( 'frmmodal-content', 'frmBtsModApp::insert_modal_content_link' );
		add_action( 'admin_init', 'frmBtsModApp::load_autoupdater' );
	}

	public static function insert_modal_link( $atts, $content = '' ) {
		self::prepare_atts( $atts );
		if ( empty( $atts['label'] ) ) {
			return '';
		}

		self::save_settings_for_footer( $atts, $content );
		self::enqueue_scripts();

		do_action( 'frm_modal_shortcode', $atts );
		add_action( 'wp_footer', 'frmBtsModApp::output_modal' );

		$classes = empty( $atts['class'] ) ? '' : ' class="' . esc_attr( $atts['class'] ) . '"';
		$link = '<a href="#" data-toggle="modal" data-target="#frm-modal-' . esc_attr( $atts['modal_index'] ) . '"' . $classes . '>' . $atts['label'] . '</a>';
		return $link;
	}

	/**
	 * @since 2.0
	 */
	public static function insert_modal_content_link( $atts, $content = '' ) {
		return self::insert_modal_link( $atts, $content );
	}

	/**
	 * @since 2.0
	 */
	private static function prepare_atts( &$atts ) {
		$defaults = array(
			'id'    => '',
			'label' => '',
			'modal_title' => '',
			'modal_class' => '',
			'type'  => 'form',
			'class' => '',
			'size'  => '',
		);
		$atts = array_merge( $defaults, $atts );

		global $frm_vars;
		$atts['modal_index'] = isset( $frm_vars['modals'] ) ? count( $frm_vars['modals'] ) : 0;
	}

	/**
	 * @since 2.0
	 */
	private static function save_settings_for_footer( $atts, $content ) {
		global $frm_vars;
		if ( ! isset( $frm_vars['modals'] ) ) {
			$frm_vars['modals'] = array();
		}

		if ( $content == '' ) {
			$content = self::build_shortcode( $atts );
		}

		$atts['mod_content'] = $content;
		$frm_vars['modals'][] = $atts;
	}

	/**
	 * @since 2.0
	 */
	private static function build_shortcode( $atts ) {
		if ( $atts['type'] == 'view' ) {
			$atts['type'] = 'display-frm-data';
		} else if ( $atts['type'] == 'form' ) {
			$atts['type'] = 'formidable';
		}

		$shortcode_atts = '';
		foreach ( $atts as $att => $val ) {
			if ( $att != 'type' ) {
				$shortcode_atts .= ' '. sanitize_text_field( $att . '="' . $val . '"' );
			}
		}

		return '['. $atts['type'] . $shortcode_atts . ']';
	}

	public static function load_autoupdater() {
		if ( class_exists( 'FrmAddon' ) ) {
			frmBtsModUpdate::load_hooks();
		}
	}

	public static function enqueue_scripts() {
		$plugin_url = plugins_url() .'/'. basename( dirname( dirname( __FILE__ ) ) );
		wp_enqueue_script( 'bootstrap', $plugin_url .'/js/bootstrap.min.js', array( 'jquery' ) );
	    wp_enqueue_style( 'bootstrap', $plugin_url .'/css/bootstrap.css' );
	}

	public static function output_modal() {
		global $frm_vars;
		$allowed_sizes = array( 'small' => 'modal-sm', 'large' => 'modal-lg' );

		if ( isset( $frm_vars['modals'] ) && is_array ( $frm_vars['modals'] ) ) {
			foreach ( $frm_vars['modals'] as $i => $form_atts ) {
				$size = isset( $allowed_sizes[ $form_atts['size'] ] ) ? $allowed_sizes[ $form_atts['size'] ] : '';
				$title = empty( $form_atts['modal_title'] ) ? $form_atts['label'] : $form_atts['modal_title'];

				$modal = '<div id="frm-modal-' . esc_attr( $i ) . '"';
				$modal .= ' class="modal fade ' . esc_attr( $form_atts['modal_class'] ) . '" tabindex="-1" role="dialog"';
				$modal .= ' aria-labelledby="frmModalLabel-' . esc_attr( $i ) . '" aria-hidden="true">';
				$modal .= '<div class="modal-dialog ' . esc_attr( $size ) . '">';
				$modal .= '<div class="modal-content">';
				$modal .= '<div class="modal-header">';
				$modal .= '<a class="close frm_icon_font frm_cancel1_icon alignright" data-dismiss="modal" ></a>';
				$modal .= '<h4 class="modal-title" id="frmModalLabel-' . esc_attr( $i ) . '">'. $title .'</h4>';
				$modal .= '</div>';
				$modal .= '<div class="modal-body">';
				$modal .= do_shortcode( $form_atts['mod_content'] );
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				echo $modal;
			}
		}
	}
}
