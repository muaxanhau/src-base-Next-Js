import { ComponentBaseModel } from '@/models'
import React, { FC } from 'react'
import {
  TextH1,
  TextH2,
  TextH3,
  TextCaption,
  TextMedium,
  TextStatus,
} from './elements'

type TextProps = ComponentBaseModel & {
  type?: 'h1' | 'h2' | 'h3' | 'caption' | 'medium' | 'status'
  children?: React.ReactNode
}
const TextCustom: FC<TextProps> = ({ style, type = 'medium', children }) => {
  if (type === 'medium') {
    return <TextMedium style={style}>{children}</TextMedium>
  }
  if (type === 'caption') {
    return <TextCaption style={style}>{children}</TextCaption>
  }
  if (type === 'status') {
    return <TextStatus style={style}>{children}</TextStatus>
  }
  if (type === 'h1') {
    return <TextH1 style={style}>{children}</TextH1>
  }
  if (type === 'h2') {
    return <TextH2 style={style}>{children}</TextH2>
  }
  if (type === 'h3') {
    return <TextH3 style={style}>{children}</TextH3>
  }
  return null
}

export default TextCustom
