import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";

const WorkersHeader = () => {
  return (
    <Header>
      <Link to={"/projects"}>
        <div>Проекты</div>
      </Link>
      <Link to={"/tasks"}>
        <div>Задачи</div>
      </Link>
    </Header>
  );
};

export default WorkersHeader;
