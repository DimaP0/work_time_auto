import React from 'react';
import {Link} from 'react-router-dom';
import classes from './ProjectsTaskItem.module.css';

const ProjectsTaskItem = ({ projectId, project, isActive, isPause}) => {

  const style = [classes.TaskItem];
  if (isActive){
    style.push(classes.TaskItem_active);
  } else if (isPause) {
    style.push(classes.TaskItem_paused);
  }

  return (
    <div>
      {project.tasks_id.map((task) => (
          <Link
            key={task.id}
            to={`/projects/${projectId}/${task.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={style.join(' ')}>
              <h3>{task.name}</h3>
              {task.description}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProjectsTaskItem;