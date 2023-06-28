import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled(animated.div)`
  --card-width: 150px;

  touch-action: none;
  position: absolute;
  width: var(--card-width);
  aspect-ratio: 2/3;
`
export const Wrapper = styled.div<{
  index: number
}>`
  width: 100%;
  height: 100%;
  background-color: burlywood;

  border-radius: 10px;
  border: 2px solid gray;

  transition: 0.5s;
  transform-origin: bottom;
  transform: perspective(800px) rotateX(20deg)
    translateY(-${({ index }) => index * 3}px);

  &:hover {
    transform: perspective(800px) rotateX(15deg)
      translateY(-${({ index }) => index * 3}px);
  }
`
