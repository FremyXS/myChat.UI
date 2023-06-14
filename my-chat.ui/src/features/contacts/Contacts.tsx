import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/interfaces/user";

import { CreateChatRoomType, User } from "../../types";
import './Contacts.scss';
import Button from '../../components/Button/Button';
import { profileAsync } from "../../api/interfaces/auth";
import { createChat } from "../../api/interfaces/messages";

function Contacts() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        loadUsersAsync();
    }, [])
    return (
        <div className="contacts">
            <div className="contacts-list">
                {users.map((el) =>
                    <div className="contacts-element">
                        <div>{el.name}</div>
                        <Button onClick={() => createChatAsync(el)} type="button">Чат</Button>
                    </div>
                )}
            </div>
        </div>
    )

    async function loadUsersAsync() {
        const { data } = await getAllUsers();
        setUsers(data);
    }

    async function createChatAsync(user: User) {
        const {data} = await profileAsync();

        const createChatBody: CreateChatRoomType = {
            title: `${user.name}, ${data.userName}`,
            usersId: [data.userId, user.id]
        }

        await createChat(createChatBody);
    }
}

export default Contacts;