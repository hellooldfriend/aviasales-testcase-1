import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import FilterBar from './FilterBar'


afterEach(() => {
    cleanup()
})

describe('FilterBar', () => {
    test('Should render FilterBar', () => {
        render(<FilterBar />)
        const element = screen.getByTestId('filter_bar')
        expect(element).toBeInTheDocument()
    })
})
