import CartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({type: CartActionTypes.TOGGLE_CART_DROPDOWN});

export const addItem = item => ({type: CartActionTypes.ADD_ITEM, payload: item});

export const removeItem = item => ({type: CartActionTypes.REMOVE_ITEM, payload: item});

export const reduceQty = item => ({type: CartActionTypes.REDUCE_ITEM_QTY, payload: item})