import axios from "axios";

export default class Requests {
  static async get(url, setData) {
    const response = await axios.get(url);
    setData(response.data);
  }
}
