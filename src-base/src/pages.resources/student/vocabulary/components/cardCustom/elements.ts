import styled from 'styled-components'
import { values } from '../../values'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid violet;
  border-radius: 20px;
  background-color: cadetblue;

  backface-visibility: hidden;
  transition: inherit;
`
export const Font = styled(Wrapper)``
export const Back = styled(Wrapper)``
export const Container = styled.div<{
  rotate?: 'font' | 'back'
}>`
  width: ${values.cardWidth}px;
  aspect-ratio: 2 / 3;

  -webkit-box-reflect: below 5px
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.2));

  perspective: 800px;
  transition: 0.5s;
  cursor: pointer;

  & ${Font} {
    transform: rotateY(
      ${({ rotate }) => (rotate === 'back' ? '-180' : '0')}deg
    );
  }

  & ${Back} {
    transform: rotateY(
      ${({ rotate }) => (rotate === 'back' ? '0' : '-180')}deg
    );
  }
`
