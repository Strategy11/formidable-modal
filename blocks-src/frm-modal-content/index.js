/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { group as icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './style.scss';
import './editor.scss';

const { name } = metadata;

const settings = {
	icon,
	edit,
	save,
};


registerBlockType(
	{
		name,
		...metadata
	},
	settings
);
