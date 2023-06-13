/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { button as icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

registerBlockType(
	metadata,
	{
		icon,
		example: {
			attributes: {
				className: 'is-style-fill',
				text: __( 'Call to Action' ),
			},
		},
		edit,
		save,
		merge: ( a, { text = '' } ) => ( {
			...a,
			text: ( a.text || '' ) + text,
		} ),
	}
);
