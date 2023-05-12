<?php

class test_frmBtsModBlockController extends FrmUnitTest {

	public function test_extract_block_content() {
		$content = '<div class="wp-block-buttons is-layout-flex">Modal button</div><div class="wp-block-frm-modal-content">Modal content</div>';

		$expected = array(
			'<div class="wp-block-buttons is-layout-flex">Modal button</div>',
			'<div class="wp-block-frm-modal-content">Modal content</div>'
		);

		$this->assertEquals(
			$expected,
			$this->run_private_method(
				array( 'frmBtsModBlockController', 'extract_block_content' ),
				array( $content )
			)
		);

		$content = '<div class="wp-block-buttons">The button</div>';
		$this->assertFalse(
			$this->run_private_method(
				array( 'frmBtsModBlockController', 'extract_block_content' ),
				array( $content )
			)
		);

		// Content with 2 modal content block is invalid.
		$content = '<div class="wp-block-buttons is-layout-flex">Modal button</div><div class="wp-block-frm-modal-content">Modal content <div class="wp-block-frm-modal-content">Modal content</div></div>';
		$this->assertFalse(
			$this->run_private_method(
				array( 'frmBtsModBlockController', 'extract_block_content' ),
				array( $content )
			)
		);
	}
}
