import React, { ReactComponentElement, ReactElement, ReactNode } from "react";

import './Button.scss';

interface IButton {
    type: "button" | "submit" | "reset" | undefined,
    name?: string,
    onClick?: () => void,
    children: ReactNode
}

function Button({ type, name, onClick, children }: IButton) {
    return (
        <div className="component-button">
            <button name={name} type={type} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;