import styled from 'styled-components'
import { values } from './values'

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  display: flex;
  justify-content: center;
`
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  padding-left: 20px;
`
export const SideBarContainer = styled.div`
  transition: 0.5s;
`
export const SideBarWrapper = styled.div`
  position: fixed;
  width: inherit;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${values.buttonSpacing}px;
`
export const ButtonContainer = styled.div`
  width: 100%;
  height: ${values.buttonHeight}px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const ButtonMovementPiece = styled.div`
  --size-span: 20px;

  position: absolute;
  width: 100%;
  height: ${values.buttonHeight}px;
  background-color: aliceblue;
  z-index: -1;
  box-shadow: -5px 0 10px 0 rgba(31, 73, 125, 0.8);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: top 0.5s;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: calc(100% + 2 * var(--size-span));
    top: calc(var(--size-span) * -1);
    right: -10px;
    background-color: aliceblue;
    z-index: 1;
  }
`
export const MovementPieceSpan = styled.span`
  position: absolute;
  width: calc(var(--size-span) * 4);
  aspect-ratio: 1;
  right: calc(var(--size-span) * -1);

  border-radius: 50%;
  border: var(--size-span) solid aliceblue;

  &:nth-child(1) {
    top: calc(var(--size-span) * -3);
    clip-path: polygon(50% 50%, 75% 50%, 75% 75%, 50% 75%, 50% 50%);
  }
  &:nth-child(2) {
    bottom: calc(var(--size-span) * -3);
    clip-path: polygon(50% 50%, 75% 50%, 75% 25%, 50% 25%, 50% 50%);
  }
`
export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
  background-color: aliceblue;
  box-shadow: 0 0 25px 0 rgba(31, 73, 125, 0.8);

  display: flex;
  flex-direction: column;
`
export const ChildrenWrapper = styled.div`
  padding: 0 10px;
`
