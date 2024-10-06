import React from "react";
import ProjectList from "../ProjectList/ProjectList";
import Requests from "../../Requests";
import { useEffect, useState } from "react";
import WorkersHeader from "../WorkersHeader/WorkersHeader";

const WorkerPage = () => {
  const [projectData, setProjectsData] = useState([]);

  useEffect(() => {
    Requests.get("/projectsData.json", setProjectsData);
    console.log(projectData);
  }, []);

  return (
    <div>
      <WorkersHeader></WorkersHeader>

      <ProjectList projectsList={projectData}></ProjectList>

    </div>
  );
};

export default WorkerPage;
