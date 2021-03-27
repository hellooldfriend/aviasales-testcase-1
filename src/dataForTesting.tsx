import { ITicket } from './types'

export const tickets: ITicket[] = [
    {
        price: 10000,
        carrier: 'XXX',
        segments: [
            {
                origin: 'XXX',
                destination: 'YYY',
                date: '2020-10-20 01:20:00',
                stops: ['AA', 'BB'],
                duration: 1250,
            },
            {
                origin: 'ZZZ',
                destination: 'XXXX',
                date: '2020-10-21 05:00:00',
                stops: ['AA'],
                duration: 1000,
            }
        ]
    }
]

export const tickets2: ITicket[] = [
    {
        price: 10000,
        carrier: 'XXX',
        segments: [
            {
                origin: 'XXX',
                destination: 'YYY',
                date: '2020-10-20 01:20:00',
                stops: [],
                duration: 250,
            },
        ]
    }
]