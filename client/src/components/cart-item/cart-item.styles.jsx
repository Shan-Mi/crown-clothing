import styled, { css } from "styled-components";

const nameStyles = css`
  font-size: 16px;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ImgContainer = styled.img`
  width: 30%;
`;

const getNameStyles = (props) => (props.name ? nameStyles : null);

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameAndPriceContainer = styled.span`
  ${getNameStyles}
`;
