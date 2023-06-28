import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { values } from './values'

const appear = keyframes`
  to {
    opacity: 1;
    right: var(--spacing);
  }
`
export const Container = styled(motion.div)<{
  index: number
}>`
  --height: 100px;
  --spacing: 20px;
  --background-color: #ebf8e1;
  --line-color: #3f87a6;

  position: fixed;
  z-index: 99999;
  width: ${values.width}px;
  height: var(--height);
  top: calc(
    var(--spacing) + (var(--height) + var(--spacing)) * ${({ index }) => index}
  );
  right: calc((${values.width}px + var(--spacing)) * -1);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  border-left: 10px solid var(--line-color);
  background-color: var(--background-color);
  word-break: break-all;

  transition: 0.5s;
  opacity: 0;
  animation: ${appear} 1s forwards;
`
export const Button = styled.button`
  /* all: unset; */
  position: absolute;
  right: 0;
  top: 0;
`
