import styled, { css } from 'styled-components'

export const Container = styled.div<{
  percen: number // 0 <= percen <= 1
}>`
  --line-weight: 5px; // var(--line-weight)

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: var(--line-weight) solid #ebf8e1;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% + var(--line-weight) * 2);
    aspect-ratio: 1;
    border-radius: inherit;
    border: inherit;
    border-color: #3f87a6;

    transition: 0.2s;
    rotate: 45deg;
    clip-path: ${({ percen }) => {
    if (percen <= 0.25) {
      const per = `calc(100% * ${percen / 0.25})`
      const path = `polygon(
                  50% 50%, 
                  0% 0%, 
                  0% ${per}, 
                  0% ${per}, 
                  0% ${per}, 
                  0% ${per}, 
                  50% 50%)`

      return path
    }

    if (percen <= 0.5) {
      const per = `calc(100% * ${(percen - 0.25) / 0.25})`
      const path = `polygon(
                  50% 50%, 
                  0% 0%, 
                  0% 100%, 
                  ${per} 100%, 
                  ${per} 100%, 
                  ${per} 100%, 
                  50% 50%)`

      return path
    }

    if (percen <= 0.75) {
      const per = `calc(100% - 100% * ${(percen - 0.5) / 0.25})`
      const path = `polygon(
                  50% 50%, 
                  0% 0%, 
                  0% 100%, 
                  100% 100%, 
                  100% ${per}, 
                  100% ${per}, 
                  50% 50%)`

      return path
    }

    const per = `calc(100% - 100% * ${(percen - 0.75) / 0.25})`
    const path = `polygon(
                  50% 50%, 
                  0% 0%, 
                  0% 100%, 
                  100% 100%, 
                  100% 0%, 
                  ${per} 0%, 
                  50% 50%)`

    return path
  }};
  }

  &:hover {
    &::before {
      border-width: calc(var(--line-weight) * 1.5);
    }
  }
`
