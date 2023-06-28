import dynamic from 'next/dynamic'
import TextCustom from '../textCustom'

const SpeechCustom = dynamic(
  () => import('./components/pureSpeechCustom/index'),
  {
    ssr: false,
    loading: () => <TextCustom>Loading...</TextCustom>,
  }
)

export default SpeechCustom
