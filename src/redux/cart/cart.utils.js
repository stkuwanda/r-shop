export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingItem) {
		console.log('Existing item:', existingItem);
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) =>
	cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

export const reduceQuantity = (cartItems, cartItemForQtyReduction) => {
	if(cartItems.length < 1){
		return [];
	}

	if(!cartItemForQtyReduction){
		return cartItems;
	}

	if(cartItemForQtyReduction.quantity === 1){
		return cartItems.filter(cartItem => cartItem.id !== cartItemForQtyReduction.id);
	}

	return cartItems.map(cartItem =>
		cartItem.id === cartItemForQtyReduction.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
