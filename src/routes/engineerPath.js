import Redirect from "../redirect";
import Login from "../Login/Login";

export const engineerPath = [
  {
    path: "*",
    element: <Redirect url="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
];