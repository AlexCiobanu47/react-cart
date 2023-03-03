import React from "react";
import styled from "styled-components"
const Product = ({id, name, image, price, quantity, addToCart}) =>{

    const handleClick = () =>{
        addToCart({id, name, image, quantity, price});
    }
    return (
      <ProductWrapper>
        <ImageWrapper>
            <Image src = {image}></Image>
        </ImageWrapper>
        <ItemDescriptionWrapper>
            <ItemName>{name}</ItemName>
            <ItemBuyWrapper>
                <ItemPrice>${price}</ItemPrice>
                <ItemBuyButton onClick={handleClick}>BUY</ItemBuyButton>
            </ItemBuyWrapper>
            
        </ItemDescriptionWrapper>
            
      </ProductWrapper>  
    );
}

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;
const ImageWrapper = styled.div`
    width: 300px;
`;
const Image = styled.img`
    width: 100%;`;
const ItemDescriptionWrapper = styled.div`

`;
const ItemName = styled.h1`
`;
const ItemBuyWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
`;
const ItemPrice = styled.p`
`;
const ItemBuyButton = styled.button`
background-color: transparent;
border: 1px solid black;
cursor: pointer;
`;
export default Product;