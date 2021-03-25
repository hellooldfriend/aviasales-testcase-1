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
    onChange: () => {},
    onAllStopsClick: () => {},
}

describe('FilterSidebar', () => {
    test('Should render', () => {
        render(
            <FilterSidebar
                {...props}
            />
        )
        const element = screen.getByTestId('filter_sidebar')
        expect(element).toBeInTheDocument()
        // @ts-ignore
        expect(element.querySelector('.filter_sidebar-title').textContent).toBe('Количество пересадок')
    })

    test('Matches snapshot', () => {
        const element = renderer.create(
            <FilterSidebar
                {...props}
            />
        ).toJSON()
        expect(element).toMatchSnapshot()
    })
})