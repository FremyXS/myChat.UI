import React, { ChangeEvent } from "react";

import './Input.scss';

interface IInput {
    value?: string,
    placeHolder: string,
    type: "text" | "password",
    name?: string,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({ value, placeHolder, type, name, onChange }: IInput) {
    return (
        <div className="component-input">
            <input
                name={name}
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={onChange} />
        </div>
    )
}

export default Input;