import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-facebook-backend.herokuapp.com",
});

export default instance;
