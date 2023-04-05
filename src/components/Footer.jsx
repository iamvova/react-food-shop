import React from 'react'
import styled from 'styled-components'
import image from '../constants/image'



const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    @media (max-width: 980px) {
    }
`
const Title = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #274C5B;
    padding-bottom: 20px;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    margin-right: 30px;
    @media (max-width: 980px) {
        display: none;
    }
`
const ContactTitle = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 165%;
    color: #525C60;
`
const ContactText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 165%;
    color: #525C60;
    margin-bottom: 10px;
`

const Social = styled.div`
    border-right: 1px solid #D5D5D5;
    border-left: 1px solid #D5D5D5;
    @media (max-width: 980px) {
        border-right: 0;
        border-left: 0;
    }
`
const SocialLogo = styled.div`
    text-align: center;
`
const SocialList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const SocialListItem = styled.div`
    margin: 0 15px;
    cursor: pointer;
`
const SocialDesc = styled.p`
    max-width: 550px;
    text-align: center;
    color: #525C60;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
`

const Pages = styled.div`
    margin-left: 30px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    @media (max-width: 980px) {
        display: none;
    }
`
const List = styled.div``
const ListItem = styled.div`
    margin-bottom: 10px;
    color: #525C60;
    cursor: pointer;
`
const Hr = styled.hr`
    margin-top: 100px;
    color: #D4D4D4;
`
const Copyright = styled.div`
    text-align: center;
    color: #525C60;
    margin: 20px 0;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
`




const Footer = () => {
  return (
    <>
        <Container>
            <Contact>
                <Title>Contact Us</Title>
                <ContactTitle>Email</ContactTitle>
                <ContactText>needhelp@Organia.com</ContactText>

                <ContactTitle>Phone</ContactTitle>
                <ContactText>666 888 888</ContactText>

                <ContactTitle>Addres</ContactTitle>
                <ContactText>88 road, borklyn street, USA</ContactText>
            </Contact>
            <Social>
                <SocialLogo><img src={image.logo} alt="Logo" /></SocialLogo>
                <SocialDesc>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </SocialDesc>
                <SocialList>
                    <SocialListItem><img src={image.footerSocialIcon1} alt="Instagram" /></SocialListItem>
                    <SocialListItem><img src={image.footerSocialIcon2} alt="Facebook" /></SocialListItem>
                    <SocialListItem><img src={image.footerSocialIcon3} alt="Twitter" /></SocialListItem>
                    <SocialListItem><img src={image.footerSocialIcon4} alt="Pinterest" /></SocialListItem>
                </SocialList>
            </Social>
            <Pages>
                <Title>Utility Pages</Title>
                <List>
                    <ListItem>Style Guide</ListItem>
                    <ListItem>404 Not Found</ListItem>
                    <ListItem>Password Protected</ListItem>
                    <ListItem>Licences</ListItem>
                    <ListItem>Changelog</ListItem>
                </List>
            </Pages>
        </Container>
        <Hr />
        <Copyright>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</Copyright>
    </>

  )
}

export default Footer
