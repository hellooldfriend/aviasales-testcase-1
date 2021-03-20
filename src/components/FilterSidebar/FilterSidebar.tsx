import React from 'react'
import './FilterSidebar.scss'

import Checkbox from '../Checkbox'
import { IFilterSidebar } from '../../types'


const OPTIONS = [
    {
        code: 0,
        title: 'Без пересадок',
    },
    {
        code: 1,
        title: '1 пересадка',
    },
    {
        code: 2,
        title: '2 пересадки',
    },
    {
        code: 3,
        title: '3 пересадки',
    }
]

const FilterSidebar = (props: IFilterSidebar) => {


    const allActive = props.activeStops.length === OPTIONS.length

    return (
        <div className="filter_sidebar">
            <div className="filter_sidebar-title">Количество пересадок</div>

            <div className="filter_sidebar-items">
                <Checkbox
                    value={allActive}
                    title={'Все'}
                    onChange={() => {
                        if(allActive) {
                            props.onAllStopsClick([])
                        } else {
                            const values = OPTIONS.map(option => option.code)
                            props.onAllStopsClick(values)
                        }
                    }}
                />

                {OPTIONS.map(option => {
                    return (
                        <Checkbox
                            key={option.code}
                            value={props.activeStops.includes(option.code)}
                            disabled={!props.stops.includes(option.code)}
                            title={option.title}
                            onChange={() => props.onChange(option.code)}
                        />
                    )
                })}
            </div>

        </div>
    )
}


export default FilterSidebar
