import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectItem from '../../components/collectionitem/collectionitem.component';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	if (!collection) {
		return <Redirect to='/NOTFOUND' />;
	}

	const { title, items, routeName } = collection;

	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map(item => (
					<CollectItem key={item.id} item={item} category={routeName} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const {
		match: {
			params: { collectionId },
		},
	} = ownProps;

	return {
		collection: selectCollection(collectionId)(state),
	};
};

export default connect(mapStateToProps)(CollectionPage);
