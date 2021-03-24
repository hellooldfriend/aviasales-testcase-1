import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import { render, screen, cleanup } from '@testing-library/react'

afterEach(() => {
    cleanup()
})


// it('Should render without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<Button />, div)
// })

const props = {
    value: 'button name is here'
}

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
