import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GOOHlGKXMHzUfnSMVd6EQBPqqHVD2yQM9MMx9Kf8lpP1klJuyqnJUChUV8KHHYiSTk87f6MBFo7FZgypMQmk1TX00L5lSBJLy";

  // in function axios, all data match what server expects - url's name, data's properties' name
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful!");
      })
      .catch((error) => {
        console.log(`Payment error: ${error}`);
        alert(
          "There was an issue with your payment. Please sure you use the provided credit card. :)"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
