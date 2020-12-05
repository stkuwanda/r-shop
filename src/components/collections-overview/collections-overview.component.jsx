import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collectionpreview/collectionpreview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...restOfProps }) => (
				<CollectionPreview key={id} {...restOfProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
