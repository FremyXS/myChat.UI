import { AccountForm } from '../../types';
import { api } from '../api';

export const loginAsync = async (account: AccountForm) =>{
    return await api().post(`auth/login`, account);
}

export const registerAsync = async (account: AccountForm) => {
    return await api().post(`auth/register`, account);
}

export const profileAsync = async () => {
    return await api().get(`auth/profile`);
}