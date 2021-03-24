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
}


test('Should render active Checkbox', () => {
    render(<Checkbox value={props.value} title={props.title} />)
    const element = screen.getByTestId('checkbox')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('_checked')
    expect(element).toHaveTextContent(props.title)
})

test('Should render not active Checkbox', () => {
    render(<Checkbox value={false} title={props.title} />)
    const element = screen.getByTestId('checkbox')
    expect(element).toBeInTheDocument()
    expect(element).not.toHaveClass('_checked')
    expect(element).toHaveTextContent(props.title)
})

test('Should render disabled Checkbox', () => {
    render(<Checkbox disabled={true} title={props.title} />)
    const element = screen.getByTestId('checkbox')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('_disabled')
    expect(element).toHaveTextContent(props.title)
})


test('Matches snapshot', () => {
    const tree = renderer.create(<Checkbox value={true} title={props.title} />).toJSON()
    expect(tree).toMatchSnapshot()
})