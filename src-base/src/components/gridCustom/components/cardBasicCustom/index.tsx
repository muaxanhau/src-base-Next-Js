import ChartCircleCustom from '@/components/chartCircleCustom'
import ImageCustom from '@/components/imageCustom'
import TextCustom from '@/components/textCustom'
import { ComponentBaseModel } from '@/models'
import { images, styles } from '@/values'
import { icons } from '@/values/images'
import React, { CSSProperties, FC } from 'react'
import { Container, Content, LockSurface, TextContainer } from './elements'

type CardBasicProps = ComponentBaseModel & {
  width?: CSSProperties['width']

  title?: string
  description?: string
  imageUrl?: string
  isLocked?: boolean

  onClick?: () => void

  chartValue?: number
  chartMaxValue?: number
  chartHidden?: boolean
  chartType?: 'percen' | 'number'

  status?: 'success' | 'pending' | 'warning'
}
const CardBasicCustom: FC<CardBasicProps> = ({
  style,
  width = 250,
  title,
  description,
  imageUrl = '',
  isLocked = false,
  onClick,
  chartHidden,
  chartValue,
  chartMaxValue,
}) => {
  return (
    <Container style={{ ...style, width }} onClick={onClick}>
      <ImageCustom
        src={imageUrl}
        alt={description}
        animationWhenHover
        style={{
          height: '50%',
          borderTopLeftRadius: styles.borderRadius,
          borderTopRightRadius: styles.borderRadius,
          flexShrink: 0,
        }}
      />

      <Content>
        <TextContainer>
          <TextCustom type="caption">{title}</TextCustom>

          <TextCustom>{description}</TextCustom>
        </TextContainer>

        {!chartHidden && (
          <ChartCircleCustom
            value={chartValue}
            maxValue={chartMaxValue}
            type="number"
          />
        )}
      </Content>

      {isLocked && (
        <LockSurface>
          <ImageCustom
            src={icons.ic_check_badge_filled_black}
            animationWhenHover
            style={{
              width: 50,
            }}
          />
        </LockSurface>
      )}
    </Container>
  )
}

export default CardBasicCustom
