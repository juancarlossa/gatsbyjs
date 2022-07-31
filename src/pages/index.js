import * as React from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import { Hero } from "../components/Hero"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
      <>  
      <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      <Footer />
      </>
  )
}

export default IndexPage
