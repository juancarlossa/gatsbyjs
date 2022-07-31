import React from 'react'
import { Link } from 'gatsby'
import pdf from '../../static/CV.pdf'
import styled from '@emotion/styled'

const Nav = styled.nav `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-primary-0);
`
const NavCenter = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
    @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    }
`
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  img {
      margin-bottom: 0.375rem;
  }
`
const NavLinks = styled.div`
  display: none;
  color: var(--clr-primary-10);
    @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  a {
    margin-right: 2rem;
    text-transform: capitalize;
    color: var(--clr-primary-10);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
    font-family: var(--ff-primary);
    &:hover {    
      color: var(--clr-primary-7);
      box-shadow: 0px 2px var(--clr-primary-7);
    }
    }
  }
`
const Resume = () => {
  const ResumeDiv = styled.div`  
    background-color: transparent;
    border: 2px solid var(--clr-primary-7);
    margin: auto 0;
    display: flex;
    border-radius: 5rem;
    cursor: pointer;
    transition: var(--transition);
    text-align: center !important;
    &:hover {
      background-color: var(--clr-primary-7);
      transition: var(--transition);
      a {
        color: black !important;
      }
    }
  `
  const ResumeA = styled.a`
    margin: 0 auto !important;
    padding: 0.5rem 1.5rem !important;
    text-align: center;
    color: var(--clr-primary-10)!important;
    box-shadow: 0 0 var(--clr-primary-7)!important;
    font-weight: 500;
    font-family: Poppins;
  `
  return (
    <ResumeDiv >
      <ResumeA href={pdf} rel="noopener noreferrer" target="_blank">Resume</ResumeA>
    </ResumeDiv>
  )
}
const Navbar = () => {
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          LOGO
        </NavHeader>
        <NavLinks>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Resume />
        </NavLinks>
      </NavCenter>
    </Nav>
  )
}

export default Navbar