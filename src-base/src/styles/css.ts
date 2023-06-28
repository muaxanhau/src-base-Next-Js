import { styles } from '@/values'
import { css } from 'styled-components'

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`
export const flexRow = css`
  display: flex;
  flex-direction: row;
`
export const flexColumnGap = css`
  ${flexColumn}
  gap: ${styles.gap}px;
`
export const flexColumnCenter = css`
  ${flexColumn}
  justify-content: center;
`
export const flexColumnSpaceBetween = css`
  ${flexColumn}
  justify-content: space-between;
`
export const flexColumnSpaceAround = css`
  ${flexColumn}
  justify-content: space-around;
`
export const flexColumnSpaceEvenly = css`
  ${flexColumn}
  justify-content: space-evenly;
`
export const flexRowGap = css`
  ${flexRow}
  gap: ${styles.gap}px;
`
export const flexRowCenter = css`
  ${flexRow}
  justify-content: center;
`
export const flexRowSpaceBetween = css`
  ${flexRow}
  justify-content: space-between;
`
export const flexRowSpaceAround = css`
  ${flexRow}
  justify-content: space-around;
`
export const flexRowSpaceEvenly = css`
  ${flexRow}
  justify-content: space-evenly;
`
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
