import styled from 'styled-components'
import React from 'react'
import movieLogo from '../assets/movie-logo.avif'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import SearchBar from './SearchBar'

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

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  width: 40%;
  height: 100%;
  
  input {
    border: 1px solid black;
    border-right:none;
    text-align: center;
    padding: 0;
    background-color: #f2f2f2;
    flex: 1;
    height: auto;
  }
  button {
    
    border: none;
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    font-weight: bold;
    cursor: pointer;
    height: auto;
    
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
export const Header = ({ movies }) => {
  const allGenres = movies.flatMap(movie => movie.genre)
  const uniqueGenres = Array.from(new Set(allGenres))
  return (
    <HeaderWrapper>
      <LeftContainer>
        <Logo src={movieLogo} alt='logo' />
        <Link href='#'>
          Peliculas
          <LinksContainer>
            <option value='all' defaultValue>All Categories</option>
            {uniqueGenres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}

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
        <SearchBar movies={movies} placeholder='Enter a movie name' uniqueGenres={uniqueGenres} allGenres={allGenres} />
      </SearchContainer>

      <RightContainer>
        <AiOutlineUser style={{ width: '25px', height: '25px' }} />
        <SignupContainer>
          <span>Sign up</span>
          <span>Account</span>
        </SignupContainer>
        <AiOutlineHeart style={{ width: '25px', height: '25px' }} />
      </RightContainer>
    </HeaderWrapper>
  )
}
