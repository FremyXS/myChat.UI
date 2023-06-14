import React, { useEffect, useState } from "react";
import { profileAsync } from "../../api/interfaces/auth";

import './Account.scss';
import Button from "../../components/Button/Button";

function Account() {
    const [account, setAccount] = useState({
        id: 0,
        email: '',
        userName: ''
    });


    useEffect(() => {
        loadAccountAsync();
    }, []);

    return (
        <div className="account">
            <div className="account-info">
                <div>Email: {account.email}</div>
                <div>
                    Name: {account.userName}
                </div>
            </div>
            <div className="account-logout">
                <Button onClick={() =>{
                    localStorage.removeItem('user');
                }} type='button'>Выход</Button>
            </div>
        </div>
    );

    async function loadAccountAsync() {
        const { data } = await profileAsync();
        setAccount(data);
    }
}

export default Account;