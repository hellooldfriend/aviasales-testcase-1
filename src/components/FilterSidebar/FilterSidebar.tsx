import React, { useState } from 'react'
import './FilterSidebar.scss'

import Checkbox from '../Checkbox'


const OPTIONS = [
    {
        code: 'all',
        title: 'Все',
    },
    {
        code: 'no_changes',
        title: 'Без пересадок',
    },
    {
        code: 'one',
        title: '1 пересадка',
    },
    {
        code: 'two',
        title: '2 пересадки',
    },
    {
        code: 'three',
        title: '3 пересадки',
    }
]

const FilterSidebar = () => {

    return (
        <div className="filter_sidebar">
            <div className="filter_sidebar-title">Количество пересадок</div>

            <div className="filter_sidebar-items">
                {OPTIONS.map(option => {
                    return (
                        <Checkbox
                            key={option.code}
                            value={false}
                            title={option.title}
                            onChange={value => console.log(value)}
                        />
                    )
                })}



            </div>

        </div>
    )
}


export default FilterSidebar
