import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import Ticket from './Ticket'

afterEach(() => {
    cleanup()
})

const ticket = {
    price: '2 000',
    carrier: 'XXX',
    segments: [],
}

describe('Ticket', () => {
    test('Should render Ticket', () => {
        render(<Ticket {...ticket} />)
        const element = screen.getByTestId('ticket')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(ticket.price)
    })

    test('Matches snapshot', () => {
        const element = renderer.create(
            <Ticket {...ticket} />
        ).toJSON()
        expect(element).toMatchSnapshot()
    })
})

