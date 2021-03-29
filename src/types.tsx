import React from 'react'

export interface ICheckbox {
    readonly value: boolean
    readonly title: string
    readonly disabled?: boolean
    onChange: (value: boolean) => void
}

export interface IButton {
    readonly value: string
    readonly mode?: string
    readonly active?: boolean
    readonly disabled?: boolean
    readonly position?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface ITicket {
    readonly price: number
    readonly carrier: string
    segments: ReadonlyArray<ITicketSegment>
}

export interface ITicketSegment {
    readonly origin: string
    readonly destination: string
    readonly date: string
    readonly stops: string[]
    readonly duration: number
}

export interface IFilterBar {
    readonly mode: string | null
    onChange: (mode: string | null) => void
}

export interface IFilterSidebar {
    stops: ReadonlyArray<number>
    activeStops: ReadonlyArray<number>
    onChange: (value: number) => void
    onAllStopsClick: (values: number[]) => void
}