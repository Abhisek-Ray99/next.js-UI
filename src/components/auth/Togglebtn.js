'use client'

import { useState } from 'react'
import {Togglelabel, Toggleinput, Togglespan} from './style'

const Toggle = ({ toggled, onClick }) => {

    toggled == 'login' ? toggled = false : toggled = true

    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <Togglelabel>
            <Toggleinput type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <Togglespan />
        </Togglelabel>
    );
}

export default Toggle;