import React from 'react'
import './FilterBar.scss'

import { IFilterBar } from '../../types'

import Button from '../Button'


const OPTIONS = [
    {
        code: 'cheap',
        title: 'Самый дешёвый',
    },
    {
        code: 'fast',
        title: 'Самый быстрый',
    },
    {
        code: 'optimum',
        title: 'Оптимальный',
    },

]

const FilterBar = (props: IFilterBar) => {


    return (
        <div className="filter_bar" data-testid="filter_bar">
            {OPTIONS.map(option => {
                const isActive = props.mode ? props.mode === option.code : false
                return (
                    <Button
                        key={option.code}
                        active={isActive}
                        value={option.title}
                        onClick={() => {
                            if(isActive) {
                                props.onChange(null)
                            } else {
                                props.onChange(option.code)
                            }
                        }}
                    />
                )
            })}
        </div>
    )
}


export default FilterBar