import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripebutton.styles.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
  const pubKey = process.env.REACT_APP_STRIPE_PUB_KEY;
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

	return <StripeCheckout 
    label='Pay Now'
    name='R-SHOP'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={pubKey}
  />;
};

export default StripeCheckoutButton;
