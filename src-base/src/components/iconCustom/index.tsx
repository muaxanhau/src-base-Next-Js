import { ComponentBaseModel } from '@/models'
import React, { FC } from 'react'
import { Image } from './elements'

type IconProps = ComponentBaseModel & {
  icon: string
  iconActive?: string
  size?: number // px
  isActive?: boolean
}
const IconCustom: FC<IconProps> = ({
  style,
  icon,
  iconActive,
  size = 20,
  isActive = false,
}) => {
  if (iconActive) {
    return (
      <Image
        src={isActive ? iconActive : icon}
        style={{ ...style, width: size }}
      />
    )
  }

  return <Image src={icon} style={{ ...style, width: size }} />
}

export default IconCustom
