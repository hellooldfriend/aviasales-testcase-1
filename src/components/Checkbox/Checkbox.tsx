import React from 'react'
import './Checkbox.scss'

import { ICheckbox } from '../../types'
import { IconCheck } from '../../icons'


const Checkbox = (props: ICheckbox) => {
    const cls = ['checkbox']

    if(props.disabled) {
        cls.push('_disabled')
    }
    if(props.value) {
        cls.push('_checked')
    }

    return (
        <label
            className={cls.join(' ')}
            data-testid="checkbox"
        >

            {props.value &&
                <span className="checkbox-check">
                    <IconCheck />
                </span>
            }

            <input
                type="checkbox"
                checked={props.value}
                onChange={() => props.onChange(!props.value)}
                disabled={props.disabled}
            />
            {props.title}
        </label>
    )
}


export default Checkbox