import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionItem } from '../../redux/shop/shop.selectors';
import './product.styles.scss';

const ProductPage = ({ match, item }) => {
	console.log('Product Page Match:', match);
	console.log('Product Page Item:', item);
  
	return (
		<div>
      {item.name} <br/>
			{JSON.stringify(item)}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const {
		match: {
			params: { productId, categoryId },
		},
	} = ownProps;

	return {
		item: selectCollectionItem(productId, categoryId)(state),
	};
};

export default connect(mapStateToProps)(ProductPage);
