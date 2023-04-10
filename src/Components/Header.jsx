import styled from 'styled-components'
import React from 'react'
import movieLogo from '../assets/movie-logo.avif'
import heart from '../assets/heart-logo.png'
import person from '../assets/person-logo.png'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-left: 6rem;
  padding-right: 6rem;
`

const Logo = styled.img`
  height: 90px;
  margin-right: 10px;
`

const Icon = styled.img`
  height: 35px;
  background: white;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  width: 30%;
  
  select {
    
    border: none;
    padding: 5px 10px;
    background-color: #f2f2f2;
    height: 30px;
    width: fit-content;
    
  }
  input {
    border: 1px solid black;
    border-right:none;
    text-align: center;
    padding: 0;
    background-color: #f2f2f2;
    flex: 1;
    height: 30px;
  }
  button {
    
    border: none;
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    cursor: pointer;
    height: 30px;
    margin-left: 10px;
  }
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-right: 10px;

`

const LinksContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 11%;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  z-index: 1;
`

const Link = styled.a`
  position: relative;
  padding: 10px;
  text-decoration: none;
  color: black;
  
  
  &:hover ${LinksContainer} {
    display: block;
    width: 80px;
  }
`

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-right: 40px;
  font-size: 12px; /* Añade esta propiedad */
`
export const Header = () => {
  return (
    <HeaderWrapper>
      <LeftContainer>
        <Logo src={movieLogo} alt='logo' />
        <Link href='#'>
          Peliculas
          <LinksContainer>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </LinksContainer>
        </Link>
        <Link href='#'>
          Series
          <LinksContainer>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </LinksContainer>
        </Link>
        <Link href='#'>
          Novedades
          <LinksContainer>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </LinksContainer>
        </Link>
      </LeftContainer>
      <SearchContainer>
        <input type='text' placeholder='Busca tu pelicula' />
        <select name='category'>
          <option value='all' defaultValue>All Categories</option>
          <option value='action'>Action</option>
          <option value='romance'>Romance</option>
          <option value='drama'>Drama</option>
        </select>
        <button>Buscar</button>
      </SearchContainer>

      <RightContainer>
        <Icon src={person} alt='person' />
        <SignupContainer>
          <span>Sign up</span>
          <span>Account</span>
        </SignupContainer>

        <Icon src={heart} alt='wishlist' />
      </RightContainer>
    </HeaderWrapper>
  )
}
