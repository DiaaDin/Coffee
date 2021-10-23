import React from 'react'
import styled from 'styled-components'
import contactusbg from '../Images/contactusbg.jpg'

const ContactUsSection = styled.section`
width: 100%;
height: 100vh;  
background-color: #5c3d2e;
background-image: url(${contactusbg});
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
width: 100%;
height: 100%;
padding-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 2;


`
const Heading = styled.h1`
  color: #5c3d2e;
font-size: 2rem;
margin: 0 0 1rem 0;
`
const FormContainer = styled.form`
display: flex;
width: 50%;
height: 70%;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #FFF;
padding: 1rem;
z-index: 2;
@media (max-width: 768px) {
    width: 85%;
height: 60%;
  }

`
const Input = styled.input`
width: 80%;
padding: 1rem;
margin-bottom: 1rem;

`

const MessageInput = styled.textarea`
width: 80%;
padding: 1rem;
margin-bottom: 1rem;
`
const Btn = styled.button`
  color: #fff;
  outline: none;
  padding: 1rem 2.5rem;
  background: #5c3d2e;
  cursor: pointer;
  border: 2px solid #5c3d2e;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  position: relative;
  z-index: 2;
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
    height: 550%;
  }
  &:hover {
    color: #5c3d2e;
  }

@media (max-width:768px){


}
`;

const ContactUs = () => {
    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <ContactUsSection>
    <Overlay></Overlay>
            <Container>
                <FormContainer action>
                <Heading>Contact Us</Heading>
                <Input type='text' placeholder='Your Name'></Input>
                    <Input type='email' placeholder='Your Email'></Input>
                    <MessageInput cols='50' rows='20' placeholder='Your Message'></MessageInput>
                    <Btn onClick={submit}>Submit</Btn>
                </FormContainer>
            </Container>
            
        </ContactUsSection>
    )
}

export default ContactUs
