import React from "react";
import Fade from "react-reveal/Fade";

function Project(props) {
    return (
        <Fade bottom>
            <div className="project">
                <a href={props.url}>
                    <img src={props.imageSrc} alt={props.title}></img>
                </a>
                <h1 className="amazing-color3">{props.title}</h1>
                <span className="amazing-color3">{props.service}</span>
            </div>
        </Fade>
    );
}

export default Project;