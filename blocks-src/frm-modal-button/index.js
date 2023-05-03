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


const ALLOWED_BLOCKS_GRADIENT_SUPPORT = [ 'frm-modal/button' ];

const { name } = metadata;

registerBlockType(
	{
		name,
		...metadata,
		// Gradients support only available for blocks listed in ALLOWED_BLOCKS_GRADIENT_SUPPORT.
		...( ! ALLOWED_BLOCKS_GRADIENT_SUPPORT.includes( name ) &&
		supports?.color?.gradients
			? {
				supports: {
					...supports,
					color: { ...supports.color, gradients: false },
				},
			}
			: {} ),
	},
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
