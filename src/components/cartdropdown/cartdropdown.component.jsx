import React from 'react';
import CustomButton from '../custombutton/custombutton.component';
import CartItem from '../cartitem/cartitem.component';
import './cartdropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items"/>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;
