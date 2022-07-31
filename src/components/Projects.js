import styled from '@emotion/styled'
import React from 'react'
import img from "../assets/images/gatsbyjs.jpg"
import Title from './subcomponents/Title'


const Projects = () => {
  const Projecs = styled.div`
    background-color: #ffffff;
    padding-bottom: 5rem ;
    width: 60vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
    align-items: center;
    justify-content: center;

  `
  const ProjectsCenter = styled.section`
    height: 100%;
    display: grid;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    max-width: 1170px;
    padding-left: 100px;
    padding-right: 100px;
    @media screen and (min-width: 992px) {
      width: 65vw;
      grid-template-columns: repeat(12, 1fr);
  }

    @media screen and (min-width: 992px) {
      width: 95vw;
      grid-template-columns: repeat(12, 1fr);
  }
  `
  const ProjectsArticle = styled.article`
    @media screen and (min-width: 992px) {
    grid-column: 5 / span 6;
    grid-row: 1;
    background: rgb(38, 38, 38);
    border: 3px solid var(--clr-primary-3);
    color: white;
    z-index: 99;
    padding: 2rem 2rem;
    border-radius: 15px;
    transition: var(--transition);
    -webkit-transition: var(--transition);
    text-align: right;
    p {
      color: #c0c0c0;
    }
    :hover {
      transition: var(--transition);
      -webkit-transition: var(--transition);
      background: var(--clr-primary-1);
      border: 3px solid #dfdfdf;
      p {
        color: white;
      }
    }
    }
    @media screen and (min-width: 1170px) {
      grid-column: 5 / span 13;
    }
      h4 {
      color: var(--clr-primary-8);
    }
  `
  const ProjectsImg = styled.img`
      width: 40rem;
      height: 19rem;
      position: relative;
      grid-column: 1 / 6;
      grid-row: 1;
      border-radius: 15px;
      &::before {
        width: 100%;
        content: "";
        background: purple;
        opacity: 0.85;
      &:hover {
        width: 100%;
        content: "";
        background: purple;
        opacity: 1;
      }
      }
`
  return (
    <>
    <Title title="projects" id="projects"/>
    <Projecs>
      <ProjectsCenter>
        <ProjectsImg src={img} alt="juank" />
        <ProjectsArticle>
          <h3>React.js</h3>
          <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
        </ProjectsArticle>
      </ProjectsCenter>
    </Projecs>
    </>
  )
}

export default Projects