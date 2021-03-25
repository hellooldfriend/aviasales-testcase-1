import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Ticket from './Ticket'

afterEach(() => {
    cleanup()
})

const ticket = {
    price: 2000,
    carrier: 'XXX',
    segments: [
        {
            origin: 'YYY',
            destination: '20',
            date: '2020-20-10',
            stops: ['aaa', 'bbb'],
            duration: 100,
        }
    ],
}

describe('Ticket', () => {
    test('Should render Ticket', () => {
        render(<Ticket {...ticket} />)
        const element = screen.getByTestId('ticket')
        expect(element).toBeInTheDocument()
    })

    test('Matches snapshot', () => {
        const element = renderer.create(
            <Ticket {...ticket} />
        ).toJSON()
        expect(element).toMatchSnapshot()
    })
})

