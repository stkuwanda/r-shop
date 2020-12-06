import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import './shoppage.styles.scss';

const ShopPage = ({ match }) => {
	console.log(match);
	return (
		<div className='shope-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
		</div>
	);
};

export default ShopPage;
