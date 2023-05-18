import React, { useState } from "react";

import SwitchButtons from "../../components/SwitchButtons/SwitchButtons";
import Contacts from "../contacts/Contacts";

import './Chat.scss';

const switchMenuTypes = {
    contacts: 1
}

function Chat(){
    const[switchMenu, setSwitchMenu] = useState<number>(switchMenuTypes.contacts);

    return(
        <div className="chat">
            {switchMenu === switchMenuTypes.contacts &&
                <Contacts />
            }
            <SwitchButtons
            buttonsName={[
                "Контакты",
                "Чаты"
            ]}
            activeButton={switchMenu}
            onChange={(num: number) => setSwitchMenu(num)}/>
        </div>
    );
}

export default Chat;