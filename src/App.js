import "./App.module.css";
import { useState } from "react";
import Header from "./Header/Header";
import Requests from "./Requests";
import { useEffect } from "react";
import ProjectList from "./Manager/ProjectList/ProjectList";

function App() {

  const [projectData, setProjectsData] = useState([]);

  useEffect( () => {
    Requests.get('/projectsData.json', setProjectsData);
  }, [] );

  return (
    <div>
      <Header>
        <div>Проекты</div>
      </Header>

      <ProjectList projectsList = {projectData}/>
    </div>
  );
}

export default App;