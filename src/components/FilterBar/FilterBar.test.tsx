import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import FilterBar from './FilterBar'


afterEach(() => {
    cleanup()
})

const props = {
    mode: '',
    onChange: () => {},
}


describe('FilterBar', () => {
    test('Should render FilterBar', () => {
        render(<FilterBar {...props} />)
        const element = screen.getByTestId('filter_bar')
        expect(element).toBeInTheDocument()
    })

    test('Matches snapshot', () => {
        const element = renderer.create(<FilterBar {...props} />).toJSON()
        expect(element).toMatchSnapshot()
    })
})
