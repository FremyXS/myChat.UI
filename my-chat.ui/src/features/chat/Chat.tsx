import React, { useEffect, useState } from "react";

import * as signalR from '@microsoft/signalr';

import SwitchButtons from "../../components/SwitchButtons/SwitchButtons";
import Contacts from "../contacts/Contacts";
import Messages from "../messages/Messages";
import './Chat.scss';

const switchMenuTypes = {
    contacts: 0,
    messages: 1
}

function Chat() {
    const [switchMenu, setSwitchMenu] = useState<number>(switchMenuTypes.contacts);

    return (
        <div className="chat">
            {switchMenu === switchMenuTypes.contacts &&
                <Contacts />
            }
            {switchMenu === switchMenuTypes.messages &&
                <Messages />
            }
            <SwitchButtons
                buttonsName={[
                    "Контакты",
                    "Чаты"
                ]}
                activeButton={switchMenu}
                onChange={(num: number) => setSwitchMenu(num)} />
        </div>
    );
}

export default Chat;