import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import image from '../constants/image'

const Container = styled.div``
const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 82px;
  color: #274C5B;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  
`
const Img = styled.div`

  & img{
      width: 100%;
  }
`


const Thank = () => {
  return (
    <Container>
      <Navbar />
        <Title>Thank you for your order</Title>
        <Img><img src={image.thankImg} alt="Thank you img" /></Img>
      <Footer />
    </Container>
  )
}

export default Thank
