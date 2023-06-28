import styled from 'styled-components'

export const Grid = styled.div`
  --grid-item-min: 200px;
  --grid-item-max: 250px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-item-min), var(--grid-item-max)));
  justify-content: center;
  gap: 30px;
`
