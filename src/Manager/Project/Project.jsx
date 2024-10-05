import React, { useEffect } from 'react';
// import classes from './Project.module.css';
import { useParams } from 'react-router-dom';
import Requests from '../../Requests';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import ProjectsTask from '../ProjectsTask/ProjectsTask';

const Project = () => {
  const {projectId} = useParams();

  const [project, setProject] = React.useState(null);

  useEffect(() => {
    Requests.getProjectById(Number(projectId), setProject)
  }, [projectId]);

  if (!project || !project.tasks_id) return "Ошибка загрузки проекта";

  console.log(project);
  return (
    <div >
      <Header>
        <Link to={"/projects"}><div>Проекты</div></Link>
      </Header>
      <div>{project.name}</div>
      <div>{project.description}</div>
      {
      project.tasks_id.map((task) => (
        <Link 
          key={task.id} 
          to={`/projects/${projectId}/${task.id}`} 
          style={{ textDecoration: 'none', color: 'inherit' }}
        > 
          <hr></hr>
          <div>{task.name}</div>
          <div>{task.description}</div>
        </Link>
      ))
      }
    </div>
  );
};

export default Project;