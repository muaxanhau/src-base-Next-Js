import { ComponentBaseModel } from '@/models'
import React, { FC } from 'react'
import { Container, Image } from './elements'

type ImageProps = ComponentBaseModel & {
  src: string
  alt?: string
  resizeMode?: 'contain' | 'cover' | 'fill'
  animationWhenHover?: boolean
}
const ImageCustom: FC<ImageProps> = ({
  src,
  alt,
  style,
  resizeMode = 'cover',
  animationWhenHover = false,
}) => {
  if (animationWhenHover) {
    return (
      <Container style={style}>
        <Image
          src={src}
          alt={alt}
          style={{
            height: '100%',
            objectFit: resizeMode,
          }}
        />
      </Container>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      style={{
        ...style,
        objectFit: resizeMode,
      }}
    />
  )
}

export default ImageCustom
