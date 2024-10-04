import ManagerPage from "../Manager/ManagerPage/ManagerPage";
import { Redirect } from "../index";
import { Link } from "react-router-dom";
import Project from "../Manager/Project/Project";


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
    path: "/projects/:projectId/:taskId",
    element: <Project></Project>
  },
];