import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const Container = styled.div`
    padding-bottom: 50px;
    background: #274C5B;
`
const SubTitle = styled.p`
    font-family: 'Yellowtail';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    color: #7EB693;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 200px;
`
const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    color: #fff;
    
`
const Wrapper = styled.h3`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px;
`
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    justify-content: center;
  }
`

const OfferCards = ({products}) => {
    return (
        <Container>
            <Wrapper>
                <SubTitle>Offer</SubTitle>
                <Title>We Offer Organic For You</Title>
                <Cards>{products.slice(0, 4).map((i)=>(<ProductCard key={i._id} product={i} />))}</Cards>
            </Wrapper>
        </Container>
    )
}

export default OfferCards
