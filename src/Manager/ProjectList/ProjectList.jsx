import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
// import Redirect from "../../redirect";
import { Link } from "react-router-dom";

const ProjectList = ({ projectsList }) => {
  let projects = projectsList || [];
  console.log(projects);

  return (
    <div>
      {projects.map((project) => (
        <Link 
          to={`/projects/${project.id}`} 
          key={project.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ProjectListItem projectItem={project} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
