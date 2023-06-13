<?php

// disable xdebug backtrace
if ( function_exists( 'xdebug_disable' ) ) {
	xdebug_disable();
}

echo 'Welcome to the Formidable Modal Test Suite' . PHP_EOL;
echo 'Version: 1.0' . PHP_EOL . PHP_EOL;

$GLOBALS['wp_tests_options'] = array(
	'active_plugins'     => array(
		'formidable/formidable.php',
		'formidable-pro/formidable-pro.php',
		'formidable-modal/formidable-modal.php',
	),
	'frmpro-credentials' => array( 'license' => '87fu-uit7-896u-ihy8' ),
	'frmpro-authorized'  => true,
);

if ( false !== getenv( 'WP_DEVELOP_DIR' ) ) {
	require getenv( 'WP_DEVELOP_DIR' ) . 'tests/phpunit/includes/bootstrap.php';
} else {
	require '../../../../tests/phpunit/includes/bootstrap.php';
}

if ( file_exists( dirname( __FILE__ ) . '/../vendor/autoload_52.php' ) ) {
	include( dirname( __FILE__ ) . '/../vendor/autoload_52.php' );
}

if ( version_compare( phpversion(), '5.3', '>=' ) && file_exists( dirname( __FILE__ ) . '/../vendor/autoload.php' ) ) {
	include( dirname( __FILE__ ) . '/../vendor/autoload.php' );
}

$plugin_dir = WP_PLUGIN_DIR;
if ( is_dir( $plugin_dir . '/formidable/tests' ) ) {
	// include unit test base classes
	require_once $plugin_dir . '/formidable/tests/base/frm_factory.php';
	require_once $plugin_dir . '/formidable/tests/base/FrmUnitTest.php';
}
