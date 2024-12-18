import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="read-more-content">
                <InnerBlocks.Content />
            </div>
            <button className="read-more-toggle">Read More</button>
        </div>
    );
}
