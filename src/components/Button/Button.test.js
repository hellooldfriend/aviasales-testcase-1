import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Button from './Button'


afterEach(() => {
    cleanup()
})


const props = {
    value: 'button name is here'
}

describe('Button', () => {
    test('Should render not active button', () => {
        render(<Button value={props.value} />)
        const element = screen.getByTestId('button')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(props.value)
        expect(element).not.toHaveClass('_active')
    })

    test('Should render active button', () => {
        render(
            <Button
                value={props.value}
                active={true}
            />
        )
        const element = screen.getByTestId('button')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(props.value)
        expect(element).toHaveClass('_active')
    })

    test('Matches snapshot', () => {
        const element = renderer.create(<Button value={props.value} />).toJSON()
        expect(element).toMatchSnapshot()
    })

})

