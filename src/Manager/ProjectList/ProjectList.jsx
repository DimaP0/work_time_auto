import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
// import Redirect from "../../redirect";
import { Link  } from "react-router-dom";
import Select from "../../Select/Select";
import { useState } from "react";


const ProjectList = ({ projectsList }) => {
  let projects = projectsList || [];
  console.log(projects);

  const [option, setOption] = useState();


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
