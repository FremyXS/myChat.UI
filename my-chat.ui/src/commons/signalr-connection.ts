import * as signalR from "@microsoft/signalr";
import { CreateMessageType, MessageType } from "../types";
const URL = process.env.HUB_ADDRESS ?? "https://localhost:7244/chathub"; //or whatever your backend port is
class Connector {
    private connection: signalR.HubConnection;
    public events: (onMessageReceived: (message: MessageType[]) => void, chatId: number) => void;
    static instance: Connector;
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(URL)
            .withAutomaticReconnect()
            .build();
        this.connection.start().catch(err => document.write(err));
        this.events = (onMessageReceived, chatId) => {
            // this.connection.on("Receive", (message) => {
            //     onMessageReceived(message);
            // });
            this.connection.invoke("GetMessages", chatId).then(messages => {
                onMessageReceived(messages);
            }).catch(err => console.error(err));
        };
    }
    public newMessage = (messages: CreateMessageType) => {
        this.connection.send("send", messages).then(x => console.log("sent"))
    }
    public static getInstance(): Connector {
        if (!Connector.instance)
            Connector.instance = new Connector();
        return Connector.instance;
    }
}
export default Connector.getInstance;