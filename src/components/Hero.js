import  { React, useState, useEffect } from "react"
import { Link } from "gatsby"
// import heroImg from "../assets/images/hero.svg"
import styled from '@emotion/styled'


export const Hero = () => {
//Functions
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "I create things for the web", "Backend", "DevOps" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
//---------------------Functions --------------------------------------

  const Header = styled.header`
    margin-top: -5rem;
    padding-top: 5rem;
    height: 100vh;
    position: relative;
    background-color: var(--clr-black-1);
  `
  const Container = styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    @media screen and (min-width: 992px) {
      width: 95vw;
  }
  `
  const HeroCenter = styled.section`
    height: 100%;
    display: grid;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    @media screen and (min-width: 992px) {
      width: 95vw;
      grid-template-columns: repeat(12, 1fr);
  }
  `
  const HeroInfo = styled.article`
    background: var(--clr-black-1);
    @media screen and (min-width: 992px) {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }
    @media screen and (min-width: 1170px) {
      grid-column: 1 / span 8;
    }
      h4 {
      color: var(--clr-primary-8);
    }
  `
  return (
    <Header>
      <HeroCenter>
      <HeroInfo>
            <h1>{`Hi Im Juan`}</h1>
            <h4 id="autotext">
              <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer ", "Web Designer ", "UI/UX Designer " ]'>
                <span className="wrap">{text}</span>
              </span>
            </h4>
            <a href="/contact" className="btn" id="btnhero">
              contact me
            </a>
      </HeroInfo>
      </HeroCenter>
    </Header>
  )
}