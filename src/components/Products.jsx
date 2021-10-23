import React from "react";
import styled from "styled-components";
import Menu from './Menu'
import arabica from '../Images/arabica.jpg'
import latte from '../Images/latte.jpeg'
import Cappuccino from '../Images/Cappuccino.jpg'
import Friends from '../Images/Friend.jpg'
import ShareBg from '../Images/ShareBg.jpg'

const Share = styled.section`
width: 100%;
height: 100vh;
position: relative;
display: flex;
background-color: #402218;
background-image: url(${ShareBg});
background-position: center;
background-size: cover;
background-attachment: fixed;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 0;
`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

@media (max-width: 768px) {
    flex-direction: column;
    padding-top: 2rem;
  }
`
const ImgContainer = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
`
const Img = styled.img`
width: 45%;
filter: drop-shadow(9px 9px #FFF);
transition: all .2s ease-in-out;
&:hover{
filter: drop-shadow(12px 12px #FFF);

}
@media (max-width: 768px) {
  padding-top: 2rem};
`
const TextContainer = styled.div`
flex: 1;
color: #FFF;
z-index: 2;
@media (max-width: 768px) {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;

  }

`
const TextOne = styled.h1`
font-size: 2rem;

`
const Lead = styled.p`
font-size: 1.1rem;
width: 70%;
@media (max-width: 768px) {
  width: 100%;

}
`

const ProductsSection = styled.section`
  width: 100%;
  height: auto;
  background-color: #402218;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
   

const Heading = styled.h1`
  margin: 0;
  padding-top: 5rem;
  text-align: center;
  font-size: 2.6rem;
  color: #fff;
`;

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;
`;
const Box = styled.div`
  width: 22rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
const Image = styled.img`
  width: 70%;
  height: 14rem;
  filter: drop-shadow(9px 9px #fff);
  @media (max-width: 768px) {
    width: 70%;
    height: 15rem;
  }
`;



const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Name = styled.h2`
  margin-bottom: 0;
  color: #fff;
`;
const Price = styled.span`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
const Btn = styled.button`
  color: #5c3d2e;
  outline: none;
  padding: 0.5rem 2rem;
  background: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  transition: all 0.7s ease;

  &:before {
    background: #5c3d2e;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 0%;
    transition: all 0.7s ease;
    transform: translate(-50%, -50%) rotate(90deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.5rem;
  }
`;






const Producs = () => {
  return (
    <>
    <Share>
    <Overlay></Overlay>
      <Container>
        <ImgContainer>
        <Img src={Friends}/>
        </ImgContainer>
        <TextContainer>
          <TextOne>
          Have Friends ? <br/> Order Some Coffee
          </TextOne>
          <Lead>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eius deserunt inventore ex unde officia facilis, iste quas quaerat minima.
          </Lead>
        </TextContainer>
      </Container>
    </Share>
    <ProductsSection>
      <Heading>Most Ordered</Heading>
      <ProductsContainer>
      <Box>
              <Image src={arabica} />
              <Content>
                <Name>Arabica</Name>
                <Price>1.5$</Price>
                <Btn>Odrer Now</Btn>
              </Content>
            </Box>
            <Box>
              <Image src={latte} />
              <Content>
                <Name>Latte</Name>
                <Price>1.2$</Price>
                <Btn>Odrer Now</Btn>
              </Content>
            </Box>
            <Box>
              <Image src={Cappuccino} />
              <Content>
                <Name>Cappuccino</Name>
                <Price>2.2$</Price>
                <Btn>Odrer Now</Btn>
              </Content>
            </Box>
      </ProductsContainer>
      
        <Menu/>
    </ProductsSection>
    </>
  );
};

export default Producs;
