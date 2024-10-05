import React from "react";
import Header from "../../Header/Header";
import ProjectList from "../ProjectList/ProjectList";
import Requests from "../../Requests";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../Select/Select";
import {engineers} from '../../engineers'

const ManagerPage = () => {
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

      <Select 
        placeholder="Выберите инженера" 
        options={engineers}
        onSelect={(e) => console.log(e)}
      ></Select>
    </div>
  );
};

export default ManagerPage;
