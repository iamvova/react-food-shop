import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'


const Container = styled.div`
    background:  ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    min-width: 100%;
    background-attachment: fixed;   
    text-align: center;
    padding-bottom: 50px;
    @media (max-width: 1150px) {
        background: rgb(241, 238, 238, 0.5);
    }
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
    @media (max-width: 1150px) {
        padding-top: 50px;
    }
`
const Title = styled.h3`
    margin-top: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    text-align: center;
    color: #274C5B;
`

const Description = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 165.4%;
    text-align: center;
    color: #525C60;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 20px;
    `
const Stars = styled.div`
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 25px;
    color: #FFA858;
    `

const NameLabel = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
    color: #274C5B;
    `
const JobLabel = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 165.4%;
    color: #525C60;
    `
const Hr = styled.hr`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 70px;
    color: #E0E0E0;
    `
const SliderContainer = styled.div`
    @media (max-width: 1150px) {
        backgroung: #fff;
    }
`
const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 650px) {
        flex-wrap: wrap;
        
    }
`
const StatsItem = styled.div`
    border: 2px solid #7EB693;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 5px;
    margin: 0 10px;
    @media (max-width: 1150px) {
        width: 100px;
        height: 100px;
        margin-bottom: 30px;
    }

    & div{
        background: #F1F1F1;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & span{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-size: 50px;
            line-height: 59px;
            color: #274C5B;
            @media (max-width: 1150px) {
                line-height: 30px;
                font-size: 30px;
            }
        }
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 165.4%;
        color: #274C5B;
        @media (max-width: 1150px) {
            line-height: 130%;
            font-size: 16px;
        }
    }
`



const Testimonial = () => {
    return (
        <Container background={image.testimonialImg}>
        <SubTitle>Testimonial</SubTitle>
        <Title>What Our Customer Saying?</Title>
        <SliderContainer>
            <div><img src={image.testimonialAvatar} alt="Person" /></div>
            <Stars>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </Stars>
            <Description>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</Description>
            <NameLabel>Sara Taylor</NameLabel>
            <JobLabel>Consumer</JobLabel>
        </SliderContainer>

            <Hr />

            <Stats>
                <StatsItem><div><span>100%</span> organic</div></StatsItem>
                <StatsItem><div><span>285</span> Active Product</div></StatsItem>
                <StatsItem><div><span>350+</span> Organic Orchads</div></StatsItem>
                <StatsItem><div><span>25+</span> Years of Farming</div></StatsItem>
            </Stats>
        </Container>
    )
}

export default Testimonial
