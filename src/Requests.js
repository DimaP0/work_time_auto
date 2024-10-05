import axios from "axios";

import { projects } from "./projectsDataJS";

export default class Requests {
  static async get(url, setData) {
    const response = await axios.get(url);
    setData(response.data);
  }

  static getProjectById(id, setData) {
    const project = projects.find((project) => project.id === id);
    setData(project);
  }

  static getTaskById(projectId, taskId, setData) {
    const project = projects.find((project) => project.id === projectId);  
    // if (!project) {
    //   console.error(`Проект с ID ${projectId} не найден`);
    //   setData(null);
    //   return;
    // }
    console.log(project);
    const task = project.tasks_id.find((task) => task.id === taskId);
    console.log(task);
    // if (!task) {
    //   console.error(`Задача с ID ${taskId} не найдена в проекте ${projectId}`);
    //   setData(null);
    //   return;
    // }
    setData(task);
  }
  
}
