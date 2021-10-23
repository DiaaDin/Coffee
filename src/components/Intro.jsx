import React from "react";
import styled from "styled-components";
import introbg from "../Images/introbg.jpg";
import Arabic from "./Arabic";
import Share from "./Share";

const IntroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-image: url(${introbg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

 
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

const Name = styled.h2`
  font-size: 3rem;
  margin-top: -2.8rem;
  color: #fff;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #85564c;
  font-family: "Courgette", cursive;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: -2rem;
  }
`;

const Btn = styled.button`
  color: #fff;
  outline: none;
  padding: 0.7rem 2.5rem;
  background: transparent;
  cursor: pointer;
  border: 2px solid #5c3d2e;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  position: relative;
  transition: all .7s ease;

  &:before{
    background: #fff;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    width: 100%;
    height: 0%;
    transition: all .7s ease;
    transform: translate(-50%,-50%) rotate(90deg);

  }
  &:hover:before{
    height: 500%;
  }
  &:hover {
    color: #5c3d2e;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 2rem;
  }
`;

const Intro = () => {
  return (
    <>
    <IntroSection>
      <Overlay></Overlay>
      <Content>
        <Title>Life Begins After</Title>
        <Name>Coffee</Name>
        <Btn>Buy A Cup</Btn>
      </Content>
    </IntroSection>
      <Share/>
      <Arabic/>
    </>
  );
};

export default Intro;
