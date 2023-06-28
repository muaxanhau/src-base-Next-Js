import { flexColumnGap, flexRowGap } from '@/styles/css'
import { styles } from '@/values'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
      rotate: 360deg;
  }
`
export const Container = styled.div`
  --border-width: 5px;
  --background-color: #fff;

  ${flexColumnGap}
  position: relative;
  aspect-ratio: 3/4;
  padding: var(--border-width);
  border-radius: calc(${styles.borderRadius}px + var(--border-width));
  transition: 0.2s;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  box-shadow: 0 0 10px 0 rgba(31, 73, 125, 0.8);

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
  }

  &::after {
    width: calc(100% - var(--border-width) * 2);
    height: calc(100% - var(--border-width) * 2);
    border-radius: ${styles.borderRadius}px;
    top: var(--border-width);
    left: var(--border-width);
    background-color: var(--background-color);
  }

  &::before {
    width: 200%;
    aspect-ratio: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: 0% 0%;
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    animation: ${rotate} 2s infinite linear;
    animation-play-state: paused;
  }

  &:hover {
    scale: 1.05;

    &::before {
      animation-play-state: running;
    }
  }
`
export const Content = styled.div`
  ${flexRowGap}

  padding-inline: ${styles.padding}px;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
`
export const TextContainer = styled.div`
  ${flexColumnGap}

  flex: 1;
`
export const LockSurface = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0004;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
