import { ComponentBaseModel, CourseModel } from '@/models'
import React, { FC } from 'react'
import CardBasicCustom from '../cardBasicCustom'

type CardCourseProps = ComponentBaseModel & {
  data: CourseModel
  onClick: (courseId: string) => void
}
const CardCourseCustom: FC<CardCourseProps> = ({ data, onClick }) => {
  const {
    id,
    name,
    description,
    imageUrl,
    isBought,
    isFree,
    totalUnit,
    totalUnitCompleted,
  } = data

  return (
    <CardBasicCustom
      onClick={() => onClick(id)}
      width={'100%'}
      title={name}
      description={description}
      imageUrl={imageUrl}
      chartHidden={totalUnitCompleted === 0}
      chartValue={totalUnitCompleted}
      chartMaxValue={totalUnit}
      chartType="number"
      isLocked={!isFree && !isBought}
    />
  )
}

export default CardCourseCustom
