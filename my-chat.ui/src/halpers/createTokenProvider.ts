import { TokenType } from "../types";

export default function createTokenProvider() {
    let _token: TokenType | null
        = JSON.parse(localStorage.getItem('user') as string) || null;

    const getToken = () => {
        if (!_token) {
            return null;
        }

        return _token;
    };

    const setToken = (token: TokenType | null) => {
        if (token) {
            localStorage.setItem('user', JSON.stringify(token));
        } else {
            localStorage.removeItem('user');
        }
        _token = token;
        notify();
    };

    const isLoggedIn = () => {
        console.log(1, _token !== null, _token);
        return _token !== null;
    };

    let observers: Array<(isLogged: boolean) => void> = [];

    const subscribe = (observer: (isLogged: boolean) => void) => {
        observers.push(observer);
    };

    const unsubscribe = (observer: (isLogged: boolean) => void) => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };

    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
}