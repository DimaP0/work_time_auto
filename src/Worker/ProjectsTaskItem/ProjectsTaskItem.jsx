import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProjectsTaskItem.module.css";

const ProjectsTaskItem = ({ projectId, task, isActive = false, isPause = false }) => {
  const style = [classes.TaskItem];

  let buttons = (
    <div className={classes.buttons}>
      <button>Начать</button>
    </div>
  )

  if (isActive) {
    style.push(classes.TaskItem_active);
    buttons = (
      <div className={classes.buttons}>
        <button>Пауза</button>
        <button>Завершить</button>
      </div>
    )
  } else if (isPause) {
    style.push(classes.TaskItem_paused);
    buttons = (
      <div className={classes.buttons}>
        <button >Продолжить</button>
        <button >Завершить</button>
      </div>
    )
  }

  return (
    <div className={style.join(" ")}>
      <Link
        key={task.id}
        to={`/projects/${projectId}/${task.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div>
          <h3>{task.name}</h3>
          {task.description}
        </div>
      </Link>
      {buttons}
    </div>
  );
};

export default ProjectsTaskItem;
