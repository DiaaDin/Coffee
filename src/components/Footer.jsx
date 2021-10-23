import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import Phoneimg from "../Images/icon-phone.svg";
import Message from "../Images/icon-email.svg";

const FooterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #402218;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const Phone = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const PhoneIcon = styled.img`
  width: 1.2rem;
  height: 1rem;
  margin-right: 1rem;
`;
const Number = styled.span`
  color: #fff;
`;
const Email = styled.div`
  margin-bottom: 1rem;
`;
const EmailIcon = styled.img`
  width: 1.2rem;
  height: 1rem;
  margin-right: 1rem;
`;
const Adress = styled.span`
  color: #fff;
`;
const Social = styled.div`
  padding-bottom: 1rem;
`;
const Facebook = styled(AiFillFacebook)`
  color: #fff;
  margin-right: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Instagram = styled(AiOutlineInstagram)`
  color: #fff;
  margin-right: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Twitter = styled(AiOutlineTwitter)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Title = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;
const Desc = styled.p`
  color: #fff;
  margin-bottom: 1rem;
  width: 60%;
  @media (max-width: 768px) {
    width: 65%;
    text-align: center;
  }
`;
const Inputs = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const InputField = styled.input`
  padding: 0.7rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  border: none;
  outline: none;
  width: 40%;
  @media (max-width: 768px) {
    padding: 0.7rem 0;
    margin: 0 0 1rem 0;
    width: 40%;
  }
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
    margin-bottom: 2rem;
    width: 40%;
  }
`;

const LastFooter = styled.h1`
width: 100%;
padding: .5rem 0;
margin: 0;
color: #5c3d2e;
background-color: #FFF;
text-align: center;
@media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Container>
          <Content>
            <Title>NEWSLETTER</Title>
            <Desc>
              To recieve Our New Products, sign up to our weekly newsletter.
              We’ll never send you spam or pass on your email address
            </Desc>
          </Content>
          <Inputs>
            <InputField />
            <Btn>Subscribe</Btn>
          </Inputs>
          <Contact>
            <Phone>
              <PhoneIcon src={Phoneimg} />
              <Number>Phone: +1-543-123-4567</Number>
            </Phone>

            <Email>
              <EmailIcon src={Message} />
              <Adress>example@coffee.com</Adress>
            </Email>

            <Social>
              <Facebook />
              <Instagram />
              <Twitter />
            </Social>
          </Contact>
        </Container>
      </FooterContainer>
      <LastFooter>Diaa Zahran | all rights reserved</LastFooter>
    </FooterSection>
  );
};

export default Footer;
