import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import image from '../constants/image'
import { Link } from 'react-router-dom'

const Container = styled.div``
const Content = styled.div`
  background: ${props=> `url(${props.background})`};
  height: 900px;
  width: 100%;

  display: flex;
  justify-content: end;
  align-items: center;
`
const ContentWrap = styled.div`
  max-width: 533px;
  margin-right: 150px;
`
const Code = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 170px;
  line-height: 100px;
  color: #274C5B;
  margin-bottom: 20px;
  text-align: center;
  opacity: .5;
 `
const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 82px;
  color: #274C5B;
`
const Text = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 165.4%;
  color: #525C60;
`
const Button = styled.div`

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



const Page404 = () => {
  return (
    <Container>
      <Navbar />
      <Content background={image.Img404}>
        <ContentWrap>
          <Code>404</Code>
          <Title>Page not found</Title>
          <Text>The page you are looking for doesn't exist or has been moved</Text>
          <Link to={'/'}><Button>Go to Homepage <img src={image.introButtonIcon} alt="next" /></Button></Link>
        </ContentWrap>
      </Content>
      <Footer />
    </Container>
  )
}

export default Page404
