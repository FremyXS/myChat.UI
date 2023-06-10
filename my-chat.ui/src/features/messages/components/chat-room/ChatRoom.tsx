import React, { ChangeEvent, ChangeEventHandler, HtmlHTMLAttributes, InputHTMLAttributes, useEffect, useState } from "react";
import { getChatMessages, postMessage } from "../../../../api/interfaces/messages";
import { CreateMessageType, MessageType } from "../../../../types";

import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import { profileAsync } from "../../../../api/interfaces/auth";
import Connector from '../../../../commons/signalr-connection'

import './ChatRoom.scss';

function ChatRoom({ idChat }: { idChat: number }) {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [newSubMessage, setNewMessage] = useState<string>("");

    const [smessages, setSMessages] = useState<MessageType[]>([]);
    const { newMessage, events } = Connector();

    useEffect(() => {
        loadMessagesAsync();
    }, [])

    useEffect(() => {
        events((smessages) => setSMessages(smessages), idChat);
    });

    async function submitMessage() {
        const { data } = await profileAsync();

        const mes: CreateMessageType = {
            message: newSubMessage,
            chatRoomId: idChat,
            userId: data.id,
        };

        newMessage(mes);

        // await postMessage(mes);
    }

    return (
        <div className="chat-room">
            <div className="chat-room-messages">
                {smessages.map((el, index) =>
                    <div key={index} className="chat-room-message">
                        <div className="chat-room-message__user">
                            {el.name}
                        </div>
                        <div className="chat-room-message__value">
                            {el.message}
                        </div>
                    </div>
                )}
            </div>
            <div className="chat-room-submit">
                <Input placeHolder="message" type="text" value={newSubMessage} name='message'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setNewMessage(event.target.value)} />
                <Button onClick={() => submitMessage()} type="button">
                    Submit
                </Button>
            </div>
        </div>
    );

    async function loadMessagesAsync() {
        const { data } = await getChatMessages(idChat);
        setMessages(data);
    }
}

export default ChatRoom;