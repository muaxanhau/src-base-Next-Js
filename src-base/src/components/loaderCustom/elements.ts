import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  --size: 70px;

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
`
const rotate = keyframes`
  to {
    transform: rotateX(60deg) rotateZ(360deg);
  }
`
export const Ring = styled.span`
  position: absolute;
  width: var(--size);
  aspect-ratio: 1;
  transform: rotateX(60deg);

  &:nth-of-type(2) {
    rotate: 60deg;
  }
  &:nth-of-type(3) {
    rotate: -60deg;
  }

  border-radius: 50%;
  border: 4px solid #ffa800;
  border-top: none;
  border-right: none;

  animation: ${rotate} 1s linear infinite;
`
