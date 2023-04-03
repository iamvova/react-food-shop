import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 150px 0;
    background: #F1F8F4;
`
const Category = styled.div`
    width: 600px;
    height: 550px;
    background: ${props => `url(${props.background})`};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

const CategoryBlock = styled.div`
    background: #fff;
    padding: 34px 83px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 29px;
    color: #274C5B;
    border-radius: 20px;
`
const TopCategories = () => {
  return (
    <Container>
      <Category background={image.topCategories1}><CategoryBlock>Organic Juice</CategoryBlock></Category>
      <Category background={image.topCategories2}><CategoryBlock>Organic Food</CategoryBlock></Category>
      <Category background={image.topCategories3}><CategoryBlock>Nuts Cookis</CategoryBlock></Category>
    </Container>
  )
}

export default TopCategories
