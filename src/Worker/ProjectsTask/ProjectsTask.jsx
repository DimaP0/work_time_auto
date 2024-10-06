import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Requests from '../../Requests';
import classes from './ProjectsTask.module.css';
import WorkersHeader from '../WorkersHeader/WorkersHeader';
const ProjectsTask = () => {

  const [task, setTask] = React.useState({});
  const {projectId, taskId} = useParams();

  useEffect( () => {
    Requests.getTaskById(Number(projectId), Number(taskId), setTask);
  }, [projectId, taskId]);

  if (!task) return "Задача не найдена";

  return (
    <div>
      <WorkersHeader></WorkersHeader>
      <div className={classes.TaskHead}>
      <h1>{task.name}</h1>
      {task.description}
      </div>
      <div className={classes.employeePage}>
      <div className={classes.employeeItem}>Worker ID is : {task.worker_id}</div>
      </div>
    </div>
  );
};

export default ProjectsTask;