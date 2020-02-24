import React from "react"
import Footer from "../components/main/footer"
import Menu from "../components/main/Menu"
import Hero from "../components/main/Hero"
import About from "../components/main/About"
import Work from "../components/main/Work"
import Thoughts from "../components/main/Thoughts"
import { Helmet } from "react-helmet"
import "../css/global.scss"

export default () => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Christina Gorton's Portfolio 2020</title>
      <html lang="en" />
    </Helmet>
    <Menu />
    <Hero />
    <About />
    <Work />
    <Thoughts />
    <Footer />
  </div>
)
