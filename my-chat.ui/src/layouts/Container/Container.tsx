import React, { ReactElement } from "react";
import AuthModal from "../AuthModal/AuthModal";
import Account from "../Account/Account";
import './Container.scss';
import checkAuth from "../../commons/checkAuth";

function Container({ children }: { children: ReactElement }) {
    const isAuth = checkAuth();
    return (
        <div className="container">
            {!isAuth &&
                <AuthModal/>
            }
            {isAuth &&
                <Account />
            }
            {children}
        </div>
    )
}

export default Container;