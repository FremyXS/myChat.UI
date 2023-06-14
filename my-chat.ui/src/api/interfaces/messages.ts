import { ChatRoomType, CreateChatRoomType, CreateMessageType, MessageType } from '../../types';
import { api } from '../api';
 
export const getAllChatRooms = async () => {
    return await api().get<ChatRoomType[]>(`chat/user`);
}

export const getChatMessages = async (id: number) => {
    return await api().get<MessageType[]>(`message/chat/${id}`);
}

export const postMessage =async (message: CreateMessageType) => {
    return await api().post(`message`, message);    
}

export const createChat = async (chatroom: CreateChatRoomType) => {
    return await api().post(`chat`, chatroom);
}