import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import image from '../constants/image'
import { Link } from 'react-router-dom'


const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(244, 244, 244, 0.82);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentTop = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 90%;
  height: 80%;
  background: #FFFAFA;
  border-radius: 18px;
  padding: 20px;
  padding-top: 100px;
  position: relative;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
`
const Title = styled.h6`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #274C5B;
  margin-bottom: 10px;
  margin-top: 10px;
`
const Img = styled.div`
  max-width:600px;
  
  & img{
    width:100%;
  }
  @media (max-width: 768px) {
    max-width: 250px;
  }
`
const DecriptionContent = styled.div`
  margin-bottom: 100px;
  margin-left: 40px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`
const Desc = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 165.4%;
  color: #525C60;
  max-width:650px;
  @media (max-width: 768px) {
    max-width:450px;
    line-height: 150%;
    font-size: 16px;
  }
`
const CrossPrise = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #B8B8B8;
`
const CurrentPrice = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #274C5B;
  margin-left: 10px;
`
const Category = styled.div`
  padding: 10px 15px 10px 15px;
  position: absolute;
  border-radius: 8px;
  color: #fff;
  background: #274C5B;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 10px;
  line-height: 20px;
`
const Stars = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 25px;
  color: #FFA858;
  @media (max-width: 768px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`
const HideModal = styled.div`
  position: absolute;
  right: 10px;
  top:10px;
  padding: 20px;
  background: #274C5B;
  color: #fff;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;

  &:hover{
    opacity: 0.85;
  }
`


const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 38px;
  color: #274C5B;
`
const InputQuantity = styled.input`
  padding: 10px;
  width: 50px;
  height: 20px;
  margin-left: 20px;
  border-radius: 10px;
  border: 1px solid #333;
`

const AddtoCartBtn = styled.button`
  width: 170px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props=>props.background};
  border: 0;
  color: #fff;
  font-size: 15px;
  border-radius: 16px;
  cursor: pointer;
  & img{
      margin-left: 15px;
  }
  margin-left: 15px;
`
const DecriptionText = styled.div`
  & div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  max-width: 1100px;
  margin: 0 auto;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 165.4%;
  text-align: center;
  color: #525C60;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`


const ProductDescBtn = styled.button`
  width: 170px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props=> props.background};
  
  border: 1px solid #274C5B;
  color: ${props=> props.color};
  font-size: 15px;
  border-radius: 16px;
  cursor: pointer;
`
const ProductInfoBtn = styled.button`
  width: 170px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props=> props.background};
  border: 1px solid #274C5B;
  color: ${props=> props.color};
  font-size: 15px;
  border-radius: 16px;
  cursor: pointer;
  margin-left:15px;
`


const Modal = ({product, isOpen, setIsOpen}) => {
  const [showDisc, setShowDisc] = useState(0)
  const [activeDisc, setActiveDisc] = useState(true)
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, '')
    setValue(newValue)
  }

  const handleKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode
    if (charCode < 48 || charCode > 57) e.preventDefault()
  }
  
  const handleButtonOneClick = () => {
    setShowDisc(product.desc)
    setActiveDisc(true)
  }

  const handleButtonTwoClick = () => {
    setShowDisc(product.aditionDesc)
    setActiveDisc(false)
  }
  const elementToRender = <span>★</span>
  const elements = []

  if(product) for (let i = 0; i < product.stars; i++) elements.push(elementToRender)
  const toggleModal = (e) => {
    const arr = e.target.classList.value.split(" ").pop()
    if(arr === 'close' ) setIsOpen(!isOpen)
    console.log(e.target)
  }


  return (
    <>
      {product && (
        <Container onClick={toggleModal} className='close'>
          <GlobalStyle />
          <Content className='wrap'>
          <HideModal className='close'>X</HideModal>
            <ContentTop>
              <Img><Category>{product.categories}</Category><img src={product.img} alt={product.title} /></Img>
              <DecriptionContent>
                <Title>{product.title}</Title>
                <Stars>{elements.map((element) => <>{element}</>)}</Stars>
                <div>
                    {product.priceCross ? <CrossPrise><strike>${product.priceCross}.00</strike></CrossPrise>: <></>}
                    <CurrentPrice>${product.price}.00</CurrentPrice>
                </div>
                <Desc>{product.desc}</Desc>
                <ProductQuantity>
                    Quantity: <InputQuantity type="text" value={value} onChange={handleChange} onKeyPress={handleKeyPress}  />
                    {value.length > 0 ? (
                      <Link to={'/cart'} state={{product: product, valueQuan: value}}><AddtoCartBtn background={'#EFD372'}>Add to cart <img src={image.introButtonIcon} alt="next" /></AddtoCartBtn></Link>
                    ):(
                      <AddtoCartBtn background={'#274C5B'}>Add to cart <img src={image.introButtonIcon} alt="next" /></AddtoCartBtn>
                    )}
                </ProductQuantity>
              </DecriptionContent>
            </ContentTop>

            <DecriptionText>
              <div>
                <ProductDescBtn onClick={handleButtonOneClick} background={activeDisc ? '#274C5B': '#EFF6F1'} color={activeDisc ? "#fff" :'#274C5B'}>Product Description</ProductDescBtn>
                <ProductInfoBtn onClick={handleButtonTwoClick} background={!activeDisc ? '#274C5B': '#EFF6F1'} color={!activeDisc ? "#fff" :'#274C5B'}>Addition Info </ProductInfoBtn>
              </div>

              <p>{showDisc === 0 ? product.desc : showDisc}</p>

            </DecriptionText>
          </Content>
        </Container>
      )}
    </>
  )
}

export default Modal
