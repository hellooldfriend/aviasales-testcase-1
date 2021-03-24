import React, { useState, useEffect } from 'react'
import './App.scss'

import FilterSidebar from './components/FilterSidebar'
import FilterBar from './components/FilterBar'
import Ticket from './components/Ticket'

import { ITicket } from './types'
import Button from './components/Button'

import api from './api'
import { IconLogo } from './icons'


function App() {

    /*
    * State
    *
    *
    */
    const [tickets, setTickets] = useState<ITicket[]>([])
    const [filteredTickets, setFilteredTickets] = useState<ITicket[]>([])

    const [stop, setStop] = useState(false)
    const [visibleCount, setVisibleCount] = useState(5)

    const [filterMode, setFilterMode] = useState<string | null>(null)
    const [filterStops, setFilterStops] = useState<number[]>([])

    useEffect(() => {
        const loadData = async () => {
            const response = await api.getTickets()
            console.log('response', response)
            setTickets(response.tickets)
            setStop(response.stop)
        }
        loadData()
    }, [])

    useEffect(() => {
        setFilteredTickets(filterTickets(tickets, visibleCount, filterMode, filterStops))
    }, [tickets, visibleCount, filterMode, filterStops])

    /*
    * Handlers
    *
    *
    */

    function handleFilterSidebarChange(code: number) {
        let filterStopsState = [...filterStops]

        if(filterStopsState.includes(code)) {
            filterStopsState = filterStopsState.filter(n => n !== code)
        } else {
            filterStopsState.push(code)
        }
        setFilterStops(filterStopsState)
    }

    function handleFilterBarChange(mode: string | null) {
        setFilterMode(mode)
    }

    /*
    * Custom renders
    *
    *
    */

    function renderTickets() {
        if(filteredTickets.length === 0) {
            return <div>Loading...</div>
        }

        // TODO: remove hack
        // @ts-ignore
        return filteredTickets.map((ticket, i) => {
            const key = `${i}_${ticket.price}_${ticket.carrier}`
            return (
                <Ticket
                    key={key}
                    {...ticket}
                />
            )
        })
    }


    function renderFooter() {
        return (
            <div className="app-footer">
                {tickets.length > 0 && !stop &&
                    <Button
                        onClick={() => setVisibleCount(visibleCount + 5)}
                        active
                        value={'Показать ещё 5 билетов!'}
                    />
                }
            </div>
        )
    }

    function renderLeftColumn() {
        const availableStops = getFilteredStops(tickets)

        return (
            <div>
                <FilterSidebar
                    stops={availableStops}
                    activeStops={filterStops}
                    onChange={handleFilterSidebarChange}
                    onAllStopsClick={setFilterStops}
                />
            </div>
        )
    }

    function renderRightColumn() {
        return (
            <div>
                <FilterBar
                    mode={filterMode}
                    onChange={handleFilterBarChange}
                />

                {renderTickets()}

                {renderFooter()}
            </div>
        )
    }

    /*
    * Final render
    *
    *
    */

    return (
        <div className="app">
            <a className="app-logo" href="/">
                <IconLogo />
            </a>

            <div className="columns">
                {renderLeftColumn()}
                {renderRightColumn()}
            </div>
        </div>
    )
}


/*
* Useful functions
*
*
*/

function filterTickets(tickets: ITicket[], count: number = 5, mode: string | null = null, stops: number[] = []) {
    const currentTickets = tickets.slice(0, count)
    let currentStops: number[] = []
    if(stops.length === 0) {
        currentStops = getFilteredStops(currentTickets)
    } else {
        currentStops = stops
    }
    return sortTickets(currentTickets, mode, stops).filter(t => t.segments.some(s => currentStops.includes(s.stops.length)))
}

function sortTickets(tickets: ITicket[], mode: (string | null) = null, stops?: number[]) {
    if(mode === 'cheap') {
        return tickets.sort((a, b) =>  a.price - b.price)
    } else if(mode === 'fast') {
        return tickets.sort((a, b) => findMin(a) - findMin(b))
    } else if(mode === 'optimum') {
        return tickets
    }
    return tickets
}

function findMin(ticket: ITicket): number {
    return Math.min(...ticket.segments.map(s => s.duration))
}

function getFilteredStops(tickets: ITicket[], maxSize = 4): number[] {
    const unique = new Set()
    for(let ticket of tickets) {
        for(let segment of ticket.segments) {
            const length = segment.stops.length
            if(!unique.has(length)) {
                unique.add(length)
            }
            continue
        }
        if(unique.size === maxSize) break
    }
    const result = Array.from(unique)
    // TODO: remove
    // @ts-ignore
    return result
}


export default App
