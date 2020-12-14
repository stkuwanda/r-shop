import React from 'react';
import { connect } from 'react-redux';
import { selectCartItem } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custombutton/custombutton.component';
import { addItem, reduceItemQty } from '../../redux/cart/cart.actions';
import './collectionitem.styles.scss';

const CollectionItem = ({ item, addItem, category, history, cartItem, subtractItem }) => {
	const { imageUrl, name, price } = item;
	return (
		<div className='collection-item'>
			<div className='image' onClick={() => history.push(`/product/${category}/${name}`)} style={{ backgroundImage: `url(${imageUrl})` }} >
				{cartItem ? (<div className='count'>{cartItem.quantity}</div>) : null }
			</div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			{ cartItem ? (<CustomButton onClick={() => subtractItem(cartItem)} isInverted>
				Subtract From Cart
			</CustomButton>) : null}
			
			<CustomButton onClick={() => addItem(item)} isInverted>
				Add To Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	subtractItem: item => dispatch(reduceItemQty(item))
});

const mapStateToProps = (state, props) => {
	const { item } = props;

	return {
		cartItem: selectCartItem(item)(state)
	}
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(CollectionItem));
