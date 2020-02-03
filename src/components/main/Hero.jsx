import React from "react";
import "../../css/hero.scss";
const Hero = () => {
    return (
    <section className="hero">
        <p className="hero_greeting">Hi, I am</p>
        <div className="blend"></div>
        <div className="blend"></div>
        <div className="blend"></div>
        <h1 className="hero_title">Christina <br/>Gorton</h1>
        <div className="subtitle_container">
        <h3 className="hero_secondary-title">Instructor</h3>
        <h3 className="hero_secondary-title">Creator</h3>
        <h3 className="hero_secondary-title">Front-end <br/> Dev</h3>
        </div>
    </section>
    )
}

export default Hero;