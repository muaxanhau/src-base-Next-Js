import { flexCenter } from '@/styles/css'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { styles } from '@/values'

export const Background = styled(motion.div)`
  ${flexCenter}

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0005;
  z-index: 999;
`
export const Container = styled.div`
  background-color: #0003;
  backdrop-filter: blur(5px);
  border-radius: ${styles.borderRadius2}px;
  min-height: 500px;
  min-width: 300px;
  max-width: 900px;
  overflow: hidden;

  box-shadow: 0 0 10px 0 rgba(31, 73, 125, 0.8);
`
