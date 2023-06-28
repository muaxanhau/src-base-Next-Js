import { flexColumnSpaceBetween } from '@/styles/css'
import { styles } from '@/values'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div<{
  isLocked: boolean
}>`
  ${flexColumnSpaceBetween}

  align-items: baseline;
  width: 100%;
  aspect-ratio: 4/3;
  background-color: #fff;
  padding: ${styles.padding}px;
  border-radius: ${styles.borderRadius}px;
  box-shadow: 0 0 10px 0 rgba(31, 73, 125, 0.8),
    0 0 5px 0 rgba(31, 73, 125, 0.8) inset;

  transition: 0.2s;
  overflow: hidden;
  position: relative;

  &:nth-of-type(1) {
    &::before {
      border-color: beige;
    }
  }
  &:nth-of-type(2) {
    &::before {
      border-color: blanchedalmond;
    }
  }
  &:nth-of-type(3) {
    &::before {
      border-color: burlywood;
    }
  }
  &:nth-of-type(4) {
    &::before {
      border-color: goldenrod;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -90%;
    right: -20%;
    width: 200%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: calc(var(--grid-item-max) / 2) solid;
    transition: 0.2s;
  }

  &:hover {
    scale: 1.1;

    &::before {
      right: ${({ isLocked }) => (isLocked ? -10 : -30)}%;
    }
  }
`
export const Button = styled(motion.div)`
  z-index: 1;
  padding: 7px 15px;
  transition: 0.2s;
  background-color: aliceblue;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: aquamarine;
  }
`
export const ImageWrapper = styled.div<{
  visible: boolean
}>`
  position: absolute;
  top: 50%;
  right: ${styles.padding}px;
  transform: translateY(-50%);
  transition: 0.2s;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
`
