import React from "react";
import Fade from "react-reveal/Fade";
import data from "../data"

function Footer() {
    return (
        <div>
            <h1>
                <Fade bottom cascade> Contact.</Fade>
            </h1>
            <Fade bottom>
                <div className="contact-content">
                    <h1>
                        <span className="amazing-color1">Let’s create your next</span><br></br>
                        <span className="amazing-color2">experience together</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className="email">{data.contactEmail}</a>
                    <ul>
                        {data.social.map((link, index) => (
                            <li key={index}><a target="_blank" rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
            </Fade>

            <span className="footer">Made With ❤ by James Dabalos</span>
        </div>
    )
}

export default Footer;