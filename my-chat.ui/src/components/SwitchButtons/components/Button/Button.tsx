import React from "react";

import './Button.scss';

interface IButton {
    value: string,
    isActive?: boolean,
    onClick?: () => void
}

function Button({ value, isActive, onClick }: IButton) {
    return (
        <div className={`switch-buttons__component-button${isActive ? " active" : ""}`}>
            <button type="button" onClick={onClick}>
                {value}
            </button>
        </div>
    )
}

export default Button;