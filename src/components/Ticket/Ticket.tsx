import React from 'react'
import './Ticket.scss'


import { ITicket, ITicketSegment } from '../../types'
import {
    formatDuration,
    getEndDatetime,
    formatTime,
    formatPrice,
    decline
} from '../../functions'


const Ticket = (ticket: ITicket) => {
    /*
    * Custom renders
    *
    *
    */
    function renderInfo() {
        return (
            <>
                <div className="ticket-price">
                    {formatPrice(ticket.price)}
                </div>

                <img
                    src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}
                    alt={ticket.carrier}
                    style={{ width: '100px', height: '36px' }}
                />

            </>
        )
    }

    function renderSegment(segment: ITicketSegment) {
        return (
            <div
                key={`${segment.origin}_${segment.duration}_${segment.date}`}
                className="ticket-segment"
            >
                <div>
                    <div className="ticket-segment-title">
                        {segment.origin} – {segment.destination}
                    </div>
                    <div className="ticket-segment-body">
                        {formatTime(segment.date)} – {formatTime(getEndDatetime(segment.date, segment.duration))}
                    </div>
                </div>

                <div>
                    <div className="ticket-segment-title">
                        В пути
                    </div>
                    <div className="ticket-segment-body">
                        {formatDuration(segment.duration)}
                    </div>
                </div>

                {segment.stops.length > 0 &&
                    <div>
                        <div className="ticket-segment-title">
                            {segment.stops.length} {decline(segment.stops.length, ['пересадка', 'пересадки', 'пересадок'])}
                        </div>
                        <div className="ticket-segment-body">
                            {segment.stops.join(', ')}
                        </div>
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