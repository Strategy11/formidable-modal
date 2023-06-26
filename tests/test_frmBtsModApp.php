<?php

class test_frmBtsModApp extends FrmUnitTest {

	public function test_maybe_add_modal_attrs_to_button() {
		$atts   = array( 'modal_index' => 1 );
		$button = '<a>Button</a>';
		$result = $this->run_private_method(
			array( 'frmBtsModApp', 'maybe_add_modal_attrs_to_button' ),
			array( $button, $atts )
		);
		$this->assertTrue( 0 < strpos( $result, 'data-bs-toggle="modal"' ) );
		$this->assertTrue( 0 < strpos( $result, 'data-target="#' ) );

		// Run through the add modal attrs method again.
		$result2 = $this->run_private_method(
			array( 'frmBtsModApp', 'maybe_add_modal_attrs_to_button' ),
			array( $result, $atts )
		);
		$this->assertEquals( $result2, $result );

		// Another button with modal attrs.
		$button = '<a href="#" data-toggle="modal" data-bs-toggle="modal" data-target="#target" data-bs-target="#target">Button</a>';
		$result = $this->run_private_method(
			array( 'frmBtsModApp', 'maybe_add_modal_attrs_to_button' ),
			array( $button, $atts )
		);
		$this->assertEquals( $button, $result );
	}
}
