import { createSelector } from 'reselect';

const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartIems
);

export const selectItemCount = create(
	[selectCartItems],
	cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem, 0)
);
