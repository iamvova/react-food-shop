import React from 'react'
import image from '../constants/image'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Container = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 15px;
    margin-top: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-bottom: 20px;
`

const Logo = styled.div``
const Img = styled.img``
const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 950px) {
        display: none;
    }
`
const ListItem = styled.li`
    margin: 0 15px;
    font-size: 20px;
    line-height: 23px;
    color: #274C5B;
    cursor: pointer;
    font-family: 'Roboto', sans-serif, Arial;
`
const ListItemSelect = styled.select`
    background: none;
    border: none;
    font-size: 18px;
    line-height: 23px;
    color: #274C5B;
    cursor: pointer;
`
const InputsContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Search = styled.div`
    position: relative;
    @media (max-width: 1250px) {
        display: none;
    }
`
const SearchInput = styled.input`
    background: #FAFAFA;
    border-radius: 36px;
    border: 0;
    width: 350px;
    height: 66px;
`
const SearchButton = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2;
    transition: .25s;
    &:active{
        opacity: .5;
    }
`
const SearchImg = styled.img``
const Cart = styled.button`
    background: none;
    border: 1px solid #d5d3d3;
    padding: 5px;
    border-radius: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
    & p{
        padding-left: 10px;
        padding-right: 10px;
        font-size: 16px;
    }
    
`
const CartImg = styled.img``

const Navbar = () => {
    const location = useLocation()

    const { valueQuan } = location.state ? location.state : 0

  return (
    <Container>
        <Logo><Link to={'/'}><Img src={image.logo} alt="Logo" /></Link></Logo>
        <List>
            <ListItem><Link to={'/'}>Home</Link></ListItem>    
            <ListItem>About</ListItem>    
            <ListItem><ListItemSelect><option>Pages</option><option>Cart</option><option>404</option></ListItemSelect></ListItem>    
            <ListItem>Shop</ListItem>    
            <ListItem>Project</ListItem>    
            <ListItem>News</ListItem>    
        </List>
        <InputsContent>
            <Search>
                <SearchInput />
                <SearchButton><SearchImg src={image.searchIcon} alt="Search" /></SearchButton>
            </Search>
                <Cart>
                    <CartImg src={image.cartIcon} alt="Cart" />
                    <p>Cart ({valueQuan ? valueQuan : 0})</p>
                </Cart>
        </InputsContent>
        
    </Container>
  )
}

export default Navbar
