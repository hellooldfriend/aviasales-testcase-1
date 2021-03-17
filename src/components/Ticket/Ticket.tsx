import React from 'react'
import './Ticket.scss'


import { ITicket, ITicketSegment } from '../../types'
import { formatDuration, getEndDatetime, formatTime } from '../../functions'


const Ticket = (ticket: ITicket) => {
    console.log('props', ticket)

    /*
    * Custom renders
    *
    *
    */
    function renderInfo() {
        return (
            <>
                <div className="ticket-price">
                    {ticket.price}
                </div>

                <div>
                    {ticket.carrier}
                </div>
            </>
        )
    }

    function renderSegment(segment: ITicketSegment) {
        return (
            <div key={`${segment.origin}_${segment.duration}_${segment.date}`}
                className="ticket-segments"
            >
                <div>
                    {segment.origin} – {segment.destination}

                    <br/>

                    {formatTime(segment.date)} – {formatTime(getEndDatetime(segment.date, segment.duration))}
                </div>

                <div>
                    Duration <br/>
                    {formatDuration(segment.duration)}
                </div>

                    {segment.stops.length > 0 &&
                        <div>
                            {segment.stops.length} stops
                            <br />
                            {segment.stops.join(', ')}
                        </div>

                    }

            </div>
        )
    }

    /*
   * Final render
   *
   *
   */
    return (
        <div className="ticket">
            <div className="ticket-info">
                {renderInfo()}
            </div>
            {ticket.segments.map(renderSegment)}
        </div>
    )
}


export default Ticket