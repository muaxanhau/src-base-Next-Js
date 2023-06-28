import React, { FC, useEffect, useState } from 'react'
import { Container, Font, Back } from './elements'
import { motion, useTransform, MotionValue } from 'framer-motion'
import { UnitVocabularyModel } from '@/models'
import { TextCustom } from '@/components'

type CardProps = {
  data: UnitVocabularyModel
  index: number
  isSelected: boolean
  totalCards: number
  scrollXProgress: MotionValue<number>
  onPressDeselectedCard: (index: number) => void
}

const CardCustom: FC<CardProps> = ({
  data,
  index,
  isSelected,
  totalCards,
  scrollXProgress,
  onPressDeselectedCard,
}) => {
  const { word, meaning, spelling, imageUrl } = data
  const [rotate, setRotate] = useState<boolean>(false)

  const rootPc = index / (totalCards - 1)
  const scale = useTransform(
    scrollXProgress,
    [rootPc - 1, rootPc, rootPc + 1],
    [0, 1, 0]
  )
  const opacity = useTransform(
    scrollXProgress,
    [rootPc - 1, rootPc - 0.5, rootPc, rootPc + 0.5, rootPc + 1],
    [0, 0, 1, 0, 0]
  )
  const translateX = useTransform(
    scrollXProgress,
    [rootPc - 1, rootPc - 0.3, rootPc, rootPc + 0.3, rootPc + 1],
    ['-600px', '-60px', '0px', '60px', '600px']
  )

  const onClickCard = () => {
    isSelected ? setRotate((prev) => !prev) :
      onPressDeselectedCard(index)
  }

  useEffect(() => {
    !isSelected && setRotate((prev) => (prev = false))
  }, [isSelected])

  return (
    <motion.div style={{
      scale, opacity, translateX
    }}>
      <Container rotate={rotate ? 'back' : 'font'} onClick={onClickCard}>
        <Font>
          <img src={imageUrl} style={{
            width: '50%',
            height: '50%',
            objectFit: 'contain'
          }} />
          <TextCustom type='h3'>{word}</TextCustom>
        </Font>

        <Back>
          <TextCustom type='h3'>{meaning}</TextCustom>
        </Back>
      </Container>
    </motion.div>
  )
}

export default CardCustom
