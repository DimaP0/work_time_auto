import ManagerPage from "../Manager/ManagerPage/ManagerPage";
import { Redirect } from "../index";
import { Link } from "react-router-dom";


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
    path: "/",
    element: <Link to={"/projects"}><div>Проекты</div></Link>
  },
];