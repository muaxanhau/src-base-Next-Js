import React, { FC } from 'react'
import { MainContainer } from './elements'
import CardCustom from '../cardCustom'

const people = [
  { firstName: 'Elson', isLeft: true },
  { firstName: 'John', isLeft: true },
  { firstName: 'Jane', isLeft: false },
  { firstName: 'Maria', isLeft: true },
  { firstName: 'Kelly', isLeft: false },
  { firstName: 'Don', isLeft: true },
  { firstName: 'Marcus', isLeft: false },
  { firstName: 'Bruno', isLeft: false },
  { firstName: 'Alonzo', isLeft: true }
]

const ListCardCustom: FC = () => {
  return (
    <MainContainer>
      {[...people].reverse().map((item, index) => (
        <CardCustom
          key={index.toString()}
          index={index}
          text={index + '. ' + item.firstName}
          isSwipeLeft={item.isLeft}
          onSwipeDone={() => {
            console.log(index + '. ' + item.firstName)
          }}
        />
      ))}
    </MainContainer>
  )
}

export default ListCardCustom
