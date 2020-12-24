import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	removeItem,
	addItem,
	reduceItemQty,
} from '../../redux/cart/cart.actions';
import './checkoutitem.styles.scss';

const CheckoutItem = ({ cartItem, dispatch }) => {
	const { name, imageUrl, price, quantity, category } = cartItem;
	console.log('Checkout Item name:', name);
	console.log('Checkout Category name:', category);
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<Link to={`/product/${category}/${name}`}>
					<img src={imageUrl} alt='item' />
				</Link>
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div
					className='arrow'
					onClick={() => dispatch(reduceItemQty(cartItem))}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div
				className='remove-button'
				onClick={() => dispatch(removeItem(cartItem))}>
				&#10005;
			</div>
		</div>
	);
};

export default connect()(CheckoutItem);
