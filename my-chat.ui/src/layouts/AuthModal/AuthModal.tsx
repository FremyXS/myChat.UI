import React, { ChangeEvent, ReactElement, useState } from "react";
import SwitchButtons from "../../components/SwitchButtons/SwitchButtons";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import './AuthModal.scss';
import { AccountForm, TokenType } from "../../types";
import { loginAsync, registerAsync } from "../../api/interfaces/auth";

const authSwitchTypes = {
    login: 0,
    register: 1
}

function AuthModal() {
    const [authSwitch, setAuthSwitch] = useState<number>(authSwitchTypes.login);

    const [loginAccountForm, setLoginAccountForm] = useState<AccountForm>({
        login: "",
        password: ""
    });

    const [registerAccountForm, setRegisterAccountForm] = useState<AccountForm>({
        login: "",
        email: "",
        password: ""
    });

    function onChangeAuthSwitch(authSwitch: 0 | 1) {
        setAuthSwitch(authSwitch);
        console.log(authSwitch)
    }

    function onChangeForm(
        form: AccountForm,
        setForm: React.Dispatch<React.SetStateAction<AccountForm>>,
        event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className="auth-modal">
            <div className="auth-modal__window">
                <div className="auth-modal__content">
                    {authSwitch === authSwitchTypes.login &&
                        <>
                            <Input
                                name="login"
                                value={loginAccountForm.login}
                                type="text" placeHolder="Login"
                                onChange={(event: ChangeEvent<HTMLInputElement>)=>{onChangeForm(loginAccountForm, setLoginAccountForm, event)}} />
                            <Input
                                name="password"
                                value={loginAccountForm.password}
                                type="password" placeHolder="Password"
                                onChange={(event: ChangeEvent<HTMLInputElement>)=>{onChangeForm(loginAccountForm, setLoginAccountForm, event)}} />
                            <Button type="submit" onClick={() =>onLoginAsync()}>Войти</Button>
                        </>
                    }
                    {authSwitch === authSwitchTypes.register &&
                        <>
                            <Input
                                name="login" 
                                type="text" 
                                placeHolder="Login"
                                value={registerAccountForm.login}
                                onChange={(event: ChangeEvent<HTMLInputElement>)=>{onChangeForm(registerAccountForm, setRegisterAccountForm, event)}} />
                            <Input
                                name="email" 
                                type="text" 
                                placeHolder="Email"
                                value={registerAccountForm.email}
                                onChange={(event: ChangeEvent<HTMLInputElement>)=>{onChangeForm(registerAccountForm, setRegisterAccountForm, event)}} />
                            <Input
                                name="password" 
                                type="password" 
                                placeHolder="Password"
                                value={registerAccountForm.password}
                                onChange={(event: ChangeEvent<HTMLInputElement>)=>{onChangeForm(registerAccountForm, setRegisterAccountForm, event)}} />
                            <Button type="submit" onClick={() => onRegisterAsync()}>Регистрация</Button>
                        </>
                    }
                </div>
                <SwitchButtons buttonsName={[
                    "Войти",
                    "Регистрация"
                ]}
                    activeButton={authSwitch}
                    onChange={(num: number) => onChangeAuthSwitch(num as 0 | 1)} />
            </div>
        </div>
    );

    async function onLoginAsync() {
        
       const{data} = await loginAsync(loginAccountForm);

       console.log(data)
    }

    async function onRegisterAsync() {
        
        const{data} = await registerAsync(registerAccountForm);
 
        console.log(data)
     }
}

export default AuthModal;