import { flexColumn } from '@/styles/css'
import { styles } from '@/values'
import styled from 'styled-components'

export const ModalContainer = styled.div`
  --background-color: bisque;

  ${flexColumn}

  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${styles.padding}px 0;
  background-color: var(--background-color);

  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${styles.padding * 2}px;
    background: linear-gradient(
      to top,
      var(--background-color) 50%,
      transparent
    );
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`
export const ModalGridWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  padding: ${styles.padding}px;
`
export const SheetContainer = styled.div`
  ${flexColumn}

  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${styles.padding}px 0;
  background: linear-gradient(0.4turn, #3f87a6, #ebf8e1, #f69d3c);
`
