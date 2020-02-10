import React from "react"
import Menu from "../components/main/Menu";
import "../css/courses.scss"

const Courses = () => {
    return (
        <div className="container">
            <Menu/>
          <div className="courses">
                <ul>
                    <a href="https://designcode.io/svg-intro" target="_blank" rel="noopener noreferrer"><li>Intro to SVG and GreenSock Animations </li></a>
                    <a href="https://designcode.io/css-layout-and-animations" target="_blank" rel="noopener noreferrer"><li>CSS Layout and Animations </li></a>
                    <a href="https://www.skillshare.com/site/join?teacherRef=9698665&via=teacher-referral&utm_campaign=teacher-referral&utm_source=Twitter&utm_medium=teacher-referral&t=Learn-Code-by-Creating-Art-Developing-CSS-Skills-in-CodePen&sku=583537245" target="_blank" rel="noopener noreferrer"><li>Learn Code by Creating Art </li></a>
                </ul>
                <h2>Courses</h2>
                </div>
        </div>
    )
    }


  export default Courses