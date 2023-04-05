import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import CartForm from '../components/CartForm'
import Navbar from '../components/Navbar'
import image from '../constants/image'
import { Link, useLocation } from 'react-router-dom'


const Container = styled.div`
    
`
const Banner = styled.div`
    width: 100%;
    height: 400px;
    background: ${props => `url(${props.background})`};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 82px;
    color: #274C5B;
`
const ContentWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    background: rgba(253, 176, 45, 0.16);
    padding-bottom: 150px;

`
const Content = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 910px) {
        flex-direction: column;
        justify-content: center;
    }
`

const ProductData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 910px) {
        flex-direction: column;
    }
`

const Img = styled.div`
    background: ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 200px;
`

const ProductName = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    color: #274C5B;
    margin-left: 20px;
`

const CrossPrice = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #B8B8B8;
    margin: 0 20px;
    
    @media (max-width: 910px) {
        margin-top: 30px;
    }
`
const CurrentPrice = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    color: #274C5B;
    
    @media (max-width: 910px) {
        margin-bottom: 30px;
    }
`

const ProductQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
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
const Close = styled.div`
    padding: 1px 16px;
    background: #274C5B;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    margin-left: 30px;
    cursor: pointer;
`


const TotalCost = styled.div`
    text-align: right;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #274C5B;
    margin-bottom: 20px;
    @media (max-width: 910px) {
        text-align: center;
        margin-top: 50px;
    }
`
const Discount = styled.div`
    text-align: right;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    color: #274C5B;
    @media (max-width: 910px) {
        text-align: center;
    }
`
const TotalPriceWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    
`

const ToOrderButton = styled.div`
    margin: 0 auto;
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #274C5B;
    border: 1px solid #274C5B;
    color: #fff;
    font-size: 20px;
    border-radius: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
        color: #274C5B;
        background: 0;
    }
    & img{
        margin-left: 15px;
    }
    
`

const Cart = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [value, setValue] = useState('')
    const location = useLocation()
    
    const { product, valueQuan } = location.state
    
    useEffect(()=>{setValue(valueQuan)}, [valueQuan])

    const handleChange = (e) => {
        const newValue = e.target.value.replace(/[^\d]/g, '')
        setValue(newValue)
    }

    const handleKeyPress = (e) => {
        const charCode = e.which ? e.which : e.keyCode
        if (charCode < 48 || charCode > 57) e.preventDefault()
    }

    

    const showForm = () => setIsFormVisible(true)

    return (
        <>
            <Navbar />
            <Container>
                <Banner background={image.cartBanner}>
                    Cart
                </Banner>
                <ContentWrapper>
                    <Content>
                        <ProductData>
                            <Img background={product.img}></Img>
                            <ProductName>{product.title}</ProductName>
                            <CrossPrice><strike> ${product.priceCross}.00</strike></CrossPrice>
                            <CurrentPrice>${product.price}.00</CurrentPrice>
                        </ProductData>
                        <ProductQuantity>
                            Quantity: <InputQuantity type="text" value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
                            <Link to={'/'}><Close>X</Close></Link>
                        </ProductQuantity>
                    </Content>
                    <TotalPriceWrapper>
                        <TotalCost>Total coast: {product.price * value}.00$</TotalCost>
                        <Discount>Discount: {(product.priceCross * value) - (product.price * value)}.00$</Discount>
                        {isFormVisible ? <CartForm /> : <ToOrderButton onClick={showForm}>To Order <img src={image.introButtonIcon} alt="Next" /></ToOrderButton>}
                    </TotalPriceWrapper>
                </ContentWrapper>
            </Container>
            <Footer />
        </>
    )
}

export default Cart
