import React from "react";

import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameAndPriceContainer,
} from "./cart-item.styles";
// import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameAndPriceContainer>{name}</NameAndPriceContainer>
      <NameAndPriceContainer>
        {quantity} x ${price}
      </NameAndPriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
