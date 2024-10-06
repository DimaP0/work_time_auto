import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Requests from '../../Requests';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import classes from './ProjectsTask.module.css';
const ProjectsTask = () => {

  const [task, setTask] = React.useState({});
  const {projectId, taskId} = useParams();

  useEffect( () => {
    Requests.getTaskById(Number(projectId), Number(taskId), setTask);
  }, [projectId, taskId]);

  if (!task) return "Задача не найдена";

  return (
    <div>
      <Header>
        <Link to={"/projects"}><div>Проекты</div></Link>
      </Header>
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