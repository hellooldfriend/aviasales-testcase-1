import React, { useState } from 'react'
import './FilterBar.scss'

import Button from '../Button'


const OPTIONS = [
    {
        code: 'cheap',
        title: 'Cheap',
    },
    {
        code: 'fast',
        title: 'Fast',
    },
    {
        code: 'optimum',
        title: 'Optimum',
    },

]

const FilterBar = () => {
    const [currentOption, setCurrentOption] = useState<null | string>(null)


    return (
        <div className="filter_bar">
            {OPTIONS.map(option => {
                const isActive = currentOption ? currentOption === option.code : false

                return (
                    <Button
                        key={option.code}
                        active={isActive}
                        value={option.title}
                        onClick={() => setCurrentOption(option.code)}
                    />
                )
            })}
        </div>
    )
}


export default FilterBar