import { useSetRecoilState } from 'recoil'
import { toastAtom } from '@/atoms'
import { useCallback, useEffect, useRef, useState } from 'react'
import { utils } from './utils'
import { LocalStorageKeys, localStorageUtils } from './localStorage'
import { AuthModel } from '@/models'
import { GuestModel } from '@/models/localStorage'

export const useLocalStorage = <T>(key: LocalStorageKeys) => {
  const [value, setValue] = useState<T>()

  const retrieveItem = useCallback((key: LocalStorageKeys) => {
    const value = localStorageUtils.retrieveItem<T>(key)
    setValue(prev => prev = value)
  }, [])
  const set = useCallback((value: T) => {
    localStorageUtils.storeItem(key, value)
    setValue(prev => prev = value)
  }, [key])
  const clear = useCallback(() => {
    localStorageUtils.removeItem(key)
    setValue(prev => prev = undefined)
  }, [key])

  useEffect(() => {
    retrieveItem(key)
  }, [key])

  return {
    value,
    set,
    clear,
    refresh: retrieveItem,
  }
}

export const useFirstSetupApp = () => {
  useEffect(() => {
    utils.log('======= setup for firt time run app =======', 'highlight', 'call from useFirstSetupApp - hooks')

    localStorageUtils.storeItem<AuthModel>(LocalStorageKeys.Auth, {
      token: 'token123456789',
      refreshToken: '',
      role: 'student',
    })

    localStorageUtils.storeItem<GuestModel>(LocalStorageKeys.Guest, {
      isGuest: true,
    })
  }, [])
}

export const useErrorToastEffect = (error?: any) => {
  const setToastState = useSetRecoilState(toastAtom)

  useEffect(() => {
    if (!error) {
      return
    }

    console.error(error)
    setToastState(() => ({
      key: utils.getUniqueKey().toString(),
      title: error,
    }))
  }, [error])
}

export const useTimeout = (callback: () => void, delay: number) => {
  const refCallback = useRef<() => void>(callback)
  const refTimeout = useRef<NodeJS.Timeout>()

  const set = useCallback(() => {
    refTimeout.current = setTimeout(() => refCallback.current(), delay)
  }, [delay])
  const clear = useCallback(() => {
    refTimeout.current && clearTimeout(refTimeout.current)
  }, [])
  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  useEffect(() => {
    refCallback.current = callback
  }, [callback])
  useEffect(() => {
    set()

    return clear
  }, [])

  return { reset, clear }
}

/**
 * debounce
 * @param callback 
 * @param delay 
 * @param deps 
 */
export const useDebounce = (callback: () => void, delay: number, deps?: React.DependencyList) => {
  const { clear, reset } = useTimeout(callback, delay)

  useEffect(reset, [deps, reset])
  useEffect(clear, [])
}

export const useDeepCompareEffect = (callback: () => void, deps: React.DependencyList) => {
  const refCurrentDeps = useRef<React.DependencyList>()

  if (!utils.deepCompare(refCurrentDeps.current, deps)) {
    refCurrentDeps.current = deps
  }

  useEffect(callback, [refCurrentDeps])
}

export const useRenderCount = () => {
  const count = useRef<number>(1)

  useEffect(() => { count.current++ })

  return count.current
}

