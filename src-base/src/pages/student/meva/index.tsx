import React, { useRef, useState } from 'react'
import {
  useMutationCoursesUnits,
  useMutationUnitDetail,
  useQueryCourses,
} from '@/repositories'
import {
  GridCustom,
  ModalCustom,
  ModalRefProps,
  SheetCustom,
  SheetRefProps,
  TextCustom,
} from '@/components'
import { styles } from '@/values'
import {
  ModalContainer,
  ModalGridWrapper,
  SheetContainer,
} from '@/pages.resources/student/meva/elements'
import { useRouter } from 'next/router'
import { PageLayoutBaseModel } from '@/models'
import { withAuth, withRole } from '@/utils/hocs'

const Meva: PageLayoutBaseModel = () => {
  const { courses } = useQueryCourses()
  const { units, mutateUnits } = useMutationCoursesUnits({
    onSuccess: () => refModalUnits.current?.open(),
  })
  const { unitDetail, mutateUnitDetail } = useMutationUnitDetail({
    onSuccess: () => refSheetLessons.current?.open(),
  })

  const router = useRouter()
  const [currentCourseIndex, setCurrentCourseIndex] = useState<number>(-1)
  const [currentUnitIndex, setCurrentUnitIndex] = useState<number>(-1)

  const refModalUnits = useRef<ModalRefProps>(null)
  const refSheetLessons = useRef<SheetRefProps>(null)

  const onClickCourse = (id: string) => {
    mutateUnits({ idCourse: id })

    if (!courses) {
      return
    }

    const currentCourseIndex = courses.records.findIndex(
      (course) => course.id === id
    )
    setCurrentCourseIndex((prev) => (prev = currentCourseIndex))
  }
  const onClickUnit = (id: string) => {
    mutateUnitDetail({ unitId: id })

    if (!units) {
      return
    }

    const currentUnitIndex = units.records.findIndex((unit) => unit.id === id)
    setCurrentUnitIndex((prev) => (prev = currentUnitIndex))
  }
  const onClickLesson = (id: string) => {
    if (!units || !unitDetail) {
      return
    }

    const indexType = unitDetail.findIndex(
      (item) => item.index === Number.parseInt(id)
    )
    const { type } = unitDetail[indexType]
    const { id: unitId } = units.records[currentUnitIndex]
    router.push(`/student/${type}/${unitId}`)
  }

  return (
    <>
      <ModalCustom ref={refModalUnits} width={'80vw'} height={'70vh'}>
        <ModalContainer>
          <TextCustom type="h3">
            {courses?.records[currentCourseIndex]?.name}
          </TextCustom>

          <ModalGridWrapper>
            <GridCustom
              data={units?.records}
              // data={Array(10).fill(courses?.records[0])}
              onClickItem={onClickUnit}
            />
          </ModalGridWrapper>
        </ModalContainer>
      </ModalCustom>

      <SheetCustom ref={refSheetLessons} position="top" size={400}>
        <SheetContainer>
          <TextCustom type="h3">
            {units?.records[currentUnitIndex]?.name}
          </TextCustom>

          <ModalGridWrapper>
            <GridCustom data={unitDetail} onClickItem={onClickLesson} />
          </ModalGridWrapper>
        </SheetContainer>
      </SheetCustom>

      <GridCustom
        style={{ paddingTop: styles.padding }}
        data={courses?.records}
        // data={Array(10).fill(courses?.records[0])}
        onClickItem={onClickCourse}
      />
    </>
  )
}

export default withRole(withAuth(Meva))
