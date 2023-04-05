import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
    display: flex;
`
const ImgContainer = styled.div``
const Content = styled.div`
    position: relative;
`
const ContentBlock = styled.div`
    position: absolute;
    top: 0;
    left: -50px;
    width: 780px;
    background: #fff;
    border-radius: 30px;
    padding: 30px;
    margin-top: 200px;
    @media (max-width: 1400px) {
        left: -600px;
    }
    @media (max-width: 980px) {
        left: -900px;
        width: 500px;
    }
    @media (max-width: 550px) {
        left: -950px;
    }
    
`
const SubTitle = styled.p`
    font-family: 'Yellowtail';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 50px;
    color: #7EB693;
    margin-bottom: 0;
    margin-top: 0;
`
const Title = styled.h3`
    margin-top: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 60px;
    color: #274C5B;
    max-width: 600px;
    @media (max-width: 550px) {
        font-size: 40px;
        line-height: 50px;
        max-width: 400px;
        margin-bottom: 20px;
    }
`
const DescTitle = styled.div`
    max-width: 600px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    color: #274C5B;
`
const DescText = styled.div`
    max-width: 600px;
    margin-bottom: 15px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 165%;
    color: #525C60;
    @media (max-width: 550px) {
        font-size: 16px;
        line-height: 150%;
    }
`

const Eco = () => {
    return (
        <Container>
            <ImgContainer><img src={image.ecoImg} alt="Eco img" /></ImgContainer>
            <Content>
                <ContentBlock>
                    <SubTitle>Eco Friendly</SubTitle>
                    <Title>Econis is a Friendly Organic Store</Title>
                    
                    <DescTitle>Start with Our Company First</DescTitle>
                    <DescText>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</DescText>

                    <DescTitle>Learn How to Grow Yourself</DescTitle>
                    <DescText>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</DescText>

                    <DescTitle>Farming Strategies of Today</DescTitle>
                    <DescText>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</DescText>
                
                </ContentBlock>
            </Content>
        </Container>
    )
}

export default Eco
