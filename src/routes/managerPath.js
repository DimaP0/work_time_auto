import ManagerPage from "../Manager/ManagerPage/ManagerPage";
import Redirect from "../redirect";
import Project from "../Manager/Project/Project";
import ProjectsTask from "../Manager/ProjectsTask/ProjectsTask";


export const managerPath = [
  {
    path: "*",
    element: <Redirect url="/projects" />
  },
  {
    path: "/projects",
    element: <ManagerPage />
  },
  {
    path: "/projects/:projectId",
    element: <Project></Project>
  },
  {
    path: "/projects/:projectId/:taskId",
    element: <ProjectsTask></ProjectsTask>
  },
];