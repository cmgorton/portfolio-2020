import React from "react";
const WorkImages = (props) => {
    return (
    <figure className="work_images">
        <a href = {props.link} target="_blank" rel="noopener noreferrer">
       <img className="blend work" src={props.src} alt={props.alt}/>
        <figcaption className="work_caption"><a>{props.title}</a></figcaption>
        </a>
    </figure>
    
    )
}
export default WorkImages;