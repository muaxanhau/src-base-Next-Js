import { utils } from './utils'

const defaultFormatterDay = 'dd-mm-yyyy'
const defaultFormatterTime = 'hh:mm:ss'

/**
 * convert Date to string with formatter
 * @param date Date
 * @param formatter Ex: 'dd-mm-yyyy'
 * @returns date string
 */
const getDay = (date: Date, formatter: string = defaultFormatterDay) => {
    const cFormatter = formatter.toLowerCase()

    const d = date.getDate()
    const m = date.getMonth() + 1
    const y = date.getFullYear()

    const dLength = utils.numberOfCharInString('d', cFormatter)
    const mLength = utils.numberOfCharInString('m', cFormatter)
    const yLength = utils.numberOfCharInString('y', cFormatter)

    const dString = utils.padWithLeadingZeros(d, dLength)
    const mString = utils.padWithLeadingZeros(m, mLength)
    const yStr = y.toString()
    const yString = yStr.substring(yStr.length - yLength)

    const dayString = cFormatter
        .replace('d'.repeat(dLength || 1), dString)
        .replace('m'.repeat(mLength || 1), mString)
        .replace('y'.repeat(yLength || 1), yString)

    return dayString
}

/**
 * convert Date to string with formatter
 * @param date Date
 * @param formatter Ex: 'hh:mm:ss'
 * @returns time string
 */
const getTime = (date: Date, formatter: string = defaultFormatterTime) => {
    const cFormatter = formatter.toLowerCase()

    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()

    const hLength = utils.numberOfCharInString('h', cFormatter)
    const mLength = utils.numberOfCharInString('m', cFormatter)
    const sLength = utils.numberOfCharInString('s', cFormatter)

    const hString = utils.padWithLeadingZeros(h, hLength)
    const mString = utils.padWithLeadingZeros(m, mLength)
    const sString = utils.padWithLeadingZeros(s, sLength)

    const timeString = cFormatter
        .replace('h'.repeat(hLength || 1), hString)
        .replace('m'.repeat(mLength || 1), mString)
        .replace('s'.repeat(sLength || 1), sString)

    return timeString
}

export const dateUtils = {
    getDay,
    getTime
}