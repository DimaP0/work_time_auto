import EngineerPage from "../Engineer/EngineerPage/EngineerPage";
import Project from "../Engineer/Project/Project";
import ProjectsTask from "../Engineer/ProjectsTask/ProjectsTask";
import Redirect from "../redirect";


export const engineerPath = [
  {
    path: "*",
    element: <Redirect url="/projects" />
  },
  {
    path: "/projects",
    element: <EngineerPage />
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