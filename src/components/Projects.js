import React from "react";
import Project from "./ProjectCard";
import Fade from "react-reveal/Fade";
import data from "../data";

function Projects() {
    return (
        <div>
            <h1 className="heading">
                <Fade bottom cascade>Work.</Fade></h1>
            <div className="work-content">
                {data.projects.map((project) => (
                    <Project key={project.id}
                        title={project.title}
                        service={project.service}
                        imageSrc={project.imageSrc}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;