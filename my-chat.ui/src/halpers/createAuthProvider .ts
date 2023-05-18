import { useEffect, useState } from "react";
import createTokenProvider from "./createTokenProvider";

export const createAuthProvider = () => {
    const tokenProvider = createTokenProvider();
    const login: typeof tokenProvider.setToken = (newTokens) => {
        tokenProvider.setToken(newTokens);
    }

    const logout = () => {
        tokenProvider.setToken(null);
    }

    const authHeader = () => {
        const token = tokenProvider.getToken();
        console.log(token);
        let headers;
        if (token) {
            headers = { Authorization: 'Bearer ' + token.token };
        }
        else {
            headers = {};
        }

        return [headers] as [typeof headers];
    }

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

        useEffect(() => {
            const listener = (newIsLogged: boolean) => {
                setIsLogged(newIsLogged);
            };

            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);

        return [isLogged] as [typeof isLogged];
    };

    return {
        useAuth,
        authHeader,
        login,
        logout
    }
}