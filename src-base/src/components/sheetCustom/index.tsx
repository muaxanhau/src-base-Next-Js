import { ComponentBaseModel } from '@/models'
import React, { FC, forwardRef, useImperativeHandle, useState } from 'react'
import { Background, Container, Wrapper } from './elements'
import { AnimatePresence } from 'framer-motion'
import { CSSProperties } from 'styled-components'

export type SheetRefProps = {
  open: () => void
  close: () => void
}
type SheetProps = ComponentBaseModel & {
  children?: React.ReactNode
  size?: CSSProperties['width']
  position?: 'top' | 'left' | 'right' | 'bottom'
}
const SheetCustom = forwardRef<SheetRefProps, SheetProps>(
  ({ children, style, size = 300, position = 'right' }, ref) => {
    const [visible, setVisible] = useState<boolean>(false)

    const translateX =
      position === 'top' || position === 'bottom'
        ? 0
        : `${position === 'left' ? '-' : ''}100vw`
    const translateY =
      position === 'left' || position === 'right'
        ? 0
        : `${position === 'top' ? '-' : ''}100vh`

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
      <>
        <AnimatePresence initial={false}>
          {visible ? (
            <Background
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={onClickBackground}
            />
          ) : null}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {visible ? (
            <Container
              initial={{ translateX, translateY }}
              animate={{ translateX: 0, translateY: 0 }}
              exit={{ translateX, translateY }}
              transition={{ duration: 0.5 }}
              position={position}
              style={{ ...style }}
              onClick={onClickBackground}
            >
              <Wrapper
                position={position}
                style={
                  position === 'top' || position === 'bottom'
                    ? { height: size }
                    : { width: size }
                }
              >
                {children}
              </Wrapper>
            </Container>
          ) : null}
        </AnimatePresence>
      </>
    )
  }
)

export default SheetCustom
