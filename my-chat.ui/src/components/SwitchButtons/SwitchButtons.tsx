import React from "react";
import Button from "./components/Button/Button";

import './SwitchButtons.scss';

interface ISwitchButtons {
    buttonsName: string[],
    activeButton: number,
    onChange: (num: number) => void
}

function SwitchButtons({ buttonsName, activeButton, onChange }: ISwitchButtons) {
    function onClickButton(num: number){
        onChange(num);
        console.log('click');
    }
    return (
        <div className="switch-buttons">
            {
                buttonsName.map((el, index) =>
                    <Button
                        isActive={index === activeButton}
                        key={index} value={el}
                        onClick={()=>onClickButton(index)} />
                )
            }
        </div>
    )
}

export default SwitchButtons;