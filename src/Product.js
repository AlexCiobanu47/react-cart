import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Product = ({ id, name, image, price }) => {
  return (
    <ProductWrapper>
      <LinkWrapper key={id} to={`/shop/${id}`}>
        <ImageWrapper>
          <ItemImage src={image}></ItemImage>
        </ImageWrapper>
        <ItemDescriptionWrapper>
          <ItemName>{name}</ItemName>
          <ItemPrice>${price}</ItemPrice>
        </ItemDescriptionWrapper>
      </LinkWrapper>
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
const ItemPrice = styled.p``;
export default Product;
