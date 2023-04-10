import styled from 'styled-components'
import React from 'react'
import movieLogo from '../assets/movie-logo.avif'
import heart from '../assets/heart-logo.png'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    border: none;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #f2f2f2;
  }
  button {
    border: none;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Icon = styled.img`
  height: 30px;
`

const LeftContainer = styled.div`
  width: 20%;
  flex-direction: column;
  height: 100%;
  gap: 0px;
  margin: 0;
  padding: 0;
`

const LinksContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: none;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`

const LinkWrapper = styled.div`
  position: relative;

  &:hover ${LinksContainer} {
    display: block;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <LeftContainer>
        <Logo src={movieLogo} alt='logo' />
        <LinkWrapper>
          <Links>
            <a href='#'>Peliculas</a>
            <LinksContainer>
              <a href='#'>Popular</a>
              <a href='#'>Proximamente</a>
              <a href='#'>Mejor valoradas</a>
            </LinksContainer>
          </Links>
          <Links>
            <a href='#'>Series</a>
            <LinksContainer>
              <a href='#'>Nuevas</a>
              <a href='#'>Mejor valoradas</a>
              <a href='#'>Finalizadas</a>
            </LinksContainer>
          </Links>
          <Links>
            <a href='#'>Novedades</a>
            <LinksContainer>
              <a href='#'>Peliculas</a>
              <a href='#'>Series</a>
              <a href='#'>Documentales</a>
            </LinksContainer>
          </Links>
        </LinkWrapper>
      </LeftContainer>
      <SearchContainer>
        <input type='text' placeholder='Busca tu pelicula' />
        <button>Buscar</button>
      </SearchContainer>
      <RightContainer>
        <Icon src={heart} alt='wishlist' />
      </RightContainer>
    </HeaderWrapper>
  )
}
