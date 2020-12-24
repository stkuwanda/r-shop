import React from 'react';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './cartitem.styles.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity, category }, dispatch, history }) => {
	return (
		<div className='cart-item'>
			<img src={imageUrl} alt='item' onClick={() => {
				history.push(`/product/${category}/${name}`);
				dispatch(toggleCartDropdown());
			}} />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x {price}
				</span>
			</div>
		</div>
	);
};

export default withRouter(connect()(CartItem));
