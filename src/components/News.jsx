import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px;
    padding-top: 50px;
    padding-bottom: 150px;
`
const TopTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

`
const TopTitleText = styled.div``
const TopTitleButton = styled.button`
    width: 180px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#333;
    background: 0;
    border: 1px solid #274C5B;
    font-size: 20px;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
        color: #fff;
        background: #274C5B;
    }
    & img{
        margin-left: 15px;
    }
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
`
const Title = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    max-width: 700px;
`

const Cards = styled.div`
    margin-top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 30px;
    padding: 20px;
    height: 400px;
    background: ${props => `url(${props.background})`};
    position: relative;
    
    
    
`
const SubTitleCard = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #274C5B;
`
const TitleCard = styled.h6`
    max-width: 500px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 29px;
    color: #274C5B;
    margin-top: 15px;
    margin-bottom: 0;    
`

const DescCard = styled.p`
    max-width: 500px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 165.4%;
    color: #525C60;
`
const ButtonCard = styled.button`
    width: 180px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EFD372;
    border: 1px solid #EFD372;
    color: #fff;
    font-size: 20px;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
        color:#333;
        background: 0;
    }
    & img{
        margin-left: 15px;
    }
`
const CradBlock = styled.div`
    border-radius: 30px;
    background: #fff;
    padding: 20px;
    transform: translateY(230px);
    box-shadow: 0px 20px 35px rgba(167, 167, 167, 0.25);
`

const AroundBlock = styled.span`
    position: absolute;
    width: 75px;
    height: 75px;
    background: #fff;
    border-radius: 50%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    color: #274C5B;
`
const News = () => {
  return (
    <Container>
      <TopTitle>
        <TopTitleText>
            <SubTitle>News</SubTitle>
            <Title>Discover weekly content about organic food, & more</Title>
        </TopTitleText>
        <TopTitleButton>More news <img src={image.introButtonIcon} alt="Next" /></TopTitleButton>
      </TopTitle>
      <Cards>
        <Card background={image.newsImg1}>
            <AroundBlock>25 <br /> Nov</AroundBlock>
            <CradBlock>
                <SubTitleCard><img src={image.personIcon} alt="Icon" /> By Rachi Card</SubTitleCard>
                <TitleCard>The Benefits of Vitamin D & How to Get It</TitleCard>
                <DescCard>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</DescCard>
                <ButtonCard>Read More <img src={image.introButtonIcon} alt="Next" /></ButtonCard>
            </CradBlock>
        </Card>
        <Card background={image.newsImg2}>
            <AroundBlock>25 <br /> Nov</AroundBlock>
            <CradBlock>
                <SubTitleCard><img src={image.personIcon} alt="Icon" /> By Rachi Card</SubTitleCard>
                <TitleCard>The Benefits of Vitamin D & How to Get It</TitleCard>
                <DescCard>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</DescCard>
                <ButtonCard>Read More <img src={image.introButtonIcon} alt="Next" /></ButtonCard>
            </CradBlock>
        </Card>
      </Cards>
    </Container>
  )
}

export default News
