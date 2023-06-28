import { ComponentBaseModel } from '@/models'
import React, { FC } from 'react'
import TextCustom from '../textCustom'
import { Container } from './elements'

type EmptyInstanceProps = ComponentBaseModel & {
  text?: string
}
const EmptyInstanceCustom: FC<EmptyInstanceProps> = ({
  style,
  text = "Nothing's here",
}) => {
  return (
    <Container style={style}>
      <TextCustom>{text}</TextCustom>
    </Container>
  )
}

export default EmptyInstanceCustom
