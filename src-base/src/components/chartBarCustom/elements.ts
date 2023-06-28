import styled from 'styled-components'

export const Container = styled.div`
  --x-axis-weight: 40px;
  --y-axis-weight: 30px;
  --column-weight: 40px;
  --column-color: violet;
  --line-weight: 0.5px;
  --line-color: #abc;

  position: relative;
  width: 100%;
  height: 300px;
`
export const MainContainer = styled.div<{ step: number }>`
  width: calc(100% - var(--x-axis-weight));
  height: calc(100% - var(--y-axis-weight) * 2);

  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  position: relative;
  top: var(--y-axis-weight);
  border-top: var(--line-weight) solid var(--line-color);
  border-bottom: var(--line-weight) solid var(--line-color);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + var(--line-weight));
    background: repeating-linear-gradient(
      transparent 0,
      transparent calc(100% / ${({ step }) => step} - var(--line-weight)),
      var(--line-color) calc(100% / ${({ step }) => step} - var(--line-weight)),
      var(--line-color) calc(100% / ${({ step }) => step})
    );
  }
`
export const XAxisContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - var(--x-axis-weight));
  height: var(--y-axis-weight);
  display: flex;
  justify-content: space-around;
`
export const YAxisContainer = styled.div`
  position: absolute;
  right: 0;
  top: var(--y-axis-weight);
  width: var(--x-axis-weight);
  height: calc(100% - var(--y-axis-weight) * 2);
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`
export const XLabel = styled.p`
  width: var(--column-weight);
  text-align: center;
`
export const YLabelWrapper = styled.div`
  height: var(--line-weight);
  position: relative;
`
export const YLabel = styled.p`
  position: absolute;
  bottom: 100%;
  width: 100%;
  text-align: right;
`
export const Column = styled.div<{
  percen: number // 0 <= percen <= 1
}>`
  width: var(--column-weight);
  height: calc(100% * ${({ percen }) => percen});
  background-color: var(--column-color);
  transition: 1s;
  z-index: 1;
`
