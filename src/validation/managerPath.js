import { Redirect } from "react-router-dom";


export const managerPath = [
  {
    path: "*",
    element: <Redirect url="/login" />
  },
  {
    path: "/",
    // element: <ManagerPage />
  },
];