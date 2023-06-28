import { flexCenter } from '@/styles/css'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { styles } from '@/values'
import { CSSProperties } from 'react'

export const Background = styled(motion.div)`
  ${flexCenter}

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0007;
  z-index: 999;
`
export const Container = styled(motion.div) <{
  position: 'top' | 'left' | 'right' | 'bottom'
}>`
  ${flexCenter}

  z-index: 999;

  position: fixed;
  ${({ position }) =>
    position === 'top' || position === 'left'
      ? css`
          top: 0;
          left: 0;
        `
      : css`
          right: 0;
          bottom: 0;
        `}
  ${({ position }) =>
    position === 'top' || position === 'bottom'
      ? css`
          width: 100vw;
        `
      : css`
          height: 100vh;
        `}
`
export const Wrapper = styled.div<{
  position: 'top' | 'left' | 'right' | 'bottom'
}>`
  background-color: #0003;
  backdrop-filter: blur(5px);
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(31, 73, 125, 0.8);

  border-top-left-radius: ${({ position }) =>
    position === 'right' || position === 'bottom' ? styles.borderRadius : 0}px;
  border-top-right-radius: ${({ position }) =>
    position === 'left' || position === 'bottom' ? styles.borderRadius : 0}px;
  border-bottom-left-radius: ${({ position }) =>
    position === 'top' || position === 'right' ? styles.borderRadius : 0}px;
  border-bottom-right-radius: ${({ position }) =>
    position === 'left' || position === 'top' ? styles.borderRadius : 0}px;

  ${({ position }) =>
    position === 'top' || position === 'bottom'
      ? css`
          width: 90vw;
        `
      : css`
          height: 90vh;
          min-height: 600px;
        `}
`
