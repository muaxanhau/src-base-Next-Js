import { flexCenter } from '@/styles/css'
import { colors } from '@/values'
import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    100% {
        scale: 1.5;
    }
`
const opacity = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`
export const Circle = styled.span`
  --duration: 1.8s;
  --delay: 0.4s;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${colors.primary};

  animation: ${scale} var(--duration) infinite,
    ${opacity} var(--duration) infinite;

  &:nth-of-type(2) {
    animation-delay: calc(var(--delay) * 1);
  }
  &:nth-of-type(3) {
    animation-delay: calc(var(--delay) * 2);
  }
  &:nth-of-type(4) {
    animation-delay: calc(var(--delay) * 3);
  }
`
export const Container = styled.div<{
  isRecording?: boolean
}>`
  ${flexCenter}

  width: 35px;
  aspect-ratio: 1;
  position: relative;

  & ${Circle} {
    animation-play-state: ${({ isRecording }) =>
      isRecording ? 'running' : 'paused'};
  }
`
export const Button = styled.button`
  all: unset;
  z-index: 1;
  line-height: 0;
  width: 100%;
  height: 100%;
`
