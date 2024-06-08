import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Here you would handle the payment process (e.g., send the payment method ID to your server)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        Pay ${amount}
      </button>
    </form>
  );
};

export default CheckoutForm;
