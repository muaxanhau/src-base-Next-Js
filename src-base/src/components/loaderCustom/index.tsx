import React, { FC } from 'react'
import { Container, Ring } from './elements'
import { AnimatePresence } from 'framer-motion'
import { ComponentBaseModel } from '@/models/base/component'
import { useIsFetching, useIsMutating } from 'react-query'

type LoaderProps = ComponentBaseModel & {}

const LoaderCustom: FC<LoaderProps> = ({ style }) => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <AnimatePresence initial={false}>
      {isFetching || isMutating ? (
        <Container
          style={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <Ring />
          <Ring />
          <Ring />
        </Container>
      ) : null}
    </AnimatePresence>
  )
}

export default LoaderCustom
