import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/interfaces/user";

import { User } from "../../types";
import './Contacts.scss';

function Contacts(){
    const [users, setUsers] = useState<User[]>([]);

    useEffect(()=>{
        loadUsersAsync();
    }, [])
    return(
        <div className="contacts">
            {users.map((el) => 
                <div>{el.name}</div>
            )}
        </div>
    )

    async function loadUsersAsync() {
        const {data} = await getAllUsers();
        setUsers(data);
    }
}

export default Contacts;