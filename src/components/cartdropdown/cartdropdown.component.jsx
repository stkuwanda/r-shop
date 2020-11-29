import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custombutton/custombutton.component';
import CartItem from '../cartitem/cartitem.component';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './cartdropdown.styles.scss';

const CartDropdown = ({ cartItems, toggleCart, history }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton onClick={() => {
				toggleCart();
				history.push('/checkout');}}>
				Go To Checkout
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(toggleCartDropdown())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
