import {
  ComponentBaseModel,
  CourseModel,
  UnitDetailModel,
  UnitModel,
} from '@/models'
import React, { FC } from 'react'
import EmptyInstanceCustom from '../emptyInstanceCustom'
import CardCourseCustom from './components/cardCourseCustom'
import CardUnitCustom from './components/cardUnitCustom'
import CardUnitDetailCustom from './components/cardUnitDetailCustom'
import { Grid } from './elements'

type AllModel = CourseModel | UnitModel | UnitDetailModel
type GridProps = ComponentBaseModel & {
  data?: AllModel[]
  onClickItem?: (id: string) => void
}

const isTypeCourse = (type: AllModel): type is CourseModel =>
  'totalUnitCompleted' in type
const isTypeUnit = (type: AllModel): type is UnitModel => 'totalLesson' in type
const isTypeUnitDetail = (type: AllModel): type is UnitDetailModel =>
  'isCompleted' in type

const GridCustom: FC<GridProps> = ({ style, data, onClickItem }) => {
  if (!data?.length) {
    return <EmptyInstanceCustom />
  }

  return (
    <Grid style={style}>
      {isTypeCourse(data[0]) &&
        (data as CourseModel[]).map((course) => (
          <CardCourseCustom
            key={course.id}
            data={course}
            onClick={(id) => onClickItem?.(id)}
          />
        ))}

      {isTypeUnit(data[0]) &&
        (data as UnitModel[]).map((unit) => (
          <CardUnitCustom
            key={unit.id}
            data={unit}
            onClick={(id) => onClickItem?.(id)}
          />
        ))}

      {isTypeUnitDetail(data[0]) &&
        (data as UnitDetailModel[])
          .sort((a, b) => (a.index > b.index ? 1 : -1))
          .map((unitDetail) => (
            <CardUnitDetailCustom
              key={unitDetail.index}
              data={unitDetail}
              totalCompleted={
                (data as UnitDetailModel[]).filter((item) => item.isCompleted)
                  .length
              }
              onClick={(id) => onClickItem?.(id.toString())}
            />
          ))}
    </Grid>
  )
}

export default GridCustom
