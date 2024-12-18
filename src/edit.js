import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

export default function Edit() {
	const blockProps = useBlockProps();
	useEffect(() => {
		const toggles = document.querySelectorAll('.read-more-toggle');

		toggles.forEach((button) => {
			button.addEventListener('click', () => {
				const content = button.previousElementSibling;
				content.classList.toggle('expanded');

				button.textContent = content.classList.contains('expanded')
					? __('Read Less', 'read-more-block')
					: __('Read More', 'read-more-block');
			});
		});
	}, []);
	return (
		<div {...blockProps}>
			<div className="read-more-content">
				<InnerBlocks
					allowedBlocks={['core/paragraph', 'core/heading', 'core/image']}
					template={[['core/paragraph', { placeholder: 'Add your content here...' }]]}
				/>
			</div>
			<button className="read-more-toggle">{__('Read More', 'read-more-block')}</button>
		</div>
	);
}
