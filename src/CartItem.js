import React from "react";
import styled from "styled-components";
const CartItem = ({
  id,
  name,
  image,
  price,
  quantity,
  addToCart,
  removeFromCart,
}) => {
  const handleIncrease = () => {
    addToCart({ id, name, price, image, quantity });
    console.log("increase");
  };
  const handleDecrease = () => {
    removeFromCart({ id, name, price, image, quantity });
    console.log("decrease");
  };
  return (
    <ProductWrapper>
      <ImageWrapper>
        <ItemImage src={image}></ItemImage>
      </ImageWrapper>
      <ItemDescriptionWrapper>
        <ItemName>{name}</ItemName>
        <BuyWrapper>
          <ItemPrice>${price}</ItemPrice>
          <Quantity>{quantity} pcs</Quantity>
          <DecreaseQuantityButton onClick={handleDecrease}>
            -
          </DecreaseQuantityButton>
          <IncreaseQuantityButton onClick={handleIncrease}>
            +
          </IncreaseQuantityButton>
        </BuyWrapper>
      </ItemDescriptionWrapper>
    </ProductWrapper>
  );
};
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #7f7f7f;
  padding: 2rem;
  width: 700px;
`;
const ImageWrapper = styled.div``;
const ItemImage = styled.img`
  width: 300px;
  padding: 1rem;
`;
const ItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemName = styled.h1``;
const BuyWrapper = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 1rem;
`;
const ItemPrice = styled.p``;
const Quantity = styled.p``;
const ButtonTemplate = styled.button`
  border: none;
  padding: 1rem;
  border-radius: 10px;
`;
const IncreaseQuantityButton = styled(ButtonTemplate)`
  background-color: green;
`;
const DecreaseQuantityButton = styled(ButtonTemplate)`
  background-color: red;
`;
export default CartItem;
