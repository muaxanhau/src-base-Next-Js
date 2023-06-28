import { ComponentBaseModel } from '@/models'
import React, { FC, useState } from 'react'
import HeaderCustom from '../headerCustom'
import TextCustom from '../textCustom'
import {
  Background,
  Container,
  SideBarContainer,
  MainContent,
  SideBarWrapper,
  ButtonContainer,
  ButtonMovementPiece,
  ChildrenWrapper,
  MovementPieceSpan,
} from './elements'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import IconCustom from '../iconCustom'
import { icons } from '@/values/images'
import { values } from './values'

const sideBarList = [
  {
    title: 'Meva kids',
    routerName: '/student/meva',
    icon: icons.ic_check_badge_outline,
    iconActive: icons.ic_check_badge_filled_black,
  },
  {
    title: 'EOV',
    routerName: '/student/brainstorm',
    icon: icons.ic_check_badge_outline,
    iconActive: icons.ic_check_badge_filled_black,
  },
  {
    title: 'Profile',
    routerName: '/student/profile',
    icon: icons.ic_check_badge_outline,
    iconActive: icons.ic_check_badge_filled_black,
  },
]
type SideBarProps = ComponentBaseModel & {
  children?: React.ReactNode
}
const SideBarCustom: FC<SideBarProps> = ({ children }) => {
  const router = useRouter()
  const [showSideBar, setShowSideBar] = useState<boolean>(true)

  const onClickToggleSideBar = () => setShowSideBar((prev) => (prev = !prev))

  return (
    <Background>
      <Container>
        <SideBarContainer style={{ width: showSideBar ? 130 : 50 }}>
          <SideBarWrapper>
            {sideBarList.map((item) => (
              <ButtonContainer
                key={item.routerName}
                onClick={() => {
                  router.push(item.routerName)
                }}
              >
                <IconCustom
                  icon={item.icon}
                  iconActive={item.iconActive}
                  isActive={item.routerName === router.pathname}
                />

                <AnimatePresence>
                  {showSideBar ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.4 }}
                    >
                      <TextCustom>{item.title}</TextCustom>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </ButtonContainer>
            ))}

            <ButtonMovementPiece
              style={{
                top: `calc((100% - ${sideBarList.length * values.buttonHeight +
                  (sideBarList.length - 1) * values.buttonSpacing}px) / 2 +
                  ${(values.buttonSpacing + values.buttonHeight) *
                    sideBarList.findIndex(
                      (item) => item.routerName === router.pathname
                    )}px
                  )`,
              }}
            >
              <MovementPieceSpan />
              <MovementPieceSpan />
            </ButtonMovementPiece>
          </SideBarWrapper>
        </SideBarContainer>

        <MainContent>
          <HeaderCustom onClickToggleSideBar={onClickToggleSideBar} />

          <ChildrenWrapper>{children}</ChildrenWrapper>
        </MainContent>
      </Container>
    </Background>
  )
}

export default SideBarCustom
