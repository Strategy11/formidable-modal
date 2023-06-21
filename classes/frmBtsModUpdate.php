<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Class frmBtsModUpdate
 */
class frmBtsModUpdate extends FrmAddon {

	/**
	 * Plugin file.
	 *
	 * @var string
	 */
	public $plugin_file;

	/**
	 * Plugin name.
	 *
	 * @var string
	 */
	public $plugin_name = 'Bootstrap Modal';

	/**
	 * Download ID.
	 *
	 * @var int
	 */
	public $download_id = 185013;

	/**
	 * Version.
	 *
	 * @var string
	 */
	public $version;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->version     = frmBtsModApp::$plug_version;
		$this->plugin_file = dirname( dirname( __FILE__ ) ) . '/formidable-modal.php';
		parent::__construct();
	}

	/**
	 * Loads hooks.
	 */
	public static function load_hooks() {
		add_filter( 'frm_include_addon_page', '__return_true' );
		new frmBtsModUpdate();
	}
}
