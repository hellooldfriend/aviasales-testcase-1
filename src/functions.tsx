export function formatDuration(time : number): string {
    // usage: formatDuration(635) => '10ч 35м'
    // time in minutes
    if(time !== 0 && !time) return ''

    const hours = Math.floor(time / 60)
    const minutes = Math.floor(time % 60)
    return `${hours}ч ${minutes}м`
}

export function getEndDatetime(date: string, duration: number): Date {
    // usage: getEndDatetime('2021-03-27T09:08:00.000Z', 635) => Date
    // duration in minutes

    const startDate = new Date(date)
    const durationInMs = duration * 60 * 1000

    return new Date(startDate.getTime() + durationInMs)
}

export function formatTime(datetime: Date | string): string {
    // usage: formatTime('2021-03-27T09:08:00.000Z') => 12:08

    if(typeof datetime === 'string') {
        datetime = new Date(datetime)
    }
    const hours = addZero(datetime.getHours())
    const minutes = addZero(datetime.getMinutes())

    return `${hours}:${minutes}`
}

export function addZero(n: number): string {
    // usage: addZero(5) => '05'

    return String(n < 10 ? '0' + n : n)
}

export function formatPrice(n: number, SPACER: string = ' '): string {
    // usage: formatPrice(1000) => '10 000'
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, SPACER)
}

export function decline(n: number, textForms: string[]): string {
    // decline(5, ['пересадка', 'пересадки', 'пересадок']) => '5 пересадок'

    n = Math.abs(n) % 100
    const n1 = n % 10
    if(n > 10 && n < 20) return textForms[2]
    if(n1 > 1 && n1 < 5) return textForms[1]
    if(n1 === 1) return textForms[0]
    return textForms[2]
}
