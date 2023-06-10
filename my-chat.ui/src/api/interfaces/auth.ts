import { AccountForm } from '../../types';
import { api } from '../api';

export const loginAsync = async (account: AccountForm) => {
    return await api().post(`auth/login`, account)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            console.log(response.data);
            return response.data;
        });;
}

export const registerAsync = async (account: AccountForm) => {
    return await api().post(`auth/register`, account);
}

export const profileAsync = async () => {
    return await api().get(`auth/profile`);
}