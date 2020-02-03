import React from "react";
const HeroImages = (props) => {
    console.log(props)
    return (
    <img src={props.src} alt={props.alt}/>
    )
}
export default HeroImages;