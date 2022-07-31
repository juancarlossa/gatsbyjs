import styled from "@emotion/styled"
import React from "react"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { FaNode } from "@react-icons/all-files/fa/FaNode"
import { BsTerminalFill } from "@react-icons/all-files/bs/BsTerminalFill"
import { BsPlusCircleFill } from "@react-icons/all-files/bs/BsPlusCircleFill"
import Title from "./subcomponents/Title"

const Services = () => {
  const SectionServices = styled.section `
    padding: 5rem 0;
    background: var(--clr-primary-0);
  `
  const Servics = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  `
  const Service = styled.article`
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
    border: 2px solid var(--clr-primary-6);
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    background-color: var(--clr-primary-4);
    color: white;
    p {
      color: #c0c0c0;
    }
    :hover{
      background: var(--clr-primary-1);
      h4, p {
        color: #f7f7f7;
      }
      div {
        background-color: var(--clr-blue);
        transition: var(--transition);
      }
      #icon1 {
        color: yellow;
      }
      #icon2 {
        color: #00ff00;
      }
      #icon3 {
        color: #abffff;
      }
      .plus {

      }
    }
  `

  return (
    <SectionServices>
    <Title title="skills"/>
      <Servics>
            <Service id="s1">
              <SiJavascript className="service-icon icon" id="icon1"/>
              <h4>Frontend</h4>
              <div className="underline un1"></div>
              <p>A good appearance is even more important than a good code. That's why firstly I create lot of mockups. </p>
              
            </Service>
            <Service id="s2">
              <FaNode className="service-icon icon" id="icon2"/>
              <h4>Backend</h4>
              <div className="underline un2"></div>
              <p>A good appearance is even more important than a good code. That's why firstly I create lot of mockups.</p>
            
            </Service>
            <Service id="s3">
              <BsTerminalFill className="service-icon icon" id="icon3"/>
              <h4>DevOps</h4>
              <div className="underline un3"></div>
              <p>A good appearance is even more important than a good code. That's why firstly I create lot of mockups.</p>
              
            </Service>
      </Servics>
    </SectionServices>
  )
}

export default Services
