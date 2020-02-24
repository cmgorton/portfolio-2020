import React from "react"
import PandaAni from "../layout/PandaAni"
import PhoenixAni from "../layout/PhoenixAni"
import HeartAni from "../layout/HeartAni"
import "../../css/hero.scss"
const Hero = () => {
  return (
    <section className="hero">
      <h2 className="hero_greeting">Hi, I am</h2>
      <PandaAni />
      <PhoenixAni />
      <HeartAni />

      <h1 className="hero_title">
        Christina <br />
        Gorton
      </h1>
      <div className="subtitle_container">
        <h3 className="hero_secondary-title">Instructor</h3>
        <h3 className="hero_secondary-title">Creator</h3>
        <h3 className="hero_secondary-title">
          Front-end <br /> Dev
        </h3>
      </div>
    </section>
  )
}

export default Hero
