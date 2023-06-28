const storeItem = <T>(key: string, value: T) => {
    const stringifyValue = JSON.stringify(value)

    localStorage.setItem(key, stringifyValue)
}
const removeItem = (key: string) => localStorage.removeItem(key)
const retrieveItem = <T>(key: string): T | undefined => {
    try {
        const strData = localStorage.getItem(key)

        if (!strData) {
            return undefined
        }

        const TData: T = JSON.parse(strData)

        return TData
    } catch (e) {
        return undefined
    }
}

export const localStorageUtils = {
    storeItem,
    removeItem,
    retrieveItem
}

export enum LocalStorageKeys {
    Auth = 'auth',
    Settings = 'settings',
    Guest = 'guest'
}