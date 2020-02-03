import React from "react";
import PageTitle from "../layout/PageTitle";
import Profile from "../../images/profile.png";
import "../../css/about.scss";
const About = () => {
    return (
    <section className="about">
        <PageTitle title="About Me"/>
        <img src={Profile} alt="black and white image of me with teal background"/>
        <div className="paragraph paragraph-1">
            <p>I’m Christina Gorton, an instructor, creative and front-end developer. </p>
            <p>I currently work as an instructor teaching 100’s of students each month how to work with the DOM and giving them an introduction to React.</p>
        </div>
        <div className="paragraph paragraph-2">
            <p>Previously, I’ve worked as a Drupal developer, GreenSock animator, and course creator.</p>
            <p>I’ve taught students CSS fundamentals and  advanced topics and how to create SVG and GreenSock animations.</p>
        </div>
    </section>
    )
}

export default About;