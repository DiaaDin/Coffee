import React from 'react'
import styled from 'styled-components';
import menubg from '../Images/MenuBg.jpg'
import {RiStarSFill,RiStarSLine} from 'react-icons/ri'
import Americano from '../Images/Americano.jpg'
import Espresso from '../Images/Espresso.jpg'
import Mocha from '../Images/Mocha.jpg'
import Macchiato from '../Images/Macchiato.jpg'
import Galão from '../Images/Galão.jpg'
import Doppio from '../Images/Doppio.jpeg'
import Cortado from '../Images/Cortado.jpg'
import RedEye from '../Images/RedEye.jpg'
import Lungo from '../Images/Lungo.jpg'
import Ristretto from '../Images/Ristretto.jpg'
import FlatWhite from '../Images/FlatWhite.jpg'
import Affogato from '../Images/Affogato.jpg'



const MenuSection = styled.section`
  width: 100%;
  height: auto;
  background-color: #402218;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${menubg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 0;
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
  height: 25rem;
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


const Menu = () => {
  return (
    <MenuSection>
      <Overlay></Overlay>
      <Heading>Full Menu</Heading>
      <MenuContainer>
      <Box>
              <Image src={Americano} />
              <Content>
                <Name>Americano</Name>
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
              <Image src={Espresso} />
              <Content>
                <Name>Espresso</Name>
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
              <Image src={Mocha} />
              <Content>
                <Name>Mocha</Name>
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
              <Image src={Macchiato} />
              <Content>
                <Name>Macchiato</Name>
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
              <Image src={Galão} />
              <Content>
                <Name>Galão</Name>
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
              <Image src={Doppio} />
              <Content>
                <Name>Doppio</Name>
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
              <Image src={Cortado} />
              <Content>
                <Name>Cortado</Name>
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
              <Image src={RedEye} />
              <Content>
                <Name>Red Eye</Name>
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
              <Image src={Lungo} />
              <Content>
                <Name>Lungo</Name>
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
              <Image src={Ristretto} />
              <Content>
                <Name>Ristretto</Name>
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
              <Image src={FlatWhite} />
              <Content>
                <Name>FlatWhite</Name>
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
              <Image src={Affogato} />
              <Content>
                <Name>Affogato</Name>
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
      
    </MenuSection>
  );
};

export default Menu
