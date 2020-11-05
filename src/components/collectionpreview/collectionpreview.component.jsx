import React from 'react';
import CollectionItem from '../collectionitem/collectionitem.component';
import './collectionpreview.styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, i) => i < 4)
					.map(({id, ...restOfProps}) => (
						<CollectionItem key={id} {...restOfProps} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
