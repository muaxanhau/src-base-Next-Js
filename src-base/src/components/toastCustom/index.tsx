import React, { FC, useEffect, useState } from 'react'
import { Button, Container } from './elements'
import { AnimatePresence } from 'framer-motion'
import { values } from './values'
import { ComponentBaseModel } from '@/models/base/component'
import { useRecoilValue } from 'recoil'
import { toastAtom } from '@/atoms'
import { ToastModel } from '@/models'

type ToastProps = ComponentBaseModel & {}
const ToastCustom: FC<ToastProps> = ({ style }) => {
  const toastState = useRecoilValue(toastAtom)
  const [data, setData] = useState<ToastModel[]>([])
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const show = (data: ToastModel) =>
    setData((prev) => (prev = [...prev, { ...data }]))

  useEffect(() => {
    if (data.length === 0 || isFocused) {
      return
    }

    const timer = setTimeout(() => {
      setData((prev) => {
        let curr = [...prev]
        curr.shift()
        return curr
      })
    }, 2000)

    return () => clearTimeout(timer)
  }, [data.length, isFocused])
  useEffect(() => {
    if (!toastState.key.length) {
      return
    }

    show(toastState)
  }, [toastState.key])

  return (
    <AnimatePresence initial={false}>
      {data.map((dt, index) => (
        <Container
          key={dt.key}
          style={style}
          index={index}
          exit={{ translate: `${values.width * 10}px` }}
          onHoverStart={() => setIsFocused((prev) => (prev = true))}
          onHoverEnd={() => setIsFocused((prev) => (prev = false))}
          onClick={dt.onClick}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation()
              setData((prev) => {
                const curr = [...prev].filter((item) => item.key !== dt.key)
                return curr
              })
              setIsFocused((prev) => (prev = false))
            }}
          >
            close
          </Button>
          {dt.title}
        </Container>
      ))}
    </AnimatePresence>
  )
}

export default ToastCustom
