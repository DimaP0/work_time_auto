import React from "react";
import Header from "../../Header/Header";
import ProjectList from "../ProjectList/ProjectList";
import Requests from "../../Requests";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EngineerPage = () => {
  const [projectData, setProjectsData] = useState([]);

  useEffect(() => {
    Requests.get("/projectsData.json", setProjectsData);
    console.log(projectData);
  }, []);

  return (
    <div>
      <Header>
        <Link to={"/projects"}><div>Проекты</div></Link>
      </Header>

      <ProjectList projectsList={projectData}></ProjectList>

    </div>
  );
};

export default EngineerPage;
