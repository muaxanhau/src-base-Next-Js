import { ComponentBaseModel } from '@/models'
import React, { FC, forwardRef, useImperativeHandle, useState } from 'react'
import { CSSProperties } from 'styled-components'
import { Background, Container } from './elements'
import { AnimatePresence } from 'framer-motion'

export type ModalRefProps = {
  open: () => void
  close: () => void
}
type ModalProps = ComponentBaseModel & {
  children?: React.ReactNode
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}
const ModalCustom = forwardRef<ModalRefProps, ModalProps>(
  ({ children, style, width = 400, height = 500 }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)

    const onClickBackground = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => e.currentTarget === e.target && setVisible((prev) => (prev = false))

    const open = () => setVisible((prev) => (prev = true))
    const close = () => setVisible((prev) => (prev = false))

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      []
    )

    return (
      <AnimatePresence>
        {visible ? (
          <Background
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClickBackground}
          >
            <Container style={{ width, height, ...style }}>
              {children}
            </Container>
          </Background>
        ) : null}
      </AnimatePresence>
    )
  }
)

export default ModalCustom
