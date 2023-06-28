import TextCustom from '@/components/textCustom'
import { UnitDetailModel } from '@/models'
import React, { FC, useState } from 'react'
import { Button, Container, ImageWrapper } from './elements'
import { AnimatePresence } from 'framer-motion'
import ImageCustom from '@/components/imageCustom'
import { icons } from '@/values/images'

type CardUnitDetailProps = {
  data: UnitDetailModel
  totalCompleted: number
  onClick: (index: number) => void
}
const CardUnitDetailCustom: FC<CardUnitDetailProps> = ({
  data,
  totalCompleted,
  onClick,
}) => {
  const { type, index } = data
  const [isHover, setIsHover] = useState<boolean>(false)
  const isLocked = index > totalCompleted + 1

  return (
    <Container
      isLocked={isLocked}
      onMouseEnter={() => setIsHover((prev) => (prev = true))}
      onMouseLeave={() => setIsHover((prev) => (prev = false))}
    >
      <TextCustom type="caption" style={{ textTransform: 'capitalize' }}>
        {type}
      </TextCustom>

      <AnimatePresence initial={true}>
        {isHover && !isLocked && (
          <Button
            initial={{ translateX: -200 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -200 }}
            onClick={() => onClick(index)}
          >
            Continue
          </Button>
        )}
      </AnimatePresence>

      <ImageWrapper visible={isHover && isLocked}>
        <ImageCustom
          src={icons.ic_check_badge_filled_black}
          animationWhenHover
          style={{
            width: 50,
          }}
        />
      </ImageWrapper>
    </Container>
  )
}

export default CardUnitDetailCustom
