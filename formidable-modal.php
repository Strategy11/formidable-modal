<?php
/*
Plugin Name: Formidable Bootstrap Modal
Description: Easily insert a link to open a form in a model
Version: 2.0
Plugin URI: http://formidablepro.com/
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
