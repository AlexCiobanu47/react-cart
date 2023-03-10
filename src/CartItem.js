import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CartItem = ({ id, name, image, price, quantity }) => {
  const handleClick = () => {};
  return (
    <ProductWrapper>
      <ImageWrapper>
        <ItemImage src={image}></ItemImage>
      </ImageWrapper>
      <ItemDescriptionWrapper>
        <ItemName>{name}</ItemName>
        <BuyWrapper>
          <ItemPrice>${price}</ItemPrice>
        </BuyWrapper>
      </ItemDescriptionWrapper>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ImageWrapper = styled.div``;
const ItemImage = styled.img`
  width: 300px;
`;
const ItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemName = styled.h1``;
const BuyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ItemPrice = styled.p``;
const BuyButton = styled.button``;
export default CartItem;
