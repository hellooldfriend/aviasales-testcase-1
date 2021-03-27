import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'


import App from './App'


describe('App', () => {
    test('Should render', () => {
        render(<App />)
        const element = screen.getByTestId('app')
        expect(element).toBeInTheDocument()
    })
})