<?php
/*
Plugin Name: Formidable Bootstrap Modal
Description: Easily insert a link to open a form in a model
Version: 1.01
Plugin URI: http://formidablepros.com/downloads/bootstrap-modal/
Author URI: http://strategy11.com
Author: Strategy11
Text Domain: frmmodal
*/

function frm_btsmod_autoloader( $class_name ) {

	// Only load Frm classes here
	if ( ! preg_match( '/^frmBtsMod.+$/', $class_name ) ) {
		return;
	}

	$path = dirname( __FILE__ ) . '/classes/' . $class_name .'.php';
	if ( file_exists( $path ) ) {
		include( $path );
	}
}

// Add the autoloader
spl_autoload_register('frm_btsmod_autoloader');

// Load hooks
new frmBtsModApp();
