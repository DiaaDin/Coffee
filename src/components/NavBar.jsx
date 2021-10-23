import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  background: transparent;
  position: fixed;
  z-index: 5;
  background-color: #fff;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #5c3d2e;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75%;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.h1``;

const NavLink = styled(Link)`
  margin-right: 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: none;
  color: #5c3d2e;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  width: 35%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Bars = styled(FaBars)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    color: #5c3d2e;
    font-size: 1.5rem;
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
`;

const NavLinkBtn = styled(Link)`
  color: #fff;
  text-decoration: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  background: #5c3d2e;
  cursor: pointer;
  border: 2px solid #5c3d2e;
  font-size: 1rem;
  font-weight: 600;
  overflow: hidden;
  position: relative;
  z-index: 2;
  transition: all 0.7s ease;

  &:before {
    background: #fff;
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
    color: #5c3d2e;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.5rem;
  }
`;

const NavBar = ({toggle}) => {
  return (
    <Nav>
      <NavContainer>
        <Left>
          <Logo>Coffee</Logo>
        </Left>
        <Right>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Products">Menu</NavLink>
            <NavLink to="/Desserts">Desserts</NavLink>
          </NavLinks>
          <NavLinkBtn to="/ContactUs">Contact Us</NavLinkBtn>
        </Right>
          <Bars onClick={toggle}/>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
