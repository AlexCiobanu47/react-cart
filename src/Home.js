import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imageSrc from "./images/coffee-image.jpg";
const Home = () => {
  return (
    <MainWrapper>
      <MainTitle>COFFEE</MainTitle>
      <MainQuote>Best coffee on the market</MainQuote>
      <ButtonWrapper>
        <ShopButton to="/shop">VISIT THE SHOP</ShopButton>
      </ButtonWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${imageSrc});
  background-size: cover;
`;
const MainTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 5rem;
  background-color: black;
  padding: 0.5rem;
`;
const MainQuote = styled.div`
  color: white;
  margin: 3rem 0 10rem 0;
`;
const ButtonWrapper = styled.div`
  transition: transform 1.5s;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const ShopButton = styled(Link)`
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  background-color: black;
  color: white;
  :hover {
    color: gray;
  }
`;
export default Home;
