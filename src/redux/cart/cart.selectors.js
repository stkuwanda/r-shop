import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItem = item => createSelector(
	[selectCartItems],
	cartItems => cartItems.find(cartItem => cartItem.id === item.id)
);

export const selectItemCount = createSelector(
	[selectCartItems], 
	cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartTotalPrice = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);
