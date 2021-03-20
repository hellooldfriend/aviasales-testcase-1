import {
    formatDuration,
    getEndDatetime,
    formatTime,
    addZero,
    formatPrice,
    decline,
} from './functions'

it('Should format minutes to HH:mm', () => {
    expect(formatDuration(635)).toEqual('10ч 35м')
    expect(formatDuration(1893)).toEqual('31ч 33м')
})

it('Should return Date with added duration', () => {
    const result = getEndDatetime('2021-03-27T09:08:00.000Z', 600)
    expect(result.getTime()).toEqual(1616872080000)
})


it('Should format Date to HH:mm', () => {
    expect(formatTime('2021-03-27T09:08:00.000Z')).toEqual('12:08')
})

it('Should add zero to number if: number < 10', () => {
    expect(addZero(10)).toBe('10')
    expect(addZero(5)).toBe('05')
})

it('Should format price with spaces', () => {
    expect(formatPrice(1)).toBe('1')
    expect(formatPrice(10)).toBe('10')
    expect(formatPrice(100)).toBe('100')
    expect(formatPrice(1000)).toBe('1 000')
    expect(formatPrice(10000)).toBe('10 000')
    expect(formatPrice(100000)).toBe('100 000')
    expect(formatPrice(1000000)).toBe('1 000 000')
})

it('Should return string with correct decline depend on count', () => {
    expect(decline(1, ['пересадка', 'пересадки', 'пересадок'])).toEqual('пересадка')
    expect(decline(2, ['пересадка', 'пересадки', 'пересадок'])).toEqual('пересадки')
    expect(decline(3, ['пересадка', 'пересадки', 'пересадок'])).toEqual('пересадки')
    expect(decline(5, ['пересадка', 'пересадки', 'пересадок'])).toEqual('пересадок')
})