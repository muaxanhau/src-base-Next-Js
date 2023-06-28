import React, { FC } from 'react'
import { Container } from './elements'
import { ComponentBaseModel } from '@/models/base/component'
import TextCustom from '../textCustom'

type ChartCircleProps = ComponentBaseModel & {
  value?: number
  maxValue?: number
  width?: number // px
  type?: 'percen' | 'number'
}
const ChartCircleCustom: FC<ChartCircleProps> = ({
  style,
  width = 55,
  value = 0,
  maxValue = 100,
  type = 'percen',
}) => {
  const cMaxValue = maxValue > 0 ? maxValue : 100

  return (
    <Container
      style={{ ...style, width, height: width }}
      percen={value / cMaxValue}
    >
      <TextCustom>
        {type === 'percen'
          ? `${((value / cMaxValue) * 100).toFixed(0)}%`
          : `${value}/${maxValue}`}
      </TextCustom>
    </Container>
  )
}

export default ChartCircleCustom
