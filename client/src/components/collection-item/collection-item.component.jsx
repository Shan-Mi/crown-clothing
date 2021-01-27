import React from "react";
import { connect } from "react-redux";

// import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  AddButton,
  ImageContainer,
  CollectionFooterContainer,
} from "./collection-item.styles";

// we don't need state, so create a function component
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span>{name}</span>
        <span>{price}</span>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

// dispatch the props
// 此函数接收 dispatch 参数（实际上是 Store 的 dispatch 方法），定义一系列发送事件的方法，并返回 props 对象。
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
