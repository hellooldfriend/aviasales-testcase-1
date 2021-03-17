
export function formatDuration(time : number): string {
    // variable time in minutes
    const hours = Math.floor(time / 60)
    const minutes = Math.floor(time % 60)
    return `${hours}ч ${minutes}м`
}

export function getEndDatetime(date: string, duration: number): Date {
    // duration in minutes
    const startDate = new Date(date)
    const durationInMs = duration * 60 * 1000

    return new Date(startDate.getTime() + durationInMs)
}

export function formatTime(datetime: Date | string): string {
    if(typeof datetime === 'string') {
        datetime = new Date(datetime)
    }
    const hours = addZero(datetime.getHours())
    const minutes = addZero(datetime.getMinutes())

    return `${hours}:${minutes}`
}

function addZero(n: number): string {
    return String(n < 10 ? '0' + n : n)
}

export function formatPrice(n: number): string {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function decline(n: number, textForms: string[]): string {
    n = Math.abs(n) % 100
    const n1 = n % 10
    if(n > 10 && n < 20) return textForms[2]
    if(n1 > 1 && n1 < 5) return textForms[1]
    if(n1 === 1) return textForms[0]
    return textForms[2]
}
