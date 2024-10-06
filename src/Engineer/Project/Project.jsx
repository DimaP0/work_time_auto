import React, { useEffect } from "react";
import classes from "./Project.module.css";
import { useParams } from "react-router-dom";
import Requests from "../../Requests";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import Select from "../../Select/Select";
import workers from "../../workers";
// import engineers from '../../engineers'

const Project = () => {
  const { projectId } = useParams();

  const [project, setProject] = React.useState(null);

  useEffect(() => {
    Requests.getProjectById(Number(projectId), setProject);
  }, [projectId]);

  if (!project || !project.tasks_id) return "Ошибка загрузки проекта";

  console.log(project);
  return (
    <div>
      <Header>
        <Link to={"/projects"}>
          <div>Проекты</div>
        </Link>
      </Header>
      <div className={classes.ProjectName}>
        <div className={classes.Select}>
          {/* <Select
            placeholder="Выберите инженера"
            options={engineers}
            onSelect={(e) => console.log(e)}
          ></Select> */}
        </div>
        <h1>{project.name}</h1>
        {project.description}
      </div>
      <div className={classes.TaskPage}>
        {project.tasks_id.map((task) => (
          <div key={task.id}>
            <Link
              key={task.id}
              to={`/projects/${projectId}/${task.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={classes.TaskItem}>
                <h3>{task.name}</h3>
                {task.description}
              </div>
            </Link>

            <div className={classes.Select}>
              <Select
                placeholder="Выберите работника"
                options={workers}
                onSelect={(e) => console.log(e)}
              ></Select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
