import React, { FC } from 'react'
import {
  Column,
  Container,
  MainContainer,
  XAxisContainer,
  XLabel,
  YAxisContainer,
  YLabel,
  YLabelWrapper
} from './elements'
import { ComponentBaseModel } from '@/models/base/component'

type ChartBarProps = ComponentBaseModel & {
  data?: number[]
  labels?: string[]
  maxValue?: number
  step?: number
}

const ChartBarCustom: FC<ChartBarProps> = ({
  style,
  data = [],
  labels = [],
  maxValue = 0,
  step = 5
}) => {
  const cMaxValue = Math.max(...data, maxValue) || 1
  const stepValue = cMaxValue / step

  return (
    <Container style={style}>
      <MainContainer step={step}>
        {data.map((num, index) => (
          <Column key={index.toString()} percen={num / cMaxValue} />
        ))}
      </MainContainer>

      <XAxisContainer>
        {labels.map((label, index) => (
          <XLabel key={index.toString()}>{label}</XLabel>
        ))}
      </XAxisContainer>

      <YAxisContainer>
        {Array(step + 1)
          .fill(step + 1)
          .map((_, index) => (
            <YLabelWrapper key={index.toString()}>
              <YLabel>{(index * stepValue).toFixed(1)}</YLabel>
            </YLabelWrapper>
          ))}
      </YAxisContainer>
    </Container>
  )
}

export default ChartBarCustom
