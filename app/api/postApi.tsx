import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
    });

export const getPost = () =>{
    return api.get("/posts");
}