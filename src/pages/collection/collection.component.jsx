import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectItem from '../../components/collectionitem/collectionitem.component';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	if(!collection){
		return <Redirect to='/NOTFOUND' />
	}

	return (
		<div className='collection-page'>
			<h2>Collection Page</h2>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const {match: {params: {collectionId}}} = ownProps;

	return {
		collection: selectCollection(collectionId)(state)
	}
}

export default connect(mapStateToProps)(CollectionPage);
