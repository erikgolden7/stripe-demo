import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const stripeKey =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : process.env.REACT_APP_TEST_PUB_KEY;

const currency = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios
    .post('/api/transaction', {
      description,
      source: token.id,
      currency: currency,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={currency}
    stripeKey={stripeKey}
  />
);

export default Checkout;
