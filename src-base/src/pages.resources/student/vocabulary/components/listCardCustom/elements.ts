import styled from 'styled-components'
import { values } from '../../values'

export const MainContainer = styled.div`
  --card-spacing: 30px;

  height: 300px;
  width: 100%;
  background-color: beige;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--card-spacing);
  overflow-x: scroll;
  padding-left: calc((100% - ${values.cardWidth}px) / 2);
  padding-right: calc((100% - ${values.cardWidth}px) / 2);
  scroll-behavior: smooth;
  touch-action: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`
export const Button = styled.button`
  padding: 10px;
  min-width: 150px;
`
