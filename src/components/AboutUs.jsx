import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
    display: flex;
    align-items: center;
    background: #F9F8F8;
    @media (max-width: 1150px) {
        flex-direction: column;
        padding: 100px 0;
    }
`
const ImgContent = styled.div`
    @media (max-width: 1150px) {
        display: none;
    }
`
const DescContent = styled.div`
    margin-left: 40px;

`
const SubTitle = styled.div`
    font-family: 'Yellowtail';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    color: #7EB693;
`
const Title = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 59px;
    color: #274C5B;
    width: 500px;
    margin-top: 10px;
    margin-bottom: 15px;
    @media (max-width: 550px) {
        width: 400px;
        font-size: 45px;
    }
`
const Description = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 165.4%;
    color: #525C60;
    width: 500px;
    margin-bottom: 45px;
    @media (max-width: 550px) {
        width: 400px;
        font-size: 16px;
    }
`
const DescCategoty = styled.div`
    display: flex;

    margin-bottom: 30px;
`
const CategoryImg = styled.div`
    margin-right: 20px;
`
const CategoryDesc = styled.div``
const CategoryTitle = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 29px;
    color: #274C5B;
`
const CategoryText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 165.4%;
    color: #525C60;
    width: 444px;
    margin-top: 7px;
    @media (max-width: 550px) {
        width: 300px;
        font-size: 16px;
    }
`
const Button = styled.button`
    width: 220px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #274C5B;
    border: 1px solid #274C5B;
    color: #fff;
    font-size: 20px;
    border-radius: 16px;
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
        color:#333;
        background: #f1eff0;
    }
    & img{
        margin-left: 15px;
    }
`


const AboutUs = () => {
  return (
    <Container>
      <ImgContent><img src={image.aboutImg} alt="About Img" /></ImgContent>
      <DescContent>
        <SubTitle>About Us</SubTitle>
        <Title>We Believe in Working Accredited Farmers</Title>
        <Description>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Description>
        <DescCategoty>
            <CategoryImg><img src={image.aboutIcon1} alt="About icon" /></CategoryImg>
            <CategoryDesc>
                <CategoryTitle>Organic Foods Only</CategoryTitle>
                <CategoryText>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</CategoryText>
            </CategoryDesc>
        </DescCategoty>

        <DescCategoty>
            <CategoryImg><img src={image.aboutIcon2} alt="About icon 2" /></CategoryImg>
            <CategoryDesc>
                <CategoryTitle>Organic Foods Only</CategoryTitle>
                <CategoryText>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</CategoryText>
            </CategoryDesc>
        </DescCategoty>

        <Button>Shop Now <img src={image.introButtonIcon} alt="Next" /></Button>
      
      </DescContent>
    </Container>
  )
}

export default AboutUs
