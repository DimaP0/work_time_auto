import Redirect from "../redirect";
import Login from "../Login/Login";

export const workerPath = [
  {
    path: "*",
    element: <Redirect url="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
];