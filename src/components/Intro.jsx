import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'


const Container = styled.div`
    background:  ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-attachment: fixed;   
    height: 100vh;
    min-width: 100%;
    
    margin-top: 30px;
    
`
const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`
const SubTitle = styled.p`
    padding-top: 260px;
    font-family: 'Yellowtail';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    color: #68A47F;
`
const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 70px;
    line-height: 82px;
    color: #274C5B;
    width: 530px;
    margin-top: 10px;
    margin-bottom: 15px;
`
const Button = styled.button`
    width: 220px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EFD372;
    border: 1px solid #EFD372;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
        background: #f1eff0;
    }
    & img{
        margin-left: 15px;
    }
`

const Intro = () => {
  return (
    <Container background={image.introBackground}>
        <Wrapper>
            <SubTitle>100% Natural Food</SubTitle>
            <Title>Choose the best healthier way of life</Title>
            <Button>Explore Now <img src={image.introButtonIcon} alt="Next" /></Button>
        </Wrapper>
    </Container>
  )
}

export default Intro
