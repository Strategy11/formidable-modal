<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Class frmBtsModApp
 */
class frmBtsModApp {

	/**
	 * Plugin version.
	 *
	 * @since 3.0
	 *
	 * @var string
	 */
	public static $plug_version = '3.0.2';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_shortcode( 'frmmodal', 'frmBtsModApp::insert_modal_link' );
		add_shortcode( 'frmmodal-content', 'frmBtsModApp::insert_modal_content_link' );
		add_action( 'admin_init', 'frmBtsModApp::load_autoupdater' );

		add_action( 'init', 'frmBtsModBlockController::init_blocks' );
	}

	/**
	 * Gets plugin path.
	 *
	 * @since 3.0
	 *
	 * @return string
	 */
	public static function plugin_path() {
		return dirname( dirname( __FILE__ ) );
	}

	/**
	 * Gets plugin URL.
	 *
	 * @since 3.0
	 *
	 * @return string
	 */
	public static function plugin_url() {
		return plugins_url( '', self::plugin_path() . '/formidable-modal.php' );
	}

	/**
	 * Modal shortcode handler.
	 *
	 * @param array  $atts    Shortcode attributes.
	 * @param string $content Shortcode content.
	 * @return string
	 */
	public static function insert_modal_link( $atts, $content = '' ) {
		self::prepare_atts( $atts );
		if ( empty( $atts['label'] ) && empty( $atts['button_html'] ) ) {
			return '';
		}

		self::save_settings_for_footer( $atts, $content );
		self::enqueue_scripts();

		do_action( 'frm_modal_shortcode', $atts );
		add_action( 'wp_footer', 'frmBtsModApp::output_modal' );

		if ( ! empty( $atts['button_html'] ) ) {
			$link = $atts['button_html'];
		} else {
			$classes = empty( $atts['class'] ) ? '' : ' class="' . esc_attr( $atts['class'] ) . '"';
			$link    = '<a href="#"' . $classes . '>' . $atts['label'] . '</a>';
		}

		$link = self::maybe_add_modal_attrs_to_button( $link, $atts );

		return apply_filters( 'frm_modal_link', $link, $atts );
	}

	/**
	 * Gets the modal button attributes.
	 *
	 * @since 3.0
	 *
	 * @param array $atts Shortcode attributes.
	 * @return string
	 */
	private static function get_modal_button_attrs( $atts ) {
		$target  = '#frm-modal-' . $atts['modal_index'];
		return 'data-toggle="modal" data-bs-toggle="modal" data-target="' . esc_attr( $target ) . '" data-bs-target="' . esc_attr( $target ) . '"';
	}

	/**
	 * Maybe add modal attributes to the modal button.
	 *
	 * @since 3.0
	 *
	 * @param string $button_html Modal button HTML.
	 * @param array  $atts        Shortcode attributes.
	 * @return string
	 */
	private static function maybe_add_modal_attrs_to_button( $button_html, $atts ) {
		if ( strpos( $button_html, 'data-bs-toggle' ) ) {
			return $button_html;
		}

		return str_replace( '<a', '<a ' . self::get_modal_button_attrs( $atts ), $button_html );
	}

	/**
	 * Modal content link handler.
	 *
	 * @since 2.0
	 *
	 * @param array  $atts    Shortcode attributes.
	 * @param string $content Shortcode content.
	 * @return string Shortcode output.
	 */
	public static function insert_modal_content_link( $atts, $content = '' ) {
		return self::insert_modal_link( $atts, $content );
	}

	/**
	 * Prepares the shortcode attributes.
	 *
	 * @since 2.0
	 *
	 * @param array $atts Shortcode attributes.
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
	 * Saves the modal settings to use in footer.
	 *
	 * @since 2.0
	 *
	 * @param array  $atts    Shortcode attributes.
	 * @param string $content Shortcode content.
	 */
	private static function save_settings_for_footer( $atts, $content ) {
		global $frm_vars;
		if ( ! isset( $frm_vars['modals'] ) ) {
			$frm_vars['modals'] = array();
		}

		if ( $content == '' ) {
			$content = self::build_shortcode( $atts );
		} elseif ( ! empty( $atts['skip_modal_wrapper'] ) ) {
			$content = self::add_modal_content_wrapper_attrs( $content, $atts );
		}

		$atts['mod_content'] = $content;
		$frm_vars['modals'][] = $atts;
	}

	/**
	 * Adds Bootstrap modal attributes to the wrapper elements if "skip_modal_wrapper" is true. This is used in case the
	 * full modal HTML is passed instead of just the content.
	 *
	 * @since 3.0
	 *
	 * @param string $content The modal content passed to the shortcode.
	 * @param array  $atts    Shortcode attributes.
	 * @return string
	 */
	private static function add_modal_content_wrapper_attrs( $content, $atts ) {
		$searches = array(
			'<div class="wp-block-frm-modal-content',
			'class="modal-title"',
		);

		$replaces = array(
			'<div ' . self::get_modal_wrapper_attrs( $atts ) . ' class="modal fade wp-block-frm-modal-content',
			'class="modal-title" id="frmModalLabel-' . intval( $atts['modal_index'] ) . '"',
		);

		$content = str_replace( $searches, $replaces, $content );

		return $content;
	}

	/**
	 * Builds the attributes of modal content wrapper element.
	 *
	 * @since 3.0
	 *
	 * @param array $atts Shortcode attributes.
	 * @return string
	 */
	private static function get_modal_wrapper_attrs( $atts ) {
		$attrs = array(
			'id'              => 'frm-modal-' . intval( $atts['modal_index'] ),
			'tabindex'        => -1,
			'role'            => 'dialog',
			'aria-labelledby' => 'frmModalLabel-' . intval( $atts['modal_index'] ),
			'aria-hidden'     => 'true',
		);

		return self::array_to_html_params( $attrs );
	}

	/**
	 * Builds the shortcode string.
	 *
	 * @since 2.0
	 *
	 * @param array $atts Attributes.
	 * @return string Shortcode string.
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
				$shortcode_atts .= ' ' . sanitize_text_field( $att . '="' . $val . '"' );
			}
		}

		return '[' . $atts['type'] . $shortcode_atts . ']';
	}

	/**
	 * Loads updater.
	 */
	public static function load_autoupdater() {
		if ( class_exists( 'FrmAddon' ) ) {
			frmBtsModUpdate::load_hooks();
		}
	}

	/**
	 * Enqueues scripts.
	 */
	public static function enqueue_scripts() {
		$plugin_url = plugins_url() . '/' . basename( dirname( dirname( __FILE__ ) ) );
		wp_enqueue_script( 'frm-bootstrap-modal', $plugin_url . '/js/bootstrap-modal.min.js', array(), self::$plug_version, true );
		wp_enqueue_style( 'frm-bootstrap-modal', $plugin_url . '/css/bootstrap-modal.css', array(), self::$plug_version );
	}

	/**
	 * Shows the modal.
	 */
	public static function output_modal() {
		global $frm_vars;

		if ( ! isset( $frm_vars['modals'] ) || ! is_array( $frm_vars['modals'] ) ) {
			return;
		}

		foreach ( $frm_vars['modals'] as $i => $form_atts ) {
			if ( ! empty( $form_atts['skip_modal_wrapper'] ) ) {
				$modal = do_shortcode( $form_atts['mod_content'] );
			} else {
				$allowed_sizes = array(
					'small' => 'modal-sm',
					'large' => 'modal-lg',
				);

				$size = isset( $allowed_sizes[ $form_atts['size'] ] ) ? $allowed_sizes[ $form_atts['size'] ] : '';
				$title = empty( $form_atts['modal_title'] ) ? $form_atts['label'] : $form_atts['modal_title'];

				$modal = '<div id="frm-modal-' . esc_attr( $i ) . '"';
				$modal .= ' class="modal fade frm-modal-sc wp-block-frm-modal-content ' . esc_attr( $form_atts['modal_class'] ) . '" tabindex="-1" role="dialog"';
				$modal .= ' aria-labelledby="frmModalLabel-' . esc_attr( $i ) . '" aria-hidden="true">';
				$modal .= '<div class="modal-dialog ' . esc_attr( $size ) . '">';
				$modal .= '<div class="modal-content">';
				$modal .= '<div class="modal-header">';
				$modal .= '<h4 class="modal-title" id="frmModalLabel-' . esc_attr( $i ) . '">' . $title . '</h4>';
				$modal .= '<a class="close alignright" data-dismiss="modal" data-bs-dismiss="modal">&times;</a>';
				$modal .= '</div>';
				$modal .= '<div class="modal-body">';
				$modal .= do_shortcode( $form_atts['mod_content'] );
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
				$modal .= '</div>';
			}
			echo $modal; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	/**
	 * Converts array of attributes to HTML attributes string.
	 *
	 * @since 3.0
	 *
	 * @param array $attrs Attributes array.
	 * @return string
	 */
	public static function array_to_html_params( $attrs ) {
		if ( method_exists( 'FrmAppHelper', 'array_to_html_params' ) ) {
			return FrmAppHelper::array_to_html_params( $attrs );
		}

		$html_attrs = '';
		foreach ( $attrs as $key => $value ) {
			$html_attrs .= ' ' . esc_attr( $key ) . '="' . esc_attr( $value ) . '"';
		}

		return $html_attrs;
	}
}
