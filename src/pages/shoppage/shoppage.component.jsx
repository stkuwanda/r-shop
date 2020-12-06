import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => {
	return (
		<div className='shope-page'>
			<Route exact path={`${match.url}`} component={CollectionsOverview} />
		</div>
	);
};

export default ShopPage;
