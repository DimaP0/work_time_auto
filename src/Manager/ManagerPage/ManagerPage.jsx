import React from "react";
import Header from "../../Header/Header";
import ProjectList from "../ProjectList/ProjectList";
import Requests from "../../Requests";
import { useEffect, useState } from "react";

const ManagerPage = () => {
  const [projectData, setProjectsData] = useState([]);

  useEffect(() => {
    Requests.get("/projectsData.json", setProjectsData);
  }, []);

  return (
    <div>
      <Header>
        <div>Проекты</div>
      </Header>

      <ProjectList projectsList={projectData}></ProjectList>
    </div>
  );
};

export default ManagerPage;
