'use client'

import { useState } from "react";
import { CheckBoxWrapper } from './style'

const CheckBox = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <CheckBoxWrapper>
            <label className="flex">
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
                <p className="px-4">{label}</p>
            </label>
        </CheckBoxWrapper>
    );
}

export default CheckBox;