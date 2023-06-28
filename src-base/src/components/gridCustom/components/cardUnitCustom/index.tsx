import { ComponentBaseModel, UnitModel } from '@/models'
import React, { FC } from 'react'
import CardBasicCustom from '../cardBasicCustom'

type CardUnitProps = ComponentBaseModel & {
  data: UnitModel
  onClick: (unitId: string) => void
}
const CardUnitCustom: FC<CardUnitProps> = ({ data, onClick }) => {
  const {
    courseId,
    description,
    id,
    imageUrl,
    isBought,
    isFree,
    name,
    numberLessonComplete,
    totalLesson,
  } = data

  return (
    <CardBasicCustom
      onClick={() => onClick(id)}
      width={'100%'}
      title={name}
      description={description}
      imageUrl={imageUrl}
      chartHidden={numberLessonComplete === 0}
      chartValue={numberLessonComplete}
      chartMaxValue={totalLesson}
      chartType="number"
      isLocked={!isFree && !isBought}
    />
  )
}

export default CardUnitCustom
