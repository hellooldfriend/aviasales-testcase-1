import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import FilterSidebar from './FilterSidebar'


afterEach(() => {
    cleanup()
})


const props = {
    stops: [],
    activeStops: [],
}

describe('FilterSidebar', () => {
    test('Should render', () => {
        render(
            <FilterSidebar
                stops={props.stops}
                activeStops={props.activeStops}
            />
        )
        const element = screen.getByTestId('filter_sidebar')
        expect(element).toBeInTheDocument()
    })

    test('Matches snapshot', () => {
        const element = renderer.create(
            <FilterSidebar
                stops={props.stops}
                activeStops={props.activeStops}
            />
        ).toJSON()
        expect(element).toMatchSnapshot()
    })
})