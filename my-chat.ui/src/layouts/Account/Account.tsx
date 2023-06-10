import React, { useEffect, useState } from "react";
import { profileAsync } from "../../api/interfaces/auth";

import './Account.scss';

function Account(){
    const [account, setAccount] = useState({
        id: 0,
        email: '',
    });


    useEffect(()=>{
        loadAccountAsync();
    }, []);

    return(
        <div className="account">
            {account.id}
            {account.email}
        </div>
    );

    async function loadAccountAsync() {
        const {data} = await profileAsync();
        setAccount(data);
    }
}

export default Account;