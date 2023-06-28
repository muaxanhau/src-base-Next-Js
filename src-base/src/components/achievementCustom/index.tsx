import React, { FC, useEffect } from 'react'
import {
  Container,
  ImageBackground,
  PieceContainer,
  PieceImage,
  PieceWrapper
} from './elements'
import { useSpring } from '@react-spring/web'
import { ComponentBaseModel } from '@/models/base/component'

type AchievementProps = ComponentBaseModel & {
  imgUrl: string
  numOfPiece?: 0 | 1 | 2 | 3 | 4
}

const AchievementCustom: FC<AchievementProps> = ({
  style,
  imgUrl,
  numOfPiece = 0
}) => {
  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    console.log(timeZone)
  }, [])

  return (
    <Container style={style}>
      <ImageBackground src={imgUrl} />

      <ImagePiece imgUrl={imgUrl} index={1} numOfPiece={numOfPiece} />
      <ImagePiece imgUrl={imgUrl} index={2} numOfPiece={numOfPiece} />
      <ImagePiece imgUrl={imgUrl} index={3} numOfPiece={numOfPiece} />
      <ImagePiece imgUrl={imgUrl} index={4} numOfPiece={numOfPiece} />
    </Container>
  )
}

type ImagePieceProps = {
  imgUrl: string
  index: 1 | 2 | 3 | 4
  numOfPiece: 0 | 1 | 2 | 3 | 4
}
const ImagePiece: FC<ImagePieceProps> = ({ imgUrl, index, numOfPiece }) => {
  const [style, api] = useSpring(() => {
    if (index !== numOfPiece) {
      return {}
    }

    const x = `${index === 1 || index === 4 ? '' : '-'}50%`
    const y = `${index === 1 || index === 2 ? '' : '-'}50%`
    const rotate = `${index === 1 || index === 3 ? '' : '-'}45deg`
    const opacity = 0

    return { opacity, x, y, rotate }
  })

  useEffect(() => {
    api.start({ opacity: 1 })

    setTimeout(() => {
      index === numOfPiece && api.start({ x: '0px', y: '0px', rotate: '0deg' })
    }, 2000)
  }, [])

  if (index > numOfPiece) {
    return null
  }

  return (
    <PieceContainer style={style}>
      <PieceWrapper>
        <PieceImage src={imgUrl} />
      </PieceWrapper>
    </PieceContainer>
  )
}

export default AchievementCustom
