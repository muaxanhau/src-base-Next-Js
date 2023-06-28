import { toastAtom } from '@/atoms'
import {
  AchievementCustom,
  ChartBarCustom,
  ChartCircleCustom,
  SpeechCustom,
  ToastCustom,
} from '@/components'
import { PageLayoutBaseModel } from '@/models'
import { utils } from '@/utils/utils'
import { useRouter } from 'next/router'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

const TestComponent: PageLayoutBaseModel = () => {
  const setToastState = useSetRecoilState(toastAtom)
  const router = useRouter()
  const [percen, setPercen] = useState<number>(0)
  const [data, setData] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ChartBarCustom
        data={data}
        labels={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
      />

      {/* <AchievementCustom imgUrl="z1000.jpeg" numOfPiece={2} /> */}

      <ChartCircleCustom value={percen} />

      <SpeechCustom
        onSpeechEndTextChange={(text) => {
          console.log(text)
        }}
      />

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

      <button
        onClick={() => {
          router.push('student/meva')
        }}
      >
        meva
      </button>
    </div>
  )
}

TestComponent.getLayout = (page: ReactElement) => page

export default TestComponent
