import React from "react"
import Footer from "../components/main/footer";
import Menu from "../components/main/Menu";
import Hero from '../components/main/Hero';
import About from '../components/main/About';
import "../css/global.scss"

export default () => (
  <div className="container">
    <Menu/>
    <Hero/>
    <About/>
    <Footer/>
  </div>
)