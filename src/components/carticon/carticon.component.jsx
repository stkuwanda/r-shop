import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectItemCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import './carticon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = state => ({
	itemCount: selectItemCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
