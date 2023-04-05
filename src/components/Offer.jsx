import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px) {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`
const Img = styled.img`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 150px;
  margin-bottom: 150px;

  width: 500px;

  @media (max-width: 1150px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const Offer = () => {
  return (
    <Container>
      <Img src={image.offer1} alt="Offer 1" />
      <Img src={image.offer2} alt="Offer 2" />
    </Container>
  )
}

export default Offer
