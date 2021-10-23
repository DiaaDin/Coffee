import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom";

const DropDownContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 width: 100%;
 height: 100vh;
 background: #FFF;
 position: fixed;
 z-index: 9999;
 top: 0; left: 0;
 opacity: ${({isOpen}) => (isOpen ? '1' : '0') };
 top: ${({isOpen}) => (isOpen ? '0' : '-100%') };
 transition: .3s ease-in-out;
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 3rem;
background: transparent;
outline: none;
`

const CloseIcon = styled(FaTimes)`
font-size: 1.5rem;
color: #5c3d2e;
cursor: pointer;
`

const NavLink = styled(Link)`
  padding: 1rem;
  font-size: 1.7rem;
  font-weight: 500;
  text-decoration: none;
  display: block;
  color: #5c3d2e;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NavLinkBtn = styled(Link)`
text-decoration: none;
text-align: center;
  color: #fff;
  width: 40%;
  padding: 0.5rem 1.5rem;
  background: #5c3d2e;
  cursor: pointer;
  border: 2px solid #5c3d2e;
  font-size: 1.7rem;
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
    height: 700%;
  }
  &:hover {
    color: #5c3d2e;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 1rem;
  }
`;




const DropDownMenu = ({toggle, isOpen}) => {
    return (
        <DropDownContainer onClick={toggle} isOpen={isOpen}>
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Products">Menu</NavLink>
            <NavLink to="/Desserts">Desserts</NavLink>
          </NavLinks>
          <NavLinkBtn to="/ContactUs">Contact Us</NavLinkBtn>
            
        </DropDownContainer>
    )
}

export default DropDownMenu
