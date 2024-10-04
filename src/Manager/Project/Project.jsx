import React from 'react';
import classes from './Project.module.css';
import { useParams } from 'react-router-dom';

const Project = () => {
  const {projectId, taskId} = useParams();
  return (
    <div >
      <div>Проект: {projectId}</div>
      <div>Задача: {taskId}</div>
    </div>
  );
};

export default Project;