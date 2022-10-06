import React from "react";

export const ProjectTemplate = ({ props }) => {
  return (
    <div className="main_container">
      {props.map((project) => {
        return (
          <div className="main_container_wrapper">
            <h3>
              <a target="_blank" href={project.link} rel="noreferrer">
                {project.title}
              </a>
            </h3>
            <div>
              <div>{project.description}</div>

              <div>Frontend: {project.technologyFront}</div>
              {project.technologyBack ? (
                <div>Backend: {project.technologyBack}</div>
              ) : null}

              <div>
                <progress
                  className="main_container_progress"
                  value={project.state}
                  max="100"
                />
                {project.state} %
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectTemplate;
