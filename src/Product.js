import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Product = ({ id, name, image, price, quantity, addToCart }) => {
  const handleClick = () => {
    addToCart({ id, name, image, quantity });
  };
  return (
    <ProductWrapper>
      <LinkWrapper key={id} to={`/shop/${id}`}>
        <ImageWrapper>
          <ItemImage src={image}></ItemImage>
        </ImageWrapper>
      </LinkWrapper>
      <ItemDescriptionWrapper>
        <ItemName>{name}</ItemName>
        <BuyWrapper>
          <ItemPrice>${price}</ItemPrice>
          <BuyButton onClick={handleClick}>BUY</BuyButton>
        </BuyWrapper>
      </ItemDescriptionWrapper>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LinkWrapper = styled(Link)`
  color: black;
  text-decoration: none;
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
export default Product;
