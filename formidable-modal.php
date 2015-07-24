<?php
/*
Plugin Name: Formidable Bootstrap Modal
Description: Easily insert a link to open a form in a model
Version: 1.0
Plugin URI: http://formidablepro.com/
Author URI: http://strategy11.com
Author: Strategy11
Text Domain: frmmodal
*/

class FrmBootstrapModal {
	function __construct() {
		add_shortcode( 'frmmodal', 'FrmBootstrapModal::insert_modal_link' );
	}

	public static function insert_modal_link( $atts ) {
		$defaults = array( 'id' => '', 'label' => __( '', 'frmmodal' ) );
		$atts = array_merge( $defaults, $atts );

		if ( empty( $atts['id'] ) || empty( $atts['label'] ) ) {
			return;
		}

		global $frm_vars;
		if ( ! isset( $frm_vars['modals'] ) ) {
			$frm_vars['modals'] = array();
		}
		$frm_vars['modals'][] = $atts;

		add_action( 'frm_enqueue_form_scripts', 'FrmBootstrapModal::enqueue_scripts' );
		add_action( 'wp_footer', 'FrmBootstrapModal::output_modal' );

		$id = 'frm-modal-' . esc_attr( $atts['id'] );
		$link = '<a href="#" data-toggle="modal" data-target="#' . $id . '">' . $atts['label'] . '</a>';
		return $link;
	}

	public static function enqueue_scripts() {
		$plugin_url = plugins_url() .'/'. basename( dirname( __FILE__ ) );
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
				$modal .= FrmFormsController::get_form_shortcode( $form_atts );
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				echo $modal;
			}
		}
	}
}

new FrmBootstrapModal();