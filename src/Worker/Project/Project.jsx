import React, { useEffect } from 'react';
import classes from './Project.module.css';
import { useParams } from 'react-router-dom';
import Requests from '../../Requests';
import ProjectsTaskItem from '../ProjectsTaskItem/ProjectsTaskItem';
import WorkersHeader from '../WorkersHeader/WorkersHeader';

const Project = () => {
  const {projectId} = useParams();

  const [project, setProject] = React.useState(null);

  useEffect(() => {
    Requests.getProjectById(Number(projectId), setProject)
  }, [projectId]);

  if (!project || !project.tasks_id) return "Ошибка загрузки проекта";

  console.log(project);
  return (
    <div>
      <WorkersHeader></WorkersHeader>
      <div className={classes.ProjectName}>
        <h1>{project.name}</h1>
        {project.description}
      </div>
      <div className={classes.TaskPage}>
        {project.tasks_id.map((task) => (
          <ProjectsTaskItem
          projectId={projectId}
          task={task}
          isActive={true}
          isPause={true}
        ></ProjectsTaskItem>
        ))}
        {/* <ProjectsTaskItem
          projectId={projectId}
          project={project}
          isActive={false}
          isPause={true}
        ></ProjectsTaskItem> */}
      </div>
    </div>
  );
};

export default Project;