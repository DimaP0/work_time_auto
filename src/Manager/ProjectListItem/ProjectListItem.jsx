import React from 'react';
import classes from './ProjectListItem.module.css';

const ProjectListItem = ({id, projectItem}) => {
  let project = projectItem;
  project = project || {}; // project != undefined
  return (
    <div id = {project.id} className={classes.projectItem}>
      <div className={classes.header}>
        <h3>{project.name}</h3>
        <span className={classes.progress}>{10*project.id}%</span>
      </div>
      <div>{project.description}</div>
    </div>
  );
};

export default ProjectListItem;