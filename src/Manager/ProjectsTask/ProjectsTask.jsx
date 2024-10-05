import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Requests from '../../Requests';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

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
      <div>{task.name}</div>
      <div>{task.description}</div>
      <div>Worker ID is : {task.worker_id}</div>
    </div>
  );
};

export default ProjectsTask;