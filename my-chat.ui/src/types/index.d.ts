export type AccountForm = {
    login: string,
    email?: string,
    password: string
}

export type TokenType = {
    token: string,
}

export type User = {
    id: number,
    name: string
}

export type ChatRoomType = {
    id: number;
    title: string
}

export type CreateChatRoomType = {
    title: string,
    usersId: number[]
}

export type MessageType = {
    message: string;
    userId: number;
    name: string;
}

export type CreateMessageType = {
    message: string;
    userId: number;
    chatRoomId: number;
}