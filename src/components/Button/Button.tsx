import React from 'react'
import './Button.scss'

import { IButton } from '../../types'


const Button = (props: IButton) => {
    const cls = ['button']
    if(props.active) {
        cls.push('_active')
    }

    return (
        <button
            className={cls.join(' ')}
            disabled={props.disabled}
            onClick={props.onClick}
            data-testid="button"
        >{props.value}</button>
    )
}


export default Button