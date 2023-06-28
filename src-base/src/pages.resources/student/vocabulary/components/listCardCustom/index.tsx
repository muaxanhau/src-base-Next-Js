import React, { FC, useEffect, useRef, useState } from 'react'
import { MainContainer, Button, ButtonContainer } from './elements'

import { useGesture } from '@use-gesture/react'
import CardCustom from '../cardCustom'
import { useScroll } from 'framer-motion'
import { ComponentBaseModel, UnitVocabularyModel } from '@/models'

type ListCardProps = ComponentBaseModel & {
  data?: UnitVocabularyModel[]
}
const ListCardCustom: FC<ListCardProps> = ({ data = [] }) => {
  const [indexSelected, setIndexSelectedd] = useState<number>(0)
  const refDiv = useRef<HTMLDivElement>(null)

  const getDistanceScrollUnit = (): number => {
    const maxScrollLeft =
      (refDiv.current?.scrollWidth || 0) - (refDiv.current?.clientWidth || 0)
    const distanceScrollUnit = maxScrollLeft / (data.length - 1)

    return distanceScrollUnit
  }

  const { scrollXProgress } = useScroll({ axis: 'x', container: refDiv })
  const gesture = useGesture({
    onDrag: ({ distance, direction }) => {
      if (!refDiv.current) {
        return
      }

      const scrollValue =
        refDiv.current?.scrollLeft + distance[0] * 2 * -direction[0]
      refDiv.current?.scrollTo({ left: scrollValue })
    },
    onScroll: ({ last, active, scrolling, xy: [x] }) => {
      if (!last || active || scrolling) {
        return
      }

      const distanceScrollUnit = getDistanceScrollUnit()
      const index = Math.round(x / distanceScrollUnit)
      refDiv.current?.scrollTo({
        left: distanceScrollUnit * index,
      })

      setIndexSelectedd((prev) => (prev = index))
    },
  })

  const moveCard = (type: 'left' | 'right' | number = 0) => {
    if (!refDiv.current) {
      return
    }

    const distanceScrollUnit = getDistanceScrollUnit()
    const typeTransform =
      typeof type === 'number' ? type - indexSelected : type === 'left' ? -1 : 1

    const scrollValue =
      refDiv.current?.scrollLeft + distanceScrollUnit * typeTransform
    refDiv.current?.scrollTo({ left: scrollValue })
  }

  const onPressDeselectedCard = (index: number) => moveCard(index)
  const onClickLeft = () => moveCard('left')
  const onClickRight = () => moveCard('right')

  return (
    <>
      <MainContainer {...gesture()} ref={refDiv}>
        {data.map((item, index) => (
          <CardCustom
            key={item.id}
            data={item}
            index={index}
            isSelected={index === indexSelected}
            totalCards={data.length}
            onPressDeselectedCard={onPressDeselectedCard}
            scrollXProgress={scrollXProgress}
          />
        ))}
      </MainContainer>

      <ButtonContainer>
        <Button onClick={onClickLeft}>Left</Button>

        <Button onClick={onClickRight}>Right</Button>
      </ButtonContainer>
    </>
  )
}

export default ListCardCustom
