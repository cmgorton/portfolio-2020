import React from "react";
const WorkImages = (props) => {
    return (
    <figure>
       <img className="blend work" src={props.src} alt={props.alt}/>
        <figcaption><a>{props.title}</a></figcaption>
    </figure>
    )
}
export default WorkImages;