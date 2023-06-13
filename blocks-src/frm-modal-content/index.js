/**
 * WordPress dependencies
 */
import { group as icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './editor.scss';

const settings = {
	icon,
	edit,
	save,
};


registerBlockType(
	metadata,
	settings
);
