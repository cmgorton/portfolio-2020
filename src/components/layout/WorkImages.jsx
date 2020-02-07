import React from "react";
const WorkImages = (props) => {
    return (
    <figure className="work_images">
       <img className="blend work" src={props.src} alt={props.alt}/>
        <figcaption className="work_caption"><a>{props.title}</a></figcaption>
    </figure>
    )
}
export default WorkImages;