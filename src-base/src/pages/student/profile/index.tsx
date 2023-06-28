import { toastAtom } from '@/atoms'
import { ChartBarCustom, ChartCircleCustom } from '@/components'
import { PageLayoutBaseModel } from '@/models'
import { Container } from '@/pages.resources/student/profile/elements'
import { utils } from '@/utils/utils'
import { images } from '@/values'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

const Profile: PageLayoutBaseModel = () => {
  const setToastState = useSetRecoilState(toastAtom)
  const [percen, setPercen] = useState<number>(0)
  const [data, setData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])

  return (
    <Container>
      <ChartBarCustom
        data={data}
        labels={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
      />

      {/* <AchievementCustom imgUrl={images.default_local} numOfPiece={2} /> */}

      <ChartCircleCustom value={percen} />

      <button
        style={{ marginTop: 100 }}
        onClick={() => {
          const per = Math.random() * 100
          const message = per.toFixed(0) + ' %'

          const tmpDta = data.map((_) => Math.floor(Math.random() * 24))

          setData((prev) => (prev = tmpDta))
          setPercen((prev) => (prev = per))
          setToastState(() => ({
            key: utils.getUniqueKey().toString(),
            title: message,
          }))
        }}
      >
        add toast
      </button>
    </Container>
  )
}

export default Profile
