import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type PageLayoutBaseModel<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
