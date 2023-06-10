import React, { useEffect, useState } from "react";

import { ChatRoomType } from "../../types";
import { getAllChatRooms } from "../../api/interfaces/messages";

import "./Messages.scss";
import ChatRoom from "./components/chat-room/ChatRoom";

function Messages() {
    const [chats, setChats] = useState<ChatRoomType[]>([]);
    const [openChat, setOpenChat] = useState<{ isOpen: boolean, id: number }>({
        isOpen: false,
        id: 0
    });

    useEffect(() => {
        loadChatRoomsAsync();
    }, []);

    return (
        <div className="messages">
            {openChat && openChat.isOpen &&
                <ChatRoom idChat={openChat.id}/>
            }
            {openChat && !openChat.isOpen &&
                chats.map((el, index) =>

                    <a key={index} className="messages-item"
                        onClick={() => setOpenChat({
                            id: el.id,
                            isOpen: true
                        })}>
                        <div><div>{el.id}</div><div>{el.title}</div></div>
                    </a>
                )
            }
        </div>
    );

    async function loadChatRoomsAsync() {
        const { data } = await getAllChatRooms();
        setChats(data);
    }
}

export default Messages;