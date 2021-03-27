import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Checkbox from './Checkbox'


afterEach(() => {
    cleanup()
})

const props = {
    value: true,
    title: 'Test',
    onChange: (value: boolean) => value,
}

describe('Checkbox', () => {
    test('Should render active Checkbox', () => {
        render(<Checkbox {...props} />)
        const element = screen.getByTestId('checkbox')

        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('_checked')
        expect(element).toHaveTextContent(props.title)
    })

    test('Should render not active Checkbox', () => {
        render(<Checkbox {...props} value={false} />)
        const element = screen.getByTestId('checkbox')
        expect(element).toBeInTheDocument()
        expect(element).not.toHaveClass('_checked')
        expect(element).toHaveTextContent(props.title)
    })

    test('Should render disabled Checkbox', () => {
        render(<Checkbox {...props} disabled={true} />)
        const element = screen.getByTestId('checkbox')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('_disabled')
        expect(element).toHaveTextContent(props.title)
    })

    test('Matches snapshot', () => {
        const element = renderer.create(
            <Checkbox
                {...props}
            />).toJSON()
        expect(element).toMatchSnapshot()
    })
})

