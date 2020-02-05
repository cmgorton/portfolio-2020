import React from "react";
import PageTitle from "../layout/PageTitle";
import WorkImages from "../layout/WorkImages";
import Courses from "../../images/courses.png";
import SVG from "../../images/svg.png";
import CSSArt from "../../images/cssart.png";
import ReactImage from "../../images/react.png";
import "../../css/work.scss";
const Work = () => {
    return (
    <section className="work">
        <PageTitle title="Work"/>
        <WorkImages 
        src={Courses} 
        alt="Link to courses created by Christina Gorton" 
        title="Courses"/>
        <div className="divide"></div>
        <WorkImages 
        src={CSSArt} 
        alt="Link to CSS Art created by Christina Gorton" 
        title="CSS"/>
        <WorkImages 
        src={SVG} 
        alt="Link to SVG's created by Christina Gorton" 
        title="SVG"/>
        <div className="divide"></div>
        <div className="divide--blue"></div>
        <WorkImages 
        src={ReactImage} 
        alt="Link to React content created by Christina Gorton" 
        title="React"/>
    </section>
    )
}

export default Work;