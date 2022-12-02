import axios from "axios";

const apiLogin = axios.create({
    baseURL: "http://127.0.0.1:8000/api/register",
});

export default apiLogin;