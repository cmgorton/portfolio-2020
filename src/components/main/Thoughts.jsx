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
          I believe it is important to share while you learn. From time to time
          I like to blog and give back to the tech community.{" "}
        </p>
        <p>
          You can check out most of my work on dev.to where I blog about remote
          work, CSS, SVG/GreenSock animations, React and more.
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
