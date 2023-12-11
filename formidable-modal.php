<?php
/**
 * Plugin Name: Formidable Bootstrap Modal
 * Description: Easily insert a link to open a form in a model
 * Version: 3.0.2
 * Plugin URI: https://formidableforms.com/
 * Author URI: https://strategy11.com/
 * Author: Strategy11
 * Text Domain: frmmodal
 *
 * @package FrmBtsModal
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Loads all the classes for this plugin.
 *
 * @param string $class_name The name of the class to load.
 */
function frm_btsmod_autoloader( $class_name ) {

	// Only load Frm classes here.
	if ( ! preg_match( '/^frmBtsMod.+$/', $class_name ) ) {
		return;
	}

	$path = dirname( __FILE__ ) . '/classes/' . $class_name . '.php';
	if ( file_exists( $path ) ) {
		include( $path );
	}
}

// Add the autoloader.
spl_autoload_register( 'frm_btsmod_autoloader' );

// Load hooks.
new frmBtsModApp();
