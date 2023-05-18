import axios from "axios";

import { API } from "../config";
import { createAuthProvider } from "../halpers/createAuthProvider ";

export const api = () => {
    const authProvider = createAuthProvider();
    const [headers] = authProvider.authHeader();

    console.log('api create')

    return axios.create({
        headers: headers || {},
        baseURL: API
    });
}