import React, { FC } from 'react'
import { Container, Wrapper } from './elements'
import { useGesture } from '@use-gesture/react'
import { useSpring } from '@react-spring/web'

const values = {
  offsetCancel: 120, // px
}
type CardProps = {
  index?: number
  text?: string
  isSwipeLeft?: boolean
  onSwipeDone?: () => void
}
const CardCustom: FC<CardProps> = ({
  index = 0,
  text = '',
  isSwipeLeft = true,
  onSwipeDone = () => {},
}) => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }))
  const gesture = useGesture({
    onDrag: ({ movement: [x] }) => {
      const isDragOverWrongDirection =
        Math.abs(x) > values.offsetCancel &&
        ((isSwipeLeft && x > 0) || (!isSwipeLeft && x < 0))

      api.start({
        x: isDragOverWrongDirection
          ? values.offsetCancel * (isSwipeLeft ? 1 : -1)
          : x,
      })
    },
    onDragEnd: ({ movement: [x] }) => {
      const isCancel =
        Math.abs(x) < values.offsetCancel ||
        (isSwipeLeft && x > 0) ||
        (!isSwipeLeft && x < 0)

      api.start({
        x: isCancel ? 0 : screen.width * (isSwipeLeft ? -1 : 1),
      })
      !isCancel && onSwipeDone()
    },
  })

  return (
    <Container {...gesture()} style={{ x }}>
      <Wrapper index={index}>
        <p>
          {text} - {isSwipeLeft ? 'Left' : 'Right'}
        </p>
      </Wrapper>
    </Container>
  )
}

export default CardCustom
