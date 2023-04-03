import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 150px;
    margin-bottom: 150px;

    width: 500px;
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
