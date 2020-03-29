import React from "react";
import Fade from "react-reveal/Fade"
import data from "../data"

function Main () {
    return (
        <div className="about">
            <div className="about-content">
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p className="amazing-color3">{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage}></img> : null}
            

        </div>
    )
}

export default Main;