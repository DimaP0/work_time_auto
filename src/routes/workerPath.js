import WorkerPage from "../Worker/WorkerPage/WorkerPage";
import Project from "../Worker/Project/Project";
import ProjectsTask from "../Worker/ProjectsTask/ProjectsTask";
import Redirect from "../redirect";
import WorkersHeader from "../Worker/WorkersHeader/WorkersHeader";

export const workerPath = [
  {
    path: "*",
    element: <Redirect url="/projects" />
  },
  {
    path: "/projects",
    element: <WorkerPage />
  },
  {
    path: "/projects/:projectId",
    element: <Project></Project>
  },
  {
    path: "/projects/:projectId/:taskId",
    element: <ProjectsTask></ProjectsTask>
  },
  {
    path: "/tasks",
    element: <div><WorkersHeader></WorkersHeader>В разработке</div>
  },
];