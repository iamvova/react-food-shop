import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'

const Container = styled.div`
  background: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  max-width: 1350px;
  
  margin: 0 auto;
  padding: 0 15px;
  margin-bottom: 100px;
  border-radius: 30px;
  padding: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 40px;
  }
`

const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 59px;
  color: #FFFFFF;
  width: 357px;
  margin-left: 70px;
  @media (max-width: 1050px) {
    margin-left: 0;
    margin-bottom: 20px;
    line-height: 50px;
    font-size: 40px;
  }
`
const Form = styled.form`
  margin-right: 100px;
  @media (max-width: 1050px) {
    margin-right: 0;
  }
`
const Input = styled.input`
  padding: 25px 130px 30px 30px;
  background: #FFFFFF;
  border-radius: 16px;
  border: 0;
  @media (max-width: 1050px) {
    margin-bottom: 10px;
  }
`
const Button = styled.button`
  border-radius: 16px;
  padding: 25px 40px;
  background: #274C5B;
  color: #fff;
  border: 1px solid #274C5B;
  transition: .3s ease-out;
  cursor: pointer;
  margin-left: 5px;
  &:hover{
    background: #fff;
    color: #274C5B;
  }
`
const Newsletter = () => {
  return (
    <Container background={image.newsletter}>
        <Title>Subscribe to our Newsletter</Title>
        <Form>
            <Input placeholder='Enter email' />
            <Button>Subscribe</Button>
        </Form>
    </Container>
  )
}

export default Newsletter
