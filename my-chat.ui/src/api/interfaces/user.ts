import { User } from '../../types';
import { api } from '../api';

export const getAllUsers = async() =>{
    return await api().get<User[]>(`user/all`);
}