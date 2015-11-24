<?php

class frmBtsModApp {

	public function __construct() {
		add_shortcode( 'frmmodal', 'frmBtsModApp::insert_modal_link' );
		add_action( 'admin_init', 'frmBtsModApp::load_autoupdater' );
	}

	public static function insert_modal_link( $atts ) {
		$defaults = array(
			'id' => '', 'label' => __( '', 'frmmodal' ),
			'type' => 'form', 'classes' => '',
		);
		$atts = array_merge( $defaults, $atts );

		if ( empty( $atts['id'] ) || empty( $atts['label'] ) ) {
			return;
		}

		global $frm_vars;
		if ( ! isset( $frm_vars['modals'] ) ) {
			$frm_vars['modals'] = array();
		}
		$frm_vars['modals'][] = $atts;

		add_action( 'frm_enqueue_form_scripts', 'frmBtsModApp::enqueue_scripts' );
		add_action( 'wp_footer', 'frmBtsModApp::output_modal' );

		$classes = empty( $atts['classes'] ) ? '' : ' class="' . esc_attr( $atts['classes'] ) . '"';
		$link = '<a href="#" data-toggle="modal" data-target="#frm-modal-' . esc_attr( $atts['id'] ) . '"' . $classes . '>' . $atts['label'] . '</a>';
		return $link;
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
		if ( isset( $frm_vars['modals'] ) && is_array ( $frm_vars['modals'] ) ) {
			foreach ( $frm_vars['modals'] as $form_atts ) {
				$modal = '<div id="frm-modal-' . esc_attr( $form_atts['id'] ) . '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="frmModalLabel-' . esc_attr( $form_atts['id'] ) . '" aria-hidden="true">';
				$modal .= '<div class="modal-dialog">';
				$modal .= '<div class="modal-content">';
				$modal .= '<div class="modal-header">';
				$modal .= '<a class="close fp fp-times alignright" data-dismiss="modal" ></a>';
				$modal .= '<h4 class="modal-title" id="frmModalLabel-' . esc_attr( $form_atts['id'] ) . '">'. $form_atts['label'] .'</h4>';
				$modal .= '</div>';
				$modal .= '<div class="modal-body">';
				if ( $form_atts['type'] == 'view' ) {
					unset( $form_atts['type'] );
					$modal .= FrmProDisplaysController::get_shortcode( $form_atts );
				} else {
					$modal .= FrmFormsController::get_form_shortcode( $form_atts );
				}
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				echo $modal;
			}
		}
	}
}