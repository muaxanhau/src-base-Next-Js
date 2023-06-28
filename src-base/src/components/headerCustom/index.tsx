import { ComponentBaseModel } from '@/models'
import React, { FC } from 'react'
import { Container } from './elements'

type HeaderProps = ComponentBaseModel & {
  onClickToggleSideBar?: () => void
}
const HeaderCustom: FC<HeaderProps> = ({ onClickToggleSideBar }) => {
  return (
    <Container>
      <button onClick={onClickToggleSideBar}>Bar</button>
    </Container>
  )
}

export default HeaderCustom
