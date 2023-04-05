import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'

const Container = styled.div`
    background: #F9F8F8;
    border-radius: 30px;
    margin-bottom: 30px;
    padding: 20px;
    cursor: pointer;
    position: relative;
    @media (max-width: 1250px) {
        margin: 20px;
    }
`

const CategoryName = styled.span`
    padding: 10px 15px 10px 15px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 8px;
    color: #fff;
    background: #274C5B;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
`
const ProductName = styled.h6`
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
    width: 300px;
    height: 350px;
    & img{
        width: 100%;
    }
`
const Price = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const Hr = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #DEDDDD;
    opacity: 0.3;
`


const Stars = styled.div`
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 25px;
    color: #FFA858;
`
const ProductCard = ({product}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen)

    const elementToRender = <span>★</span>
    const elements = []

    if(product) for (let i = 0; i < product.stars; i++) elements.push(elementToRender)
    
    return (
        <>
            {product && (
                <>
                    <Container onClick={toggleModal}>
                        <CategoryName>{product.categories}</CategoryName>
                        <Img><img src={product.img} alt="img" /></Img>
                        <ProductName>{product.title}</ProductName>
                        <Hr />
                        <Price>
                            <div>
                                {product.priceCross ? <CrossPrise><strike>${product.priceCross}</strike></CrossPrise>: <></>}
                                <CurrentPrice>${product.price}</CurrentPrice>
                            </div>
                            <Stars>
                                {elements.map((element, index) => <>{element}</>)}
                            </Stars>
                        </Price>
                    </Container>

                    {isOpen && (
                        <Modal product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
                    )}
                </>

            )} 
        </>
    )
}


export default ProductCard
