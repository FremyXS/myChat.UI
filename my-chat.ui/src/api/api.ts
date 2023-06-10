import axios from "axios";

import { API } from "../config";
import authHeader from "../commons/authHeader";

export const api = () => {

    console.log('api create')

    return axios.create({
        headers: authHeader(),
        baseURL: API
    });
}