import React from 'react'
import styled from 'styled-components';
import {RiStarSFill,RiStarSLine} from 'react-icons/ri'
import DessertImg from '../Images/dessertimg.jpg'
import dessertbg from '../Images/dessertbg.jpg'
import dessertsmenubg from '../Images/dessertsmenubg.jpg'
import Crowd from '../Images/Crowd-pleasing chocolate cake with roast rhubarb.jpg'
import Coconut from '../Images/Coconut cake with lime curd.jpg'
import Allumettes from '../Images/Allumettes with café au lait Anglaise.jpg'
import Mochaa from '../Images/Mocha éclairs.jpg'
import Yoghurt from '../Images/Yoghurt cake with lemon.jpg'
import Fried from '../Images/Fried pastries with espresso mascarpone.jpg'
import Milk from '../Images/Milk cake with pomegranate and pistachio.jpg'
import Cinnamon from '../Images/Cinnamon and sour-cherry scroll cake with crunchy coffee glaze.jpg'
import Doughnuts from '../Images/Coffee and doughnuts.jpg'
import Paris from '../Images/Paris brest.jpg'
import Jellies from '../Images/Coffee jellies with mascarpone cream.jpg'
import Blood from '../Images/Blood orange and hazelnut cake.jpg'


const DessertsSection = styled.section`
width: 100%;
height: 100vh;
position: relative;
display: flex;
background-color: #402218;
background-image: url(${dessertbg});
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
width: 50%;
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
const Lead = styled.h2`
font-size: 1.5rem;
width: 70%;
@media (max-width: 768px) {
  width: 100%;

}
`

const DessertsMenuSection = styled.section`
  width: 100%;
  height: auto;
  background-color: #402218;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${dessertsmenubg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;


   

const Heading = styled.h1`
  margin: 0;
  padding-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.6rem;
  color: #fff;
  z-index: 2;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;
`;
const Box = styled.div`
  width: 19rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
  background-color: rgba(255,255,255,0.01);
  box-shadow: 8px 8px 27px -5px rgba(0,0,0,0.75);
  border-radius: 20px;
  transition: all .4s ease-in-out;
  @media (max-width: 768px) {
    margin-right: 0;
    padding:1rem 0;
  }
  &:hover{
  background-color: rgba(255,255,255,0.1);
  }
`;
const Image = styled.img`
  width: 70%;
  height: 13rem;
  filter: drop-shadow(6px 6px #fff);
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
width: 90%;
text-align: center;
font-size: 1.3rem;
  margin-bottom: 0;
  color: #fff;
`;
const Price = styled.span`
  color: #fff;
  font-size: 1.3rem;
  `;

  const StarsComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `

const Stars = styled(RiStarSFill)`
color: #F0C929;
margin-bottom: 1rem;
font-size: 1rem;
`
const StarsLine = styled(RiStarSLine)`
color: #F0C929;
margin-bottom: 1rem;
font-size: 1rem;
`

const Btn = styled.button`
  color: #171717;
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
    background: #171717;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 0%;
    transition: all 0.7s ease;
    transform: translate(-50%, -50%) rotate(45deg);
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

const Desserts = () => {
    return (
        <>
         <DessertsSection>
    <Overlay></Overlay>
      <Container>
        <ImgContainer>
        <Img src={DessertImg}/>
        </ImgContainer>
        <TextContainer>
          <TextOne>
          We hope you enjoyed the coffee
          </TextOne>
          <Lead>
          Did You Want Some Desserts ?
          </Lead>
        </TextContainer>
      </Container>
    </DessertsSection>  
    <DessertsMenuSection>
    <Overlay></Overlay>
    <Heading>Desserts Menu</Heading>
    <MenuContainer>
    <Box>
            <Image src={Crowd} />
            <Content>
              <Name>Crowd-pleasing chocolate cake</Name>
              <Price>1.2$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Coconut} />
            <Content>
              <Name>Coconut cake with lime curd</Name>
              <Price>2.2$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Allumettes} />
            <Content>
              <Name>Allumettes with café au lait Anglaise</Name>
              <Price>2.4$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Mochaa} />
            <Content>
              <Name>Mocha éclairs</Name>
              <Price>2$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Yoghurt} />
            <Content>
              <Name>Yoghurt cake with lemon</Name>
              <Price>3$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Fried} />
            <Content>
              <Name>Fried pastries with espresso mascarpone</Name>
              <Price>6$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Milk} />
            <Content>
              <Name>Milk cake with pomegranate and pistachio</Name>
              <Price>1.99$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Cinnamon} />
            <Content>
              <Name>Cinnamon and sour-cherry scroll cake </Name>
              <Price>2.5$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Doughnuts} />
            <Content>
              <Name>Coffee and doughnuts</Name>
              <Price>3.2$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Paris} />
            <Content>
              <Name>Paris brest</Name>
              <Price>1.8$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Jellies} />
            <Content>
              <Name>Coffee jellies with mascarpone cream</Name>
              <Price>4.3$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          <Box>
            <Image src={Blood} />
            <Content>
              <Name>Blood orange and hazelnut cake</Name>
              <Price>3.5$</Price>
              <StarsComponents>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <StarsLine/>
              </StarsComponents>
              <Btn>Odrer Now</Btn>
            </Content>
          </Box>
          
    </MenuContainer>
    
  </DessertsMenuSection> 
  </>
        
    )
}

export default Desserts
