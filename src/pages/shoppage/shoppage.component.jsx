import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collectionpreview/collectionpreview.component';

const ShopPage = ({collections}) => {
	return (
		<div className='shope-page'>
			{collections.map(({ id, ...restOfProps }) => (
				<CollectionPreview key={id} {...restOfProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
