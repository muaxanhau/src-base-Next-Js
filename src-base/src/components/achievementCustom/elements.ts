import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled.div`
  --border-radius: 30px;
  --border-width: 5px;
  --border-corner: calc(var(--border-radius) - var(--border-width));

  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--border-radius);
  border: var(--border-width) solid violet;
`
export const ImageBackground = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(10px);
`
export const PieceWrapper = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
`
export const PieceContainer = styled(animated.div)`
  position: absolute;
  width: 50%;
  height: 50%;
  overflow: hidden;
  transition: 0.5s;

  &:nth-of-type(1) {
    top: 0;
    left: 0;
    border-top-left-radius: var(--border-corner);

    & ${PieceWrapper} {
      top: 0;
      left: 0;
    }
  }
  &:nth-of-type(2) {
    top: 0;
    right: 0;
    border-top-right-radius: var(--border-corner);

    & ${PieceWrapper} {
      top: 0;
      left: -100%;
    }
  }
  &:nth-of-type(3) {
    bottom: 0;
    right: 0;
    border-bottom-right-radius: var(--border-corner);

    & ${PieceWrapper} {
      top: -100%;
      left: -100%;
    }
  }
  &:nth-of-type(4) {
    bottom: 0;
    left: 0;
    border-bottom-left-radius: var(--border-corner);

    & ${PieceWrapper} {
      top: -100%;
      left: 0;
    }
  }
`
export const PieceImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
