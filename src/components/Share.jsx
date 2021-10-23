import React from 'react'
import styled from 'styled-components'
import sharepic from '../Images/share.jpg'
import bean from '../Images/coffeebean.png'
import {AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'



const ShareSection = styled.section`
width: 100%;
height: 100vh;
background-color: #5C3D2E;
position: relative;
@media (max-width: 768px) {
    height: auto;

  }
`
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
const ShareImg = styled.img`
width: 50%;
filter: drop-shadow(9px 9px #FFF);
transition: all .2s ease-in-out;
&:hover{
filter: drop-shadow(12px 12px #FFF);

}
`
const Content = styled.div`
flex: 1;
color: #FFF;
z-index: 2;

`

const ContentContainer = styled.div`
width: 70%;

@media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;

  }

`
const Heading = styled.h1`
font-size: 2rem;
`
const Desc = styled.p`
font-size: 1.1rem;

`

const Social = styled.div``
    

const Facebook = styled(AiFillFacebook)`
color: #FFF;
margin-right: .5rem;
cursor: pointer;
font-size: 1.5rem;
transition: .2s ease-in-out;
&:hover{
color:#1877F2;
}
`
const Instagram = styled(AiOutlineInstagram)`
color: #FFF;
margin-right: .5rem;
cursor: pointer;
font-size: 1.5rem;
transition: .2s ease-in-out;
&:hover{
   color: #E4405F;
}
`
const Twitter = styled(AiOutlineTwitter)`
color: #FFF;
cursor: pointer;
font-size: 1.5rem;
transition: .2s ease-in-out;
&:hover{
color:#1DA1F2;
}
`

const Image = styled.img`
position: absolute;
bottom: 0; right: 0;
z-index: 1;
@media (max-width: 768px) {
    display: none;
  }
`

const Share = () => {
    return (
        <ShareSection>
            <Container>
                <ImgContainer>
                <ShareImg src={sharepic}/>
                </ImgContainer>
                <Content>
                <ContentContainer>

                    <Heading>Share Your Story With Friends</Heading>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet officia repudiandae incidunt, quibusdam dolorem quasi suscipit neque sint nam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nam nobis laudantium corporis a, aspernatur impedit officia doloremque similique illum.
                    </Desc>
                    <Social>

                    <Facebook/>
                        <Instagram/>
                        <Twitter/>
                    </Social>
                </ContentContainer>
                </Content>
            </Container>
            <Image src={bean}/>
        </ShareSection>
    )
}

export default Share
