import React from "react";
import styled from "styled-components";
const ShopItem = ({ id, name, image, price, addToCart }) => {
  const handleClick = () => {
    addToCart({ id, name, image });
  };
  return (
    <ItemWrapper>
      <ItemImage src={image} />
      <SideWrapper>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque alias
          doloribus reiciendis? Vero libero, neque nostrum dolor odit tempora
          tempore quo porro consectetur molestiae enim id fugit magni quos nisi?
          Numquam explicabo, esse nisi commodi perferendis dolores praesentium
          id fugiat ducimus atque consequuntur placeat cupiditate facere nulla
          laudantium similique eligendi qui debitis culpa aperiam ipsum saepe
          reprehenderit. Delectus suscipit aliquam cupiditate at accusamus
          voluptatem vero, similique porro? Commodi alias reprehenderit magnam
          eius, voluptate odio aspernatur tempore necessitatibus unde, nemo
          libero sit aperiam aliquid blanditiis soluta quisquam in impedit,
          neque consequatur molestias quas pariatur non. Id quae sunt porro
          distinctio incidunt.
        </ItemDescription>
        <ItemPrice>${price}</ItemPrice>
        <BuyItem onClick={handleClick}>Buy</BuyItem>
      </SideWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
`;
const ItemImage = styled.img`
  width: 500px;
`;
const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemTitle = styled.h1``;
const ItemDescription = styled.p``;
const ItemPrice = styled.p``;
const BuyItem = styled.button``;

export default ShopItem;
