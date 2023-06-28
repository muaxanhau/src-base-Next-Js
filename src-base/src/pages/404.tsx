import { PageLayoutBaseModel } from '@/models'
import { dateUtils } from '@/utils/date'
import React, { ReactElement } from 'react'

const NotFound: PageLayoutBaseModel = () => {
  const date = new Date()
  const day = dateUtils.getDay(date)
  const time = dateUtils.getTime(date)

  console.log(day + '  ' + time)

  return (
    <div>
      <h3>
        PageNotFound - {day} {time}
      </h3>
    </div>
  )
}

NotFound.getLayout = (page: ReactElement) => page

export default NotFound
