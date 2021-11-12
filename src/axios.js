import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    apiURL: "http://localhost:8080"
});

export default instance;