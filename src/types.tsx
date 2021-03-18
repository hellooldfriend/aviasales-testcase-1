import React from 'react'

export interface ICheckbox {
    value: boolean
    title: string
    disabled?: boolean
    onChange: (value: boolean) => void
}

export interface IButton {
    value: string
    mode?: string
    active?: boolean
    disabled?: boolean
    position?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface ITicket {
    price: number
    carrier: string
    segments: ITicketSegment[]
}

export interface ITicketSegment {
    origin: string
    destination: string
    date: string
    stops: string[]
    duration: number
}

export interface IFilterBar {
    mode: string | null
    onChange: (mode: string | null) => void
}

export interface IFilterSidebar {
    stops: number[]
    activeStops: number[]
    onChange: (value: number) => void
    onAllStopsClick: (values: number[]) => void
}