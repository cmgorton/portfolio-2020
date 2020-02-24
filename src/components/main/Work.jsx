import React from "react"
import PageTitle from "../layout/PageTitle"
import WorkImages from "../layout/WorkImages"
import Courses from "../../images/courses.png"
import SVG from "../../images/svg.png"
import CSSArt from "../../images/cssart.png"
import ReactImage from "../../images/react.png"
import { Link } from "gatsby"
import "../../css/work.scss"
const Work = () => {
  return (
    <section className="work">
      <PageTitle title="Work" />
      <figure className="work_images">
        <Link to="/courses">
          <img
            className="blend work"
            src={Courses}
            alt="svg animations with GreenSock"
          />
          <figcaption className="work_caption">
            <a>Courses</a>
          </figcaption>
        </Link>
      </figure>
      <div className="divide"></div>
      <WorkImages
        link="https://codepen.io/collection/nYGJYj"
        src={CSSArt}
        alt="Link to CSS Art created by Christina Gorton"
        title="CSS"
      />
      <WorkImages
        link="https://codepen.io/collection/nJzmJB"
        src={SVG}
        alt="Link to SVG's created by Christina Gorton"
        title="SVG"
      />
      <div className="divide"></div>
      <div className="divide--blue"></div>
      <WorkImages
        link="https://www.notion.so/Guided-Project-Notes-27dc27053dc64f3fa277879d0ea76a68"
        src={ReactImage}
        alt="Link to React content created by Christina Gorton"
        title="React"
      />
    </section>
  )
}

export default Work
