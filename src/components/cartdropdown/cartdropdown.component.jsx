import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custombutton/custombutton.component';
import CartItem from '../cartitem/cartitem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cartdropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });

export default connect(mapStateToProps)(CartDropdown);
