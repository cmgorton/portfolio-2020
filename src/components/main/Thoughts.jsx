import React from "react"
import PageTitle from "../layout/PageTitle"
import Girl from "../../images/thoughts.svg"
import "../../css/thoughts.scss"
const Thoughts = () => {
  return (
    <section id="thoughts" className="thoughts">
      <PageTitle title="Thoughts" />
      <div className="thoughts_paragraph">
        <p>
          Previously, I’ve worked as a Drupal developer, GreenSock animator, and
          course creator.
        </p>
        <p>
          I’ve taught students CSS fundamentals and advanced topics and how to
          create SVG and GreenSock animations.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/coffeecraftcode"
        >
          The Blog &rarr;
        </a>
      </div>
      <img
        src={Girl}
        alt="Woman sitting at computer desk with lots of sticky notes behind her."
      />
    </section>
  )
}

export default Thoughts
