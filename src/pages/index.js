import * as React from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import { Hero } from "../components/Hero"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import Projects from "../components/Projects"

const IndexPage = () => {
  return (
      <>  
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Footer />
      </>
  )
}

export default IndexPage
