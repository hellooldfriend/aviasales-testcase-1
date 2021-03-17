import React, { useState } from 'react'
import './FilterSidebar.scss'

import Checkbox from '../Checkbox'



const FilterSidebar = () => {
    const [checked, setChecked] = useState(false)


    return (
        <div className="filter_sidebar">
            <div className="filter_sidebar-title">Количество пересадок</div>

            <div className="filter_sidebar-items">

                <Checkbox
                    value={checked}
                    title={'All'}
                    onChange={value => setChecked(value)}
                />
            </div>

        </div>
    )
}


export default FilterSidebar
