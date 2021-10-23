import React from 'react'
import styled from 'styled-components'
import bg from '../Images/arabic.jpg'

const ArabicSection = styled.section`
width: 100%;
height: 40vh;
background-image: url(${bg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;
background-attachment: fixed;
@media (max-width:768px){
    height: auto;


}
`
const Overlay = styled.div`
position: absolute;
inset: 0;
background-color: rgba(0,0,0,0.6);
z-index: 0;
`
const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
width: 60%;
height: 100%;
margin: 0 auto;
color: #FFF;

@media (max-width:768px){
    width: 80%;
    padding: 2rem 0;
}
`
const Heading = styled.h2`
z-index: 2;
margin: 0;
text-shadow: 3px 3px 3px #000000;
@media (max-width:768px){
    margin-bottom: 1rem;
}
`
const Desc = styled.p`
z-index: 2;
text-shadow: 3px 3px 3px #000000;
@media (max-width:768px){
   display: none;
}
`
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
    height: 500%;
  }
  &:hover {
    color: #5c3d2e;
  }

@media (max-width:768px){
    padding: .4rem 2rem;


}
`

const Arabic = () => {
    return (
        <ArabicSection>
            <Container>
                <Heading>جرب مذاق القهوة العربية</Heading>
                <Desc>إنَّ للقهوة العربية الكثير من الاحترام عند العرب، إذ لها عادات قِبليَّة مُتعارف عليها بين الناس والقبائل، إذ يتوجّب عليك سكب القهوة للضيوف وأنتَ واقف، وعليكَ أيضًا أن تُمسكها بيدك اليسرى وتُقدّم الفنجان باليد اليُمنى، ولا تجلس أبدًا حتى ينتهي جميع الحاضرين من شرب القهوة، فعند سكب القهوة وتقديمها للضيوف يجب أن تبدأ من اليمين اقتداءً بالسَُنة الشريفة، أو تبدأ بالضيف مُباشرة إذا كان من كِبار السن، ومن المُتعارف عليه أن تصبّ القهوة إلى أن يقول الضيف كفى أو يهزّ الفنجان.</Desc>
                <Btn>أطلب الآن</Btn>
            </Container>
            <Overlay></Overlay>
        </ArabicSection>
    )
}

export default Arabic
