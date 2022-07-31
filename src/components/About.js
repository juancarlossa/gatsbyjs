import styled from "@emotion/styled"
import React from "react"
import img from "../assets/images/headerImg.png"
import Stack from "./subcomponents/Stack"

const About = () => {
  const AboutSection = styled.section`
    padding-bottom: 10rem;
    padding-top: 3rem;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-primary-0);
  `

    const AboutCenter = styled.section`
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
  `
  const AboutArticle = styled.article`
    @media screen and (min-width: 992px) {
    grid-column: 1 / span 6;
    grid-row: 1;
    }
    @media screen and (min-width: 1170px) {
      grid-column: 1 / span 6;
    }
    h3 {
      color: var(--clr-white-1);
    }
  `
  const AboutImg = styled.img`
      width: 100%;
      position: relative;
      grid-column: 7 / 13;
      grid-row: 1;
      max-width: 300px;
      border-radius: 50%;
      margin-left: auto;
      margin-right: 0;
      margin-bottom: 100px;
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
    <AboutSection id="about">
      <AboutCenter>
        <AboutArticle>
            <h3>About me</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> 
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>        
          <Stack name={"HTML & CSS"} />
          <Stack name={"JavaScript (ES6+)"} />
          <Stack name={"React"} />
          <Stack name={"Node.js"} />
          <Stack name={"Bash"} />
          <Stack name={"C#"} />
          <Stack name={"TypeScript"} />
          <Stack name={"Linux"} />

        </AboutArticle>
        <AboutImg src={img} alt="juank" />
      </AboutCenter>
    </AboutSection>
  )
}

export default About