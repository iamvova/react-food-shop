import React, { useState } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 200px;
  margin-top: 100px;
`
const SubTitle = styled.p`
  font-family: 'Yellowtail';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  color: #7EB693;
  text-align: center;
  margin-bottom: 0;
`
const Title = styled.h3`
  margin-top: 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  text-align: center;
  margin-bottom: 60px;
  color: #274C5B;
`
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const MoreBtn = styled.button`
  width: 170px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #274C5B;
  border: 1px solid #274C5B;
  color: #fff;
  font-size: 15px;
  border-radius: 16px;
  cursor: pointer;
  transition: .3s ease-out;
  &:hover{
    color:#333;
    background: #f1eff0;
  }

`



const Categories = ({products}) => {
  const [more, setMore] = useState(false)

  return (
    <Container>
      <SubTitle>Categories</SubTitle>
      <Title>Our Products</Title>

      {products.length > 0 && (
        <Cards>
          {more ? 
            <>{products.map((i)=>(<ProductCard key={i._id} product={i} />))}</>
          :
            <>{products.slice(0, 8).map((i)=>(<ProductCard key={i._id} product={i} />))}</>
          }
        </Cards>
      )}
      <MoreBtn onClick={()=>setMore(!more)}>{more ? 'Load less' : 'Load more'}</MoreBtn>
    </Container>
  )
}

export default Categories
