import React, { useState, useEffect } from 'react'
import './App.scss'

import FilterSidebar from './components/FilterSidebar'
import FilterBar from './components/FilterBar'
import Ticket from './components/Ticket'


import { ITicket } from './types'
import Button from './components/Button'


const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search'
const TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets'


function App() {
    const [searchId, setSearchId] = useState<string | null>(null)
    const [tickets, setTickets] = useState<ITicket[]>([])
    const [stop, setStop] = useState(false)
    const [visibleCount, setVisibleCount] = useState(5)

    useEffect(() => {
        const getTickets = async (id: string) => {
            if(!id) return
            const url = `${TICKETS_URL}?searchId=${id}`
            const response = await fetch(url).then(response => {
                if(response.ok) {
                    return response.json()
                }
                return null
            })
            const result = await response
            if(result) {
                setTickets(result.tickets)
                setStop(result.stop)
            }
        }

        const fetchSearchId = async () => {
            const response = await fetch(SEARCH_ID_URL).then(response => {
                if(response.ok) {
                    return response.json()
                }
                return null
            })
            const result = await response
            setSearchId(result ? result.searchId : null)
            if(result) {
                getTickets(result.searchId)
            }
        }

        fetchSearchId()


    }, [])


    function renderTickets() {
        const visibleTickets = tickets.slice(0, visibleCount)

        return visibleTickets.map((ticket, i) => {
            return (
                <Ticket key={`${i}_${ticket.price}_${ticket.carrier}`} {...ticket} />
            )
        })
    }

    function renderNullTickets() {
        return <div>There is no tickets yet</div>
    }

    return (
        <div className="app">

            <div className="app-left">
                <FilterSidebar />
            </div>

            <div className="app-right">
                <FilterBar />

                {tickets.length > 0 ? renderTickets() : renderNullTickets()}


                <div className="app-footer">
                    {tickets.length > 0 && !stop &&
                    <Button
                        onClick={() => setVisibleCount(visibleCount + 5)}
                        active
                        value={'Показать ещё 5 билетов!'}
                    />
                    }
                </div>

            </div>

        </div>
    )
}

export default App
