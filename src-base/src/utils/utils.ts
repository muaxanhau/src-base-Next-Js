// Check is null
const isNullOrEmpty = (value: any) => (
    !value ||
    value === undefined ||
    value === '' ||
    value?.length == 0 ||
    (typeof value === 'string' && value.trim().length === 0)
)

const isObject = (obj: any): boolean =>
    obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function'

/**
 * make any string styles to camel string
 * @param str
 * @returns camel string
 */
const toCamel = (str: string): string =>
    str.replace(/([-_][a-z])/gi, (oriStr: string) =>
        oriStr.toUpperCase().replace('-', '').replace('_', ''),
    )

/**
* convert object with free-styled-keys to object with camelKeys
* @param data
* @returns data with keys as camel key
*/
const keysToCamel = (data: any): any => {
    if (isObject(data)) {
        let n = {}

        Object.keys(data).forEach(k => {
            n = {
                ...n,
                [toCamel(k)]: keysToCamel(data[k]),
            }
        })

        return n
    }
    if (Array.isArray(data)) {
        return data.map((i: any) => keysToCamel(i))
    }

    return data
}

function* generatorIncreaseIndex() {
    let i = 0
    while (true) {
        yield i++
    }
}
const generator = generatorIncreaseIndex()

const getUniqueKey = (): number => {
    const { value } = generator.next()
    return value || -1
}

const random = (max = 10, min = 0): number =>
    max < min ? 0 : Math.floor(Math.random() * (max - min)) + min

const clamp = (number: number, min: number, max: number) =>
    Math.min(Math.max(number, min), max)

/**
* Round a number to a given number of decimal places, defaulting to 0.
* @param {number} number - The number to round.
* @param [fixed=0] - The number of decimal places to round to.
*/
const round = (number: number, fixed = 0): number => -(-number.toFixed(fixed))

const numberOfCharInString = (ch: string, str: string) =>
    (str.match(new RegExp(ch, 'g')) || []).length

const padWithLeadingZeros = (num: number, totalLength: number) =>
    String(num).padStart(totalLength, '0')

/**
 * We're going to loop through the array, and for each element, we're going to swap it with a random
 * element in the array
 * @param array - The array to shuffle.
 * @returns A function that takes an array as an argument and returns a shuffled array.
 */
const shuffleArray = <T>(array: Array<T>): Array<T> => {
    let currentIndex = array.length
    let randomIndex

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
            ;[array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ]
    }

    return array
}

/**
* It takes an array, filters it, and returns a new array with only unique values
* @param {any[]} arr - any[] - The array we want to filter
*/
const uniqueValueArray = <T>(arr: Array<T>): Array<T> =>
    arr.filter((value, index, self) => self.indexOf(value) === index)

/**
 * deep compare anything
 * @param a any
 * @param b any
 * @returns true if a === b otherwise false
 */
const deepCompare = (a: any, b: any): boolean => {
    if (typeof a !== typeof b) {
        return false
    }

    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false
        }

        return a.every((entry, index) => deepCompare(entry, b[index]))
    }

    if (isObject(a)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false
        }

        return Object.keys(a).every((key) =>
            deepCompare(a[key], b[key])
        )
    }

    if (typeof a === 'function') {
        return true
    }

    return JSON.stringify(a) === JSON.stringify(b)
}

/**
 * console.log effect
 * @param message 
 * @param type 
 */
const log = (message: string, type: 'default' | 'danger' | 'warning' | 'highlight' = 'default', note?: string) => {
    const isProduction = false // add condition here to remove log in prod mode
    if (isProduction) {
        return
    }

    note?.length && console.log(`%c${note}`, 'color: gray; font-size: 8px')

    if (type === 'default') {
        console.log(message)
        return
    }
    if (type === 'danger') {
        console.error(message)
        return
    }
    if (type === 'warning') {
        console.warn(message)
        return
    }
    if (type === 'highlight') {
        console.log(`%c${message}`, 'color: violet; font-size: larger')
        return
    }
}

export const utils = {
    isNullOrEmpty,
    isObject,
    toCamel,
    keysToCamel,
    getUniqueKey,
    random,
    clamp,
    round,
    numberOfCharInString,
    padWithLeadingZeros,
    shuffleArray,
    uniqueValueArray,
    deepCompare,
    log
}