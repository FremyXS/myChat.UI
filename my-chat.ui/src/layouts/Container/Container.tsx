import React, { ReactElement } from "react";
import { createAuthProvider } from "../../halpers/createAuthProvider ";
import AuthModal from "../AuthModal/AuthModal";
import Account from "../Account/Account";
import './Container.scss';
import { TokenType } from "../../types";

function Container({ children }: { children: ReactElement }) {
    const authProvider = createAuthProvider();
    const [logged] = authProvider.useAuth();
    return (
        <div className="container">
            {!logged &&
                <AuthModal onLogin={(token: TokenType) => authProvider.login(token)} />
            }
            {logged &&
                <Account />
            }
            {children}
        </div>
    )
}

export default Container;