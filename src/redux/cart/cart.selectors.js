import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectItemCount = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectHidden = createSelector([selectCart], cart => cart.hidden);