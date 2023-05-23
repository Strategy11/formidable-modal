import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const MODAL_TEMPLATE = [
	[
		'core/buttons',
		{
			lock: {
				move: true,
				remove: true
			}
		},
		[
			[
				'frm-modal/button',
				{
					lock: {
						move: true,
						remove: true
					}
				}
			]
		]
	],
	[
		'frm-modal/content',
		{}
	],
];

export default function Edit() {
	return (
		<>
			<div { ...useBlockProps() }>
				<InnerBlocks
					template={ MODAL_TEMPLATE }
					templateLock="all"
				/>
			</div>
		</>
	);
}
