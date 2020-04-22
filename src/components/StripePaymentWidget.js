import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout";

require('dotenv').config();

const StripePaymentWidget = (props) => {
  const [product] = useState({
    name: 'PRODUCT',
    price: 100
  });

  const handlePaymentCheckout = (token) => {
    return fetch(`/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token, product
      })
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return <StripeCheckout
    token={handlePaymentCheckout}
    stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
    name={`Buy ${product.name}`}
  >
    <button className='btn-large'>Buy {product.name} in {product.price}$</button>
  </StripeCheckout>
}

export default StripePaymentWidget;
