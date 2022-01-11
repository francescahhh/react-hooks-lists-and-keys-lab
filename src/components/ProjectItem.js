import React from "react";
//import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{technologies.map(technologies)}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
