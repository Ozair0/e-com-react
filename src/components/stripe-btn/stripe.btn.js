import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey = "pk_test_CvsXjw34n5EYDdGYZ1qfJ8zW";

  const onToken = token => {
    console.log(token);
    alert("Success!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-COM"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`You Total Is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeCheckoutBtn;
