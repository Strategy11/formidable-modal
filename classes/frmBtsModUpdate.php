<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

class frmBtsModUpdate extends FrmAddon {

	public $plugin_file;
	public $plugin_name = 'Bootstrap Modal';
	public $download_id = 185013;
	public $version = '2.0';

	public function __construct() {
		$this->plugin_file = dirname( dirname( __FILE__ ) ) . '/formidable-modal.php';
		parent::__construct();
	}

	public static function load_hooks() {
		add_filter( 'frm_include_addon_page', '__return_true' );
		new frmBtsModUpdate();
	}
}
