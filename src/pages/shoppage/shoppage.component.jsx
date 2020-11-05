import React, { Component } from 'react';
import CollectionPreview from '../../components/collectionpreview/collectionpreview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = { collections: SHOP_DATA };
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shope-page'>
				{collections.map(({ id, ...restOfProps }) => (
					<CollectionPreview key={id} {...restOfProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
