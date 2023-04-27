import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		}
	}
});
