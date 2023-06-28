import { TextCustom } from '@/components'
import { AuthModel } from '@/models'
import { useRouter } from 'next/router'
import React, { FC, FunctionComponent, useEffect, useState } from 'react'
import { LocalStorageKeys, localStorageUtils } from './localStorage'

export const withAuth = (Page: FunctionComponent): FC => () => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>()
  const router = useRouter()

  useEffect(() => {
    const token = localStorageUtils.retrieveItem<AuthModel>(
      LocalStorageKeys.Auth
    )?.token
    setIsLogedIn((prev) => (prev = !!token?.length))
  }, [])
  useEffect(() => {
    isLogedIn === false && router.push('/test-component')
  }, [isLogedIn])

  if (isLogedIn === undefined) {
    return <TextCustom>Loading...</TextCustom>
  }

  if (isLogedIn) {
    return <Page />
  }

  return null
}
export const withRole = (
  Page: FunctionComponent,
  role: 'student' | 'teacher' = 'student'
): FC => () => {
  const [isRightRole, setIsRightRole] = useState<boolean>()
  const router = useRouter()

  useEffect(() => {
    const localRole = localStorageUtils.retrieveItem<AuthModel>(
      LocalStorageKeys.Auth
    )?.role

    const isRightRole =
      (role === 'student' && localRole === 'student') ||
      (role === 'teacher' && localRole === 'teacher')
    setIsRightRole((prev) => (prev = isRightRole))
  }, [])
  useEffect(() => {
    isRightRole === false && router.push('/test-component')
  }, [isRightRole])

  if (isRightRole === undefined) {
    return <TextCustom>Loading...</TextCustom>
  }

  if (isRightRole) {
    return <Page />
  }

  return null
}
