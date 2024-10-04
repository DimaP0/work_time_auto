import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

const ProjectList = ({ projectsList }) => {
  let projects = projectsList || [];
  console.log(projects);

  return (
    <div>
      {projects.map((project) => (
        <ProjectListItem key={project.id} 
        projectItem={project} />
      ))}
    </div>

  );
};

export default ProjectList;
